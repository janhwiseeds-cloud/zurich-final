'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

export type MarqueeItem = {
  image: string;
  slug: string;
  alt?: string;
};

interface InfiniteMarqueeProps {
  items: MarqueeItem[];
  /** px/sec at 1x speed */
  baseSpeed?: number;
}

const SPEED_STEPS = [0.5, 1, 1.5, 2.5] as const;
const DRAG_CLICK_THRESHOLD = 6; // px of movement before a drag cancels the link click
const MIN_REPEAT = 2;
const MAX_REPEAT = 16;

export default function InfiniteMarquee({ items, baseSpeed = 40 }: InfiniteMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // --- values the animation loop reads/writes every frame, kept in refs so
  // dragging/speed/pause never trigger React re-renders mid-scroll ---
  const offset = useRef(0); // current translateX, always kept inside (-period, 0]
  const period = useRef(0); // px width of ONE pass through `items` (the seamless loop length)
  const repeatCountRef = useRef(6);
  const direction = useRef<1 | -1>(1);
  const speedMultiplier = useRef(1);
  const playing = useRef(true);
  const momentum = useRef(0); // leftover px/frame from a flick, decays to 0

  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const lastPointerX = useRef(0);
  const lastPointerTime = useRef(0);

  const rafId = useRef<number | undefined>(undefined);
  const lastFrameTime = useRef<number | undefined>(undefined);

  const [repeatCount, setRepeatCount] = useState(6);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speedIndex, setSpeedIndex] = useState(1);
  const [dir, setDir] = useState<1 | -1>(1);

  useEffect(() => {
    playing.current = isPlaying;
  }, [isPlaying]);
  useEffect(() => {
    speedMultiplier.current = SPEED_STEPS[speedIndex];
  }, [speedIndex]);
  useEffect(() => {
    direction.current = dir;
  }, [dir]);
  useEffect(() => {
    repeatCountRef.current = repeatCount;
  }, [repeatCount]);

  // Make sure the track always has enough copies of `items` to cover the
  // viewport twice over, however few or wide the items are. This is what
  // prevents the old version's blank-gap / jump glitch.
  const measure = useCallback(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container || items.length === 0) return;

    const setWidth = track.scrollWidth / repeatCountRef.current;
    if (setWidth <= 0) return;

    period.current = setWidth;

    const needed = Math.min(
      MAX_REPEAT,
      Math.max(MIN_REPEAT, Math.ceil(container.clientWidth / setWidth) + 2)
    );
    if (needed !== repeatCountRef.current) {
      setRepeatCount(needed);
    }
  }, [items.length]);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [measure, repeatCount]);

  const wrap = useCallback((value: number) => {
    const p = period.current;
    if (p <= 0) return value;
    let v = value % p;
    if (v > 0) v -= p;
    return v;
  }, []);

  // Single persistent rAF loop. Position is written straight to the DOM
  // (no setState) so dragging and autoplay stay perfectly smooth.
  useEffect(() => {
    const tick = (time: number) => {
      if (lastFrameTime.current === undefined) lastFrameTime.current = time;
      const dt = (time - lastFrameTime.current) / 1000;
      lastFrameTime.current = time;

      if (!isDragging.current) {
        if (Math.abs(momentum.current) > 0.02) {
          // a flick is still spinning itself out
          offset.current = wrap(offset.current + momentum.current);
          momentum.current *= 0.95;
        } else if (playing.current) {
          offset.current = wrap(
            offset.current + direction.current * speedMultiplier.current * baseSpeed * dt
          );
        }
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${offset.current}px,0,0)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current !== undefined) cancelAnimationFrame(rafId.current);
      lastFrameTime.current = undefined;
    };
  }, [baseSpeed, wrap]);

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    hasDragged.current = false;
    momentum.current = 0;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offset.current;
    lastPointerX.current = e.clientX;
    lastPointerTime.current = performance.now();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > DRAG_CLICK_THRESHOLD) hasDragged.current = true;
    offset.current = wrap(dragStartOffset.current + delta);

    const now = performance.now();
    const dt = now - lastPointerTime.current;
    if (dt > 0) {
      // px/frame estimate (assuming ~60fps) used to seed the post-release spin
      momentum.current = ((e.clientX - lastPointerX.current) / dt) * 16;
    }
    lastPointerX.current = e.clientX;
    lastPointerTime.current = now;
  };

  const endDrag = () => {
    isDragging.current = false;
  };

  // Swallow the click that would otherwise fire on the Link right after a drag.
  const onClickCapture = (e: React.MouseEvent) => {
    if (hasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
      hasDragged.current = false;
    }
  };

  const loopItems = Array.from({ length: repeatCount }, () => items).flat();

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2">
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        className="overflow-hidden py-4 cursor-grab touch-pan-y select-none active:cursor-grabbing"
      >
        <div ref={trackRef} className="flex w-max">
          {loopItems.map((item, idx) => (
            <Link
              key={`${item.slug}-${idx}`}
              href={`/products/${item.slug}`}
              draggable={false}
              className="group block h-48 shrink-0 overflow-hidden rounded-2xl bg-transparent px-2 transition-transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.alt || item.slug}
                draggable={false}
                className="pointer-events-none h-full w-auto object-contain transition-opacity group-hover:opacity-90"
              />
            </Link>
          ))}
        </div>
      </div>

    
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  );
}

function ReverseIcon({ flipped }: { flipped: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ transform: flipped ? 'scaleX(-1)' : undefined }}
    >
      <path d="M3 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
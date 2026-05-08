'use client';

import Link from 'next/link';

export type MarqueeItem = {
  image: string;
  slug: string;
  alt?: string;
};

interface InfiniteMarqueeProps {
  items: MarqueeItem[];
}

export default function InfiniteMarquee({ items }: InfiniteMarqueeProps) {
  // We duplicate the items a few times to ensure the row is wider than the screen
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-4 flex">
      
      {/* 
        BLOCK 1 - First scroll content with animation
      */}
      <div className="marquee-content">
        {repeatedItems.map((item, idx) => (
          <Link
            key={`block1-${idx}`}
            href={`/products/${item.slug}`}
            className="group block h-48 shrink-0 overflow-hidden rounded-2xl bg-transparent transition-transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.alt || item.slug}
              className="h-full w-auto object-contain transition-opacity group-hover:opacity-90"
            />
          </Link>
        ))}
      </div>

      {/* 
        BLOCK 2 (Exact Duplicate - no animation, acts as seamless continuation)
      */}
      <div className="marquee-content">
        {repeatedItems.map((item, idx) => (
          <Link
            key={`block2-${idx}`}
            href={`/products/${item.slug}`}
            className="group block h-48 shrink-0 overflow-hidden rounded-2xl bg-transparent transition-transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.alt || item.slug}
              className="h-full w-auto object-contain transition-opacity group-hover:opacity-90"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
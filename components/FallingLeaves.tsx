"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function FallingLeaves() {
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [leaves, setLeaves] = useState<number[]>([]);
    const [leafPositions, setLeafPositions] = useState<Array<{ x: number; x2: number }>>([]);

    useEffect(() => {
        // Initialize leaves only on client side
        const leafArray = Array.from({ length: 20 });
        setLeaves(leafArray as any);

        // Generate random positions for each leaf
        const positions = leafArray.map(() => ({
            x: Math.random() * window.innerWidth,
            x2: Math.random() * window.innerWidth,
        }));
        setLeafPositions(positions);

        // Start fade out after 10 seconds
        const fadeOutTimer = setTimeout(() => {
            setIsFadingOut(true);
        }, 10000);

        // Remove component after fade out completes (10s + 0.8s fade animation)
        const removeTimer = setTimeout(() => {
            setIsVisible(false);
        }, 10800);

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!isVisible || leaves.length === 0) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 pointer-events-none overflow-hidden z-50"
                animate={{ opacity: isFadingOut ? 0 : 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {leaves.map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-3xl"
                        initial={{
                            y: -100,
                            x: leafPositions[i]?.x ?? 0,
                            rotate: 0,
                            opacity: 0.8,
                        }}
                        animate={{
                            y: "110vh",
                            x: [
                                leafPositions[i]?.x ?? 0,
                                leafPositions[i]?.x2 ?? 0,
                            ],
                            rotate: 360,
                        }}
                        transition={{
                            duration: 8 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear",
                        }}
                    >
                        🍃
                    </motion.div>
                ))}
            </motion.div>
        </AnimatePresence>
    );
}
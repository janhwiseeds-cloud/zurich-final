"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FallingLeaves() {
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

        // Hide falling leaves after 3 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible || leaves.length === 0) return null;

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
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
        </div>
    );
}
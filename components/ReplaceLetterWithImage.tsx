"use client";

import Image from "next/image";
import React from "react";

type ReplaceLetterWithImageProps = {
  letter: string;
  imageSrc: string;
  children: string;
  className?: string;
};

export default function ReplaceLetterWithImage({
  letter,
  imageSrc,
  children,
  className = "",
}: ReplaceLetterWithImageProps) {
  if (letter.length !== 1) {
    throw new Error("letter must be one character");
  }

  const parts = children.split(letter);

  return (
    <span className={className}>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}

          {index !== parts.length - 1 && (
            <span className="relative inline-block h-[1em] w-[0.4em] align-[-0.15em]">
              <Image
                src={imageSrc}
                alt={letter}
                fill
                priority
                className="object-contain"
              />
            </span>
          )}
        </React.Fragment>
      ))}
    </span>
  );
}
"use client";

import { useEffect, useState } from "react";

interface ImageSliderProps {
  images: string[];
  alt: string;
  heightClassName?: string;
  autoSlideMs?: number;
}

export default function ImageSlider({
  images,
  alt,
  heightClassName = "h-56",
  autoSlideMs = 4000,
}: ImageSliderProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const hasImages = images.length > 0;
  const hasMultiple = images.length > 1;

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  // Automatic rotation — paused while the user is hovering the slider.
  useEffect(() => {
    if (!hasMultiple || isPaused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, autoSlideMs);

    return () => clearInterval(timer);
  }, [hasMultiple, isPaused, images.length, autoSlideMs]);

  // If the image count ever shrinks (e.g. filtered data), keep index valid.
  useEffect(() => {
    if (index >= images.length && images.length > 0) {
      setIndex(0);
    }
  }, [images.length, index]);

  return (
    <div
      className={`relative w-full ${heightClassName} bg-gray-100 overflow-hidden`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {hasImages ? (
        <img
          key={index}
          src={images[index]}
          className="w-full h-full object-cover"
          alt={`${alt} — image ${index + 1} of ${images.length}`}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
          No image available
        </div>
      )}

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded cursor-pointer"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded cursor-pointer"
          >
            ›
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === index ? "w-4 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

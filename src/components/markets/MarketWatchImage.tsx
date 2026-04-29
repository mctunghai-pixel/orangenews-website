"use client";

import { useState } from "react";

interface MarketWatchImageProps {
  primarySrc: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}

/**
 * Renders Market Watch image with onError fallback. Tries date-stamped daily
 * image first (may 404 if backend hasn't committed today's render); on error
 * swaps to the always-available static thumbnail. Pure <img> — avoids next/image
 * remotePatterns config for GitHub raw URL.
 */
export function MarketWatchImage({
  primarySrc,
  fallbackSrc,
  alt,
  className,
}: MarketWatchImageProps) {
  const [src, setSrc] = useState(primarySrc);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => {
        if (src !== fallbackSrc) setSrc(fallbackSrc);
      }}
    />
  );
}

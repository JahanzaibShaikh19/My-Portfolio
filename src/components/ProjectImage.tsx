"use client";

import { useState } from "react";
import Image from "next/image";

type ProjectImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
};

export default function ProjectImage({
  src,
  alt,
  className = "object-cover",
  sizes = "100vw",
  priority = false,
  placeholder,
  blurDataURL,
}: ProjectImageProps) {
  const [loaded, setLoaded] = useState(false);
  const usePlainImage = src.startsWith("data:") || src.endsWith(".svg");

  return (
    <>
      {!loaded && <span className="image-skeleton" aria-hidden="true" />}
      {usePlainImage ? (
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${className} ${loaded ? "opacity-100" : "opacity-0"}`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className={`transition-opacity duration-500 ${className} ${loaded ? "opacity-100" : "opacity-0"}`}
          sizes={sizes}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          onLoad={() => setLoaded(true)}
        />
      )}
    </>
  );
}

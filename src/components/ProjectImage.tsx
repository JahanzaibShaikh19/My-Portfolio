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
  const usePlainImage = src.startsWith("data:") || src.endsWith(".svg");

  if (usePlainImage) {
    return (
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full ${className}`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      priority={priority}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
    />
  );
}

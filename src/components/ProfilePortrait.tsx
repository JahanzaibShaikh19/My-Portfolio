import { profilePortraitDataUri } from "@/data/profilePortrait";

type ProfilePortraitProps = {
  alt: string;
};

export default function ProfilePortrait({ alt }: ProfilePortraitProps) {
  return (
    <img
      src={profilePortraitDataUri}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover"
      loading="eager"
      decoding="async"
    />
  );
}

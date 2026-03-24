"use client";

import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  type?: "youtube" | "local";
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
}

export function VideoPlayer({
  src,
  type = "youtube",
  className,
  autoPlay = false,
  loop = false,
  muted = false,
  poster = "/images/trucks/howo-trucks-fleet-4-white-yard.jpg", // Using a high-quality yard photo as default poster
}: VideoPlayerProps) {
  return (
    <div className={cn("relative w-full overflow-hidden rounded-xl border border-border bg-muted shadow-lg", className)}>
      {type === "youtube" ? (
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${src}${autoPlay ? "?autoplay=1&mute=1" : ""}`}
            title="Video player"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <video
          width="100%"
          height="auto"
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          poster={poster}
          className="block w-full"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
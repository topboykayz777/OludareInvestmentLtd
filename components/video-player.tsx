"use client";

import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  type?: "youtube" | "local";
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export function VideoPlayer({
  src,
  type = "youtube",
  className,
  autoPlay = false,
  loop = false,
  muted = false,
}: VideoPlayerProps) {
  return (
    <div className={cn("relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted shadow-lg", className)}>
      {type === "youtube" ? (
        <iframe
          src={`https://www.youtube.com/embed/${src}${autoPlay ? "?autoplay=1&mute=1" : ""}`}
          title="Video player"
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
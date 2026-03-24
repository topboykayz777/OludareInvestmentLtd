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
  autoPlay = true,
  loop = true,
  muted = true,
  poster,
}: VideoPlayerProps) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
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
          key={src}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          poster={poster}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
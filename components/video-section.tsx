"use client";

import { VideoPlayer } from "@/components/video-player";

export function VideoSection() {
  return (
    <section className="bg-background py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Experience OIL</p>
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl text-balance">
            Quality in Motion
          </h2>
        </div>
        
        <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
          <div style={{ width: '100%', overflow: 'hidden', borderRadius: '12px' }}>
            <video 
              key="hero-video-final"
              autoPlay 
              muted 
              loop 
              playsInline 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            >
              <source src="/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Subtle overlay to match site branding */}
          <div className="absolute inset-0 pointer-events-none bg-primary/5" />
        </div>
        
        <p className="mt-6 text-center text-sm text-muted-foreground italic">
          Real footage of our heavy-duty fleet and operations.
        </p>
      </div>
    </section>
  );
}
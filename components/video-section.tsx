"use client";

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
        
        <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', overflow: 'hidden', borderRadius: '10px' }} className="shadow-2xl ring-1 ring-border">
          <video 
            key="final-oludare-video"
            autoPlay 
            muted 
            loop 
            playsInline 
            style={{ width: '100%', height: 'auto', display: 'block' }}
          >
            <source src="/hero.mp4?v=2" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <p className="mt-6 text-center text-sm text-muted-foreground italic">
          Real footage of our heavy-duty fleet and operations.
        </p>
      </div>
    </section>
  );
}
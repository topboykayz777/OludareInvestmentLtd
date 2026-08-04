"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, User, Star } from "lucide-react"

const articles = [
  {
    title: "Best Trucks to Buy in Lagos (2026): Models, Verified Yards & Prices",
    excerpt: "The definitive 2026 buyer's report. We rank the best HOWO and Shacman tippers, compare engines, expose unverified yard scams, and review current Lagos prices.",
    image: "/images/trucks/shacman-fleet-green.jpg",
    date: "August 5, 2026",
    author: "Engr. Oludare & OIL Team",
    readTime: "18 min read",
    href: "/blog/best-trucks-to-buy-in-lagos-2026",
    featured: true
  },
  {
    title: "HOWO 371 Price in Nigeria 2026: Comprehensive Buying Guide",
    excerpt: "Looking for current prices? Discover Q3 2026 price ranges for brand new and direct port used Sinotruk HOWO 371 tippers in Ojodu Berger.",
    image: "/images/trucks/howo-dump-white-fleet.jpg",
    date: "March 10, 2026",
    author: "Engr. Oludare",
    readTime: "10 min read",
    href: "/blog/howo-371-price-nigeria-2025",
    featured: false
  },
  {
    title: "Shacman F3000 vs. HOWO 371: Which is the King of Nigerian Roads?",
    excerpt: "A deep-dive technical comparison of the two most popular truck models in Lagos. Engine power, Weichai vs WD615, parts availability, and resale value.",
    image: "/images/trucks/shacman-orange-close.jpg",
    date: "May 20, 2025",
    author: "Engr. Oludare",
    readTime: "12 min read",
    href: "/blog/shacman-vs-howo",
    featured: false
  },
  {
    title: "5 Things to Inspect Before Buying a Used Tipper in Lagos",
    excerpt: "Avoid being cheated! Our senior engineers show you the exact blow-by engine test, chassis crack checks, and customs paper verification checklist.",
    image: "/images/trucks/howo-dump-white-close.jpg",
    date: "May 15, 2025",
    author: "Engr. Oludare",
    readTime: "10 min read",
    href: "/blog/used-truck-inspection",
    featured: false
  },
  {
    title: "How to Start a Profitable Haulage Business in Nigeria (2026 Guide)",
    excerpt: "Learn how to start and scale a tipper or trailer haulage business. Profit analysis, driver management, diesel math, and startup fleet financing.",
    image: "/images/trucks/howo-dump-yellow-fleet.jpg",
    date: "May 25, 2025",
    author: "Sales Team",
    readTime: "15 min read",
    href: "/blog/haulage-business-guide",
    featured: false
  }
]

export function BlogSection() {
  return (
    <section id="blog" className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center md:text-left">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Knowledge Base & Guides</p>
          <h2 className="text-3xl font-black text-foreground lg:text-5xl">Industry Insights & Sourcing Guides</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Technical guides, market pricing updates, and expert procurement advice from Nigeria's top heavy equipment specialists.
          </p>
        </div>

        {/* Featured Mega Article Card */}
        {articles.filter(a => a.featured).map((article) => (
          <div key={article.href} className="mb-12 overflow-hidden rounded-3xl bg-card border border-border shadow-xl grid lg:grid-cols-12 group">
            <div className="relative h-64 sm:h-80 lg:h-auto lg:col-span-7 overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 rounded-full bg-accent px-4 py-1 text-xs font-black uppercase tracking-widest text-white shadow-md">
                ⭐ Featured 2026 Guide
              </span>
            </div>
            <div className="p-8 lg:p-10 lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <span className="flex items-center gap-1 text-accent"><Clock className="h-3.5 w-3.5" /> {article.readTime}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="mb-4 text-2xl font-black leading-tight text-foreground group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
              </div>
              <div>
                <Link href={article.href}>
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white hover:bg-primary/90 transition-all">
                    Read Full 2026 Guide
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Secondary Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {articles.filter(a => !a.featured).map((article) => (
            <article key={article.title} className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border transition-all hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {article.readTime}</span>
                  <span>•</span>
                  <span>{article.author}</span>
                </div>
                <h3 className="mb-3 text-base font-bold leading-tight text-foreground group-hover:text-accent transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="mb-6 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-auto">
                  <Link href={article.href} className="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                    Read Article <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
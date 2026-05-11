"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, User } from "lucide-react"

const articles = [
  {
    title: "Shacman F3000 vs. HOWO 371: Which is the King of Nigerian Roads?",
    excerpt: "A deep dive comparison of the two most popular truck brands in Lagos. We analyze engine power, parts availability, and resale value.",
    image: "/images/trucks/shacman-fleet-green.jpg",
    date: "May 20, 2025",
    author: "Engr. Oludare",
    readTime: "12 min read",
    href: "/blog/shacman-vs-howo"
  },
  {
    title: "5 Things to Inspect Before Buying a Used Tipper in Lagos",
    excerpt: "Avoid being cheated! Our expert guide shows you exactly what to check when buying a used HOWO or Shacman truck at Ojodu Berger.",
    image: "/images/trucks/howo-dump-white-close.jpg",
    date: "May 15, 2025",
    author: "Engr. Oludare",
    readTime: "10 min read",
    href: "/blog/used-truck-inspection"
  },
  {
    title: "How to Start a Profitable Haulage Business in Nigeria (2025 Guide)",
    excerpt: "Learn how to start and scale a tipper or trailer haulage business. Profit analysis, truck selection, and driver management tips.",
    image: "/images/trucks/howo-dump-yellow-fleet.jpg",
    date: "May 25, 2025",
    author: "Sales Team",
    readTime: "15 min read",
    href: "/blog/haulage-business-guide"
  }
]

export function BlogSection() {
  return (
    <section id="blog" className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center md:text-left">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Knowledge Base</p>
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Industry Insights & Guides</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border transition-all hover:shadow-xl">
              <div className="relative h-52 overflow-hidden">
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
                  <span className="flex items-center gap-1"><User className="h-3 w-3" /> {article.author}</span>
                </div>
                <h3 className="mb-3 text-lg font-bold leading-tight text-foreground group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-auto">
                  <Link href={article.href} className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                    Read Full Article <ArrowRight className="h-4 w-4" />
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
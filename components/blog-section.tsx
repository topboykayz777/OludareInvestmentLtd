"use client"

import Image from "next/image"
import { ArrowRight, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const articles = [
  {
    title: "How to Maintain Your HOWO 371 Engine in Nigeria",
    excerpt: "Essential maintenance tips to keep your Sinotruk engine running efficiently in tropical climates and rough terrains.",
    image: "/images/spare-parts/howo-diesel-engine-with-filters.jpg",
    date: "Feb 15, 2025",
    author: "Engr. Oludare",
    readTime: "5 min read"
  },
  {
    title: "CNG vs Diesel: Which is Better for Your Fleet?",
    excerpt: "A deep dive into the cost-benefit analysis of Compressed Natural Gas trucks versus traditional Diesel units in the Nigerian market.",
    image: "/images/trucks/howo-cng-trucks-fleet.jpg",
    date: "Jan 28, 2025",
    author: "Sales Team",
    readTime: "8 min read"
  },
  {
    title: "Choosing the Right Excavator for Dredging Projects",
    excerpt: "Why amphibious excavators are becoming the standard for sand winning and dredging operations in Lagos and the Niger Delta.",
    image: "/images/excavators/cat-320-amphibious-excavator.jpg",
    date: "Jan 10, 2025",
    author: "Project Specialist",
    readTime: "6 min read"
  }
]

export function BlogSection() {
  return (
    <section id="blog" className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Knowledge Base</p>
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Industry Insights & Guides</h2>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
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
                  <button className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                    Read Full Article <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
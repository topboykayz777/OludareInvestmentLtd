"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground" aria-label="Breadcrumb">
      <Link href="/" className="flex items-center gap-1 hover:text-accent transition-colors">
        <Home className="h-3 w-3" />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-2">
          <ChevronRight className="h-3 w-3 text-muted-foreground/40" />
          {item.href ? (
            <Link href={item.href} className="hover:text-accent transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-accent">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
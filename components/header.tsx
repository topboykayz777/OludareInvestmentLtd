"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OilLogoBrand } from "@/components/oil-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import React, { useState, useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/2348105955892?text=Hello%2C%20I%20am%20interested%20in%20your%20trucks%20and%20machinery.%20Please%20share%20more%20details.";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    setMobileOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Top bar - Desktop only */}
      <div className="bg-[#111d45] text-primary-foreground/70 text-xs hidden md:block">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2 lg:px-8">
          <div className="flex items-center gap-2">
            <span>Dealers & Suppliers of All Kinds of Trucks</span>
            <span className="text-primary-foreground/30">|</span>
            <span className="text-accent font-medium">RC 1042746</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:Oludareinvestmentltd@gmail.com" className="hover:text-accent transition-colors">
              Oludareinvestmentltd@gmail.com
            </a>
            <span className="text-primary-foreground/30">|</span>
            <a href="tel:+2348020890065" className="hover:text-accent transition-colors">
              08020890065
            </a>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 border-none ${scrolled ? "bg-primary shadow-2xl" : "bg-primary"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center text-primary-foreground transition-opacity hover:opacity-90 focus:outline-none"
            aria-label="Oludare Investment Ltd Home"
            onClick={handleLogoClick}
          >
            <OilLogoBrand size="lg" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <ThemeToggle />
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent text-accent-foreground hover:bg-[#d06a18] font-bold gap-2">
                Chat With Us
              </Button>
            </a>
          </div>

          {/* Mobile Toggle & Theme */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              className="text-primary-foreground p-2 focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileOpen && (
          <div className="border-t border-primary-foreground/10 bg-primary lg:hidden animate-fade-in">
            <nav className="flex flex-col px-4 py-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-primary-foreground/10 py-3 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <a href="tel:+2348020890065">
                  <Button variant="outline" className="w-full border-primary-foreground/80 text-primary-foreground bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground font-medium gap-2">
                    <Phone className="h-4 w-4" />
                    <span>Call 08020890065</span>
                  </Button>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-[#d06a18] font-bold gap-2">
                    Chat With Us
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
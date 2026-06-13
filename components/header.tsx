"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Facebook, Instagram, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OilLogoBrand } from "@/components/oil-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import React, { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const WHATSAPP_URL = "https://wa.me/2348105955892?text=Hello%2C%20I%20am%20interested%20in%20your%20trucks%20and%20machinery.%20Please%20share%20more%20details.";
const FACEBOOK_URL = "https://www.facebook.com/share/1GUnFNG49Z/";
const INSTAGRAM_URL = "https://instagram.com/oludareinvestmentltd";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Price Index", href: "/berger-price-index" },
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

const truckLinks = [
  { label: "HOWO Trucks", href: "/howo-trucks" },
  { label: "Shacman Trucks", href: "/shacman-trucks" },
  { label: "Dump Trucks", href: "/dump-trucks" },
  { label: "Trailer Trucks", href: "/trailer-trucks" },
  { label: "Used Trucks", href: "/used-trucks" },
  { label: "Truck Financing", href: "/truck-financing" },
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
      <div className="bg-[#0a1128] text-primary-foreground/70 text-[10px] font-bold uppercase tracking-widest hidden md:block">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2 lg:px-8">
          <div className="flex items-center gap-4">
            <span>Official Truck Dealer</span>
            <span className="text-accent">RC 1042746</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook className="h-3.5 w-3.5" />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram className="h-3.5 w-3.5" />
              </a>
            </div>
            <span className="text-primary-foreground/20">|</span>
            <a href="mailto:Oludareinvestmentltd@gmail.com" className="hover:text-accent transition-colors">
              Oludareinvestmentltd@gmail.com
            </a>
            <span className="text-primary-foreground/20">|</span>
            <a href="tel:+2348020890065" className="hover:text-accent transition-colors">
              08020890065
            </a>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "bg-primary/90 backdrop-blur-xl shadow-2xl py-2" : "bg-primary py-4"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center text-primary-foreground transition-all hover:opacity-90 focus:outline-none"
            aria-label="Oludare Investment Ltd Home"
            onClick={handleLogoClick}
          >
            <OilLogoBrand size={scrolled ? "md" : "lg"} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground/70 transition-all hover:text-accent group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:left-4 group-hover:w-[calc(100%-32px)]" />
              </Link>
            ))}

            {/* Trucks Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground/70 transition-all hover:text-accent outline-none group">
                Trucks <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-primary border-white/10 min-w-[200px] z-[100]">
                {truckLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="w-full px-4 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground/70 hover:text-accent hover:bg-white/5 transition-colors cursor-pointer">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground/70 transition-all hover:text-accent group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:left-4 group-hover:w-[calc(100%-32px)]" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex items-center gap-3 mr-2">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <ThemeToggle />
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent text-accent-foreground hover:bg-[#d06a18] font-black uppercase tracking-widest gap-2 shadow-lg shadow-accent/20">
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
          <div className="fixed inset-0 top-[60px] z-50 bg-primary/98 backdrop-blur-2xl lg:hidden animate-fade-in overflow-y-auto">
            <nav className="flex flex-col px-6 py-8 h-full" aria-label="Mobile navigation">
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-primary-foreground/10">
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/80 font-bold">
                  <Facebook className="h-6 w-6 text-accent" /> Facebook
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/80 font-bold">
                  <Instagram className="h-6 w-6 text-accent" /> Instagram
                </a>
              </div>
              
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-4 text-xl font-black uppercase tracking-widest text-primary-foreground/80 transition-colors hover:text-accent border-b border-primary-foreground/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Trucks Section */}
              <div className="py-4 border-b border-primary-foreground/5">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4">Our Trucks</p>
                <div className="grid grid-cols-2 gap-4">
                  {truckLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-bold uppercase tracking-widest text-primary-foreground/60 hover:text-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-4 text-xl font-black uppercase tracking-widest text-primary-foreground/80 transition-colors hover:text-accent border-b border-primary-foreground/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="mt-8 flex flex-col gap-4 pb-12">
                <a href="tel:+2348020890065">
                  <Button variant="outline" className="w-full border-primary-foreground/20 text-primary-foreground bg-white/5 py-7 text-lg font-bold gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <span>Call Sales Office</span>
                  </Button>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-accent text-accent-foreground py-7 text-lg font-black uppercase tracking-widest gap-3">
                    Request Pricing
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
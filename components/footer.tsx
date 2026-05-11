import Link from "next/link";
import { OilLogoBrand } from "@/components/oil-logo";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Our Services", href: "/#services" },
  { label: "Industry Blog", href: "/#blog" },
  { label: "Contact Us", href: "/#contact" },
];

const productLinks = [
  { label: "HOWO Sino Trucks", href: "/howo-trucks" },
  { label: "Shacman Dump Trucks", href: "/shacman-trucks" },
  { label: "Heavy Dump Trucks", href: "/dump-trucks" },
  { label: "Low-Bed Trailers", href: "/trailer-trucks" },
  { label: "Used Trucks Lagos", href: "/used-trucks" },
  { label: "Truck Financing", href: "/truck-financing" },
  { label: "Genuine Spare Parts", href: "/#products" },
];

const serviceAreas = [
  "Lagos State", "Abuja FCT", "Port Harcourt", "Kano", "Ibadan", "Enugu", "Kaduna", "Benin City"
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#081129] text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div className="space-y-6">
            <Link 
              href="/" 
              className="inline-block transition-opacity hover:opacity-90 focus:outline-none"
              aria-label="Oludare Investment Ltd Home"
            >
              <OilLogoBrand size="lg" />
            </Link>
            <p className="text-sm leading-relaxed text-white/50">
              Oludare Investment Ltd (RC 1042746) is Nigeria's premier dealer for Shacman and HOWO Sino Trucks. We provide heavy-duty solutions for construction, mining, and logistics nationwide.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-accent hover:border-accent transition-all cursor-pointer">
                <Globe className="h-5 w-5 text-accent" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-white/40">Serving All 36 States</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-accent">Navigation</h3>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 transition-colors hover:text-accent flex items-center gap-2 group"
                >
                  <span className="h-px w-0 bg-accent transition-all group-hover:w-3" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Products & Areas */}
          <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-accent">Our Inventory</h3>
            <ul className="flex flex-col gap-3 mb-8">
              {productLinks.map((product) => (
                <li key={product.label}>
                  <Link
                    href={product.href}
                    className="text-sm text-white/50 transition-colors hover:text-accent"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Areas We Serve</h3>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {serviceAreas.map((area) => (
                <span key={area} className="text-[10px] text-white/30 hover:text-accent transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-accent">Contact Office</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <p className="text-sm text-white/50 leading-relaxed">
                  209, Lagos/Ibadan Express Way,<br />
                  Ojodu Berger, Lagos State                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+2348020890065" className="text-sm text-white/50 hover:text-accent transition-colors">08020890065</a>
                  <a href="tel:+2348105955892" className="text-sm text-white/50 hover:text-accent transition-colors">08105955892</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:Oludareinvestmentltd@gmail.com" className="text-sm text-white/50 hover:text-accent transition-colors break-all">
                  Oludareinvestmentltd@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center gap-6 border-t border-white/5 pt-8 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">
              {`\u00A9 ${currentYear} Oludare Investment Ltd. All rights reserved.`}
            </p>
            <p className="text-[10px] text-white/10">
              RC 1042746 | Registered in Nigeria
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-accent transition-colors">Terms of Service</Link>
          </div>
          {/* Social Media Links */}
          <div className="flex gap-6">
            <a href="https://www.facebook.com/share/1GUnFNG49Z/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-accent transition-colors mr-3">Facebook</a>
            <a href="https://instagram.com/oludareinvestmentltd" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-accent transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
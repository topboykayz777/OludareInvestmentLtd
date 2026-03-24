import Link from "next/link"
import { OilLogoBrand } from "@/components/oil-logo"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Our Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
]

const productLinks = [
  "Dump Trucks & Tippers",
  "CNG Trucks",
  "Cement Mixers",
  "Excavators",
  "Wheel Loaders",
  "Trailers & Low-Beds",
  "Engines & Spare Parts",
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0d1a3a] text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div>
            <div className="mb-4 text-primary-foreground">
              <OilLogoBrand size="md" />
            </div>
            <p className="mb-4 text-sm leading-relaxed text-primary-foreground/50">
              Dealers and Suppliers of All Kinds of Trucks, Heavy Machinery, and Construction Equipment in Lagos, Nigeria.
            </p>
            <p className="text-xs text-primary-foreground/30 italic">
              {"\"Your trusted partner for heavy-duty trucks and machinery.\""}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">Quick Links</h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/50 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">Products</h3>
            <ul className="flex flex-col gap-2">
              {productLinks.map((product) => (
                <li key={product}>
                  <Link
                    href="#products"
                    className="text-sm text-primary-foreground/50 transition-colors hover:text-accent"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">Contact</h3>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/50">
              <p>
                209, Lagos/Ibadan Express Way,<br />
                Ojodu Berger, Lagos State
              </p>
              <div>
                <a href="tel:+2348020890065" className="hover:text-accent transition-colors">08020890065</a>
                <span className="text-primary-foreground/20"> / </span>
                <a href="tel:+2348105955892" className="hover:text-accent transition-colors">08105955892</a>
              </div>
              <a href="mailto:Oludareinvestmentltd@gmail.com" className="hover:text-accent transition-colors break-all">
                Oludareinvestmentltd@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-primary-foreground/10 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-primary-foreground/30">
            {`\u00A9 ${currentYear} Oludare Investment Ltd. All rights reserved. RC 1042746`}
          </p>
          <p className="text-xs text-primary-foreground/30">
            Dealers & Suppliers of All Kinds of Trucks | HOWO Sino Trucks | Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  )
}

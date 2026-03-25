import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { VideoSection } from "@/components/video-section"
import { ProductsSection } from "@/components/products-section"
import { ShacmanFleetSection } from "@/components/shacman-fleet-section"
import { BrandsSection } from "@/components/brands-section"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <ProductsSection />
      <ShacmanFleetSection />
      <BrandsSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <WhatsAppFab />
    </main>
  )
}
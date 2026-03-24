# AI Development Rules - Oludare Investment Ltd (OIL)

This document outlines the technical standards and library preferences for the Oludare Investment Ltd web application.

## Tech Stack
- **Framework**: Next.js 15+ (App Router) for a modern, SEO-friendly React architecture.
- **Language**: TypeScript for type safety and improved developer experience.
- **Styling**: Tailwind CSS 4.0 utilizing the `@theme inline` configuration for high-performance utility-first styling.
- **UI Components**: shadcn/ui built on Radix UI primitives for accessible, unstyled components.
- **Icons**: Lucide React for a consistent and lightweight icon set.
- **Animations**: Tailwind-native transitions combined with `tw-animate-css` and custom CSS keyframes (e.g., `animate-pulse-glow`).
- **Forms & Validation**: React Hook Form integrated with Zod for robust schema-based validation.
- **Data Visualization**: Recharts for any inventory or business metrics displays.
- **Image Optimization**: Next.js `Image` component for automatic resizing and lazy loading.

## Library Usage Rules

### 1. UI & Styling
- **shadcn/ui**: Always check `components/ui/` before building a new component. Use these as the foundation.
- **Tailwind CSS**: Use utility classes for 99% of styling. Avoid writing raw CSS unless defining global animations or complex clip-paths in `app/globals.css`.
- **Responsive Design**: Always use mobile-first breakpoints (`sm:`, `md:`, `lg:`, `xl:`).

### 2. Components & Icons
- **Lucide React**: Use this for all UI icons. Do not install additional icon libraries unless a specific brand logo is required.
- **Component Structure**: Keep components small and focused. Place shared UI elements in `components/ui/` and feature-specific sections in `components/`.

### 3. State & Data
- **Forms**: Use `react-hook-form` for all inputs. Define validation schemas using `zod` in the same file or a dedicated `lib/schemas.ts`.
- **Toasts**: Use `sonner` for notifications. Reference the existing `Toaster` component in the root layout.

### 4. Performance & SEO
- **Metadata**: Use the `Metadata` API in `layout.tsx` and `page.tsx` for SEO. Ensure `alt` tags are descriptive for all images.
- **Images**: Always use the Next.js `Image` component. For local images, ensure they are stored in `public/images/` with logical subdirectories.

### 5. Interactivity
- **Carousels**: Use `embla-carousel-react` (already configured in `components/ui/carousel.tsx`).
- **Modals/Dialogs**: Use the shadcn `Dialog` or `Sheet` components for overlays.
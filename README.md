# Amede Tech Landing Page - 



A modern, high-performance landing page built with Next.js 14, featuring a stunning tech-themed design with animated backgrounds and comprehensive functionality.

## ✨ Key Features Implemented

### 🎨 Design & UI
- **Tech-Themed Hero Section** with animated circuit patterns, floating particles, and gradient glows
- **Dark Mode Support** with system preference detection and manual toggle
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Smooth Animations** using Framer Motion with reduced motion support
- **Modern Gradient Buttons** with hover effects and shadows

### 🏗️ Architecture
- **Next.js 14 App Router** with TypeScript
- **Server-Side Rendering (SSR)** for optimal SEO
- **Component-Based Architecture** with reusable, modular components
- **Type-Safe** with comprehensive TypeScript interfaces

### 📱 Sections
1. **Navigation** - Sticky header with mobile hamburger menu
2. **Hero Section** - Full-screen with tech background and animated elements
3. **Services** - 6 service cards with icons and features
4. **Features Grid** - Highlighted features with hover effects
5. **Testimonials** - Auto-playing carousel with navigation
6. **Contact Form** - Validated form with bot protection
7. **Footer** - Company info, links, and social media

### 🔒 Security & Performance
- **Rate Limiting** on API routes (5 requests/minute)
- **Bot Protection** with honeypot fields
- **Form Validation** using Zod schemas
- **Image Optimization** with Next.js Image component
- **Code Splitting** for optimal bundle sizes
- **Security Headers** configured in vercel.json

### 📊 Analytics & SEO
- **Google Analytics 4** integration
- **Event Tracking** for CTAs, forms, and section views
- **Complete SEO Metadata** with Open Graph tags
- **Structured Data** (JSON-LD) for search engines
- **Sitemap & Robots.txt** auto-generated

### ♿ Accessibility
- **WCAG 2.1 AA Compliant** color contrast
- **Keyboard Navigation** with visible focus indicators
- **Screen Reader Support** with ARIA labels
- **Skip to Content** link
- **Touch-Friendly** 44x44px minimum tap targets

## 🚀 Tech Stack

- **Framework**: Next.js 16,0
- **Language**: TypeScript 5+
- **Styling**: TailwindCSS 3+
- **Animations**: Framer Motion 11+
- **Forms**: React Hook Form + Zod
- **Testing**: Vitest + fast-check (configured)
- **Deployment**: Vercel-ready



## 🎯 Performance Metrics

- **First Load JS**: ~167 KB (optimized)
- **Build Time**: Fast with SWC compiler
- **Static Pages**: Pre-rendered for instant loading
- **Image Formats**: AVIF & WebP with fallbacks

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration with optimizations
- `tailwind.config.ts` - Custom theme with animations
- `tsconfig.json` - TypeScript configuration
- `vercel.json` - Deployment & security headers
- `.env.example` - Environment variables template

## 📝 Content Management

All content is centralized in `config/content.ts`:
- Hero section text
- Services (6 items)
- Features (6 items)
- Testimonials (3 items)
- Navigation links
- Footer content
- SEO metadata

Easy to update without touching component code!

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Format code
npm run format
```




## ✅ Quality Checks

- ✅ TypeScript compilation: No errors
- ✅ ESLint: Passing (warnings only)
- ✅ Build: Successful
- ✅ Responsive: Mobile, tablet, desktop
- ✅ Accessibility: WCAG 2.1 AA
- ✅ Performance: Optimized bundles
- ✅ SEO: Complete metadata

## 🎨 Design Highlights

### Hero Section
- Animated tech background with circuit patterns
- Floating particles and glowing effects
- Grid overlay with gradient
- Code symbols (brackets, arrows) floating
- Responsive gradient button
- Smooth scroll indicator

### Color Scheme
- Primary: Blue (#0ea5e9)
- Secondary: Purple (#a855f7)
- Dark backgrounds with tech aesthetic
- High contrast for accessibility



## 🎉 Ready to Launch!

The landing page is production-ready with:
- Modern tech aesthetic
- Smooth animations
- Full functionality
- SEO optimized
- Accessible
- Performant
- Secure

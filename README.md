# Valley Rose — Interactive Brand Guidelines Website

A premium digital identity book for the contemporary luxury floral design house **Valley Rose** (styled 'Vally Rose' in the master emblem), built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

This project delivers a museum-quality digital identity book inspired by the work of Pentagram, Collins, Porto Rocha, and DIA Studio, communicating calmness, quiet luxury, and modern femininity.

---

## ✦ Key Features

The guidelines are organized into **24 Chapters**:

1. **01 Cover**: Hero section with large typography and centered vector logo.
2. **02 Brand Story**: The narrative of Valley Rose.
3. **03 Vision & Values**: Core pillars (Elegance, Emotion, Craft, Celebration) and quiet luxury philosophy.
4. **04 Logo Story**: Story of the logo, the rose bud inside the oval frame.
5. **05 Logo Construction**: Geometric overlay grid demonstrating the proportions and craftsmanship.
6. **06 Clear Space**: The exclusion zone rules (X-height representation).
7. **07 Minimum Size**: Digital (32px) and print (15mm) minimum size guidelines.
8. **08 Logo Variations**: Primary (Mocha Brown on Ivory), reversed (Ivory on Mocha Brown), monochrome black/white, and stacked versions.
9. **09 Dynamic Logo System**: Core chapter demonstrating the visual system's adaptability across occasions.
10. **10 Color System**: Swatch cards with copy-on-click functionality for primary, secondary, and metallic accents.
11. **11 Typography**: Cormorant Garamond (Headings) and Inter (Body), showcasing hierarchy, weights, and letter-spacing.
12. **12 Graphic Language**: Fine lines, custom border details, layout grids.
13. **13 Pattern System**: Repeating geometric patterns with an interactive opacity slider.
14. **14 Photography Style**: Composition, macro water drops, and single-source lighting guidelines.
15. **15 Iconography**: Elegant thin-line vector outline icons.
16. **16 Packaging**: Rigid box wraps, tissue wrap, and hand-pressed wax seals.
17. **17 Floral Wrapping**: Wrap linings, kraft sleeves, and cotton ribbons.
18. **18 Wedding Applications**: Invitation suites, dinner menu cards, and seating stationery.
19. **19 Stationery**: Business cards letterpress and laid envelopes.
20. **20 Digital Experience**: Quiet UI layouts, layout grids.
21. **21 Motion Principles**: Custom cubic-bezier easing transitions with live interactive sandbox.
22. **22 Social Media**: Feeds, story templates, and curation grids.
23. **24 Brand Applications**: Environmental retail boutiques, vehicles, uniforms.
24. **24 Thank You**: Closing outro and brand mark.

---

## ✦ Visual & Interaction Design

- **Chapter Tracker**: A floating sidebar (`ChapterNav`) dynamically tracks active chapters and links to each section via Intersection Observer.
- **Scroll Progress**: A thin horizontal bar at the top of the viewport tracks reading progress.
- **Copy to Clipboard**: Swatches in the color system copy hex values to the clipboard when clicked, with toast notifications.
- **Interactive Construction Grid**: Hovering over the logo construction visualizer overlays structural lines and ratios.
- **Motion Sandbox**: Click buttons to test easing transitions (Fades, Reveals, Scales) in real-time.
- **Bilingual Interface**: Toggle between English and Arabic layouts seamlessly.

---

## ✦ Technologies Used

- **Framework**: [Next.js 15 App Router](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)

---

## ✦ Project Structure

```
rosevally-branding/
├── public/                 # Static assets (images, fonts, custom logo sketches)
│   └── images/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout (sets up Cormorant and Inter fonts)
│   │   ├── page.tsx        # Main page with all 24 chapters
│   │   └── globals.css     # Tailwind v4 configuration and global variables
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.tsx     # Navigation bar with full-screen chapter menu overlay
│   │   │   └── Footer.tsx  # Minimal clean brand footer
│   │   ├── sections/
│   │   │   ├── Cover.tsx
│   │   │   ├── BrandStory.tsx
│   │   │   ├── VisionValues.tsx
│   │   │   ├── LogoSections.tsx
│   │   │   ├── DynamicLogoSystem.tsx
│   │   │   ├── ColorSystem.tsx
│   │   │   ├── TypographySection.tsx
│   │   │   ├── GraphicPatternIcono.tsx
│   │   │   ├── PackagingApplications.tsx
│   │   │   ├── DigitalMotionSocial.tsx
│   │   │   └── ThankYou.tsx
│   │   ├── ui/
│   │   │   ├── ScrollProgress.tsx
│   │   │   ├── ChapterNav.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   └── ValleyRoseLogo.tsx   # Master logo in SVG vector format
│   │   └── providers/
│   │       ├── LanguageProvider.tsx # English/Arabic translation context
│   │       └── LenisProvider.tsx    # Smooth scroll provider
│   └── lib/
│       └── constants.ts    # Brand content database (bilingual)
```

---

## ✦ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/OMDANY1/rosevally-branding.git
   cd rosevally-branding
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## ✦ Deployment

To deploy this project to [Vercel](https://vercel.com/):

```bash
npm run build
```

The build will compile successfully to optimized static HTML/JS pages prerendered on the server.

'use client';

import React from 'react';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import ChapterNav from '@/components/ui/ChapterNav';
import Cover from '@/components/sections/Cover';
import BrandStory from '@/components/sections/BrandStory';
import VisionValues from '@/components/sections/VisionValues';
import LogoSections from '@/components/sections/LogoSections';
import DynamicLogoSystem from '@/components/sections/DynamicLogoSystem';
import ColorSystem from '@/components/sections/ColorSystem';
import TypographySection from '@/components/sections/TypographySection';
import GraphicPatternIcono from '@/components/sections/GraphicPatternIcono';
import PatternSystemRevamp from '@/components/sections/PatternSystemRevamp';
import DigitalMotionSocial from '@/components/sections/DigitalMotionSocial';
import SocialMediaRevamp from '@/components/sections/SocialMediaRevamp';
import BrandApplicationsRevamp from '@/components/sections/BrandApplicationsRevamp';
import ThankYou from '@/components/sections/ThankYou';

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory-cream text-mocha-brown antialiased relative selection:bg-dusty-rose selection:text-ivory-cream">
      {/* Scroll Reading Progress */}
      <ScrollProgress />

      {/* Floating Sidebar Chapter Tracker */}
      <ChapterNav />

      {/* Navigation */}
      <Nav />

      {/* Main Content Sections representing Chapters 01 to 24 */}
      <main>
        {/* Chapter 01: Cover */}
        <Cover />

        {/* Chapter 02: Brand Story */}
        <BrandStory />

        {/* Chapter 03: Vision & Values */}
        <VisionValues />

        {/* Chapters 04–08: Logo Story, Construction, Clear Space, Min Size, Variations */}
        <LogoSections />

        {/* Chapter 09: Dynamic Logo System */}
        <DynamicLogoSystem />

        {/* Chapter 10: Color System */}
        <ColorSystem />

        {/* Chapter 11: Typography */}
        <TypographySection />

        {/* Chapters 12, 14, 15: Graphic Language, Photography Style, Iconography */}
        <GraphicPatternIcono />

        {/* Chapter 13: Revamped Pattern System */}
        <PatternSystemRevamp />

        {/* Chapters 20, 21: Digital Experience, Motion Principles */}
        <DigitalMotionSocial />

        {/* Chapter 22: Revamped Social Media Editorial Feed */}
        <SocialMediaRevamp />

        {/* Chapters 16-19 and 23: Revamped Brand Applications System */}
        <BrandApplicationsRevamp />

        {/* Chapter 24: Thank You */}
        <ThankYou />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  color?: 'black' | 'white' | string; // Use 'white' for white version, default is black version
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showText?: boolean;
}

export default function ValleyRoseLogo({
  className = '',
  color = 'black',
  size = 'md'
}: LogoProps) {
  // Map size classes
  const sizeClasses = {
    sm: 'w-[120px] h-[135px]',
    md: 'w-[160px] h-[180px]',
    lg: 'w-[200px] h-[225px]',
    xl: 'w-[280px] h-[315px]',
    custom: 'w-full h-full'
  };

  const isWhite = color === 'white' || color === '#F7F1E9' || color === 'white-logo';
  const logoSrc = isWhite ? '/images/logo-white.png' : '/images/logo-rose-gold.png';

  return (
    <div className={`relative flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <Image
        src={logoSrc}
        alt="Valley Rose Official Brand Logo"
        width={320}
        height={360}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
}

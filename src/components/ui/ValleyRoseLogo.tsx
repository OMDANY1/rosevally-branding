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
    sm: 'w-[50px] h-[56px]',
    md: 'w-[80px] h-[90px]',
    lg: 'w-[100px] h-[112px]',
    xl: 'w-[130px] h-[146px]',
    custom: 'w-full h-full'
  };

  const isWhite = color === 'white' || color === '#F7F1E9' || color === 'white-logo';
  const logoSrc = isWhite ? '/images/logo-white.png' : '/images/logo-rose-gold.png';

  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${sizeClasses[size]} ${className}`}>
      <Image
        src={logoSrc}
        alt="Valley Rose Official Brand Logo"
        width={200}
        height={225}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
}

import React from 'react';
import { useLang } from '../providers/LanguageProvider';

interface LogoProps {
  className?: string;
  color?: string; // 'currentColor' or hex
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
}

export default function ValleyRoseLogo({
  className = '',
  color = 'currentColor',
  showText = true,
  size = 'md'
}: LogoProps) {
  const { lang } = useLang();

  // Width and height mapping for convenience
  const sizeClasses = {
    sm: 'w-24 h-auto',
    md: 'w-36 h-auto',
    lg: 'w-48 h-auto',
    xl: 'w-64 h-auto',
    custom: ''
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center ${sizeClasses[size]} ${className}`}>
      {/* SVG Master Emblem */}
      <svg
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        style={{ color }}
      >
        {/* Capsule Frame */}
        <rect
          x="62"
          y="15"
          width="76"
          height="145"
          rx="38"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
        />

        {/* Stem - inside the bottom of the capsule */}
        <path
          d="M 100 115 L 100 148"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Left Leaf - flares out and breaks capsule boundary */}
        <path
          d="M 100 120 C 92 118, 70 114, 52 102 C 65 102, 85 108, 100 120 Z"
          fill="currentColor"
        />
        
        {/* Right Leaf - flares out and breaks capsule boundary */}
        <path
          d="M 100 120 C 108 118, 130 114, 148 102 C 135 102, 115 108, 100 120 Z"
          fill="currentColor"
        />

        {/* Rose Bud Cups */}
        {/* Outer petal contour left */}
        <path
          d="M 100 110 C 85 110, 76 96, 76 80 C 76 65, 88 56, 100 70"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Outer petal contour right */}
        <path
          d="M 100 110 C 115 110, 124 96, 124 80 C 124 65, 112 56, 100 70"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Rose Bud Core - solid fill with details */}
        <path
          d="M 88 80 C 88 95, 100 106, 100 106 C 100 106, 112 95, 112 80 C 112 68, 88 68, 88 80 Z"
          fill="currentColor"
        />

        {/* Inner swirl curves on the rose bud */}
        <path
          d="M 94 75 C 96 70, 104 70, 106 75 C 108 80, 100 84, 98 80 C 96 76, 100 74, 102 75"
          stroke="#F7F1E9" /* Background color cut line */
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {showText && (
        <div className="mt-4 flex flex-col items-center">
          {/* Logo Brand Name - serif elegant */}
          <span className="font-serif text-lg tracking-[0.35em] text-inherit font-light uppercase leading-none block">
            Vally Rose
          </span>
          
          {/* Divider Line with ✦ Accents */}
          <div className="flex items-center justify-center w-28 my-2 gap-2 opacity-60">
            <div className="h-[1px] bg-current flex-1"></div>
            <span className="text-[6px] text-inherit">✦</span>
            <div className="h-[1px] bg-current flex-1"></div>
          </div>

          {/* Tagline - sans-serif clean geometric */}
          <span className="font-sans text-[8px] tracking-[0.25em] text-inherit opacity-75 uppercase block whitespace-nowrap">
            {lang === 'ar' ? 'حيث تتدفق السعادة' : 'where happiness flows'}
          </span>
        </div>
      )}
    </div>
  );
}

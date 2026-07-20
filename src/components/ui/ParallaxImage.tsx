'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  offset?: number;
  priority?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  offset = 80,
  priority = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden w-full h-full ${containerClassName}`}
    >
      <motion.div
        style={{ y, height: `calc(100% + ${offset * 2}px)`, top: -offset }}
        className="absolute inset-x-0 w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className={`object-cover w-full h-full ${className}`}
        />
      </motion.div>
    </div>
  );
}

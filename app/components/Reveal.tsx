'use client';
import { motion, type Variants } from 'framer-motion';
import { useRef } from 'react';

// Pre-defined variants based on your custom animations
const customVariants: { [key: string]: Variants } = {
  fadeInUp: {
    hidden: { opacity: 0, y: 45 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -45 },
    visible: { opacity: 1, y: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -55 },
    visible: { opacity: 1, x: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 55 },
    visible: { opacity: 1, x: 0 },
  },
};

interface RevealProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInDown' | 'slideRight' | 'slideLeft';
  className?: string;
  delay?: number;
}

export default function Reveal({ children, animation = 'fadeInUp', className, delay }: RevealProps) {
  const ref = useRef(null);
  const selectedVariant = customVariants[animation];

  return (
    <motion.div
      ref={ref}
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      transition={{ 
        duration: 1, // Matches your CSS duration
        delay: delay || 0.25,
        ease: 'easeOut', // Matches your CSS easing
      }}
      viewport={{ once: true, amount: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

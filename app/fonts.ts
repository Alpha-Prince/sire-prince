import { Zen_Dots, Voltaire, Sora } from 'next/font/google';

// Define each font and assign a CSS variable
export const zenDots = Zen_Dots({
  subsets: ['latin'],
  weight: '400', // Zen Dots only has one weight
  variable: '--font-zen-dots',
  display: 'swap',
});

export const voltaire = Voltaire({
  subsets: ['latin'],
  weight: '400', // Voltaire only has one weight
  variable: '--font-voltaire',
  display: 'swap',
});

export const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

import { cva } from 'class-variance-authority';

export const containerVariants = cva(
  'fixed top-0 left-0 w-full h-screen bg-white transition-all duration-300 overflow-hidden md:hidden',
  {
    variants: {
      open: {
        true: 'opacity-100 visible z-50',
        false: 'opacity-0 invisible -z-10',
      },
    },
    defaultVariants: {
      open: false,
    },
  },
);

import { cva } from 'class-variance-authority';

export const containerVariants = cva(
  'w-full h-[72px] top-0 sticky z-[2] bg-white transition-shadow',
  {
    variants: {
      shadow: {
        true: 'shadow-[0px_3px_5px_rgba(37,37,37,0.1)]',
        false: 'shadow-none',
      },
    },
    defaultVariants: {
      shadow: false,
    },
  },
);

export const innerContainerStyles =
  'relative w-full max-w-[1680px] mx-auto h-full px-6 flex items-center justify-end cursor-pointer';

export const logoContainerStyles = 'fixed top-[25px] left-[24px] z-10';

export const hamburgerContainerStyles = 'w-[17px] h-[17px] md:hidden mr-6';

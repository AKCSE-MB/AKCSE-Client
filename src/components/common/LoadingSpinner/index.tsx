'use client';

import loadingAnimation from '@/assets/lottie/loading.json';
import { Lottie } from 'lottie-react';

interface Props {
  size?: number;
}

export default function LoadingSpinner({ size = 120 }: Props) {
  return (
    <Lottie
      src={loadingAnimation}
      loop
      autoplay
      style={{ width: size, height: size }}
    />
  );
}

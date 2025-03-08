'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function useRequireNoAuth(redirectPath = '/') {
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      router.push(redirectPath);
    }
  }, [router, redirectPath]);
}

export function useRequireAuth(redirectPath = '/') {
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      router.push(redirectPath);
    }
  }, [router, redirectPath]);
}

'use client';

import GlobalModal from '@/components/Modal/GlobalModal';
import MainLayout from '@/components/layout/MainLayout';
import { useAxiosInterceptor } from '@/hooks/useAxiosInterceptor';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import ReactQueryProvider from '../react-query/ReactQueryProvider';

export default function StyledComponentsWrapper({
  children,
}: {
  children: ReactNode;
}) {
  useAxiosInterceptor();

  return (
    <ThemeProvider theme={theme}>
      <ReactQueryProvider>
        <GlobalStyle />
        <GlobalModal />
        <MainLayout>{children}</MainLayout>
      </ReactQueryProvider>
    </ThemeProvider>
  );
}

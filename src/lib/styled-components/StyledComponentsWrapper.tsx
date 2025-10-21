'use client';

import { GlobalStyle } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import ReactQueryProvider from '../react-query/ReactQueryProvider';
import GlobalModal from '@/components/Modal/GlobalModal';
import { useAxiosInterceptor } from '@/hooks/useAxiosInterceptor';

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
        {children}
      </ReactQueryProvider>
    </ThemeProvider>
  );
}

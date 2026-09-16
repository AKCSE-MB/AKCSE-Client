import { GlobalStyle } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';
import type { Preview } from '@storybook/nextjs';
import localFont from 'next/font/local';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

const mainFont = localFont({
  src: '../src/assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--Pretendard-Variable',
  weight: '45 920',
});

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      // GlobalStyle reads the font variable on <body>, same as app/layout.tsx
      useEffect(() => {
        document.body.classList.add(mainFont.variable);
      }, []);

      return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      );
    },
  ],
  tags: ['autodocs'],
};

export default preview;

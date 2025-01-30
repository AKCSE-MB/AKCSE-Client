import StyledComponentsRegistry from '@/lib/registry';
import StyledComponentsWrapper from '@/lib/styled-components/StyledComponentsWrapper';
import { Metadata } from 'next';
import localFont from 'next/font/local';


export const metadata: Metadata = {
  title: 'akcse-mb',
  description: 'akcse mb code',
};

const mainFont = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--Pretendard-Variable',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </head>
      <body className={`${mainFont.variable}`} suppressHydrationWarning>
        <StyledComponentsRegistry>
          <StyledComponentsWrapper>{children}</StyledComponentsWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

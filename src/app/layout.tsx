import StyledComponentsRegistry from '@/lib/registry';
import StyledComponentsWrapper from '@/lib/styled-components/StyledComponentsWrapper';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'AKCSE MB',
  description:
    'AKCSE Manitoba 공식 페이지입니다. 다양한 활동과 행사를 확인해보세요.',
};

const mainFont = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--Pretendard-Variable',
  weight: '45 920',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <body className={`${mainFont.variable}`} suppressHydrationWarning>
        <StyledComponentsRegistry>
          <StyledComponentsWrapper>{children}</StyledComponentsWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

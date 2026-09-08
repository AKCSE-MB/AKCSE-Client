'use client';

import CFooter from '@/components/common/Footer';
import CHeader from '@/components/common/Header';
import CSideMenu from '@/components/common/SideMenu';
import { useRouter } from 'next/navigation';
import * as S from './index.styled';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { push } = useRouter();

  const menuItems = [
    {
      name: 'Home',
      path: '/',
      clickEvent: () => push('/'),
    },
    {
      name: 'Events',
      path: '/events',
      clickEvent: () => push('/events'),
    },
    {
      name: 'Our Team',
      path: '/our-team',
      clickEvent: () => push('/our-team'),
    },
    {
      name: 'News',
      path: '/news',
      clickEvent: () => push('/news'),
    },
    {
      name: 'Research',
      path: '/research',
      clickEvent: () => push('/research'),
    },
  ];

  const ctaButton = {
    name: 'Join Us',
    clickEvent: () =>
      window.open(
        'https://docs.google.com/forms/d/e/1FAIpQLSdDb6vLL-WMoAltOlxGfXJufiis3M5tA0bl4tKOdbm4DrjMgA/viewform?usp=dialog',
      ),
  };

  return (
    <S.Wrapper>
      <CHeader items={menuItems} ctaButton={ctaButton} />
      <CSideMenu items={[...menuItems, ctaButton]} />
      <S.Main>{children}</S.Main>
      <CFooter />
    </S.Wrapper>
  );
}

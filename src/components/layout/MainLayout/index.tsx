'use client';

import CFooter from '@/components/common/Footer';
import CHeader from '@/components/common/Header';
import CSideMenu from '@/components/common/SideMenu';
import { useRouter } from 'next/navigation';

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
    },
    {
      name: 'Research',
      path: '/research',
    },
  ];

  const ctaButton = {
    name: 'Join Us',
    clickEvent: () =>
      window.open(
        'https://docs.google.com/forms/d/e/1FAIpQLSd2pIattHv1NxclVVHLMVRQD5TiqvuGJp1nAY_K5YCrBpLcvQ/viewform',
      ),
  };

  return (
    <>
      <CHeader items={menuItems} ctaButton={ctaButton} />
      <CSideMenu items={[...menuItems, ctaButton]} />
      {children}
      <CFooter />
    </>
  );
}

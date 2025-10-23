'use client';

import { useRouter } from 'next/navigation';
import CHeader from '@/components/c-header';
import CSideMenu from '@/components/c-side-menu';
import CFooter from '@/components/c-footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { push } = useRouter();

  const menuItems = [
    {
      name: 'Home',
      clickEvent: () => push('/'),
    },
    {
      name: 'Our Team',
      clickEvent: () => push('/our-team'),
    },
    {
      name: 'Events',
      clickEvent: () => push('/events'),
    },
    {
      name: 'Join Us',
      clickEvent: () =>
        window.open(
          'https://docs.google.com/forms/d/e/1FAIpQLSd2pIattHv1NxclVVHLMVRQD5TiqvuGJp1nAY_K5YCrBpLcvQ/viewform',
        ),
    },
  ];

  return (
    <>
      <CHeader items={menuItems} />
      <CSideMenu items={menuItems} />
      {children}
      <CFooter />
    </>
  );
}

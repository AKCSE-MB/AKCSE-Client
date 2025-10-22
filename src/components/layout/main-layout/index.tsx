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
      clickEvent: () => push('/events'),
    },
    {
      name: 'Events',
      clickEvent: () => push('/events'),
    },
    {
      name: 'Resources',
      clickEvent: () => push('/'),
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

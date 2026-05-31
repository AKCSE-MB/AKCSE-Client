import CSideMenu from '@/components/common/SideMenu';
import { useRouter } from 'next/navigation';
import * as S from './index.styled';

interface Props {
  children: React.ReactNode;
}

export default function MobileLayout({ children }: Props) {
  const router = useRouter();

  return (
    <S.LayoutWrapper>
      <S.Layout>
        <S.LogoWrapper></S.LogoWrapper>
        <CSideMenu
          items={[
            {
              name: 'Home',
              clickEvent: () => router.push('/'),
            },
            {
              name: 'Events',
              clickEvent: () => router.push('/events'),
            },
            {
              name: 'Resources',
              clickEvent: () => router.push('/'),
            },
          ]}
        />
        {children}
      </S.Layout>
    </S.LayoutWrapper>
  );
}

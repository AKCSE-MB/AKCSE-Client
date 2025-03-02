import * as S from './page.styled';
import CSideMenu from '@/components/c-side-menu';
import { useRouter } from 'next/navigation';
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
            {
              name: 'Leaderboard',
              clickEvent: () => router.push('/leaderboard'),
            },
          ]}
        />
        {children}
      </S.Layout>
    </S.LayoutWrapper>
  );
}

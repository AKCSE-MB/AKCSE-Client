import { MODAL_TYPES } from '@/components/Modal/GlobalModal';
import * as S from './page.styled';
import CSideMenu from '@/components/c-side-menu';
import { useRouter } from 'next/navigation';
import useKakaoLogin from '@/hooks/useKakaoLogin';
import useUser from '@/hooks/useUser';
import CAUTION from '@/assets/common/logo/caution.svg';
import { useModalStore } from '@/store/useModalStore';

interface Props {
  children: React.ReactNode;
}

export default function MobileLayout({ children }: Props) {
  const router = useRouter();
  const { openModal, closeModal } = useModalStore();
  const { isLoggedIn } = useUser();
  const { loginHandler } = useKakaoLogin();

  const loginInfoModal = () => {
    openModal(MODAL_TYPES.dialog, {
      message: 'You must be AKCSE memeber to access this page',
      logo: <CAUTION />,
      handleConfirm: () => loginHandler(),
      handleClose: () => closeModal(MODAL_TYPES.dialog),
    });
  };

  const onLeaderBoardClick = () => {
    if (!isLoggedIn) return loginInfoModal();

    router.push('/leaderboard');
  };

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
              clickEvent: onLeaderBoardClick,
            },
          ]}
        />
        {children}
      </S.Layout>
    </S.LayoutWrapper>
  );
}

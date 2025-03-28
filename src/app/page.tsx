'use client';

import DefaultButton from '@/components/Button/DefaultButton';
import { useRouter } from 'next/navigation';
import * as S from './page.styled';
import CHeader from '@/components/c-header';
import CFooter from '@/components/c-footer';
import { useModalStore } from '@/store/useModalStore';
import { MODAL_TYPES } from '@/components/Modal/GlobalModal';
import useUser from '@/hooks/useUser';
import useKakaoLogin from '@/hooks/useKakaoLogin';
import CAUTION from '@/assets/common/logo/caution.svg';

export default function Home() {
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
      isLogin: true,
    });
  };

  const onLeaderBoardClick = () => {
    if (!isLoggedIn) return loginInfoModal();

    router.push('/leaderboard');
  };

  return (
    <S.PageWrapper>
      <S.MainContent>
        <CHeader />
        <S.ButtonContainer>
          <DefaultButton onClick={() => router.push('/')} btnText="HOME" />
          <DefaultButton
            onClick={() => router.push('/events')}
            btnText="EVENTS"
          />
          <DefaultButton onClick={() => router.push('/')} btnText="RESOURCES" />
          <DefaultButton onClick={onLeaderBoardClick} btnText="LEADERBOARD" />
        </S.ButtonContainer>
      </S.MainContent>
      <CFooter />
    </S.PageWrapper>
  );
}

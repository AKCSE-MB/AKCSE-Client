'use client';

import { useRouter } from 'next/navigation';
import * as S from './page.styled';
import DefaultButton from '@/components/Button/DefaultButton';
import CHeader from '@/components/c-header';
import { ToastContainer } from 'react-toastify';
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
      message: 'You must be Akcse memeber to access this page',
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
    <S.PageWrapper>
      <S.MainContent>
        <CHeader />
        <S.ButtonContainer>
          <DefaultButton onClick={() => router.push('/')}>HOME</DefaultButton>
          <DefaultButton onClick={() => router.push('/events')}>
            EVENTS
          </DefaultButton>
          <DefaultButton onClick={() => router.push('/')}>
            RESOURCES
          </DefaultButton>
          <DefaultButton onClick={onLeaderBoardClick}>
            LEADERBOARD
          </DefaultButton>
        </S.ButtonContainer>
        <ToastContainer position="bottom-center" />
      </S.MainContent>

      <CFooter />
    </S.PageWrapper>
  );
}

import useKakaoLogin from '@/hooks/useKakaoLogin';
import * as S from './page.styled';
import INSTAGRAM from '@/assets/common/sns/instagram.svg';
import useUser from '@/hooks/useUser';
import { useModalStore } from '@/store/useModalStore';
import { useRouter } from 'next/navigation';
import { MODAL_TYPES } from '../Modal/GlobalModal';
import CAUTION from '@/assets/common/logo/caution.svg';

export default function CFooter() {
  const router = useRouter();
  const onLeaderBoardClick = () => {
    if (!isLoggedIn) return loginInfoModal();

    router.push('/leaderboard');
  };

  const navLinks = [
    { label: 'Home', clickEvent: () => router.push('/') },
    { label: 'Events', clickEvent: () => router.push('/events') },
    //TODO: update path once resource page created
    { label: 'Resources', clickEvent: () => router.push('/') },
    //TODO: add login check, once login feat implemented
    { label: 'Leaderboard', clickEvent: onLeaderBoardClick },
  ];

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

  return (
    <S.Container>
      <S.LinkContainer>
        {navLinks.map(({ label, clickEvent }) => (
          <S.LinkItem key={label} onClick={clickEvent}>
            {label}
          </S.LinkItem>
        ))}
      </S.LinkContainer>
      <S.SnsContainer>
        <S.SnsItem
          onClick={() => {
            window.open('https://www.instagram.com/akcse.mb.yg/');
          }}
        >
          <INSTAGRAM />
        </S.SnsItem>
      </S.SnsContainer>
      <S.CopyrightText>© 2025 ACKSE. ALL RIGHTS RESERVED</S.CopyrightText>
    </S.Container>
  );
}

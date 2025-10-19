import * as S from './page.styled';
import INSTAGRAM from '@/assets/common/sns/instagram.svg';
import LINKTREE from '@/assets/common/sns/linkTree.svg';
import { useRouter } from 'next/navigation';
import KAKAOTALK from '@/assets/common/sns/kakaotalk.svg';

export default function CFooter() {
  const router = useRouter();

  const navLinks = [
    { label: 'Home', clickEvent: () => router.push('/') },
    { label: 'Events', clickEvent: () => router.push('/events') },
    { label: 'Resources', clickEvent: () => router.push('/') },
  ];

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
        <S.SnsItem
          onClick={() => {
            window.open('https://linktr.ee/akcse.mb.yg');
          }}
        >
          <LINKTREE />
        </S.SnsItem>
        <S.SnsItem
          onClick={() => {
            window.open('https://open.kakao.com/o/g970mHGg');
          }}
        >
          <KAKAOTALK />
        </S.SnsItem>
      </S.SnsContainer>
      <S.CopyrightText>© 2025 ACKSE. ALL RIGHTS RESERVED</S.CopyrightText>
    </S.Container>
  );
}

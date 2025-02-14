'use client';

import { useRouter } from 'next/navigation';
import * as S from './page.styled';
import DefaultButton from '@/components/Button/DefaultButton';
import CHeader from '@/components/c-header';
import { ToastContainer } from 'react-toastify';
import CFooter from '@/components/c-footer';

export default function Home() {
  const { push } = useRouter();

  return (
    <>
      <S.MainContent>
        <CHeader />

        <S.ButtonContainer>
          <DefaultButton onClick={() => push('/')}>HOME</DefaultButton>
          <DefaultButton onClick={() => push('/events')}>EVENTS</DefaultButton>
          <DefaultButton onClick={() => push('/')}>RESOURCES</DefaultButton>
          <DefaultButton onClick={() => push('/leaderboard')}>
            LEADERBOARD
          </DefaultButton>
        </S.ButtonContainer>
        <ToastContainer position="bottom-center" />
      </S.MainContent>

      <CFooter />
    </>
  );
}

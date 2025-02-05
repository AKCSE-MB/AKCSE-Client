'use client';

import DefaultButton from '@/components/Button/DefaultButton';
import Header from '@/components/Header/MainHeader';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import * as S from './page.styled';

export default function Home() {
  const { push } = useRouter();

  return (
    <S.MainContent>
      <Header title="AKCSE MANITOBA" subTitle="Young Generations" />

      <S.ButtonContainer>
        <DefaultButton onClick={() => push('/')} btnText='Home' />
        <DefaultButton onClick={() => push('/events')} btnText='Events' />
        <DefaultButton onClick={() => push('/')} btnText='Resources' />
        <DefaultButton onClick={() => push('/leaderboard')} btnText='Leaderboard' />
      </S.ButtonContainer>
      <ToastContainer position="bottom-center" />
    </S.MainContent>
  );
}

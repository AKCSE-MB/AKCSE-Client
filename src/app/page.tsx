'use client';

import { useRouter } from 'next/navigation';
import * as S from '@/app/page.styled';
import DefaultButton from '@/components/Button/DefaultButton';
import Header from '@/components/Header/MainHeader';
import useUser from '@/hooks/useUser';

export default function Home() {
  const { push } = useRouter();
  const { isLoggedIn, logout } = useUser();

  return (
    <>
      <S.MainContent>
        <Header title="AKCSE MANITOBA" subTitle="Young Generations" />

        <S.ButtonContainer>
          <DefaultButton onClick={() => push('/')}>HOME</DefaultButton>
          <DefaultButton onClick={() => push('/')}>EVENTS</DefaultButton>
          <DefaultButton onClick={() => push('/')}>RESOURCES</DefaultButton>
          <DefaultButton onClick={() => push('/')}>LEADERBOARD</DefaultButton>
          {isLoggedIn ? (
            <DefaultButton onClick={logout}>Log Out</DefaultButton>
          ) : (
            <DefaultButton onClick={() => push('/login')}>
              LOG IN / ADMIN
            </DefaultButton>
          )}
        </S.ButtonContainer>
      </S.MainContent>
    </>
  );
}

'use client';

import * as S from '@/app/login/page.styled';
import Header from '@/components/Header/MainHeader';
import TextInput from '@/components/Input/TextInput';
import DefaultButton from '@/components/Button/DefaultButton';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useUser from '@/hooks/useUser';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useRouter();
  const { login } = useUser();

  const handleLogIn = async () => {
    try {
      await login(email, password);
      push('/');
    } catch (error) {
      console.error('Login Failed:', error);
    }
  };

  return (
    <>
      <S.MainContainer>
        <Header title="AKCSE MANITOBA" subTitle="Young Generations" BackBtn />

        <S.InputContainer>
          <S.HeaderContainer>
            <h1>Log In</h1>
            <h2>AKCSE MB Admin Access</h2>
          </S.HeaderContainer>

          <TextInput
            placeholder="Email"
            value={email}
            onChange={(email) => setEmail(email.target.value)}
          />

          <TextInput
            placeholder="Password"
            type="password"
            value={password}
            onChange={(pass) => setPassword(pass.target.value)}
          />

          <S.ButtonContainer>
            <DefaultButton onClick={handleLogIn}>Log In</DefaultButton>
          </S.ButtonContainer>
        </S.InputContainer>
      </S.MainContainer>
    </>
  );
}

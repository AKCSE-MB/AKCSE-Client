'use client';

import * as S from '@/app/login/page.styled';
import Header from '@/components/Header/MainHeader';
import TextInput from '@/components/Input/TextInput';
import DefaultButton from '@/components/Button/DefaultButton';
import { useState } from 'react';
import authRepository from '@/apis/auth';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useRouter();

  const handleLogIn = async () => {
    try {
      const response = await authRepository().postLogin({
        identification: email,
        password,
      });

      const token = response?.accessToken;
      localStorage.setItem('authToken', token);
      push('/');
    } catch (error) {
      console.error('Login Failed:', error);
    }
  };

  return (
    <>
      <div>
        <Header title="AKCSE MANITOBA" subTitle="Young Generations" BackBtn />

        <S.InputContainer>
          <TextInput
            label="Email"
            placeholder="Email here"
            value={email}
            onChange={(email) => setEmail(email.target.value)}
          />
          <TextInput
            label="Password"
            placeholder="Password here"
            type="password"
            value={password}
            onChange={(pass) => setPassword(pass.target.value)}
          />
          <DefaultButton onClick={handleLogIn}>Log In</DefaultButton>
        </S.InputContainer>
      </div>
    </>
  );
}

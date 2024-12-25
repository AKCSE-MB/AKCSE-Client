'use client';

import * as S from './page.styled';
import Header from '@/components/Header/MainHeader';
import TextInput from '@/components/Input/TextInput';
import DefaultButton from '@/components/Button/DefaultButton';

export default function Home() {
  return (
    <>
      <div>
        <Header title="AKCSE MANITOBA" subTitle="Young Generations" BackBtn />

        <S.InputContainer>
          <TextInput label="Email" placeholder="Email here" />
          <TextInput label="Password" placeholder="Password here" />
          <DefaultButton>Log In</DefaultButton>
        </S.InputContainer>
      </div>
    </>
  );
}

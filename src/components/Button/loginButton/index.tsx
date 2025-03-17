import { ButtonHTMLAttributes } from 'react';
import * as S from './page.styled';
import KAKAO from '@/assets/common/logo/kakao.svg';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export default function LoginButton({ ...rest }: Props) {
  return (
    <S.Container>
      <S.LogoContainer>
        <KAKAO width={20} height={20}/>
      </S.LogoContainer>
      <S.Button {...rest}>Login with Kakao</S.Button>
    </S.Container>
  );
}

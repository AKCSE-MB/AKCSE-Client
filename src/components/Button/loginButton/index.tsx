import { ButtonHTMLAttributes } from 'react';
import * as S from './page.styled';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnText: string;
}

export default function LoginButton({ btnText, ...rest }: Props) {
  return <S.Button {...rest}>{btnText}</S.Button>;
}

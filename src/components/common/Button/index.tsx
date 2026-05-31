import { ButtonHTMLAttributes } from 'react';
import * as S from './index.styled';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnText: string;
  bgColor?: string;
  hoverColor?: string;
  textColor?: string;
}

export default function DefaultButton({
  btnText,
  bgColor,
  hoverColor,
  textColor,
  ...rest
}: Props) {
  return (
    <S.Button
      $bgColor={bgColor}
      $hoverColor={hoverColor}
      $textColor={textColor}
      {...rest}
    >
      {btnText}
    </S.Button>
  );
}

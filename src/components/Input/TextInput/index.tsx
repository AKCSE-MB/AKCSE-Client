import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import * as S from '@/components/Input/TextInput/page.styled';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function TextInput(
  { label, disabled = false, ...rest }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <div>
      {label && <S.StyledLabel>{label}</S.StyledLabel>}
      <S.EmptySpace />

      <S.TextInput disabled={disabled} ref={ref} {...rest} />
    </div>
  );
}

export default forwardRef<HTMLInputElement, Props>(TextInput);

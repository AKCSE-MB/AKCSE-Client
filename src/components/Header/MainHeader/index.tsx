import ARROW from '@/assets/common/logo/arrow.svg';
import * as S from './page.styled';
import { useRouter } from 'next/navigation';

interface Props {
  title: string;
  subTitle?: string;
  BackBtn?: boolean;
}

export default function Header({ title, subTitle, BackBtn }: Props) {
  const { back } = useRouter();

  return (
    <S.HeaderWrapper>
      <S.Title>
        <h1>{title}</h1>

        {subTitle ? <h2>{subTitle}</h2> : <></>}
      </S.Title>

      <S.EmptySpace />

      {BackBtn ? (
        <S.BackButton onClick={back}>
          <ARROW />
        </S.BackButton>
      ) : (
        <S.EmptySpace />
      )}
    </S.HeaderWrapper>
  );
}

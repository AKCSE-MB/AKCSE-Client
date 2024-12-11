'use client';

import { useRouter } from 'next/navigation';
import * as S from './page.styled';

export default function Home() {
  const { push } = useRouter();

  return (
    <>
      <S.MainContent>
        "hello AKCSE MB"
        <br />
        <button type="button" onClick={() => push('/login')}>
          Login
        </button>
      </S.MainContent>
    </>
  );
}

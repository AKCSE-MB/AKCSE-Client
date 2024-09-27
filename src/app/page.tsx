'use client';

import { useRouter } from 'next/navigation';
import * as S from './page.styled';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <S.MainContent>
        "hello AKCSE MB"
      </S.MainContent>
    </>
  );
}

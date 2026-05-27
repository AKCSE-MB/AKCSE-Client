'use client';

import executives from '@/assets/data/team.json';
import ExecutiveCard from '@/components/c-executive-card';
import * as S from './page.styled';

export default function ExecutiveList() {
  return (
    <S.PageWrapper>
      <S.Title>Our Team</S.Title>

      <S.TeamGrid>
        {executives.map((executive) => (
          <ExecutiveCard key={executive.id} {...executive} />
        ))}
      </S.TeamGrid>
    </S.PageWrapper>
  );
}

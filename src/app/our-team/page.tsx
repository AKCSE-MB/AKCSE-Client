'use client';

import * as S from './page.styled';
import executives from '@/assets/data/team.json';
import ExecutiveCard from '@/components/c-executive-card';

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

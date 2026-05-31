'use client';

import teamSource from '@/assets/data/team.json';
import TeamMemberCard from '@/components/common/TeamMemberCard';
import * as S from './page.styled';

export default function ExecutiveList() {
  return (
    <S.PageWrapper>
      <S.Container>
        <S.Title>Our Team</S.Title>

        <S.TeamGrid>
          {teamSource.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              imageSrc={member.image}
              imageAlt={`Portrait of ${member.name}`}
            />
          ))}
        </S.TeamGrid>
      </S.Container>
    </S.PageWrapper>
  );
}

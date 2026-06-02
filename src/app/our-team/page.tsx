'use client';

import teamSource from '@/assets/data/team.json';
import DeveloperCard from '@/components/common/DeveloperCard';
import OurTeamCard from '@/components/common/OurTeamCard';
import PageHero from '@/components/common/PageHero';
import * as S from './page.styled';

export default function ExecutiveList() {
  const executives = teamSource.slice(0, 4);
  const developers = teamSource.slice(4);

  return (
    <S.PageWrapper>
      <PageHero
        eyebrow="AKCSE UOFM • 2026-2027 EXECUTIVE"
        title="Our Team"
        titleSub="Leadership & Builders"
        description="The students leading AKCSE YG University of Manitoba"
      />

      <S.Container>
        <S.SectionHeader>
          <S.SectionTitle>Executive Board</S.SectionTitle>
          <S.SectionLine />
          <S.SectionCount>04 MEMBERS</S.SectionCount>
        </S.SectionHeader>

        <S.ExecutiveGrid>
          {executives.map((member) => (
            <OurTeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              imageSrc={member.image}
              imageAlt={`Portrait of ${member.name}`}
              variant="executive"
            />
          ))}
        </S.ExecutiveGrid>

        <S.DevelopmentSection>
          <S.SectionHeader>
            <S.SectionTitle>Development Team</S.SectionTitle>
            <S.SectionLine />
            <S.SectionCount>03 BUILDERS</S.SectionCount>
          </S.SectionHeader>

          <S.DeveloperGrid>
            {developers.map((member) => (
              <DeveloperCard
                key={member.id}
                name={member.name}
                role={member.role}
                imageSrc={member.image}
                imageAlt={`Photo of ${member.name}`}
              />
            ))}
          </S.DeveloperGrid>
        </S.DevelopmentSection>

        <S.CTASection>
          <S.CTAContent>
            <S.CTATitle>Become part of our community</S.CTATitle>
            <S.CTADescription>
              Join AKCSE YG UofM to meet fellow students, make connections, and
              take part in events throughout the year.
            </S.CTADescription>
          </S.CTAContent>

          <S.CTAButton
            href="https://docs.google.com/forms/d/e/1FAIpQLSd2pIattHv1NxclVVHLMVRQD5TiqvuGJp1nAY_K5YCrBpLcvQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Become a Member
            <S.Arrow>→</S.Arrow>
          </S.CTAButton>
        </S.CTASection>
      </S.Container>
    </S.PageWrapper>
  );
}

'use client';

import DeveloperCard from '@/components/common/DeveloperCard';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import OurTeamCard from '@/components/common/OurTeamCard';
import PageHero from '@/components/common/PageHero';
import { useExecutives } from '@/hooks/queries/useExecutives';
import { getFormattedNumber } from '@/utils/formatUtil';
import { splitTeam } from '@/utils/team.utils';
import * as S from './page.styled';

export default function ExecutiveList() {
  const { executives: members, isLoading } = useExecutives();
  const { executive: executives, dev: developers } = splitTeam(members);

  return (
    <S.PageWrapper>
      <PageHero
        eyebrow="AKCSE UOFM • 2026-2027 EXECUTIVE"
        title="Our Team"
        titleSub="Leadership & Builders"
        description="The students leading AKCSE YG University of Manitoba"
      />

      <S.Container>
        {isLoading ? (
          <S.LoadingWrap>
            <LoadingSpinner />
          </S.LoadingWrap>
        ) : (
          <>
            <S.SectionHeader>
              <S.SectionTitle>Executive Board</S.SectionTitle>
              <S.SectionLine />
              <S.SectionCount>
                {getFormattedNumber(executives.length)} MEMBERS
              </S.SectionCount>
            </S.SectionHeader>

            <S.ExecutiveGrid>
              {executives.map((member) => (
                <OurTeamCard
                  key={member.id}
                  name={member.name}
                  role={member.position}
                  bio={member.bio}
                  imageSrc={member.image?.full}
                  imageAlt={`Portrait of ${member.name}`}
                />
              ))}
            </S.ExecutiveGrid>

            <S.DevelopmentSection>
              <S.SectionHeader>
                <S.SectionTitle>Development Team</S.SectionTitle>
                <S.SectionLine />
                <S.SectionCount>
                  {getFormattedNumber(developers.length)} BUILDERS
                </S.SectionCount>
              </S.SectionHeader>

              <S.DeveloperGrid>
                {developers.map((member) => (
                  <DeveloperCard
                    key={member.id}
                    name={member.name}
                    role={member.position}
                    imageSrc={member.image?.full}
                    imageAlt={`Photo of ${member.name}`}
                  />
                ))}
              </S.DeveloperGrid>
            </S.DevelopmentSection>
          </>
        )}

        <S.CTASection>
          <S.CTAContent>
            <S.CTATitle>Become part of our community</S.CTATitle>
            <S.CTADescription>
              Join AKCSE YG UofM to meet fellow students, make connections, and
              take part in events throughout the year.
            </S.CTADescription>
          </S.CTAContent>

          <S.CTAButton
            href="https://docs.google.com/forms/d/e/1FAIpQLSdDb6vLL-WMoAltOlxGfXJufiis3M5tA0bl4tKOdbm4DrjMgA/viewform?usp=dialog"
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

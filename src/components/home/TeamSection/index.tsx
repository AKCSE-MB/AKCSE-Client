'use client';

import { getTeam } from '@/apis/executives/mapper';
import { QUERY_KEYS } from '@/apis/queryKeys';
import CarouselNavButtons from '@/components/common/CarouselNavButton';
import SectionHeading from '@/components/common/SectionHeading';
import TeamMemberCard from '@/components/common/TeamMemberCard';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useRef, useState } from 'react';
import * as S from './index.styled';

export default function TeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const { data } = useQuery({
    queryKey: QUERY_KEYS.executives,
    queryFn: getTeam,
  });

  const teamMembers = [
    ...(data?.executives ?? []),
    ...(data?.developers ?? []),
  ];

  const updateNavState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth - 1;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max);
  }, []);

  const scrollPrev = () => {
    const el = scrollRef.current;
    if (!el) return;
    const gap =
      parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap) ||
      24;
    const cardWidth =
      (el.children[0] as HTMLElement)?.getBoundingClientRect().width || 0;
    el.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
  };

  const scrollNext = () => {
    const el = scrollRef.current;
    if (!el) return;
    const gap =
      parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap) ||
      24;
    const cardWidth =
      (el.children[0] as HTMLElement)?.getBoundingClientRect().width || 0;
    el.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
  };

  return (
    <S.Section>
      <S.Inner>
        <S.Header>
          <S.HeaderText>
            <SectionHeading
              title="Our Dedicated Team"
              barColor="gold"
              description="Leading the community with a passion for scientific advancement and professional growth."
              centeredOnMobile
            />
          </S.HeaderText>

          <CarouselNavButtons
            onPrev={scrollPrev}
            onNext={scrollNext}
            prevDisabled={atStart}
            nextDisabled={atEnd}
          />
        </S.Header>

        <S.ScrollContainer ref={scrollRef} onScroll={updateNavState}>
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              imageSrc={member.image}
              imageAlt={`Portrait of ${member.name}`}
            />
          ))}
        </S.ScrollContainer>
      </S.Inner>
    </S.Section>
  );
}

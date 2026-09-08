'use client';

import researchSource from '@/assets/data/research.json';
import CarouselNavButtons from '@/components/common/CarouselNavButton';
import ResearchCard from '@/components/common/ResearchCard';
import SectionHeading from '@/components/common/SectionHeading';
import { useCallback, useRef, useState } from 'react';
import * as S from './index.styled';

const CATEGORY_BADGE = {
  Life: { color: '#7f5700', bg: 'rgba(127, 87, 0, 0.05)' },
  Tech: { color: '#1c4684', bg: 'rgba(28, 70, 132, 0.05)' },
} as const;

const FEATURED_COUNT = 5;

export default function ResearchSection() {
  const featured = researchSource.slice(0, FEATURED_COUNT);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

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
        <S.SectionHeader>
          <S.HeaderLeft>
            <SectionHeading
              title="Research Insights"
              barColor="blue"
              description="Monthly publications on medicine and technology."
            />
          </S.HeaderLeft>

          <CarouselNavButtons
            onPrev={scrollPrev}
            onNext={scrollNext}
            prevDisabled={atStart}
            nextDisabled={atEnd}
          />
        </S.SectionHeader>

        <S.ScrollContainer ref={scrollRef} onScroll={updateNavState}>
          {featured.map((article) => {
            const badge =
              CATEGORY_BADGE[article.category as keyof typeof CATEGORY_BADGE];

            return (
              <ResearchCard
                key={article.id}
                placeholder={article.placeholder}
                category={article.category}
                badgeColor={badge.color}
                badgeBg={badge.bg}
                title={article.titleKo}
                subtitle={article.subtitle}
              />
            );
          })}
        </S.ScrollContainer>
      </S.Inner>
    </S.Section>
  );
}

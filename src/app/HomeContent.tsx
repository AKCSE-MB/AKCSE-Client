'use client';

import EventsSection from '@/components/home/EventsSection';
import HeroSection from '@/components/home/HeroSection';
import InfoSection from '@/components/home/InfoSection';
import NewsSection from '@/components/home/NewsSection';
import TeamSection from '@/components/home/TeamSection';
import * as S from './page.styled';

export default function HomeContent() {
  return (
    <S.PageWrapper>
      <HeroSection />
      <InfoSection />
      <EventsSection />
      <TeamSection />
      <NewsSection />
    </S.PageWrapper>
  );
}

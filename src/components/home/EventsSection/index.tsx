'use client';

import { getEvents } from '@/apis/events/mapper';
import { QUERY_KEYS } from '@/apis/queryKeys';
import IconCalendar from '@/assets/common/icons/IconCalendar.svg';
import IconClock from '@/assets/common/icons/IconClock.svg';
import IconLocation from '@/assets/common/icons/IconLocation.svg';
import SectionHeading from '@/components/common/SectionHeading';
import { getFormattedDate } from '@/utils/formatUtil';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import * as S from './index.styled';

export default function EventsSection() {
  const { data: events = [] } = useQuery({
    queryKey: QUERY_KEYS.events,
    queryFn: getEvents,
  });

  const now = Date.now();

  // 가장 가까운 예정 이벤트를 대표로 세우고, 없으면 가장 최근 이벤트를 보여준다.
  const upcoming = events
    .filter((event) => new Date(event.startDateTime).getTime() >= now)
    .sort(
      (a, b) =>
        new Date(a.startDateTime).getTime() -
        new Date(b.startDateTime).getTime(),
    );

  const past = events
    .filter((event) => new Date(event.startDateTime).getTime() < now)
    .sort(
      (a, b) =>
        new Date(b.startDateTime).getTime() -
        new Date(a.startDateTime).getTime(),
    );

  const featured = upcoming[0] ?? past[0];
  const sidebarEvents = past.slice(0, 2);

  return (
    <S.Section>
      <S.Inner>
        <S.SectionHeader>
          <S.TitleBlock>
            <SectionHeading title="Events Calendar" barColor="blue" />
          </S.TitleBlock>
          <S.ViewAllLink href="/events">View all events →</S.ViewAllLink>
        </S.SectionHeader>

        <S.Grid>
          {/* Featured Event */}
          {featured && (
            <S.FeaturedCard>
              <S.FeaturedImageWrap>
                {featured.image && (
                  <S.FeaturedImg src={featured.image} alt={featured.title} />
                )}
              </S.FeaturedImageWrap>

              <S.FeaturedContent>
                <S.FeaturedTop>
                  <S.EventBadge>Upcoming</S.EventBadge>
                  <S.FeaturedTitle>{featured.title}</S.FeaturedTitle>
                  <S.FeaturedDesc>{featured.description}</S.FeaturedDesc>
                  <S.MetaRow>
                    <S.MetaItem>
                      <S.MetaIcon aria-hidden="true">
                        <IconCalendar />
                      </S.MetaIcon>
                      {getFormattedDate(new Date(featured.startDateTime))}
                    </S.MetaItem>
                    <S.MetaItem>
                      <S.MetaIcon aria-hidden="true">
                        <IconLocation />
                      </S.MetaIcon>
                      University of Manitoba
                    </S.MetaItem>
                  </S.MetaRow>
                </S.FeaturedTop>

                <Link
                  href={`/events/${featured.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <S.CtaButton>Apply Now</S.CtaButton>
                </Link>
              </S.FeaturedContent>
            </S.FeaturedCard>
          )}

          {/* Past Events Sidebar */}
          <S.Sidebar>
            <S.SidebarCard>
              <S.SidebarTitle>
                <S.SidebarTitleIcon aria-hidden="true">
                  <IconClock />
                </S.SidebarTitleIcon>
                Past Events
              </S.SidebarTitle>

              <S.TimelineWrapper>
                <S.DashedLine />
                {sidebarEvents.map((event) => (
                  <Link
                    key={event.id}
                    href={`/events/${event.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <S.TimelineItem>
                      <S.TimelineDot />
                      <S.TimelineDate>
                        {getFormattedDate(new Date(event.startDateTime))}
                      </S.TimelineDate>
                      <S.TimelineEventTitle>{event.title}</S.TimelineEventTitle>
                    </S.TimelineItem>
                  </Link>
                ))}

                <S.SeminarCallout>
                  <S.SeminarLabel>Seminar Notice</S.SeminarLabel>
                  <S.SeminarText>
                    New research findings on Nanotechnology to be presented by
                    Dr. Kim next week.
                  </S.SeminarText>
                  <S.SeminarLink href="#">Read Briefing →</S.SeminarLink>
                </S.SeminarCallout>
              </S.TimelineWrapper>
            </S.SidebarCard>
          </S.Sidebar>
        </S.Grid>
      </S.Inner>
    </S.Section>
  );
}

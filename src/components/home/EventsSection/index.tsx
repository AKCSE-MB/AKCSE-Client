'use client';

import IconCalendar from '@/assets/common/icons/IconCalendar.svg';
import IconClock from '@/assets/common/icons/IconClock.svg';
import IconLocation from '@/assets/common/icons/IconLocation.svg';
import eventSource from '@/assets/data/events.json';
import SectionHeading from '@/components/common/SectionHeading';
import { classifyEvents } from '@/utils/event.utils';
import { getFormattedDate } from '@/utils/formatUtil';
import Link from 'next/link';
import * as S from './index.styled';

export default function EventsSection() {
  const { upcoming, past } = classifyEvents(eventSource.events);
  const featured = upcoming[0];
  const sidebarEvents = past.slice(0, 4);

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
                <S.FeaturedImg src={featured.image} alt={featured.title} />
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
                  <S.TimelineItem key={event.id}>
                    <S.TimelineDot />
                    <S.TimelineDate>
                      {getFormattedDate(new Date(event.startDateTime))}
                    </S.TimelineDate>
                    <S.TimelineEventTitle>{event.title}</S.TimelineEventTitle>
                  </S.TimelineItem>
                ))}
              </S.TimelineWrapper>
            </S.SidebarCard>
          </S.Sidebar>
        </S.Grid>
      </S.Inner>
    </S.Section>
  );
}

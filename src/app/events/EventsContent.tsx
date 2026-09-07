'use client';

import type { EventData } from '@/apis/events/mapper';
import { getEvents } from '@/apis/events/mapper';
import { QUERY_KEYS } from '@/apis/queryKeys';
import { MODAL_TYPES } from '@/components/Modal/GlobalModal';
import useModal from '@/components/Modal/GlobalModal/hooks/useModal';
import PageHero from '@/components/common/PageHero';
import { getFormattedDate } from '@/utils/formatUtil';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import * as S from './page.styled';

function classifyEvents(events: EventData[]) {
  const now = new Date();
  const upcoming = events
    .filter((e) => new Date(e.startDateTime) >= now)
    .sort(
      (a, b) =>
        new Date(a.startDateTime).getTime() -
        new Date(b.startDateTime).getTime(),
    );
  const past = events
    .filter((e) => new Date(e.startDateTime) < now)
    .sort(
      (a, b) =>
        new Date(b.startDateTime).getTime() -
        new Date(a.startDateTime).getTime(),
    );
  return { upcoming, past };
}

function groupByYear(events: EventData[]): Record<string, EventData[]> {
  return events.reduce(
    (acc, e) => {
      const year = new Date(e.startDateTime).getFullYear().toString();
      if (!acc[year]) acc[year] = [];
      acc[year].push(e);
      return acc;
    },
    {} as Record<string, EventData[]>,
  );
}

function EventCardItem({ event }: { event: EventData }) {
  const dateStr =
    event.dateDisplay || getFormattedDate(new Date(event.startDateTime));
  const isCKC = !!event.deadline;
  const badge = event.statusBadge as 'open' | 'early-bird' | undefined;

  return (
    <S.EventCard>
      <S.EventCardImage>
        <S.EventCardImgPattern>[ event photo ]</S.EventCardImgPattern>
        {badge && (
          <S.EventStatusBadge $variant={badge}>
            {badge === 'open' && <S.StatusDot />}
            {badge === 'open' ? 'Open for sign-up' : 'Early bird'}
          </S.EventStatusBadge>
        )}
      </S.EventCardImage>

      <S.EventCardBody>
        <S.TagRow>
          {event.tags?.map((tag) => (
            <S.CategoryTag key={tag} $type="category">
              {tag}
            </S.CategoryTag>
          ))}
          {event.featuredTags?.map((tag) => (
            <S.CategoryTag key={tag} $type="featured">
              {tag}
            </S.CategoryTag>
          ))}
        </S.TagRow>

        <S.CardTitle>{event.title}</S.CardTitle>
        <S.CardDescription>{event.description}</S.CardDescription>

        <S.DetailGrid>
          <S.DetailItem>
            <S.DetailLabel>Date</S.DetailLabel>
            <S.DetailValue>{dateStr}</S.DetailValue>
          </S.DetailItem>

          {isCKC ? (
            <S.DetailItem>
              <S.DetailLabel>Format</S.DetailLabel>
              <S.DetailValue>{event.location}</S.DetailValue>
            </S.DetailItem>
          ) : (
            <S.DetailItem>
              <S.DetailLabel>Time</S.DetailLabel>
              <S.DetailValue>{event.timeDisplay}</S.DetailValue>
            </S.DetailItem>
          )}

          {isCKC ? (
            <S.DetailItem>
              <S.DetailLabel>Deadline</S.DetailLabel>
              <S.DetailValue>{event.deadline}</S.DetailValue>
            </S.DetailItem>
          ) : (
            <S.DetailItem>
              <S.DetailLabel>Location</S.DetailLabel>
              <S.DetailValue>{event.location}</S.DetailValue>
            </S.DetailItem>
          )}

          <S.DetailItem />
        </S.DetailGrid>

        <S.CardButton onClick={() => window.open(event.rsvpLink, '_blank')}>
          Apply Now <span aria-hidden="true">→</span>
        </S.CardButton>
      </S.EventCardBody>
    </S.EventCard>
  );
}

function TimelineItemRow({
  event,
  isEven,
}: {
  event: EventData;
  isEven: boolean;
}) {
  const dateStr = getFormattedDate(new Date(event.startDateTime));
  const displayDate = event.isOrigin ? `${dateStr} • Origin` : dateStr;

  const { openModal, closeModal } = useModal();
  const photos = (event.images ?? []).filter(Boolean);

  const openLightbox = (
    e: React.MouseEvent<HTMLElement>,
    photoIndex: number,
  ) => {
    const { top, left, width, height } =
      e.currentTarget.getBoundingClientRect();

    openModal(MODAL_TYPES.imageLightbox, {
      images: photos,
      initialIndex: photoIndex,
      alt: event.title,
      originRect: { top, left, width, height },
      handleClose: () => closeModal(MODAL_TYPES.imageLightbox),
    });
  };

  return (
    <S.TimelineItem>
      <S.TimelineDot $isOrigin={!!event.isOrigin} />

      <S.TimelineTextCol $isEven={isEven}>
        <S.TimelineDate $isOrigin={!!event.isOrigin}>
          {displayDate}
        </S.TimelineDate>
        <S.TimelineTitle>{event.title}</S.TimelineTitle>
        <S.TimelineDesc>{event.description}</S.TimelineDesc>
      </S.TimelineTextCol>

      <S.TimelinePhotoCol $isEven={isEven}>
        <S.PhotoGrid $isEven={isEven}>
          {[0, 1, 2].map((i) => {
            const photo = photos[i];

            return (
              <S.PhotoBox
                key={i}
                type="button"
                $bgUrl={photo}
                $clickable={!!photo}
                disabled={!photo}
                aria-label={
                  photo ? `Enlarge ${event.title} photo ${i + 1}` : undefined
                }
                onClick={
                  photo
                    ? (e: React.MouseEvent<HTMLElement>) => openLightbox(e, i)
                    : undefined
                }
              />
            );
          })}
        </S.PhotoGrid>
      </S.TimelinePhotoCol>
    </S.TimelineItem>
  );
}

export default function EventsContent() {
  const { data: events = [] } = useQuery({
    queryKey: QUERY_KEYS.events,
    queryFn: getEvents,
  });

  const { upcoming, past } = classifyEvents(events);
  const pastTimeline = past.filter((e) => !e.excludeFromPastTimeline);
  const grouped = groupByYear(pastTimeline);
  const sortedYears = Object.keys(grouped).sort((a, b) => +b - +a);

  let timelineIndex = 0;

  return (
    <>
      <PageHero
        eyebrow="AKCSE UofM • 2026 Summer"
        title="Events"
        description="A year-round calendar of seminars, networking nights, workshops, and socials"
      >
        <S.HeroTabs>
          <S.HeroTabUpcoming href="#upcoming">
            <S.HeroTabDot />
            Upcoming
          </S.HeroTabUpcoming>
          <S.HeroTabPast href="#past">Past Events Timeline</S.HeroTabPast>
        </S.HeroTabs>
      </PageHero>

      <S.UpcomingSection id="upcoming">
        <S.SectionHeaderRow>
          <div>
            <S.SectionBadge>
              <S.SectionBadgeStar>✦</S.SectionBadgeStar> Upcoming
            </S.SectionBadge>
            <S.SectionTitle>What&apos;s coming up</S.SectionTitle>
            <S.SectionUnderline />
          </div>
        </S.SectionHeaderRow>

        <S.EventsGrid>
          {upcoming.map((event) => (
            <EventCardItem key={event.id} event={event} />
          ))}
        </S.EventsGrid>
      </S.UpcomingSection>

      <S.PastSection id="past">
        <S.PastInner>
          <S.SectionHeaderRow>
            <div>
              <S.PastBadge>
                <span>○</span> Past Events
              </S.PastBadge>
              <S.SectionTitle>A look back</S.SectionTitle>
              <S.PastSectionUnderline />
            </div>
          </S.SectionHeaderRow>

          <S.TimelineWrapper>
            <S.TimelineLine />

            {sortedYears.map((year) => (
              <React.Fragment key={year}>
                <S.YearMarkerRow>
                  <S.YearMarkerPill $isCurrent={year === '2026'}>
                    {year}
                  </S.YearMarkerPill>
                </S.YearMarkerRow>

                {grouped[year].map((event) => {
                  const idx = timelineIndex++;
                  const isEven = idx % 2 === 0;
                  return (
                    <TimelineItemRow
                      key={event.id}
                      event={event}
                      isEven={isEven}
                    />
                  );
                })}
              </React.Fragment>
            ))}
          </S.TimelineWrapper>
        </S.PastInner>
      </S.PastSection>
    </>
  );
}

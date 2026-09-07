'use client';

import PageHero from '@/components/common/PageHero';
import { useEvents } from '@/hooks/queries/useEvents';
import { EventResponse } from '@/types';
import { classifyEvents } from '@/utils/event.utils';
import { getFormattedDate, getFormattedTime } from '@/utils/formatUtil';
import React from 'react';
import * as S from './page.styled';

function groupByYear(events: EventResponse[]): Record<string, EventResponse[]> {
  return events.reduce(
    (acc, e) => {
      const year = new Date(e.startDateTime).getFullYear().toString();
      if (!acc[year]) acc[year] = [];
      acc[year].push(e);
      return acc;
    },
    {} as Record<string, EventResponse[]>,
  );
}

/** "Aug 21, 2026" for a same-day event, "Aug 21 – Aug 23, 2026" when it spans days. */
function getDateRange(startDateTime: string, endDateTime: string) {
  const start = new Date(startDateTime);
  const end = new Date(endDateTime);
  const startStr = getFormattedDate(start);

  if (start.toDateString() === end.toDateString()) return startStr;
  return `${startStr} – ${getFormattedDate(end)}`;
}

function getTimeRange(startDateTime: string, endDateTime: string) {
  return `${getFormattedTime(new Date(startDateTime))} – ${getFormattedTime(
    new Date(endDateTime),
  )}`;
}

function getFeeLabel(fee: number) {
  return fee > 0 ? `$${fee} CAD` : 'Free';
}

function EventCardItem({ event }: { event: EventResponse }) {
  const isSignUpOpen = new Date(event.signUpDeadline) >= new Date();

  return (
    <S.EventCard>
      <S.EventCardImage $bgUrl={event.image?.full}>
        {!event.image && (
          <S.EventCardImgPattern>[ event photo ]</S.EventCardImgPattern>
        )}
        {isSignUpOpen && (
          <S.EventStatusBadge $variant="open">
            <S.StatusDot />
            Open for sign-up
          </S.EventStatusBadge>
        )}
      </S.EventCardImage>

      <S.EventCardBody>
        <S.TagRow>
          <S.CategoryTag $type="category">
            {getFeeLabel(event.fee)}
          </S.CategoryTag>
        </S.TagRow>

        <S.CardTitle>{event.title}</S.CardTitle>
        <S.CardDescription>{event.description}</S.CardDescription>

        <S.DetailGrid>
          <S.DetailItem>
            <S.DetailLabel>Date</S.DetailLabel>
            <S.DetailValue>
              {getDateRange(event.startDateTime, event.endDateTime)}
            </S.DetailValue>
          </S.DetailItem>

          <S.DetailItem>
            <S.DetailLabel>Location</S.DetailLabel>
            <S.DetailValue>{event.location}</S.DetailValue>
          </S.DetailItem>

          <S.DetailItem>
            <S.DetailLabel>Time</S.DetailLabel>
            <S.DetailValue>
              {getTimeRange(event.startDateTime, event.endDateTime)}
            </S.DetailValue>
          </S.DetailItem>

          <S.DetailItem>
            <S.DetailLabel>Deadline</S.DetailLabel>
            <S.DetailValue>
              {getFormattedDate(new Date(event.signUpDeadline))}
            </S.DetailValue>
          </S.DetailItem>
        </S.DetailGrid>

        {event.rsvpLink && (
          <S.CardButton onClick={() => window.open(event.rsvpLink, '_blank')}>
            Apply Now <span aria-hidden="true">→</span>
          </S.CardButton>
        )}
      </S.EventCardBody>
    </S.EventCard>
  );
}

function TimelineItemRow({
  event,
  isEven,
  isOrigin,
}: {
  event: EventResponse;
  isEven: boolean;
  isOrigin: boolean;
}) {
  const dateStr = getFormattedDate(new Date(event.startDateTime));

  return (
    <S.TimelineItem>
      <S.TimelineDot $isOrigin={isOrigin} />

      <S.TimelineTextCol $isEven={isEven}>
        <S.TimelineDate $isOrigin={isOrigin}>{dateStr}</S.TimelineDate>
        <S.TimelineTitle>{event.title}</S.TimelineTitle>
        <S.TimelineDesc>{event.description}</S.TimelineDesc>
      </S.TimelineTextCol>

      <S.TimelinePhotoCol $isEven={isEven}>
        <S.PhotoGrid $isEven={isEven}>
          {[0, 1, 2].map((i) => (
            <S.PhotoBox
              key={i}
              $bgUrl={i === 0 ? event.image?.full : undefined}
            />
          ))}
        </S.PhotoGrid>
      </S.TimelinePhotoCol>
    </S.TimelineItem>
  );
}

export default function Events() {
  const { events } = useEvents();
  const { upcoming, past } = classifyEvents(events);
  const grouped = groupByYear(past);
  const sortedYears = Object.keys(grouped).sort((a, b) => +b - +a);
  const currentYear = new Date().getFullYear().toString();
  // `past` is sorted newest first, so the last entry is the earliest event.
  const originId = past.at(-1)?.id;

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
                  <S.YearMarkerPill $isCurrent={year === currentYear}>
                    {year}
                  </S.YearMarkerPill>
                </S.YearMarkerRow>

                {grouped[year].map((event) => {
                  const idx = timelineIndex++;
                  return (
                    <TimelineItemRow
                      key={event.id}
                      event={event}
                      isEven={idx % 2 === 0}
                      isOrigin={event.id === originId}
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

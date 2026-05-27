'use client';

import eventSource from '@/assets/data/events.json';
import CEventItem from '@/components/c-event-item';
import { classifyEvents } from '@/utils/event.utils';
import { getFormattedDate } from '@/utils/formatUtil';
import * as S from './page.styled';

export default function Events() {
  const { past } = classifyEvents(eventSource.events);

  return (
    <S.PageWrapper>
      <S.Title>Past Events</S.Title>
      <S.EventGrid>
        {past.map((event) => (
          <CEventItem
            title={event.title}
            date={getFormattedDate(new Date(event.startDateTime))}
            description={event.description}
            bgUrl={event.image}
            link={{
              text: 'Learn More -->',
              route: `/events/${event.id}`,
            }}
            key={event.id}
            isPast={true}
          />
        ))}
      </S.EventGrid>
    </S.PageWrapper>
  );
}

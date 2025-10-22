'use client';

import * as S from './page.styled';
import { getFormattedDate } from '@/utils/formatUtil';
import CEventItem from '@/components/c-event-item';
import eventSource from '@/assets/events.json';

export default function Events() {
  const pastEvents = eventSource.events;

  return (
    <S.MainContainer>
      <S.PastEvents>
        <S.Title>Past Events</S.Title>

        <S.EventList>
          {pastEvents.map((event) => (
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
        </S.EventList>
      </S.PastEvents>
    </S.MainContainer>
  );
}

'use client';

import * as S from './page.styled';
import { useEffect, useState } from 'react';
import { EventDetails } from '@dev-taeho/akcse_mb/lib/domain/event/dto/event.dto';
import { getPastEvents } from '@/apis/events';
import { getFormattedDate } from '@/utils/formatUtil';
import CEventItem from '@/components/c-event-item';
import CFooter from '@/components/c-footer';

export default function Events() {
  const [pastEvents, setPastEvents] = useState<EventDetails[]>([]);

  useEffect(() => {
    const fetchPastEvents = async () => {
      const events = await getPastEvents();
      if (events) {
        setPastEvents(events);
      }
    };

    fetchPastEvents();
  }, []);

  return (
    <S.MainContainer>
      <S.PastEvents>
        <S.Title>Past Events</S.Title>

        <S.EventList>
          {pastEvents.map((event) => (
            <CEventItem
              title={event.title}
              date={getFormattedDate(event.startDateTime)}
              description={event.description}
              bgUrl={event.imageUrl}
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

      <CFooter />
    </S.MainContainer>
  );
}

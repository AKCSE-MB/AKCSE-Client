'use client';

import * as S from './page.styled';
import CHeader from '@/components/c-header';
import { useEffect, useState } from 'react';
import { GetEventsOutput } from '@dev-taeho/akcse_mb/lib/domain/event/dto/event.dto';
import { getEvents } from '@/apis/events';
import { getFormattedDate } from '@/utils/formatUtil';
import CEventItem from '@/components/c-event-item';

export default function Events() {
  const [events, setEvents] = useState<GetEventsOutput[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      if (events) {
        setEvents(events);
      }
    };

    fetchEvents();
  }, []);

  return (
    <S.MainContainer>
      <CHeader />
      <S.Title>Upcoming Events</S.Title>

      <S.EventList>
        {events.map((event) => (
          <CEventItem
            title={event.title}
            date={getFormattedDate(event.startDateTime)}
            description={event.description}
            bgUrl={event.imageUrl}
            link={{
              text: 'Learn More',
              route: `/events/${event.id}`,
            }}
          ></CEventItem>
        ))}
      </S.EventList>
    </S.MainContainer>
  );
}

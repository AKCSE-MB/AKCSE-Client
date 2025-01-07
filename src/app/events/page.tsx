'use client';

import * as S from './page.styled';
import Header from '@/components/Header/MainHeader';
import { useEffect, useState } from 'react';
import { GetEventsOutput } from '@dev-taeho/akcse_mb/lib/domain/event/dto/event.dto';
import { EventDisplay, getEvents } from '@/apis/events';
import { useRouter } from 'next/navigation';

export default function Events() {
  const [events, setEvents] = useState<GetEventsOutput[]>([]);
  const { push } = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      if (events) {
        setEvents(events);
      }
    };

    fetchEvents();
  }, []);

  const formattedEvents = events.map((event) => ({
    ...event,
    startDate: new Date(event.startDateTime).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
    endDate: new Date(event.endDateTime).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
    startTime: new Date(event.startDateTime).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    }),
    endTime: new Date(event.endDateTime).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    }),
    rsvpDeadlineDate: new Date(event.signUpDeadline).toLocaleDateString(
      'en-US',
      {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      },
    ),
    rsvpDeadlineTime: new Date(event.signUpDeadline).toLocaleTimeString(
      'en-US',
      {
        hour: '2-digit',
        minute: '2-digit',
      },
    ),
  }));

  const handleEventClick = (event: EventDisplay) => {
    const eventData = encodeURIComponent(JSON.stringify(event));
    push(`/events/${event.id}?data=${eventData}`);
  };

  return (
    <>
      <S.MainContainer>
        <Header title="AKCSE MANITOBA" subTitle="Young Generations" BackBtn />
        <S.Title>Upcoming Events</S.Title>

        <S.EventList>
          {formattedEvents.map((event) => (
            <S.EventCard key={event.id} onClick={() => handleEventClick(event)}>
              <S.EventImage src={event.imageUrl} alt={event.title} />
              <S.EventInfo>
                <S.LocationAndDate>
                  {event.location} • {event.startDate}
                </S.LocationAndDate>
                <S.EventTitle>{event.title}</S.EventTitle>
              </S.EventInfo>
            </S.EventCard>
          ))}
        </S.EventList>
      </S.MainContainer>
    </>
  );
}

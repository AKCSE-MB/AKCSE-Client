'use client';

import * as S from './page.styled';
import CHeader from '@/components/c-header';
import { useEffect, useState } from 'react';
import { EventDetails } from '@dev-taeho/akcse_mb/lib/domain/event/dto/event.dto';
import { getEvents } from '@/apis/events';
import { getFormattedDate } from '@/utils/formatUtil';
import CEventItem from '@/components/c-event-item';
import DefaultButton from '@/components/Button/DefaultButton';
import CFooter from '@/components/c-footer';
import { useRouter } from 'next/navigation';

export default function Events() {
  const [upcoming, setUpcoming] = useState<EventDetails[]>([]);
  const [past, setPast] = useState<EventDetails[]>([]);
  const { push } = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      if (events) {
        setUpcoming(events.upcoming);
        setPast(events.past);
      }
    };

    fetchEvents();
  }, []);

  return (
    <S.MainContainer>
      <CHeader />
      <S.UpcomingEvents>
        <S.Title>Upcoming Events</S.Title>

        <S.EventList>
          {upcoming.map((event) => (
            <CEventItem
              title={event.title}
              date={getFormattedDate(event.startDateTime)}
              description={event.description}
              bgUrl={event.imageUrl}
              link={{
                text: 'Learn More -->',
                route: `/events/${event?.id}`,
              }}
              key={event.id}
              isPast={false}
            ></CEventItem>
          ))}
        </S.EventList>
      </S.UpcomingEvents>

      <S.PastEvents>
        <S.Title>Past Events</S.Title>

        <S.EventList>
          {past.slice(0, 3).map((event) => (
            <CEventItem
              title={event?.title}
              date={getFormattedDate(event?.startDateTime)}
              description={event?.description}
              bgUrl={event?.imageUrl}
              link={{
                text: 'Learn More -->',
                route: `/events/${event?.id}`,
              }}
              key={event.id}
              isPast={true}
            />
          ))}

          <DefaultButton
            onClick={() => push('/events/past')}
            btnText="View More"
          />
        </S.EventList>
      </S.PastEvents>

      <CFooter />
    </S.MainContainer>
  );
}

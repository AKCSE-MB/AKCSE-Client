'use client';

import * as S from './page.styled';
import { getFormattedDate } from '@/utils/formatUtil';
import CEventItem from '@/components/c-event-item';
import DefaultButton from '@/components/Button/DefaultButton';
import CFooter from '@/components/c-footer';
import { useRouter } from 'next/navigation';
import eventSource from '@/assets/events.json';

export default function Events() {
  const { push } = useRouter();
  const upcoming = eventSource.events;
  const past = eventSource.events;

  return (
    <S.MainContainer>
      <S.UpcomingEvents>
        <S.Title>Upcoming Events</S.Title>

        <S.EventList>
          {upcoming.map((event) => (
            <CEventItem
              title={event.title}
              date={getFormattedDate(new Date(event.startDateTime))}
              description={event.description}
              bgUrl={event.image}
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
              date={getFormattedDate(new Date(event?.startDateTime))}
              description={event?.description}
              bgUrl={event?.image}
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

'use client';

import eventSource from '@/assets/data/events.json';
import DefaultButton from '@/components/Button/DefaultButton';
import CEventItem from '@/components/c-event-item';
import { classifyEvents } from '@/utils/event.utils';
import { getFormattedDate } from '@/utils/formatUtil';
import { useRouter } from 'next/navigation';
import * as S from './page.styled';

export default function Events() {
  const { push } = useRouter();
  const { upcoming, past } = classifyEvents(eventSource.events);

  return (
    <S.PageWrapper>
      <S.Section>
        <S.Title>Upcoming Events</S.Title>

        <S.EventGrid>
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
            />
          ))}
        </S.EventGrid>
      </S.Section>

      <S.PastSection>
        <S.Title>Past Events</S.Title>
        <S.EventGrid>
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
        </S.EventGrid>
      </S.PastSection>
    </S.PageWrapper>
  );
}

'use client';

import * as S from './style';
import { getFormattedDate } from '@/utils/formatUtil';
import CEventItem from '@/components/c-event-item';
import DefaultButton from '@/components/Button/DefaultButton';
import { useRouter } from 'next/navigation';
import eventSource from '@/assets/data/events.json';
import { classifyEvents } from '@/utils/event.utils';

export default function Events() {
  const { push } = useRouter();
  const { upcoming, past } = classifyEvents(eventSource.events);

  return (
    <div className="mx-auto max-w-[1050px] px-4 py-10">
      <div>
        <div className={S.titleStyle}>Upcoming Events</div>

        <div className={S.eventContainerStyles}>
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
        </div>
      </div>

      <div className="py-16">
        <div className={S.titleStyle}>Past Events</div>
        <div className={S.eventContainerStyles}>
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
        </div>
      </div>
    </div>
  );
}

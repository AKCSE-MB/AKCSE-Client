'use client';

import * as S from './style';
import { getFormattedDate } from '@/utils/formatUtil';
import CEventItem from '@/components/c-event-item';
import eventSource from '@/assets/data/events.json';
import { classifyEvents } from '@/utils/event.utils';

export default function Events() {
  const { past } = classifyEvents(eventSource.events);

  return (
    <div className="mx-auto max-w-[1050px] px-4 py-10">
      <div>
        <div className={S.titleStyle}> Past Events</div>
        <div className={S.eventContainerStyles}>
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
        </div>
      </div>
    </div>
  );
}

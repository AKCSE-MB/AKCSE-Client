'use client';

import * as S from './page.styled';
import CHeader from '@/components/c-header';
import { useEffect, useState } from 'react';
import { GetEventsOutput } from '@dev-taeho/akcse_mb/lib/domain/event/dto/event.dto';
import { getUpcomingEvents, getPastEvents } from '@/apis/events';
import { getFormattedDate } from '@/utils/formatUtil';
import CEventItem from '@/components/c-event-item';
import DefaultButton from '@/components/Button/DefaultButton';
import CFooter from '@/components/c-footer';

export default function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState<GetEventsOutput[]>([]);
  const [pastEvents, setPastEvents] = useState<GetEventsOutput[]>([]);
  const [showMore, setShowMore] = useState<boolean>(false);

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      const events = await getUpcomingEvents();
      if (events) {
        setUpcomingEvents(events);
      }
    };

    const fetchPastEvents = async () => {
      const events = await getPastEvents();
      if (events) {
        setPastEvents(events);
      }
    };

    fetchUpcomingEvents();
    fetchPastEvents();
  }, []);

  const handleMoreButton = () => {
    setShowMore(true);
  };

  const handleLessButton = () => {
    setShowMore(false);
  };

  return (
    <S.MainContainer>
      <CHeader />
      <S.UpcomingEvents>
        <S.Title>Upcoming Events</S.Title>

        <S.EventList>
          {upcomingEvents.map((event) => (
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
      </S.UpcomingEvents>

      <S.PastEvents>
        <S.Title>Past Events</S.Title>

        {pastEvents.length > 0 && (
          <S.EventList>
            <CEventItem
              title={pastEvents[0]?.title}
              date={getFormattedDate(pastEvents[0]?.startDateTime)}
              description={pastEvents[0]?.description}
              bgUrl={pastEvents[0]?.imageUrl}
              link={{
                text: 'Learn More',
                route: `/events/${pastEvents[0]?.id}`,
              }}
            ></CEventItem>

            <CEventItem
              title={pastEvents[1]?.title}
              date={getFormattedDate(pastEvents[1]?.startDateTime)}
              description={pastEvents[1]?.description}
              bgUrl={pastEvents[1]?.imageUrl}
              link={{
                text: 'Learn More',
                route: `/events/${pastEvents[1]?.id}`,
              }}
            ></CEventItem>

            {!showMore && (
              <DefaultButton onClick={handleMoreButton}>
                View More
              </DefaultButton>
            )}

            {showMore &&
              pastEvents.slice(2).map((event) => (
                <S.morePastEvents>
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

                  <DefaultButton onClick={handleLessButton}>
                    View Less
                  </DefaultButton>
                </S.morePastEvents>
              ))}
          </S.EventList>
        )}
      </S.PastEvents>

      <CFooter />
    </S.MainContainer>
  );
}

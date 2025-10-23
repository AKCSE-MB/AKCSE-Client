'use client';

import * as S from './page.styled';
import { useParams } from 'next/navigation';
import { getFormattedDate, getFormattedTime } from '@/utils/formatUtil';
import DefaultButton from '@/components/Button/DefaultButton';
import eventSource from '@/assets/data/events.json';

export default function EventInfo() {
  const { id } = useParams();
  const events = eventSource.events;
  const event = events.at(Number(id));

  return (
    <S.Container>
      {event && (
        <S.EventWrapper>
          <S.Title>{event.title}</S.Title>
          <S.EventDurationContainer>
            {getFormattedDate(new Date(event.startDateTime))} @{' '}
            {getFormattedTime(new Date(event.startDateTime))}
            {/* <br/>To: {getFormattedDate(event.endDateTime)} @{' '}
              {getFormattedTime(event.endDateTime)} */}
          </S.EventDurationContainer>
          <S.EventContainer>
            {/* <S.LocationAndDate>
              {event.location} • {getFormattedDate(event.startDateTime)}
            </S.LocationAndDate> */}
            <S.EventDescription>{event.description}</S.EventDescription>
          </S.EventContainer>
          <S.EventImage src={event.image} alt={event.title} />
          <DefaultButton
            onClick={() => window.open(event.rsvpLink)}
            btnText="Register Now"
          />
        </S.EventWrapper>
      )}
    </S.Container>
  );
}

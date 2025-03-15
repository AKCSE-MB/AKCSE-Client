'use client';

import * as S from './page.styled';
import CHeader from '@/components/c-header';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getFormattedDate, getFormattedTime } from '@/utils/formatUtil';
import { getEventById } from '@/apis/events';
import { EventDetails } from '@dev-taeho/akcse_mb/lib/domain/event/dto/event.dto';
import DefaultButton from '@/components/Button/DefaultButton';
import CFooter from '@/components/c-footer';

export default function EventInfo() {
  const { id } = useParams();
  const [event, setEvent] = useState<EventDetails>();

  useEffect(() => {
    const fetchEvents = async () => {
      const event = await getEventById(Number(id));
      if (event) {
        setEvent(event);
      }
    };

    fetchEvents();
  }, [id]);

  return (
    <S.Container>
      <CHeader />

      {event && (
        <S.EventWrapper>
          <S.Title>{event.title}</S.Title>
          <S.EventDurationContainer>
            {getFormattedDate(event.startDateTime)} @{' '}
            {getFormattedTime(event.startDateTime)}
            {/* <br/>To: {getFormattedDate(event.endDateTime)} @{' '}
              {getFormattedTime(event.endDateTime)} */}
          </S.EventDurationContainer>
          <S.EventContainer>
            {/* <S.LocationAndDate>
              {event.location} • {getFormattedDate(event.startDateTime)}
            </S.LocationAndDate> */}
            <S.EventDescription>{event.description}</S.EventDescription>
            <S.EventFee>Fee: ${event.fee}</S.EventFee>
            <S.EventRSVPContainer>
              RSVP Deadline: {getFormattedDate(event.signUpDeadline)} @{' '}
              {getFormattedTime(event.signUpDeadline)}
            </S.EventRSVPContainer>
          </S.EventContainer>
          <S.EventImage src={event.imageUrl} alt={event.title} />
          <DefaultButton
            onClick={() => window.open(event.rsvpLink)}
            btnText="Register Now"
          />
        </S.EventWrapper>
      )}
      <CFooter />
    </S.Container>
  );
}

'use client';

import * as S from './page.styled';
import Header from '@/components/Header/MainHeader';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { EventDisplay } from '@/apis/events';

export default function EventDetails() {
  const [event, setEvent] = useState<EventDisplay>();

  const searchParams = useSearchParams();
  const eventData = searchParams.get('data');

  useEffect(() => {
    if (eventData) {
      setEvent(JSON.parse(decodeURIComponent(eventData)));
    }
  }, [eventData]);

  if (!event) {
    return (
      <>
        <S.MainContainer>
          <Header title="AKCSE MANITOBA" subTitle="Young Generations" BackBtn />

          <S.LoadingMsgContainer>
            <S.LoadingMsg>Loading...</S.LoadingMsg>
          </S.LoadingMsgContainer>
        </S.MainContainer>
      </>
    );
  } else {
    return (
      <>
        <S.MainContainer>
          <Header title="AKCSE MANITOBA" subTitle="Young Generations" BackBtn />
          <S.Title>{event.title}</S.Title>

          <S.EventWrapper>
            <S.EventImage src={event.imageUrl} alt={event.title} />
            <S.EventContainer>
              <S.LocationAndDate>
                {event.location} • {event.startDate}
              </S.LocationAndDate>
              <S.EventDescription>{event.description}</S.EventDescription>
              <S.EventDurationContainer>
                From: {event.startDate} @ {event.startTime}
                <br />
                To: {event.endDate} @ {event.endTime}
              </S.EventDurationContainer>
              <S.EventFee>Fee: ${event.fee}</S.EventFee>
              <S.EventRSVPContainer>
                RSVP Deadline: {event.rsvpDeadlineDate} @{' '}
                {event.rsvpDeadlineTime}
                <br />
                <S.EventRSVP href={event.rsvpLink} target="blank">
                  Sign Up
                </S.EventRSVP>
              </S.EventRSVPContainer>
            </S.EventContainer>
          </S.EventWrapper>
        </S.MainContainer>
      </>
    );
  }
}

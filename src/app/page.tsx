'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { useRouter } from 'next/navigation';
import { EventDetails } from '@dev-taeho/akcse_mb/lib/domain/event/dto/event.dto';
import { getEvents } from '@/apis/events';
import { getFormattedDate } from '@/utils/formatUtil';
import CHeader from '@/components/c-header';
import CFooter from '@/components/c-footer';
import CEventItem from '@/components/c-event-item';
import DefaultButton from '@/components/Button/DefaultButton';
import LOGO from '@/assets/common/logo/akcse_logo.svg';
import * as S from './page.styled';

export default function Home() {
  const { push } = useRouter();
  const [upcoming, setUpcoming] = useState<EventDetails[]>([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      if (events) {
        setUpcoming(events.upcoming);
      }
    };

    fetchEvents();
  }, []);

  return (
    <S.PageWrapper>
      <S.MainContent>
        <CHeader />
        <S.HeroContainer>
          <S.ImageItem $bgUrl="https://akcsebucket.s3.ca-central-1.amazonaws.com/AKCSE/HomePage/Header+image.png" />
          <S.OverlayTextContainer>
            <S.OverlayText>
              Welcome to AKCSE University of Manitoba
            </S.OverlayText>
          </S.OverlayTextContainer>
        </S.HeroContainer>

        <S.DescriptionContainer>
          <S.DescriptionHeader>What is AKCSE?</S.DescriptionHeader>

          <S.DescriptionWrapper>
            <S.DescriptionParagraph>
              Association of Korean-Canadian Scientists and Engineers (AKCSE) is
              a non-profit organization, established to promote the application
              of science and technology for the general welfare of the society.
            </S.DescriptionParagraph>

            <S.DescriptionParagraph>
              AKCSE also aims to foster international cooperation, especially
              between Canada and Korea, and provide aid to the second generation
              immigrants to succeed in the field of applied sciences.
            </S.DescriptionParagraph>

            <S.DescriptionParagraph>
              For instant updates on all these and many more, visit us on
              Instagram{' '}
              <S.Link href="https://www.instagram.com/akcse.mb.yg/">
                @akcse.mb.yg
              </S.Link>
              !
            </S.DescriptionParagraph>
          </S.DescriptionWrapper>

          <S.ImageContainer>
            <LOGO />
          </S.ImageContainer>
        </S.DescriptionContainer>

        <S.EventsContainer>
          <S.EventsWrapper>
            <S.EventsHeader>Events</S.EventsHeader>

            <S.DescriptionWrapper>
              <S.DescriptionParagraph>
                AKCSE UofM aims to help Korean students at University of
                Manitoba reach their full career potential. To do so, we will
                provide academic seminars, scholarship opportunities,
                professional networking events, and more!
              </S.DescriptionParagraph>
            </S.DescriptionWrapper>

            {upcoming.length > 0 ? (
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
                  />
                ))}
              </S.EventList>
            ) : (
              <></>
            )}

            <S.ButtonContainer>
              <DefaultButton
                onClick={() => push('/events')}
                bgColor={theme.colors.cherry}
                hoverColor={theme.colors.brown}
                textColor={theme.colors.white}
                btnText="View More"
              />
            </S.ButtonContainer>
          </S.EventsWrapper>
        </S.EventsContainer>
      </S.MainContent>
      <CFooter />
    </S.PageWrapper>
  );
}

'use client';

import * as S from './index.styled';

export default function InfoSection() {
  return (
    <S.Section id="info">
      <S.Inner>
        <S.CenterBlock>
          <S.Badge>
            <S.BadgeAccent aria-hidden="true">✦</S.BadgeAccent>
            Who We Are
          </S.Badge>

          <S.Headline>
            Building a community for Korean‑Canadian scientists and engineers at
            UofM
          </S.Headline>

          <S.GoldBar />

          <S.Subtitle>
            AKCSE welcomes everyone passionate about science, engineering, and
            shared discovery from undergrads to graduate researchers.
          </S.Subtitle>
        </S.CenterBlock>

        <S.CardGrid>
          <S.Card>
            <S.CardTitle>What is AKCSE?</S.CardTitle>
            <S.CardText>
              The{' '}
              <S.Strong>
                Association of Korean‑Canadian Scientists and Engineers
              </S.Strong>{' '}
              at UofM is a professional network dedicated to fostering{' '}
              <S.Strong>collaboration</S.Strong> and academic excellence.
            </S.CardText>
          </S.Card>

          <S.Card>
            <S.CardTitle>AKCSE&apos;s Goals</S.CardTitle>
            <S.CardText>
              We support <S.Strong>professional development</S.Strong>, bridge
              cultural connections, and provide resources for{' '}
              <S.Strong>research and career advancement</S.Strong> in STEM
              fields.
            </S.CardText>
          </S.Card>
        </S.CardGrid>
      </S.Inner>
    </S.Section>
  );
}

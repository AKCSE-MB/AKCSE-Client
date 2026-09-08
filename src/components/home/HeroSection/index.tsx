'use client';

import * as S from './index.styled';

const JOIN_US_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdDb6vLL-WMoAltOlxGfXJufiis3M5tA0bl4tKOdbm4DrjMgA/viewform?usp=dialog';
const HERO_IMAGE_URL = '/assets/images/header-image-hd.png';

export default function HeroSection() {
  return (
    <S.Section>
      <S.GradientOverlay aria-hidden="true" />
      <S.GridTexture aria-hidden="true" />

      <S.Inner>
        <S.GridWrapper>
          <S.TextColumn>
            <S.Eyebrow>
              <S.EyebrowDot />
              <S.EyebrowText>University of Manitoba Chapter</S.EyebrowText>
            </S.Eyebrow>

            <S.HeadlineH1>
              <S.HeadlineIntro>Welcome to</S.HeadlineIntro>
              <S.HeadlineMain>AKCSE YG</S.HeadlineMain>
              <S.HeadlineSub>University of Manitoba</S.HeadlineSub>
            </S.HeadlineH1>

            <S.DescriptionWrapper>
              <S.AccentBar />
              <S.DescriptionText>
                Empowering the next generation of Korean‑Canadian scientists and
                engineers through community, excellence, and shared innovation.
              </S.DescriptionText>
            </S.DescriptionWrapper>

            <S.ButtonGroup>
              <S.PrimaryButton
                href={JOIN_US_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Opportunities
                <span aria-hidden="true">→</span>
              </S.PrimaryButton>
              <S.SecondaryButton href="#info">Learn More</S.SecondaryButton>
            </S.ButtonGroup>
          </S.TextColumn>

          <S.ImageColumn>
            <S.ImageInner>
              <S.BrownCard aria-hidden="true" />
              <S.GoldDot aria-hidden="true" />
              <S.ImageCard>
                <S.HeroImg
                  src={HERO_IMAGE_URL}
                  alt="University of Manitoba Administration Building"
                />
                <S.CaptionPill>
                  <div>
                    <S.CaptionLabel>Est. Chapter</S.CaptionLabel>
                    <S.CaptionName>UofM, Winnipeg</S.CaptionName>
                  </div>
                  <S.CaptionAccent aria-hidden="true">✦</S.CaptionAccent>
                </S.CaptionPill>
              </S.ImageCard>
            </S.ImageInner>
          </S.ImageColumn>
        </S.GridWrapper>
      </S.Inner>
    </S.Section>
  );
}

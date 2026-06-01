import React from 'react';
import * as S from './index.styled';

interface Props {
  eyebrow: string;
  title: string;
  titleSub?: string;
  description: string;
  children?: React.ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  titleSub,
  description,
  children,
}: Props) {
  return (
    <S.Section>
      <S.GridOverlay />
      <S.GradientOverlay />
      <S.Inner>
        <S.Eyebrow>
          <S.EyebrowDot />
          <S.EyebrowText>{eyebrow}</S.EyebrowText>
        </S.Eyebrow>

        <S.TitleBlock>
          <S.Title>{title}</S.Title>
          {titleSub && <S.TitleSub>{titleSub}</S.TitleSub>}
        </S.TitleBlock>

        <S.DescriptionRow>
          <S.AccentBar />
          <S.Description>{description}</S.Description>
        </S.DescriptionRow>

        {children}
      </S.Inner>
    </S.Section>
  );
}

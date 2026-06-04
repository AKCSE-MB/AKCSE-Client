'use client';

import { useRouter } from 'next/navigation';
import * as S from './index.styled';

export default function ComingSoonPage() {
  const router = useRouter();

  return (
    <S.Page>
      <S.GridOverlay />
      <S.Content>
        <S.TopRow>
          <S.ClockBox>
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <circle
                cx="26"
                cy="26"
                r="22"
                stroke="#E8DDD0"
                strokeWidth="2.5"
              />
              <circle cx="26" cy="26" r="2.5" fill="#3D1F0F" />
              <line
                x1="26"
                y1="26"
                x2="26"
                y2="10"
                stroke="#3D1F0F"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <S.MinuteHand
                x1="26"
                y1="26"
                x2="36"
                y2="26"
                stroke="#F2A900"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </S.ClockBox>

          <S.UnderTag>
            <S.UnderDot />
            <S.UnderText>Under Construction</S.UnderText>
          </S.UnderTag>
        </S.TopRow>

        <S.Title>Coming Soon</S.Title>
        <S.Subtitle>We're building something here</S.Subtitle>

        <S.DescRow>
          <S.AccentBar />
          <S.Desc>
            This page is currently under construction. We're working hard to
            bring you something better. Check back soon, and in the meantime
            feel free to explore our other pages or get in touch.
          </S.Desc>
        </S.DescRow>

        <S.BtnRow>
          <S.BtnPrimary onClick={() => router.push('/')}>
            ← &nbsp;Back to Home
          </S.BtnPrimary>
        </S.BtnRow>
      </S.Content>
    </S.Page>
  );
}

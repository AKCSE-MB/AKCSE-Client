import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

export const HeroTabs = styled.div`
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const HeroTabUpcoming = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 9999px;
  background-color: #4f2c1d;
  color: white;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 4px 6px -1px rgba(79, 44, 29, 0.2);
  transition: filter 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    filter: brightness(1.1);
  }
`;

export const HeroTabDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #f2a900;
  flex-shrink: 0;
`;

export const HeroTabPast = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 9999px;
  border: 1px solid rgba(79, 44, 29, 0.2);
  color: #4f2c1d;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  background-color: transparent;
  transition:
    border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: rgba(79, 44, 29, 0.5);
    background-color: rgba(79, 44, 29, 0.05);
  }
`;

/* ─── Shared Section Header ─────────────────────────────────────────── */

export const SectionHeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 56px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 64px;
  }
`;

export const SectionBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 9999px;
  border: 1px solid rgba(79, 44, 29, 0.15);
  background-color: rgba(79, 44, 29, 0.05);
  color: #4f2c1d;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  margin-bottom: 20px;
`;

export const SectionBadgeStar = styled.span`
  color: #f2a900;
`;

export const SectionTitle = styled.h2`
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 32px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #141b2b;

  @media (min-width: 768px) {
    font-size: 44px;
  }
`;

export const SectionUnderline = styled.div`
  height: 6px;
  width: 80px;
  background-color: #f2a900;
  border-radius: 9999px;
  margin-top: 20px;
`;

/* ─── Upcoming Events ────────────────────────────────────────────────── */

export const UpcomingSection = styled.section`
  padding: 96px 24px;
  max-width: 1240px;
  margin: 0 auto;
  scroll-margin-top: 96px;

  @media (min-width: 768px) {
    padding: 112px 64px;
  }
`;

export const LoadingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px 24px;
`;

export const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
`;

export const EventCard = styled.article`
  background-color: #ffffff;
  border-radius: 24px;
  border: 1px solid rgba(229, 231, 235, 0.6);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.08);
  }
`;

export const EventCardImage = styled.div<{ $clickable?: boolean }>`
  position: relative;
  aspect-ratio: 16 / 10;
  background-color: #fbf6ec;
  overflow: hidden;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
`;

/* Separate layer so the hover zoom does not scale the status badge with it. */
export const EventCardImageLayer = styled.div<{ $bgUrl?: string }>`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  ${({ $bgUrl }) => ($bgUrl ? `background-image: url(${$bgUrl});` : '')}

  ${EventCardImage}:hover & {
    transform: scale(1.05);
  }
`;

export const EventCardImgPattern = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(79, 44, 29, 0.3);
  font-family: monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background-image: repeating-linear-gradient(
    45deg,
    rgba(79, 44, 29, 0.04) 0 12px,
    transparent 12px 24px
  );
`;

export const EventStatusBadge = styled.div<{ $variant: 'open' | 'early-bird' }>`
  position: absolute;
  top: 16px;
  left: 16px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 9999px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background-color: ${({ $variant }) =>
    $variant === 'early-bird' ? '#f2a900' : '#4f2c1d'};
  color: ${({ $variant }) =>
    $variant === 'early-bird' ? '#4f2c1d' : '#ffffff'};
`;

export const StatusDot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #f2a900;
  animation: ${pulse} 2s ease-in-out infinite;
`;

export const EventCardBody = styled.div`
  padding: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

export const TagRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const CategoryTag = styled.span<{ $type: 'category' | 'featured' }>`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background-color: ${({ $type }) =>
    $type === 'category' ? 'rgba(242,169,0,0.15)' : 'rgba(79,44,29,0.10)'};
  color: ${({ $type }) => ($type === 'category' ? '#7f5700' : '#4f2c1d')};
`;

export const CardTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 22px;
  line-height: 1.2;
  margin-bottom: 12px;
  color: #141b2b;

  @media (min-width: 768px) {
    font-size: 26px;
  }
`;

export const CardDescription = styled.p`
  font-size: 15px;
  line-height: 1.65;
  color: #434750;
  margin-bottom: 24px;
`;

export const DetailGrid = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  font-size: 13px;
  margin-bottom: 32px;
  padding-top: 20px;
  border-top: 1px solid rgba(229, 231, 235, 0.7);
`;

export const DetailItem = styled.div``;

export const DetailLabel = styled.dt`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: #737781;
  margin-bottom: 4px;
`;

export const DetailValue = styled.dd`
  font-weight: 700;
  color: #141b2b;
  margin: 0;
`;

export const CardButton = styled.button`
  width: 100%;
  background-color: #4f2c1d;
  color: white;
  padding: 14px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 6px -1px rgba(79, 44, 29, 0.15);
  transition:
    filter 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(0.98);
  }
`;

/* ─── Past Events Timeline ───────────────────────────────────────────── */

export const PastSection = styled.section`
  background-color: rgba(241, 243, 255, 0.5);
  padding: 96px 0;
  scroll-margin-top: 96px;

  @media (min-width: 768px) {
    padding: 112px 0;
  }
`;

export const PastInner = styled.div`
  padding: 0 24px;
  max-width: 1240px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 64px;
  }
`;

export const PastBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 9999px;
  border: 1px solid rgba(115, 119, 129, 0.25);
  background-color: rgba(115, 119, 129, 0.05);
  color: #737781;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  margin-bottom: 20px;
`;

export const PastSectionUnderline = styled.div`
  height: 6px;
  width: 80px;
  background-color: rgba(115, 119, 129, 0.4);
  border-radius: 9999px;
  margin-top: 20px;
`;

export const TimelineWrapper = styled.div`
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 14px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background-color: rgba(115, 119, 129, 0.3);
  pointer-events: none;

  @media (min-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const YearMarkerRow = styled.div`
  position: relative;
  margin-bottom: 48px;
  padding-left: 48px;

  @media (min-width: 768px) {
    padding-left: 0;
    display: flex;
    justify-content: center;
  }
`;

export const YearMarkerPill = styled.div<{ $isCurrent: boolean }>`
  display: inline-block;
  padding: 6px 16px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  position: relative;
  z-index: 1;
  color: white;
  background-color: ${({ $isCurrent }) =>
    $isCurrent ? '#4f2c1d' : 'rgba(115,119,129,0.7)'};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 48px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    margin-bottom: 64px;
  }
`;

export const TimelineDot = styled.div<{ $isOrigin: boolean }>`
  position: absolute;
  left: 6px;
  top: 12px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  z-index: 1;
  background-color: ${({ $isOrigin }) =>
    $isOrigin ? 'rgba(242,169,0,0.7)' : 'rgba(115,119,129,0.4)'};
  border: 4px solid #f1f3ff;
  box-shadow: 0 0 0 2px
    ${({ $isOrigin }) =>
      $isOrigin ? 'rgba(242,169,0,0.3)' : 'rgba(115,119,129,0.2)'};

  @media (min-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const TimelineTextCol = styled.div<{ $isEven: boolean }>`
  padding-left: 48px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    ${({ $isEven }) =>
      $isEven
        ? `text-align: right; padding-right: 48px; padding-left: 0;`
        : `padding-left: 48px; padding-right: 0; order: 2;`}
  }
`;

export const TimelinePhotoCol = styled.div<{ $isEven: boolean }>`
  padding-left: 48px;

  @media (min-width: 768px) {
    ${({ $isEven }) =>
      $isEven
        ? `padding-left: 48px;`
        : `text-align: right; padding-right: 48px; padding-left: 0; order: 1;`}
  }
`;

export const TimelineDate = styled.p<{ $isOrigin: boolean }>`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: ${({ $isOrigin }) => ($isOrigin ? '#f2a900' : '#737781')};
  margin-bottom: 8px;
`;

export const TimelineTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: rgba(20, 27, 43, 0.6);
  line-height: 1.35;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const TimelineDesc = styled.p`
  font-size: 13px;
  color: #737781;
  margin-top: 8px;
  line-height: 1.6;
`;

export const PhotoGrid = styled.div<{ $isEven: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  max-width: 384px;
  opacity: 0.7;
  transition: opacity 0.5s;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 768px) {
    ${({ $isEven }) => ($isEven ? 'margin-left: auto;' : '')}
  }
`;

export const PhotoBox = styled.div<{ $bgUrl?: string; $clickable?: boolean }>`
  aspect-ratio: 1;
  border-radius: 8px;
  background-color: #fbf6ec;
  filter: grayscale(1);
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  transition:
    filter 0.4s ease,
    transform 0.4s ease;

  ${({ $clickable }) =>
    $clickable &&
    `&:hover {
      filter: grayscale(0);
      transform: scale(1.05);
    }`}
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: 9px;
  color: rgba(79, 44, 29, 0.3);
  background-size: cover;
  background-position: center;
  background-image: ${({ $bgUrl }) =>
    $bgUrl
      ? `url(${$bgUrl})`
      : `repeating-linear-gradient(
    45deg,
    rgba(79, 44, 29, 0.04) 0 8px,
    transparent 8px 16px
  )`};
`;

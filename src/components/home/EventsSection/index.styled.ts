import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-color: rgba(241, 243, 255, 0.5);
  padding: 96px 0;

  @media (min-width: 768px) {
    padding: 128px 0;
  }
`;

export const Inner = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: 768px) {
    padding: 0 64px;
  }
`;

export const LoadingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 64px;
`;

export const TitleBlock = styled.div``;

export const SectionTitle = styled.h2`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export const TitleBar = styled.div`
  height: 6px;
  width: 80px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 999px;
`;

export const ViewAllLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(4px);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 1024px) {
    grid-template-columns: 8fr 4fr;
  }
`;

/* ── Featured Event ──────────────────────────────────────── */

export const FeaturedCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.outline};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.08),
    0 4px 10px -5px rgba(0, 0, 0, 0.04);
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.08);
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FeaturedImageWrap = styled.div`
  position: relative;
  min-height: 260px;
  overflow: hidden;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 50%;
    min-height: 400px;
  }
`;

export const FeaturedImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease-out;

  ${FeaturedCard}:hover & {
    transform: scale(1.1);
  }
`;

export const FeaturedContent = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  @media (min-width: 768px) {
    padding: 48px;
  }
`;

export const FeaturedTop = styled.div``;

export const EventBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background-color: rgba(254, 179, 22, 0.2);
  color: #6a4800;
  font-size: 11px;
  font-weight: 700;
  border-radius: 999px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

export const FeaturedTitle = styled.h3`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blue};
  line-height: 1.3;
  margin-bottom: 20px;
`;

export const FeaturedDesc = styled.p`
  font-size: 16px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  margin-bottom: 32px;
`;

export const MetaRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
`;

export const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.subtle};
`;

export const MetaIcon = styled.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: rgba(28, 70, 132, 0.7);
`;

export const CtaButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 700;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(28, 70, 132, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    filter: brightness(1.05);
    box-shadow: 0 8px 24px rgba(28, 70, 132, 0.25);
  }
`;

/* ── Sidebar ─────────────────────────────────────────────── */

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SidebarCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 32px;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.outline};
  height: 100%;
`;

export const SidebarTitle = styled.h4`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.blue};
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
`;

export const SidebarTitleIcon = styled.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.blue};
`;

export const TimelineWrapper = styled.div`
  position: relative;
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const DashedLine = styled.div`
  position: absolute;
  left: 3.5px;
  top: 8px;
  bottom: 24px;
  width: 2px;
  border-left: 2px dashed ${({ theme }) => theme.colors.outline};
`;

export const TimelineItem = styled.div`
  position: relative;
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: -32px;
  top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: rgba(115, 119, 129, 0.2);
  border: 2px solid ${({ theme }) => theme.colors.surface};
  transition:
    background-color 0.4s ease,
    transform 0.4s ease;

  ${TimelineItem}:hover & {
    background-color: ${({ theme }) => theme.colors.blue};
    transform: scale(1.25);
  }
`;

export const TimelineDate = styled.p`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.subtle};
  margin-bottom: 4px;
`;

export const TimelineEventTitle = styled.h5`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  line-height: 1.35;
  transition: color 0.4s ease;

  ${TimelineItem}:hover & {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const SeminarCallout = styled.div`
  margin-top: 48px;
  background-color: rgba(126, 84, 67, 0.05);
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(100, 61, 45, 0.1);
`;

export const SeminarLabel = styled.h4`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #643d2d;
  margin-bottom: 12px;
`;

export const SeminarText = styled.p`
  font-size: 14px;
  line-height: 1.625;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  opacity: 0.9;
  margin-bottom: 16px;
`;

export const SeminarLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 700;
  color: #643d2d;
  text-decoration: underline;
  cursor: pointer;
  transition: gap 0.3s ease;

  &:hover {
    gap: 8px;
  }
`;

import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.surfaceContainer};
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

export const SectionTitle = styled.h2`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onSurface};
  text-align: center;
  margin-bottom: 64px;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 24px;
  border: 1px solid rgba(229, 231, 235, 0.6);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.08);
  }
`;

/* ── Card labels (3 different colors) ─────────────────────── */

export const CardLabel = styled.h3<{ $color: string }>`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ $color }) => $color};
  margin-bottom: 40px;
`;

/* ── Monthly News ──────────────────────────────────────────── */

export const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1;
`;

export const Article = styled.article`
  cursor: pointer;
`;

export const ArticleDate = styled.time`
  display: block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.subtle};
`;

export const ArticleTitle = styled.h4`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
  line-height: 1.35;
  margin-top: 8px;
  transition: color 0.4s ease;

  ${Article}:hover & {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: rgba(229, 231, 235, 0.6);
`;

/* ── Scholarships ──────────────────────────────────────────── */

export const ScholarshipList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
`;

export const ScholarshipItem = styled.article`
  background-color: rgba(249, 249, 255, 0.5);
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(229, 231, 235, 0.6);
  transition: border-color 0.4s ease;

  &:hover {
    border-color: rgba(127, 87, 0, 0.2);
  }
`;

export const ScholarshipName = styled.h4`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: 8px;
`;

export const ScholarshipDesc = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  line-height: 1.625;
`;

export const ScholarshipBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 16px;
  font-size: 12px;
  font-weight: 700;
  color: #7f5700;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: gap 0.4s ease;

  &:hover {
    gap: 8px;
  }
`;

/* ── Upcoming Seminar ──────────────────────────────────────── */

export const SeminarTop = styled.div``;

export const SeminarBox = styled.div`
  background-color: rgba(126, 84, 67, 0.05);
  padding: 32px;
  border-radius: 16px;
  border-left: 4px solid #643d2d;
`;

export const SeminarTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: 12px;
  line-height: 1.4;
`;

export const SeminarSpeaker = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  font-style: italic;
`;

export const RsvpButton = styled.button`
  width: 100%;
  margin-top: 40px;
  padding: 16px;
  border: 2px solid #643d2d;
  color: #643d2d;
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #643d2d;
    color: ${({ theme }) => theme.colors.white};
  }
`;

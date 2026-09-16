import Link from 'next/link';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const HeaderSection = styled.section<{
  $gradient?: string;
  $bgColor?: string;
}>`
  position: relative;
  width: 100%;
  padding: 64px 24px 56px;
  background: ${({ $gradient, $bgColor }) =>
    $gradient || $bgColor || '#FBF6EC'};

  @media (min-width: 768px) {
    padding: 96px 64px 72px;
  }
`;

export const HeaderInner = styled.div`
  position: relative;
  max-width: 860px;
  margin: 0 auto;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.85;
  margin-bottom: 24px;

  &:hover {
    opacity: 1;
  }
`;

export const CategoryBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.95);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
`;

export const BadgeDot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gold};
`;

export const Title = styled.h1`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-weight: 800;
  font-size: 28px;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 17px;
  }
`;

export const Author = styled.p`
  font-size: 13px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.6);
`;

export const Body = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 56px 24px 96px;

  @media (min-width: 768px) {
    padding: 72px 24px 120px;
  }
`;

export const ArticleContent = styled.div`
  h2 {
    font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
    font-weight: 800;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
    margin: 56px 0 20px;
    padding-top: 24px;
    border-top: 1px solid ${({ theme }) => theme.colors.outline};

    &:first-child {
      margin-top: 0;
      padding-top: 0;
      border-top: none;
    }
  }

  h3 {
    font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.onSurface};
    margin: 36px 0 14px;
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
    margin-bottom: 18px;
  }

  p.equation {
    font-family: 'Courier New', monospace;
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.surfaceVariant};
    border-radius: 8px;
    padding: 14px 18px;
    margin: -4px 0 18px;
  }

  p.note {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.subtle};
    border-left: 3px solid ${({ theme }) => theme.colors.outline};
    padding-left: 14px;
  }

  ul.legend {
    list-style: none;
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.outline};
    border-radius: 12px;
    padding: 16px 20px;
    margin: 0 0 18px;
  }

  ul.legend li {
    font-size: 14px;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.onSurfaceVariant};

    strong {
      color: ${({ theme }) => theme.colors.onSurface};
      font-weight: 700;
    }
  }

  ol.references {
    padding-left: 20px;
    margin-bottom: 0;
  }

  ol.references li {
    font-size: 13px;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.subtle};
    margin-bottom: 10px;
  }

  a {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }

  img {
    width: 100%;
    border-radius: 12px;
    margin: 24px 0;
  }
`;

export const EmptyContent = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.subtle};
`;

export const FooterRow = styled.div`
  margin-top: 64px;
  padding-top: 32px;
  border-top: 1px solid ${({ theme }) => theme.colors.outline};
`;

export const BackButton = styled.button`
  padding: 12px 28px;
  border-radius: 9999px;
  border: 1px solid rgba(79, 44, 29, 0.2);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    border-color: rgba(79, 44, 29, 0.5);
    background-color: rgba(79, 44, 29, 0.05);
  }
`;

import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
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

export const CenterBlock = styled.div`
  text-align: center;
  margin-bottom: 64px;

  @media (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border-radius: 999px;
  border: 1px solid rgba(79, 44, 29, 0.15);
  background-color: rgba(79, 44, 29, 0.05);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  margin-bottom: 32px;
`;

export const BadgeAccent = styled.span`
  color: ${({ theme }) => theme.colors.gold};
`;

export const Headline = styled.h2`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-weight: 800;
  font-size: 32px;
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.onSurface};
  max-width: 768px;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 44px;
  }
`;

export const GoldBar = styled.div`
  height: 4px;
  width: 64px;
  background-color: ${({ theme }) => theme.colors.gold};
  border-radius: 999px;
  margin: 32px auto;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  max-width: 672px;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 896px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Card = styled.div`
  padding: 32px;
  border-radius: 16px;
  background-color: rgba(79, 44, 29, 0.03);
  border: 1px solid rgba(79, 44, 29, 0.1);
  transition:
    border-color 0.5s ease,
    background-color 0.5s ease;

  &:hover {
    border-color: rgba(79, 44, 29, 0.25);
    background-color: rgba(79, 44, 29, 0.05);
  }

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

export const CardTitle = styled.h3`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const CardText = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

export const Strong = styled.strong`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Section = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  padding: 64px 24px 80px;

  @media (min-width: 768px) {
    padding: 80px 64px;
  }
`;

export const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 48px;
`;

export const FilterPill = styled.button<{ $active: boolean }>`
  padding: 8px 20px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease,
    color 0.3s ease;

  ${({ $active, theme }) =>
    $active
      ? `
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        border: 1px solid ${theme.colors.primary};
        box-shadow: 0 4px 12px rgba(79, 44, 29, 0.15);
      `
      : `
        background-color: transparent;
        color: ${theme.colors.primary};
        border: 1px solid rgba(79, 44, 29, 0.2);

        &:hover {
          border-color: rgba(79, 44, 29, 0.5);
          background-color: rgba(79, 44, 29, 0.05);
        }
      `}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.article`
  cursor: pointer;
`;

export const ImageWrap = styled.div<{ $gradient?: string; $bgColor?: string }>`
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.colors.outline};
  background: ${({ $gradient, $bgColor }) =>
    $gradient || $bgColor || '#FBF6EC'};
`;

export const PlaceholderCenter = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 24px;
`;

export const PlaceholderLabel = styled.div<{ $dark: boolean }>`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  margin-bottom: 8px;
  color: ${({ $dark }) =>
    $dark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(79, 44, 29, 0.35)'};
`;

export const PlaceholderText = styled.div<{ $dark: boolean }>`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-weight: 800;
  font-size: 28px;
  line-height: 1.2;
  color: ${({ $dark }) =>
    $dark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(79, 44, 29, 0.4)'};
`;

export const CategoryBadge = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
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
`;

export const BadgeDot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gold};
`;

export const CardTitle = styled.h3`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: 4px;
  transition: color 0.4s ease;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CardSubtitle = styled.p`
  font-size: 15px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  margin-bottom: 12px;
`;

export const CardMeta = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.subtle};
`;

export const CardMetaLabel = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 24px;
  border: 1px solid ${({ theme }) => theme.colors.outline};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.surfaceVariant};
  margin-bottom: 16px;
`;

export const EmptyIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: rgba(79, 44, 29, 0.08);
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
`;

export const EmptyTitle = styled.h3`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-weight: 800;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

export const EmptyDescriptionRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  max-width: 420px;
  margin-bottom: 32px;
  text-align: left;
`;

export const EmptyAccentBar = styled.div`
  width: 4px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.gold};
`;

export const EmptyDescription = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

export const EmptyResetButton = styled.button`
  padding: 12px 28px;
  border-radius: 9999px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition:
    filter 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    filter: brightness(1.1);
    box-shadow: 0 4px 12px rgba(79, 44, 29, 0.15);
  }
`;

export const LoadMoreWrap = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: center;
`;

export const LoadMoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 28px;
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

export const CloseButton = styled(LoadMoreButton)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 28px;
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

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

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 80px;
`;

export const HeaderLeft = styled.div``;

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
  margin-bottom: 24px;
`;

export const SectionDesc = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

export const ScrollContainer = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 16px;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 78%;
  }

  @media (min-width: 640px) {
    & > * {
      width: 46%;
    }
  }

  @media (min-width: 1024px) {
    gap: 32px;

    & > * {
      width: calc((100% - 64px) / 3);
    }
  }
`;

export const ResearchCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  border: 1px solid rgba(229, 231, 235, 0.6);
  overflow: hidden;
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

export const ImageWrap = styled.div`
  position: relative;
  height: 240px;
  overflow: hidden;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 700ms ease-out;

  ${ResearchCard}:hover & {
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const BadgeWrap = styled.div`
  margin-bottom: 24px;
`;

export const CategoryBadge = styled.span<{ $color: string; $bg: string }>`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({ $color }) => $color};
  background-color: ${({ $bg }) => $bg};
  padding: 4px 12px;
  border-radius: 999px;
`;

export const CardTitle = styled.h3`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onSurface};
  line-height: 1.35;
  margin-bottom: 32px;
  transition: color 0.4s ease;

  ${ResearchCard}:hover & {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.outline};
  margin-top: auto;
`;

export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLabel = styled.span<{ $italic?: boolean }>`
  font-size: 12px;
  font-weight: 700;
  text-transform: ${({ $italic }) => ($italic ? 'none' : 'uppercase')};
  letter-spacing: ${({ $italic }) => ($italic ? '0' : '0.05em')};
  font-style: ${({ $italic }) => ($italic ? 'italic' : 'normal')};
  color: ${({ theme }) => theme.colors.subtle};
`;

export const FooterValue = styled.span<{ $italic?: boolean }>`
  font-size: 12px;
  font-weight: 700;
  font-style: ${({ $italic }) => ($italic ? 'italic' : 'normal')};
  color: ${({ theme }) => theme.colors.onSurface};
`;

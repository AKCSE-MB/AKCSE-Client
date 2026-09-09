import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  overflow-x: clip;
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

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 80px;
  }
`;

export const HeaderText = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

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

export const GoldBar = styled.div`
  height: 6px;
  width: 80px;
  background-color: ${({ theme }) => theme.colors.gold};
  border-radius: 999px;
  margin: 0 auto 24px;

  @media (min-width: 768px) {
    margin: 0 0 24px;
  }
`;

export const SectionDesc = styled.p`
  font-size: 18px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  max-width: 576px;
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

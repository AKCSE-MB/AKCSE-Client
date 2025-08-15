import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`;

export const ImageItem = styled.div<{ $bgUrl: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-image: url(${({ $bgUrl }) => $bgUrl});
`;

export const OverlayTextContainer = styled.div`
  position: absolute;
  width: 318px;
  height: 232px;
  margin-left: 24px;
  margin-top: 320px;
`;

export const OverlayText = styled.h1`
  font-weight: 600;
  text-align: left;
  font-size: 50px;
  padding-bottom: 48px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 58px;
`;

export const DescriptionContainer = styled.div`
  padding-top: 48px;
  width: 342px;
  height: 706px;
`;

export const DescriptionHeader = styled.h1`
  color: ${({ theme }) => theme.colors.light_blue};
  font-weight: 600;
  text-align: left;
  font-size: 36px;
  padding-bottom: 24px;
  width: 342px;
`;

export const DescriptionWrapper = styled.div`
  width: 342px;
  color: ${({ theme }) => theme.textColor};
  font-size: 16px;
  text-align: left;
  line-height: 24px;
  width: 342px;
`;

export const DescriptionParagraph = styled.p`
  padding-bottom: 24px;
`;

export const Link = styled.a`
  font-weight: bold;
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.light_blue};
  }
`;

export const ImageContainer = styled.div`
  padding-top: 24px;
  justify-content: center;
  width: 342px;
  height: 160px;
  border-radius: 24px;
`;

export const EventsContainer = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  background-color: ${({ theme }) => theme.colors.tangerin};
  width: 100%;
`;

export const EventsWrapper = styled.div`
  width: 342px;
  margin-left: 24px;
`;

export const EventsHeader = styled.h1`
  color: ${({ theme }) => theme.colors.cherry};
  font-weight: 600;
  text-align: left;
  font-size: 36px;
  padding-bottom: 24px;
  width: 342px;
`;

export const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  max-width: 600px;
  padding: 0 20px;
`;

export const OverlayText = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(24px, 4vw, 50px);
  margin: 0;
  line-height: 58px;
  font-weight: 600;
`;

export const DescriptionContainer = styled.div`
  padding: 50px 0;
  max-width: clamp(300px, 90vw, 1050px);
`;

export const DescriptionHeader = styled.h1`
  color: ${({ theme }) => theme.colors.light_blue};
  font-weight: 600;
  text-align: left;
  font-size: 36px;
  padding-bottom: 24px;
`;

export const DescriptionWrapper = styled.div`
  color: ${({ theme }) => theme.textColor};
  font-size: 16px;
  text-align: left;
  line-height: 24px;
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

export const ImageContainer = styled.div``;

export const EventsContainer = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  background-color: ${({ theme }) => theme.colors.tangerin};
  width: 100%;
`;

export const EventsWrapper = styled.div`
  margin: 0 auto;
  max-width: clamp(300px, 90vw, 1050px);
`;

export const EventsHeader = styled.h1`
  color: ${({ theme }) => theme.colors.cherry};
  font-weight: 600;
  text-align: left;
  font-size: 36px;
  padding-bottom: 24px;
`;

export const EventList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 24px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

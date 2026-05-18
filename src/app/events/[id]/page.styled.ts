import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  padding-top: 44px;
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const EventWrapper = styled.div`
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 80px;
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const EventDurationContainer = styled.div`
  color: ${({ theme }) => theme.colors.text.sub};
  font-size: 16px;
  padding-top: 12px;
`;

export const EventImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 16px;
  margin: 32px 0 32px 0;
`;

export const EventContainer = styled.div``;

export const LocationAndDate = styled.p`
  font-size: large;
  color: ${({ theme }) => theme.colors.primary.dark};
`;

export const EventDescription = styled.p`
  padding-top: 24px;
  line-height: 20px;
  text-align: left;
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const EventFee = styled.p`
  padding-top: 20px;
`;

export const EventRSVPContainer = styled.div`
  padding-top: 20px;
`;

export const EventRSVP = styled.a`
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.secondary.blue};
    cursor: pointer;
  }
`;

export const LoadingMsgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingMsg = styled.h1`
  font-weight: bold;
  font-size: x-large;
  color: ${({ theme }) => theme.colors.primary.dark};
`;

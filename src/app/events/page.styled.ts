import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  font-weight: 600;
  text-align: left;
  font-size: 36px;
  margin-bottom: 33px;
  color: #39170e;
`;

export const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const UpcomingEvents = styled.div`
  margin-top: 44px;
`;

export const PastEvents = styled.div`
  margin: 80px 0;
`;

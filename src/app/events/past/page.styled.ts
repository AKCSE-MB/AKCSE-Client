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
  color: #39170e;
  margin-bottom: 33px;
`;

export const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PastEvents = styled.div`
  padding: 44px 0 80px 0;
`;

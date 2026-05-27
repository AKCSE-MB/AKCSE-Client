import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  padding: 40px 16px;
`;

export const Section = styled.div``;

export const PastSection = styled.div`
  padding: 64px 0;
`;

export const Title = styled.div`
  text-align: left;
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 33px;
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const EventGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  padding: 64px 0;
`;

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: 768px) {
    padding: 0 64px;
  }
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
  color: ${({ theme }) => theme.colors.primary};
`;

export const EventGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

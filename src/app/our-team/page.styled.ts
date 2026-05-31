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

export const Title = styled.h1`
  margin-bottom: 33px;
  text-align: left;
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

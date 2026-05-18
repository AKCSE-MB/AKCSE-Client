import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  padding: 40px 16px;
`;

export const Title = styled.h1`
  margin-bottom: 33px;
  text-align: left;
  font-size: 36px;
  font-weight: 600;
  color: #39170e;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

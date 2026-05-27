import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    width: 320px;
  }
`;

export const Image = styled.img`
  aspect-ratio: 318 / 370;
  width: 100%;
  border-radius: 24px;
  object-fit: cover;
  box-shadow: 0 0 10px rgba(37, 37, 37, 0.15);
`;

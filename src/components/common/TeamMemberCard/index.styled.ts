import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(229, 231, 235, 0.6);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.08);
  }
`;

export const ImageWrapper = styled.div`
  height: 320px;
  width: 100%;
  overflow: hidden;
  background-color: #dce2f7;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    filter 1000ms ease-out,
    transform 1000ms ease-out;

  ${Card}:hover & {
    filter: grayscale(0%);
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  padding: 32px;
`;

export const Name = styled.h4`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onSurface};
  margin: 0 0 4px;
`;

export const Role = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blue};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 16px;
`;

export const Bio = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  line-height: 1.625;
  margin: 0;
`;

import styled from 'styled-components';

export const Container = styled.div<{ $isPast: boolean }>`
  width: 318px;
  height: 370px;
  border-radius: 24px;
  background-color: ${({ $isPast }) => ($isPast ? '#f2f2f2' : '#ffffff')};
  box-shadow: 0 0 10px #25252526;
`;

export const ImageContainer = styled.div`
  width: 286px;
  height: 152px;
  background-color: #8b8b8b;
  margin: 16px;
  position: relative;
  border-radius: 16px;
`;

export const ImageItem = styled.div<{ $bgUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${({ $bgUrl }) => $bgUrl});
  background-position: center;
  background-size: cover;
  border-radius: 16px;
`;

export const ContentContainer = styled.div``;

export const Content = styled.div`
  margin: 16px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const Date = styled.div`
  margin-top: 6px;
  font-size: 16px;
  color: #70655e;
`;

export const Description = styled.div`
  margin-top: 16px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LearnMoreLink = styled.div`
  color: #3365ab;
  font-size: 14px;
  margin-top: 16px;
  cursor: pointer;
`;

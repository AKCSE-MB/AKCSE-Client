import styled from 'styled-components';

export const Container = styled.div<{ $isPast: boolean }>`
  width: 318px;
  height: 370px;
  border-radius: 24px;
  background-color: ${({ $isPast }) => ($isPast ? '#f2f2f2' : '#ffffff')};
  box-shadow: 0 0 10px #25252526;

  @media screen and (max-width: 768px) {
    width: calc(100vw - 40px);
  }
`;

export const ImageContainer = styled.div`
  padding: 16px;
  position: relative;
  border-radius: 16px;
`;

export const ImageItem = styled.div<{ $bgUrl: string }>`
  width: 100%;
  height: 152px;
  background-image: url(${({ $bgUrl }) => $bgUrl});
  background-size: cover;
  border-radius: 16px;
`;

export const ContentContainer = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 16px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #39170e;
  line-height: 32px;
`;

export const Date = styled.div`
  margin-top: 6px;
  font-size: 16px;
  color: #70655e;
  line-height: 24px;
`;

export const Description = styled.div`
  margin-top: 16px;
  font-size: 14px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-height: 1.5;
  -webkit-line-clamp: 3;
  color: #39170e;
  text-align: left;
  line-height: 20px;
`;

export const LearnMoreLink = styled.div`
  color: #3365ab;
  font-size: 14px;
  padding-top: 16px;
  cursor: pointer;
`;

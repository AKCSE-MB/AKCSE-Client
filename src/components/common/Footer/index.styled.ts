import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 80px 160px 48px;

  @media (max-width: 768px) {
    padding: 32px 0px 32px;
  }
`;

export const TopSection = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-bottom: 32px;
  }
`;

export const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

export const OrgName = styled.h2`
  font-size: 32px;
  font-weight: 450;
  color: white;
  line-height: 1.4;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 200px;
`;

export const InfoTitle = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: white;
  margin-bottom: 4px;
  margin: 0;
`;

export const InfoText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin: 0;
`;

export const SnsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SnsItem = styled.div`
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 150ms ease;

  &:hover {
    opacity: 0.6;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 24px;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CopyrightText = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
`;

export const CreatedByText = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
`;

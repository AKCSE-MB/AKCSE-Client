import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  background-color: #f5f6fb;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 120px 24px 120px;

  @media (min-width: 768px) {
    padding: 120px 64px 140px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 56px;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  white-space: nowrap;

  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-size: 36px;
  font-weight: 800;
  line-height: 1.1;
  color: #15192d;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const SectionLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: #d7d9e2;
`;

export const SectionCount = styled.p`
  margin: 0;
  white-space: nowrap;

  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.32em;
  color: #7c808d;
`;

export const ExecutiveGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;

  @media (max-width: 768px) {
    max-width: 360px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const DevelopmentSection = styled.section`
  margin-top: 160px;
`;

export const DeveloperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CTASection = styled.section`
  margin-top: 160px;
  padding: 56px 64px;
  border-radius: 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  background:
    radial-gradient(
      circle at 82% 50%,
      rgba(255, 224, 150, 0.1),
      transparent 45%
    ),
    linear-gradient(90deg, #fffbf3 0%, #fff7e6 55%, #fff1d2 100%);

  border: 1px solid rgba(232, 190, 105, 0.35);

  @media (max-width: 768px) {
    padding: 40px 28px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CTAContent = styled.div`
  max-width: 620px;
`;

export const CTATitle = styled.h2`
  margin: 0 0 16px;

  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-size: 36px;
  font-weight: 800;
  line-height: 1.1;
  color: #5a2e1f;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const CTADescription = styled.p`
  margin: 0;

  font-size: 18px;
  line-height: 1.6;
  color: #4b4f5c;
`;

export const CTAButton = styled.a`
  min-width: 240px;
  height: 64px;
  padding: 0 34px;
  border: none;
  border-radius: 999px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  background-color: #5a2e1f;
  color: #ffffff;

  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 16px 28px rgba(90, 46, 31, 0.28);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 34px rgba(90, 46, 31, 0.34);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Arrow = styled.span`
  font-size: 20px;
  line-height: 1;
  color: #ffffff;
`;

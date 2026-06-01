import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #fbf6ec;
`;

export const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.04;
  background-image:
    linear-gradient(#4f2c1d 1px, transparent 1px),
    linear-gradient(90deg, #4f2c1d 1px, transparent 1px);
  background-size: 48px 48px;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(
      120% 80% at 10% 20%,
      rgba(242, 169, 0, 0.1) 0%,
      rgba(242, 169, 0, 0) 55%
    ),
    radial-gradient(
      80% 60% at 95% 90%,
      rgba(79, 44, 29, 0.1) 0%,
      rgba(79, 44, 29, 0) 60%
    );
`;

export const Inner = styled.div`
  position: relative;
  max-width: 1240px;
  margin: 0 auto;
  padding: 80px 24px 64px;

  @media (min-width: 768px) {
    padding: 112px 64px 80px;
  }
`;

export const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
`;

export const EyebrowDot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #f2a900;
  flex-shrink: 0;
`;

export const EyebrowText = styled.span`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #4f2c1d;
`;

export const TitleBlock = styled.div`
  margin-bottom: 32px;
`;

export const Title = styled.span`
  display: block;
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 56px;
  color: #4f2c1d;
  line-height: 0.9;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 88px;
  }
`;

export const TitleSub = styled.span`
  display: block;
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 24px;
  color: rgba(20, 27, 43, 0.7);
  line-height: 1.25;
  margin-top: 12px;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const DescriptionRow = styled.div`
  display: flex;
  gap: 20px;
  max-width: 560px;
`;

export const AccentBar = styled.div`
  width: 4px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 9999px;
  background-color: #f2a900;
`;

export const Description = styled.p`
  font-size: 15px;
  color: #434750;
  line-height: 1.7;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

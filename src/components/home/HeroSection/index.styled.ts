import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #fbf6ec;
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

export const GridTexture = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.04;
  pointer-events: none;
  background-image:
    linear-gradient(#4f2c1d 1px, transparent 1px),
    linear-gradient(90deg, #4f2c1d 1px, transparent 1px);
  background-size: 48px 48px;
`;

export const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1240px;
  margin: 0 auto;
  padding: 64px 24px 96px;
  min-height: 88vh;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    padding: 96px 64px 128px;
  }

  @media (min-width: 1024px) {
    padding: 128px 64px;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
  width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
    gap: 64px;
  }
`;

export const TextColumn = styled.div`
  order: 2;

  @media (min-width: 1024px) {
    order: 1;
    grid-column: span 7;
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
  background-color: ${({ theme }) => theme.colors.gold};
  flex-shrink: 0;
`;

export const EyebrowText = styled.span`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: ${({ theme }) => theme.colors.primary};
`;

export const HeadlineH1 = styled.h1`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-size: 1rem;
  letter-spacing: -0.025em;
  line-height: 0.95;
  margin-bottom: 32px;
`;

export const HeadlineIntro = styled.span`
  display: block;
  font-weight: 500;
  font-size: 28px;
  color: rgba(20, 27, 43, 0.65);
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export const HeadlineMain = styled.span`
  display: block;
  font-weight: 800;
  font-size: 64px;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 0.9;

  @media (min-width: 768px) {
    font-size: 88px;
  }
`;

export const HeadlineSub = styled.span`
  display: block;
  font-weight: 800;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-top: 12px;

  @media (min-width: 768px) {
    font-size: 44px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 48px;
  max-width: 576px;
`;

export const AccentBar = styled.div`
  flex-shrink: 0;
  width: 4px;
  align-self: stretch;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.gold};
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 700;
  border-radius: 999px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 10px 25px -3px rgba(79, 44, 29, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 20px 40px -5px rgba(79, 44, 29, 0.3);
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(0.98);
  }

  span {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  &:hover span {
    transform: translateX(4px);
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 16px 24px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 700;
  border-radius: 999px;
  border: 1px solid rgba(79, 44, 29, 0.2);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: rgba(79, 44, 29, 0.5);
    background-color: rgba(79, 44, 29, 0.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ImageColumn = styled.div`
  order: 1;

  @media (min-width: 1024px) {
    order: 2;
    grid-column: span 5;
  }
`;

export const ImageInner = styled.div`
  position: relative;
  max-width: 480px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: none;
    margin-left: auto;
    margin-right: 0;
  }
`;

export const BrownCard = styled.div`
  position: absolute;
  top: 24px;
  right: -8px;
  width: 100%;
  height: 100%;
  border-radius: 28px;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 0;

  @media (min-width: 768px) {
    top: 32px;
    right: -16px;
  }

  @media (min-width: 1024px) {
    top: 40px;
    right: -24px;
  }
`;

export const GoldDot = styled.div`
  position: absolute;
  top: -12px;
  left: -12px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gold};
  box-shadow: 0 8px 24px rgba(242, 169, 0, 0.3);
  z-index: 10;

  @media (min-width: 768px) {
    top: -16px;
    left: -16px;
    width: 80px;
    height: 80px;
  }
`;

export const ImageCard = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 28px;
  overflow: hidden;
  aspect-ratio: 3 / 4;
  background-color: ${({ theme }) => theme.colors.darkBg};
  box-shadow: 0 25px 50px -12px rgba(79, 44, 29, 0.15);
`;

export const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const CaptionPill = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  padding: 12px 16px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  z-index: 2;

  @media (min-width: 768px) {
    bottom: 24px;
    left: 24px;
    right: 24px;
    padding: 16px 20px;
  }
`;

export const CaptionLabel = styled.p`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(79, 44, 29, 0.7);
  margin-bottom: 2px;
`;

export const CaptionName = styled.p`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const CaptionAccent = styled.span`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 20px;
  flex-shrink: 0;
`;

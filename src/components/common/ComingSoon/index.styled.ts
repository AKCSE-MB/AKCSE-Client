import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Page = styled.div`
  flex: 1;
  background: #f5efe4;
  position: relative;
  overflow: hidden;
  padding: 60px 64px;

  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

export const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(100, 70, 30, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(100, 70, 30, 0.07) 1px, transparent 1px);
  background-size: 60px 60px;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 640px;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 48px;
`;

export const ClockBox = styled.div`
  width: 96px;
  height: 96px;
  background: #fff;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const MinuteHand = styled.line`
  transform-origin: 26px 26px;
  animation: ${spin} 6s linear infinite;
`;

export const UnderTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const UnderDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #f2a900;
  flex-shrink: 0;
`;

export const UnderText = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #4f2c1d;
`;

export const Title = styled.h1`
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: clamp(56px, 8vw, 88px);
  color: #3d1f0f;
  line-height: 0.92;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
`;

export const Subtitle = styled.h2`
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: clamp(20px, 3vw, 30px);
  color: #5a6070;
  letter-spacing: -0.01em;
  margin-bottom: 28px;
`;

export const DescRow = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 52px;
`;

export const AccentBar = styled.div`
  width: 3px;
  background: #f2a900;
  border-radius: 99px;
  flex-shrink: 0;
`;

export const Desc = styled.p`
  font-size: 15px;
  color: #5a6070;
  line-height: 1.7;
`;

export const BtnRow = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

export const BtnPrimary = styled.button`
  height: 54px;
  padding: 0 28px;
  background: #3d1f0f;
  color: #fff;
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  font-weight: 600;
  border-radius: 99px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: opacity 150ms ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const BtnSecondary = styled.button`
  height: 54px;
  padding: 0 28px;
  background: #fff;
  color: #3d1f0f;
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  font-weight: 600;
  border-radius: 99px;
  border: 0.5px solid rgba(61, 31, 15, 0.2);
  cursor: pointer;
  transition: background 150ms ease;

  &:hover {
    background: #f0e9de;
  }
`;

import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  border: 1px solid rgba(229, 231, 235, 0.6);
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.08);
  }
`;

export const ImageWrap = styled.div<{ $gradient?: string; $bgColor?: string }>`
  position: relative;
  height: 240px;
  overflow: hidden;
  background: ${({ $gradient, $bgColor }) =>
    $gradient || $bgColor || 'transparent'};
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 700ms ease-out;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const PlaceholderCenter = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 24px;
`;

export const PlaceholderLabel = styled.div<{ $dark: boolean }>`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  margin-bottom: 8px;
  color: ${({ $dark }) =>
    $dark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(79, 44, 29, 0.35)'};
`;

export const PlaceholderText = styled.div<{ $dark: boolean }>`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-weight: 800;
  font-size: 24px;
  line-height: 1.2;
  color: ${({ $dark }) =>
    $dark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(79, 44, 29, 0.4)'};
`;

export const Content = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const BadgeWrap = styled.div`
  margin-bottom: 24px;
`;

export const Badge = styled.span<{ $color: string; $bg: string }>`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({ $color }) => $color};
  background-color: ${({ $bg }) => $bg};
  padding: 4px 12px;
  border-radius: 999px;
`;

export const Title = styled.h3`
  font-family: var(--font-outfit), var(--Pretendard-Variable), sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onSurface};
  line-height: 1.35;
  margin-bottom: 8px;
  transition: color 0.4s ease;

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

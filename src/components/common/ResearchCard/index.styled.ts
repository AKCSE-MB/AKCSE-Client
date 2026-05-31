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

export const ImageWrap = styled.div`
  position: relative;
  height: 240px;
  overflow: hidden;
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
  margin-bottom: 32px;
  transition: color 0.4s ease;

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.outline};
  margin-top: auto;
`;

export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLabel = styled.span<{ $italic?: boolean }>`
  font-size: 12px;
  font-weight: 700;
  text-transform: ${({ $italic }) => ($italic ? 'none' : 'uppercase')};
  letter-spacing: ${({ $italic }) => ($italic ? '0' : '0.05em')};
  font-style: ${({ $italic }) => ($italic ? 'italic' : 'normal')};
  color: ${({ theme }) => theme.colors.subtle};
`;

export const FooterValue = styled.span<{ $italic?: boolean }>`
  font-size: 12px;
  font-weight: 700;
  font-style: ${({ $italic }) => ($italic ? 'italic' : 'normal')};
  color: ${({ theme }) => theme.colors.onSurface};
`;

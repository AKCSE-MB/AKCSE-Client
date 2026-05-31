import styled from 'styled-components';

export const NavButtons = styled.div<{ $hideOnMobile?: boolean }>`
  display: ${({ $hideOnMobile }) => ($hideOnMobile ? 'none' : 'flex')};
  gap: 12px;
  justify-content: center;
  flex-shrink: 0;

  @media (min-width: 768px) {
    display: flex;
    gap: 16px;
    justify-content: flex-end;
  }
`;

export const NavButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(79, 44, 29, 0.2);
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    stroke: currentColor;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    width: 56px;
    height: 56px;
  }
`;

import styled, { css } from 'styled-components';

export const Container = styled.div<{ $shadow?: boolean }>`
  width: 100%;
  height: 72px;
  top: 0;
  position: sticky;
  z-index: 2;
  background-color: white;
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  ${({ $shadow }) =>
    $shadow
      ? css`
          box-shadow: 0px 3px 5px rgba(37, 37, 37, 0.1);
        `
      : css`
          box-shadow: none;
        `}
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  height: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  position: fixed;
  top: 25px;
  left: 24px;
  z-index: 10;
`;

export const NavLinks = styled.div`
  margin-right: 32px;
  display: none;
  align-items: center;
  gap: 32px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavButton = styled.button`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 16px;
  font-weight: 500;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    opacity: 0.7;
  }
`;

export const HamburgerContainer = styled.div`
  width: 17px;
  height: 17px;
  margin-right: 24px;

  @media (min-width: 768px) {
    display: none;
  }
`;

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
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  height: 48px;
  img {
    height: 100%;
    width: auto;
  }
`;

export const NavLinks = styled.div`
  display: none;
  align-items: center;
  gap: 32px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavButton = styled.button`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 16px;
  font-weight: ${({ $active }) => ($active ? 500 : 300)};
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary.tangerin};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.tangerin};
    opacity: 1;
    &::after {
      transform: scaleX(1);
    }
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

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`;

export const CtaButton = styled.button`
  display: none;
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 0.85;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

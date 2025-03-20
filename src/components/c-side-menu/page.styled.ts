import styled, { css, keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Container = styled.div<{ open: boolean }>`
  width: 100%;
  max-width: 390px;
  height: 100vh;
  background-color: #ffff;
  position: fixed;
  overflow: hidden;
  ${({ open }) => sideBarSettings(open)}

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const sideBarSettings = (visible: boolean) => css`
  visibility: ${visible ? 'visible' : 'hidden'};
  z-index: 15;
  animation: ${visible ? fadeIn : fadeOut} 0.4s ease-in-out;
  transition: visibility 0.4s ease-in-out;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 44px;
  height: 100%;
  overflow: hidden;
`;

export const MenuItem = styled.div`
  height: 29px;
  padding: 0 48px;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 44px;
  color: ${({ theme }) => theme.colors.cherry};
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

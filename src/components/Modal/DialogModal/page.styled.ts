'use client';

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

const modalSettings = ($visible: boolean) => css`
  visibility: ${$visible ? 'visible' : 'hidden'};
  z-index: 15;
  animation: ${$visible ? fadeIn : fadeOut} 0.25s ease-in-out;
  transition: visibility 0.25s ease-in-out;
`;

export const Overlay = styled.div<{
  $visible: boolean;
  zIndex?: number;
}>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: env(safe-area-inset-bottom);
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);

  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ zIndex }) => zIndex ?? '30'};

  ${({ $visible }) => modalSettings($visible)}
`;

export const Container = styled.div<{ $visible: boolean }>`
  max-width: 336px;
  height: 321px;
  width: 100%;
  border-radius: 16px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ $visible }) => modalSettings($visible)}

  @media screen and (max-width: 320px) {
    max-width: calc(100vw - 40px);
  }
`;

export const TextContainer = styled.div``;

export const Title = styled.div`
  padding: 24px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  white-space: pre-line;
  word-break: keep-all;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MessageContainer = styled.div`
  padding: 16px 0px;
  width: 250px;
`;

export const Message = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;

export const CloseButtonContainer = styled.button`
  position: absolute;
  top: 16px;
  right: 8px;
  font-size: 17px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  height: 48px;
  font-size: 14px;
  font-weight: 400;
  background-color: yellow;
  border-radius: 10px;
`;

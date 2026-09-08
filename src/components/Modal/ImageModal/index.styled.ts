'use client';

import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const modalSettings = ($visible: boolean) => css`
  visibility: ${$visible ? 'visible' : 'hidden'};
  opacity: ${$visible ? 1 : 0};
  animation: ${$visible ? fadeIn : fadeOut} 0.25s ease-in-out;
  transition:
    opacity 0.25s ease-in-out,
    visibility 0.25s ease-in-out;
`;

export const Overlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: env(safe-area-inset-bottom);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 16px;
  background-color: rgba(0, 0, 0, 0.88);
  z-index: 30;

  ${({ $visible }) => modalSettings($visible)}

  @media (min-width: 768px) {
    padding: 80px 88px;
  }
`;

export const Stage = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 100%;
  max-height: 100%;
  margin: 0;
`;

export const Image = styled.img<{ $visible: boolean }>`
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.6);
  animation: ${({ $visible }) => ($visible ? fadeIn : fadeOut)} 0.25s
    ease-in-out;

  @media (min-width: 768px) {
    max-height: 76vh;
  }
`;

export const Caption = styled.figcaption`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  word-break: keep-all;
`;

export const Counter = styled.p`
  font-family: monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
`;

const iconButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.22);
    border-color: rgba(255, 255, 255, 0.5);
  }

  &:active {
    transform: scale(0.94);
  }
`;

export const CloseButton = styled.button`
  ${iconButton}
  position: absolute;
  top: 16px;
  right: 16px;
  width: 44px;
  height: 44px;

  /* close.svg ships a hard-coded dark fill — override it so it reads on the overlay. */
  svg rect {
    fill: currentColor;
  }

  @media (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`;

export const NavButton = styled.button<{ $side: 'prev' | 'next' }>`
  ${iconButton}
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => ($side === 'prev' ? 'left: 8px;' : 'right: 8px;')}
  width: 44px;
  height: 44px;

  svg {
    stroke: currentColor;
  }

  &:active {
    transform: translateY(-50%) scale(0.94);
  }

  @media (min-width: 768px) {
    width: 56px;
    height: 56px;
    ${({ $side }) => ($side === 'prev' ? 'left: 24px;' : 'right: 24px;')}
  }
`;

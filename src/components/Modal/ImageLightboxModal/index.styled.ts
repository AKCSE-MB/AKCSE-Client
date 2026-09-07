import styled, { css, keyframes } from 'styled-components';

const imageFadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Backdrop = styled.div<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: rgba(20, 27, 43, 0.88);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 240ms ease-out;
  cursor: zoom-out;

  @media (max-width: 767px) {
    padding: 16px;
  }
`;

export const Figure = styled.figure`
  position: relative;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform-origin: center center;
  will-change: transform, filter;
  cursor: default;
`;

export const Image = styled.img`
  display: block;
  max-width: min(1100px, 92vw);
  max-height: 86vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
  animation: ${imageFadeIn} 160ms ease-out;

  @media (max-width: 767px) {
    max-width: 100%;
    max-height: 78vh;
    border-radius: 8px;
  }
`;

/**
 * Controls never move on hover — a target that slides away as the pointer
 * lands on it is harder to hit. Only the fill changes.
 */
const controlButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition:
    background-color 160ms ease,
    color 160ms ease;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.gold};
    outline-offset: 3px;
  }
`;

export const CloseButton = styled.button`
  ${controlButton};
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(4px);
  z-index: 1;

  &:hover {
    background-color: rgba(255, 255, 255, 0.22);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 767px) {
    top: 12px;
    right: 12px;
  }
`;

/**
 * Sits on the image rather than at the viewport edge, so the controls stay
 * attached to the photo no matter how narrow or tall it renders.
 * Fades in only once the open animation has finished.
 */
export const Capsule = styled.div<{ $visible: boolean }>`
  position: absolute;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 4px;
  border-radius: 999px;
  background-color: rgba(20, 27, 43, 0.62);
  backdrop-filter: blur(10px) saturate(1.3);
  box-shadow:
    0 3px 16px rgba(0, 0, 0, 0.34),
    inset 0 0 0 1px rgba(255, 255, 255, 0.14);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 200ms ease-out;
  /* Hold off until the open animation has landed, so the controls don't
     scale in alongside the image; leave on the way out. */
  transition-delay: ${({ $visible }) => ($visible ? '300ms' : '0ms')};

  @media (max-width: 767px) {
    bottom: 12px;
    height: 44px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const CapsuleButton = styled.button`
  ${controlButton};
  width: 34px;
  height: 32px;
  border-radius: 999px;
  background-color: transparent;

  &:hover:not(:disabled) {
    background-color: rgba(255, 255, 255, 0.16);
  }

  &:active:not(:disabled) {
    background-color: rgba(255, 255, 255, 0.26);
  }

  &:disabled {
    color: rgba(255, 255, 255, 0.26);
    cursor: default;
  }

  @media (max-width: 767px) {
    width: 44px;
    height: 38px;
  }
`;

export const Counter = styled.span`
  min-width: 54px;
  padding: 0 10px;
  text-align: center;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.9);
  border-left: 1px solid rgba(255, 255, 255, 0.16);
  border-right: 1px solid rgba(255, 255, 255, 0.16);
  user-select: none;
`;

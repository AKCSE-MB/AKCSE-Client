import styled, { css } from 'styled-components';

export const Container = styled.div<{ $open?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  @media (min-width: 768px) {
    display: none;
  }

  ${({ $open }) =>
    $open
      ? css`
          opacity: 1;
          visibility: visible;
          z-index: 50;
        `
      : css`
          opacity: 0;
          visibility: hidden;
          z-index: -10;
        `}
`;

export const MenuList = styled.div`
  max-width: 1200px;
  margin: 44px auto 0;
  display: flex;
  flex-direction: column;
  gap: 44px;
  padding: 0 24px;
`;

export const MenuItem = styled.button`
  color: ${({ theme }) => theme.colors.cherry};
  display: flex;
  height: 29px;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 500;
`;

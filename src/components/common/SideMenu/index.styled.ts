import styled, { createGlobalStyle } from 'styled-components';

export const Fonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800&display=swap');
`;

export const Container = styled.div<{ $open?: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 50;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: translateY(${({ $open }) => ($open ? '0' : '-12px')});
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition:
    opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 24px 22px 0;

  @supports (padding: max(0px)) {
    padding-top: max(20px, env(safe-area-inset-top));
  }
`;

export const CloseButton = styled.button`
  width: 44px;
  height: 44px;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
`;

export const MenuList = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;
`;

export const MenuItem = styled.button<{
  $active?: boolean;
  $open?: boolean;
  $index: number;
}>`
  display: block;
  width: fit-content;
  font-family: 'Outfit', sans-serif;
  font-size: 31px;
  line-height: 1.1;
  padding: 11px 0;
  font-weight: 600;
  white-space: nowrap;
  letter-spacing: -0.01em;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-style: ${({ $active }) => ($active ? 'italic' : 'normal')};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : '#141B2B'};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: translateY(${({ $open }) => ($open ? '0' : '10px')});
  transition:
    opacity 0.5s ease ${({ $index }) => 0.1 + $index * 0.06}s,
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)
      ${({ $index }) => 0.1 + $index * 0.06}s,
    color 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const BottomBar = styled.div`
  display: flex;
  gap: 12px;
  padding: 32px 28px 64px;
`;

export const SnsButton = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 150ms ease;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 22px;
    height: 22px;
    color: white;
    path {
      fill: white;
    }
  }
`;

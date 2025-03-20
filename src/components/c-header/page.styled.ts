import styled from 'styled-components';

export const Container = styled.div<{ $shadow: boolean }>`
  max-width: 390px;
  width: 100%;
  height: 72px;
  top: 0px;
  padding-top: 31.5px;
  position: sticky;
  z-index: 2;
  background: #ffff;
  box-shadow: ${({ $shadow }) => ($shadow ? '0px 3px 5px #2525251a' : 'none')};

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const HamburgerContainer = styled.div`
  width: 17px;
  height: 17px;
`;

export const LogoContainer = styled.div`
  padding-left: 36px;
`;

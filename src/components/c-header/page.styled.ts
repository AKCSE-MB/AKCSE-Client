import styled from 'styled-components';

export const Container = styled.div`
  max-width: 390px;
  width: 100%;
  height: 72px;
  position: fixed;
  top: 0px;
  padding-top: 31.5px;
  z-index: 1;
  //TODO: need to update colour using theme
  //https://github.com/AKCSE-MB/AKCSE-Client/pull/26
  background: #ffff;
  box-shadow: 0px 3px 5px #2525251a;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const LogoContainer = styled.div`
  padding-left: 36px;
`;

export const SideMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 0 5px ${({ theme }) => theme.colors.gray};
  z-index: 10;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const MenuItem = styled.div`
  padding: 10px 0;
  cursor: pointer;
  font-size: medium;

  &:hover {
    color: ${({ theme }) => theme.colors.brown};
  }
`;

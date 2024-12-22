import styled from 'styled-components';

export const MainContent = styled.main`
  padding: 40px 40px 80px;
  background-color: aliceblue;
  min-height: 100vh;

  & button:nth-child(1) {
    margin-top: 36px;
  }
`;

export const NavContainer = styled.div`
  position: fixed;
  display: flex;
  max-width: 360px;
  width: 100%;
  bottom: 0;

  & > button {
    flex-grow: 1;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
`;

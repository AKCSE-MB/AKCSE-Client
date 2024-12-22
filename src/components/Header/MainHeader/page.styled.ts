import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  display: contents;
  height: 56px;
  width: 360px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 56px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const EmptySpace = styled.div`
  width: 56px;
`;

export const Title = styled.div`
  font-family: 'Pretendard', sans-serif;
  text-align: center;

  h1,
  h2 {
    color: #222524;
  }

  h1 {
    font-weight: bolder;
    font-size: large;
  }

  h2 {
    font-weight: normal;
    font-size: small;
  }
`;

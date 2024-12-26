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
  height: 48px;
  width: 48px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const EmptySpace = styled.div`
  padding-top: 40px;
`;

export const Title = styled.div`
  padding-top: 40px;
  padding-right: 40px;
  padding-left: 40px;
  font-family: 'Pretendard', serif;
  text-align: center;

  h1,
  h2 {
    color: #222524;
  }

  h1 {
    font-weight: bolder;
    font-size: x-large;
  }

  h2 {
    font-weight: normal;
    font-size: medium;
  }
`;

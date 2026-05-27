import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 15px;
  text-align: center;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary.main};
  position: relative;
  width: 100%;
  bottom: 0;
  z-index: 1;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const LinkContainer = styled.div`
  padding: 32px 38px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LinkItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  position: relative;
  display: flex;
  color: white;
  width: fit-content;
  flex-direction: column;

  cursor: pointer;

  &:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 0px;
    height: 20px;
    margin: 0 10px;
    vertical-align: middle;
  }
`;

export const SnsContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SnsItem = styled.div`
  margin-right: 13px;
  cursor: pointer;
  &:last-child {
    margin-right: 0px;
  }
  svg {
    width: 32px;
    height: 32px;
  }
`;

export const CopyrightText = styled.p`
  font-size: 10px;
  color: white;
  line-height: 24px;
`;

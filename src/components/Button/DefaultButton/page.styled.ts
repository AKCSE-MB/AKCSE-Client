import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 22px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  background-color:   ${({ theme }) => theme.colors.tangerin};
  width: 171px;
  height: 44px;
  color: black;
  font-weight: 450;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brown};
  }

  &:enabled:active {
    opacity: 0.4;
  }

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;

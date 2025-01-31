import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #F3B744;
  width: fit-content;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brown};
  }

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;

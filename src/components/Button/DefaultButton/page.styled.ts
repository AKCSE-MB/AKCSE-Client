import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #222524;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(102, 46, 11);
  }

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;

import styled from 'styled-components';

export const TextInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 10px;
  border-radius: 5px;
  font-size: 1rem;
  background-color: white;
  color: black;
  border: 2px solid #222524;
  cursor: text;
`;

export const StyledLabel = styled.label`
  justify-content: left;
  color: #222524;
  font-weight: bold;
  font-size: medium;
`;

export const EmptySpace = styled.div`
  padding-top: 5px;
`;

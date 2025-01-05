import styled from 'styled-components';

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 100px;
`;

export const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin-top: 50px;
`;

export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.dark_brown};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const TableData = styled.td`
  border: 1px solid ${({ theme }) => theme.colors.dark_brown};
  padding: 10px;
  text-align: center;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TheadContainer = styled.thead``;

export const TbodyContainer = styled.tbody``;

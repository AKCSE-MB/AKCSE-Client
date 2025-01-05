import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;

export const Title = styled.h1`
  font-weight: bolder;
  font-size: 1.75rem;
  padding: 15px;
  margin-top: 50px;
  border-top: 2px solid ${({ theme }) => theme.colors.dark_brown};
  border-bottom: 2px solid ${({ theme }) => theme.colors.dark_brown};
  border-radius: 30px;
`;

export const Table = styled.table`
  width: 80%;
  border-collapse: separate;
  border-spacing: 0 5px;
  margin-top: 30px;
`;

export const TableHeader = styled.th`
  border-bottom: 2px solid ${({ theme }) => theme.colors.dark_brown};
  padding: 10px;
  color: ${({ theme }) => theme.colors.dark_brown};
  text-align: center;
  font-weight: bolder;
  font-size: 1.25rem;
`;

export const TableData = styled.td`
  text-align: center;
  vertical-align: middle;
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
  border-radius: 100px;
`;

export const TableRow = styled.tr<{ $rank: number }>`
  font-weight: ${({ $rank }) => {
    if ($rank === 1) return '700';
    if ($rank === 2) return '600';
    if ($rank === 3) return '500';
    return '400';
  }};

  td {
    padding: ${({ $rank }) => `${20 - $rank * 2}px`} 10px;
    font-size: ${({ $rank }) => `${1.75 - $rank * 0.1}rem`};
  }
`;

export const TheadContainer = styled.thead``;

export const TbodyContainer = styled.tbody``;

export const Rank = styled.h1<{ $rank?: number }>`
  border-radius: 100px;
  height: 50px;
  width: 50px;
  align-content: center;

  background-color: ${({ $rank }) => {
    if ($rank === 1) return theme.colors.gold;
    if ($rank === 2) return theme.colors.silver;
    if ($rank === 3) return theme.colors.bronze;
  }};
`;

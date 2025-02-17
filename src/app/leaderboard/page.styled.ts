import styled from 'styled-components';

interface LeaderboardProps {
  $rank: number;
}

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 116px;
`;

export const LeaderboardWrapper = styled.div`
  align-items: center;
  justify-content: center;
`;

export const PodiumWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-end;
  gap: 15px;
  margin-top: 20px;
  column-gap: 8px;
  margin-bottom: -10px;
`;

export const Podium = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.dark_brown};
`;

export const PodiumItem = styled.div<LeaderboardProps>`
  width: 100px;
  height: ${({ $rank }) =>
    $rank === 1 ? '184px' : $rank === 2 ? '152px' : '102px'};
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px 10px 0 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.dark_brown};
  font-size: 16px;
`;

export const Score = styled.div`
  background: ${({ theme }) => theme.colors.light_orange};
  color: ${({ theme }) => theme.colors.dark_brown};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  margin-top: 4px;
  margin-bottom: 12px;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.dark_brown};
  padding: 15px;
  margin-left: 24px;
`;

export const Table = styled.table`
  position: relative;
  z-index: 1;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 5px;
  border-radius: 48px 48px 0 0;
  table-layout: fixed;
  justify-self: center;
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100%;
`;

export const TbodyContainer = styled.tbody`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TableRow = styled.tr<LeaderboardProps>`
  display: flex;
  width: 80%;

  border-bottom: ${({ $rank, theme }) =>
    $rank < 10 ? `1px solid ${theme.colors.gray}` : 'none'};
`;

const TableData = styled.td`
  display: flex;
  align-items: center;
  height: 73px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.dark_brown};
  text-overflow: ellipsis;
`;

export const Column1 = styled(TableData)`
  width: 56px;
`;

export const Column2 = styled(TableData)`
  width: 240px;
`;

export const Column3 = styled(TableData)`
  width: 16px;
`;

export const MemberInfo = styled.div`
  font-size: 16px;
`;

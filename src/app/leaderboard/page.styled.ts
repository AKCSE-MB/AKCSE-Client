import styled from 'styled-components';

interface LeaderboardProps {
  $rank: number;
}

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 44px;
  /* max-width: calc(100vw - 32px); */
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
  margin-top: 32px;
  column-gap: 8px;
  margin-bottom: -15px;
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
  border-radius: 12px 12px 0 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
`;

export const PodiumScore = styled.div`
  color: ${({ theme }) => theme.colors.dark_brown};
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CrownContainer = styled.div`
  padding-bottom: 5px;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.dark_brown};
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 3px;
`;

export const ScoreContainer = styled.div`
  width: 77px;
  height: 24px;
  background: ${({ theme }) => theme.colors.light_orange};
  padding: 4px 8px;
  border-radius: 12px;
  margin-top: 3px;
  margin-bottom: 12px;
  text-align: center;
`;

export const Score = styled.div`
  color: ${({ theme }) => theme.colors.dark_brown};
  font-size: 16px;
  font-weight: bold;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark_brown};
  margin-left: 23px;
`;

export const Table = styled.table`
  position: relative;
  z-index: 1;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 5px;
  border-radius: 48px 48px 0 0;
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.gray};
  table-layout: fixed;
  justify-self: center;
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100%;
  padding-bottom: 10px;
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
  font-weight: bold;
  text-align: left;
`;

export const Column2 = styled(TableData)`
  width: 225px;
  padding-left: 16px;
`;

export const Column3 = styled(TableData)`
  width: 56px;
  justify-content: right;
`;

export const MemberInfo = styled.div`
  font-size: 16px;
`;

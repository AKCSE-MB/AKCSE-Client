'use client';

import * as S from './page.styled';
import { getLeaderboard } from '@/apis/members/leaderboard';
import { useEffect, useState } from 'react';
import { TopMembersResponseDTO } from '@dev-taeho/akcse_mb/lib/domain/members/dto/members.dto';
import CROWN from '@/assets/common/logo/crown.svg';
import INCREASE from '@/assets/common/logo/increase.svg';
import DECREASE from '@/assets/common/logo/decrease.svg';
import { getFormattedNumber } from '@/utils/formatUtil';
import CFooter from '@/components/c-footer';
import CHeader from '@/components/c-header';
import { useRequireAuth } from '@/utils/auth';

export default function Leaderboard() {
  useRequireAuth('/');

  const [leaderboard, setLeaderboard] = useState<TopMembersResponseDTO[]>([]);
  const [pastLeaderboard, setPastLeaderboard] = useState<
    TopMembersResponseDTO[]
  >([]);
  const [status, setStatus] = useState<string[]>([]);
  const UP = 'up';
  const DOWN = 'down';

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const topTen = await getLeaderboard();
      if (topTen) {
        setLeaderboard(topTen);
      }
    };

    fetchLeaderboard();
  }, []);

  useEffect(() => {
    const cachedLeaderboard = localStorage.getItem('pastLeaderboard');
    if (cachedLeaderboard) {
      setPastLeaderboard(JSON.parse(cachedLeaderboard));
    }
  }, []);

  useEffect(() => {
    if (leaderboard.length === 0) {
      return;
    }

    if (pastLeaderboard.length === 0) {
      setPastLeaderboard(leaderboard);
      localStorage.setItem('pastLeaderboard', JSON.stringify(leaderboard));
      return;
    }

    const getStatus = () => {
      const changes: string[] = [];
      const pastLeaderboardMap = new Map(
        pastLeaderboard.map((member, index) => [member.id, index]),
      );

      leaderboard.forEach((member, currIndex) => {
        const pastIndex = pastLeaderboardMap.get(member.id);

        if (pastIndex === undefined) {
          changes[currIndex] = UP;
        } else if (currIndex < pastIndex) {
          changes[currIndex] = UP;
        } else if (currIndex > pastIndex) {
          changes[currIndex] = DOWN;
        }
      });

      return changes;
    };

    setStatus(getStatus());
    localStorage.setItem('pastLeaderboard', JSON.stringify(leaderboard));
  }, [leaderboard]);

  return (
    <S.PageWrapper>
      <S.MainContent>
        <CHeader />

        <S.Title>Leaderboard</S.Title>

        <S.LeaderboardWrapper>
          <S.PodiumWrapper>
            <S.Podium>
              <S.Name>{leaderboard[1]?.name}</S.Name>
              <S.ScoreContainer>
                <S.Score>{leaderboard[1]?.score}pts</S.Score>
              </S.ScoreContainer>
              <S.PodiumItem $rank={2}>2</S.PodiumItem>
            </S.Podium>

            <S.Podium>
              <S.CrownContainer>
                <CROWN />
              </S.CrownContainer>
              <S.Name>{leaderboard[0]?.name}</S.Name>
              <S.ScoreContainer>
                <S.Score>{leaderboard[0]?.score}pts</S.Score>
              </S.ScoreContainer>
              <S.PodiumItem $rank={1}>1</S.PodiumItem>
            </S.Podium>

            <S.Podium>
              <S.Name>{leaderboard[2]?.name}</S.Name>
              <S.ScoreContainer>
                <S.Score>{leaderboard[2]?.score}pts</S.Score>
              </S.ScoreContainer>
              <S.PodiumItem $rank={3}>3</S.PodiumItem>
            </S.Podium>
          </S.PodiumWrapper>

          <S.Table>
            <S.TbodyContainer>
              {leaderboard.map(
                (member, index) =>
                  index > 2 && (
                    <S.TableRow key={member.id} $rank={index + 1}>
                      <S.Column1>{getFormattedNumber(index + 1)}</S.Column1>
                      <S.Column2>
                        <S.MemberInfo>
                          <S.Name>{member.name}</S.Name>
                          <S.Score>{member.score}pts</S.Score>
                        </S.MemberInfo>
                      </S.Column2>
                      <S.Column3>
                        {status[index] === UP && <INCREASE />}
                        {status[index] === DOWN && <DECREASE />}
                      </S.Column3>
                    </S.TableRow>
                  ),
              )}
            </S.TbodyContainer>
          </S.Table>
        </S.LeaderboardWrapper>
      </S.MainContent>

      <CFooter />
    </S.PageWrapper>
  );
}

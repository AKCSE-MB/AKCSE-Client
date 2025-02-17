'use client';

import * as S from './page.styled';
import { getLeaderboard } from '@/apis/members/leaderboard';
import { useEffect, useState } from 'react';
import { TopMembersResponseDTO } from '@dev-taeho/akcse_mb/lib/domain/members/dto/members.dto';
import CROWN from '@/assets/common/logo/crown.svg';
import { getFormattedNumber } from '@/utils/formatUtil';
import CFooter from '@/components/c-footer';
import CHeader from '@/components/c-header';

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<TopMembersResponseDTO[]>([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const leaderboard = await getLeaderboard();
      if (leaderboard) {
        setLeaderboard(leaderboard);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <>
      <S.MainContent>
        <CHeader />

        <S.Title>Leaderboard</S.Title>

        <S.LeaderboardWrapper>
          <S.PodiumWrapper>
            <S.Podium>
              <S.Name>{leaderboard[1]?.username}</S.Name>
              <S.Score>{leaderboard[1]?.score}pts</S.Score>
              <S.PodiumItem $rank={2}>2</S.PodiumItem>
            </S.Podium>

            <S.Podium>
              <CROWN />
              <S.Name>{leaderboard[0]?.username}</S.Name>
              <S.Score>{leaderboard[0]?.score}pts</S.Score>
              <S.PodiumItem $rank={1}>1</S.PodiumItem>
            </S.Podium>

            <S.Podium>
              <S.Name>{leaderboard[2]?.username}</S.Name>
              <S.Score>{leaderboard[2]?.score}pts</S.Score>
              <S.PodiumItem $rank={3}>3</S.PodiumItem>
            </S.Podium>
          </S.PodiumWrapper>

          <S.Table>
            <S.TbodyContainer>
              {leaderboard.map(
                (member, index) =>
                  index > 2 && (
                    <S.TableRow key={member.id}>
                      <S.Column1>{getFormattedNumber(index + 1)}</S.Column1>
                      <S.Column2>
                        <S.MemberInfo>
                          {member.username}
                          <br />
                          {member.score}pts
                        </S.MemberInfo>
                      </S.Column2>
                      <S.Column3></S.Column3>
                    </S.TableRow>
                  ),
              )}
            </S.TbodyContainer>
          </S.Table>
        </S.LeaderboardWrapper>
      </S.MainContent>

      <CFooter />
    </>
  );
}

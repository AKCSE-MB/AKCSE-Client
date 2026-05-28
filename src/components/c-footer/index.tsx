import INSTAGRAM from '@/assets/common/sns/instagram.svg';
import KAKAOTALK from '@/assets/common/sns/kakaotalk.svg';
import LINKTREE from '@/assets/common/sns/linkTree.svg';
import * as S from './page.styled';

export default function CFooter() {
  return (
    <S.Container>
      <S.InnerContainer>
        <S.TopSection>
          <S.OrgName>
            Association of Korean-Canadian Scientists and Engineers at the
            University of Manitoba
          </S.OrgName>

          <S.InfoColumn>
            <S.InfoTitle>Contact</S.InfoTitle>
            <S.InfoText>akcse.mb.yg@gmail.com</S.InfoText>
            <S.InfoText>66 Chancellors Circle</S.InfoText>
            <S.InfoText>Winnipeg, Manitoba R3T 2N2</S.InfoText>
          </S.InfoColumn>

          <S.InfoColumn>
            <S.InfoTitle>Follow AKCSE YG UofM</S.InfoTitle>
            <S.SnsContainer>
              <S.SnsItem
                onClick={() =>
                  window.open('https://www.instagram.com/akcse.mb.yg/')
                }
              >
                <INSTAGRAM />
              </S.SnsItem>
              <S.SnsItem
                onClick={() => window.open('https://linktr.ee/akcse.mb.yg')}
              >
                <LINKTREE />
              </S.SnsItem>
              <S.SnsItem
                onClick={() => window.open('https://open.kakao.com/o/g970mHGg')}
              >
                <KAKAOTALK />
              </S.SnsItem>
            </S.SnsContainer>
          </S.InfoColumn>
        </S.TopSection>

        <S.Divider />

        <S.BottomSection>
          <S.CopyrightText>
            © 2026 AKCSE YG UofM. All rights reserved.
          </S.CopyrightText>
          <S.CreatedByText>
            Created by the AKCSE YG UofM Development team
          </S.CreatedByText>
        </S.BottomSection>
      </S.InnerContainer>
    </S.Container>
  );
}

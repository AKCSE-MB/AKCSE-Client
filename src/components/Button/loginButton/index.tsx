import * as S from './page.styled';
import KAKAO from '@/assets/common/logo/kakao.svg';

export default function LoginButton() {
  return (
    <S.Button>
      <KAKAO width={20} height={20} />
      Login with Kakao
    </S.Button>
  );
}

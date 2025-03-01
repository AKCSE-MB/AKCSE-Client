import * as S from './page.styled';
import CHamburgerIcon from '@/components/c-hamburger-icon';
import LOGO from '@/assets/common/logo/logo.svg';
import { useSideBarStore } from '@/store/useSidBarStore';

export default function CHeader() {
  const { isSideBarOpen, toggleSideBar } = useSideBarStore();

  return (
    <S.Container $shadow={!isSideBarOpen}>
      <S.LogoContainer>
        <LOGO />
      </S.LogoContainer>
      <CHamburgerIcon active={isSideBarOpen} clickEvent={toggleSideBar} />
    </S.Container>
  );
}

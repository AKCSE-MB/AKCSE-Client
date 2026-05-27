import LOGO from '@/assets/common/logo/logo.svg';
import CHamburgerIcon from '@/components/c-hamburger-icon';
import { useSideBarStore } from '@/store/useSideBarStore';
import { useRouter } from 'next/navigation';
import * as S from './page.styled';

interface Props {
  items: {
    name: string;
    clickEvent?: () => void;
  }[];
}

export default function CHeader({ items }: Props) {
  const { isSideBarOpen, toggleSideBar } = useSideBarStore();
  const { push } = useRouter();

  return (
    <S.Container $shadow={!isSideBarOpen}>
      <S.InnerContainer>
        <S.LogoContainer onClick={() => push('/')}>
          <LOGO />
        </S.LogoContainer>

        <S.NavLinks>
          {items.map((item, i) => (
            <S.NavButton key={i} onClick={item.clickEvent}>
              {item.name}
            </S.NavButton>
          ))}
        </S.NavLinks>

        <S.HamburgerContainer>
          <CHamburgerIcon active={isSideBarOpen} clickEvent={toggleSideBar} />
        </S.HamburgerContainer>
      </S.InnerContainer>
    </S.Container>
  );
}

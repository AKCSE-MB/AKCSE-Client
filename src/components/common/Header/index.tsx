import LOGO from '@/assets/common/logo/akcse_logo_header.png';
import CHamburgerIcon from '@/components/common/HamburgerIcon';
import { useSideBarStore } from '@/store/useSideBarStore';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import * as S from './index.styled';

interface Props {
  items: {
    name: string;
    path?: string;
    clickEvent?: () => void;
  }[];
  ctaButton?: {
    name: string;
    clickEvent?: () => void;
  };
}

export default function CHeader({ items, ctaButton }: Props) {
  const { isSideBarOpen, toggleSideBar } = useSideBarStore();
  const { push } = useRouter();
  const pathname = usePathname();

  return (
    <S.Container $shadow={!isSideBarOpen}>
      <S.InnerContainer>
        <S.LogoContainer onClick={() => push('/')}>
          <Image src={LOGO} alt="AKCSE Logo" height={48} width={160} />
        </S.LogoContainer>

        <S.NavLinks>
          {items.map((item, i) => (
            <S.NavButton
              key={i}
              onClick={item.clickEvent}
              $active={!!item.path && pathname === item.path}
            >
              {item.name}
            </S.NavButton>
          ))}
        </S.NavLinks>

        <S.RightSection>
          {ctaButton && (
            <S.CtaButton onClick={ctaButton.clickEvent}>
              {ctaButton.name}
            </S.CtaButton>
          )}
          <S.HamburgerContainer>
            <CHamburgerIcon active={isSideBarOpen} clickEvent={toggleSideBar} />
          </S.HamburgerContainer>
        </S.RightSection>
      </S.InnerContainer>
    </S.Container>
  );
}

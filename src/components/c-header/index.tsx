import * as S from './style';
import CHamburgerIcon from '@/components/c-hamburger-icon';
import LOGO from '@/assets/common/logo/logo.svg';
import { useSideBarStore } from '@/store/useSideBarStore';
import { useRouter } from 'next/navigation';

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
    <div className={S.containerVariants({ shadow: !isSideBarOpen })}>
      <div className={S.innerContainerStyles}>
        <div onClick={() => push('/')} className={S.logoContainerStyles}>
          <LOGO />
        </div>

        <div className="mr-8 hidden items-center gap-8 md:flex">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={item.clickEvent}
              className="text-cherry text-base font-medium transition-opacity hover:opacity-70"
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className={S.hamburgerContainerStyles}>
          <CHamburgerIcon active={isSideBarOpen} clickEvent={toggleSideBar} />
        </div>
      </div>
    </div>
  );
}

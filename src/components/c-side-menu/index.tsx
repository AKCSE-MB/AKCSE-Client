import * as S from './page.styled';
import { useEffect } from 'react';
import { useSideBarStore } from '@/store/useSideBarStore';
import ARROW from '@/assets/common/logo/right_arrow.svg';
import CHeader from '@/components/c-header';

interface Props {
  items: {
    name: string;
    clickEvent?: () => void;
  }[];
}

export default function CSideMenu({ items }: Props) {
  const { isSideBarOpen, closeSideBar } = useSideBarStore();

  useEffect(() => {
    if (isSideBarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSideBarOpen]);

  return (
    <S.Container $open={isSideBarOpen}>
      <CHeader items={items} />
      <S.MenuList>
        {items.map((item, i) => (
          <S.MenuItem
            key={i}
            onClick={() => {
              closeSideBar();
              item.clickEvent?.();
            }}
          >
            {item.name}
            <ARROW />
          </S.MenuItem>
        ))}
      </S.MenuList>
    </S.Container>
  );
}

import INSTAGRAM from '@/assets/common/sns/instagram.svg';
import LINKTREE from '@/assets/common/sns/linkTree.svg';
import { useSideBarStore } from '@/store/useSideBarStore';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import * as S from './index.styled';

interface Props {
  items: {
    name: string;
    path?: string;
    clickEvent?: () => void;
  }[];
}

export default function CSideMenu({ items }: Props) {
  const { isSideBarOpen, closeSideBar } = useSideBarStore();
  const pathname = usePathname();

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
    <>
      <S.Fonts />
      <S.Container
        $open={isSideBarOpen}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isSideBarOpen}
      >
        <S.TopBar>
          <S.CloseButton onClick={closeSideBar} aria-label="Close menu">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              aria-hidden="true"
            >
              <line
                x1="5"
                y1="5"
                x2="21"
                y2="21"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <line
                x1="21"
                y1="5"
                x2="5"
                y2="21"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </S.CloseButton>
        </S.TopBar>

        <S.MenuList>
          {items.map((item, i) => (
            <S.MenuItem
              key={i}
              $active={!!item.path && pathname === item.path}
              $open={isSideBarOpen}
              $index={i}
              onClick={() => {
                closeSideBar();
                item.clickEvent?.();
              }}
            >
              {item.name}
            </S.MenuItem>
          ))}
        </S.MenuList>

        <S.BottomBar>
          <S.SnsButton
            onClick={() =>
              window.open('https://www.instagram.com/akcse.mb.yg/')
            }
          >
            <INSTAGRAM />
          </S.SnsButton>
          <S.SnsButton
            onClick={() => window.open('https://linktr.ee/akcse.mb.yg')}
          >
            <LINKTREE />
          </S.SnsButton>
        </S.BottomBar>
      </S.Container>
    </>
  );
}

import * as S from './page.styled';
import useUser from '@/hooks/useUser';
import CHeader from '@/components/c-header';
import { useSideBarStore } from '@/store/useSideBarStore';
import ARROW from '@/assets/common/logo/right_arrow.svg';

interface Props {
  items: {
    name: string;
    clickEvent?: () => void;
  }[];
}

export default function CSideMenu({ items }: Props) {
  const { isLoggedIn } = useUser();
  const { isSideBarOpen, closeSideBar } = useSideBarStore();

  return (
    <S.Container open={isSideBarOpen}>
      <CHeader />
      <S.Menu>
        {items.map((d, i) => {
          return (
            <S.MenuItem
              key={i}
              onClick={() => {
                closeSideBar();
                if (d.clickEvent) {
                  d.clickEvent();
                }
              }}
            >
              {d.name}
              <span>
                <ARROW />
              </span>
            </S.MenuItem>
          );
        })}
        {!isLoggedIn && (
          <S.MenuItem style={{ marginTop: '90px' }}>
            {/* kakao button */}
          </S.MenuItem>
        )}
      </S.Menu>
    </S.Container>
  );
}

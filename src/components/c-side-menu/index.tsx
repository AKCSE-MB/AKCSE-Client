import * as S from './style';
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
    <div className={S.containerVariants({ open: isSideBarOpen })}>
      <CHeader items={items} />
      <div className="mx-auto mt-11 flex max-w-[1200px] flex-col space-y-11 px-6">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => {
              closeSideBar();
              item.clickEvent?.();
            }}
            className="text-cherry flex h-[29px] items-center justify-between text-2xl font-medium"
          >
            {item.name}
            <ARROW />
          </button>
        ))}
      </div>
    </div>
  );
}

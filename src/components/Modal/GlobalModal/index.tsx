'use client';

import dynamic from 'next/dynamic';
import { ComponentProps, FunctionComponent, useEffect } from 'react';
import useModal from './hooks/useModal';

const DialogModal = dynamic(() => import('../DialogModal'), { ssr: false });
const ImageModal = dynamic(() => import('../ImageModal'), { ssr: false });

export const MODAL_TYPES = {
  dialog: DialogModal as FunctionComponent<ComponentProps<typeof DialogModal>>,
  image: ImageModal as FunctionComponent<ComponentProps<typeof ImageModal>>,
};

export default function GlobalModal() {
  const { modals } = useModal();

  useEffect(() => {
    if (modals?.length > 0) {
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [modals]);

  return (
    <>
      {modals.map(({ Component, props }, idx) => {
        return <Component key={idx} {...props} />;
      })}
    </>
  );
}

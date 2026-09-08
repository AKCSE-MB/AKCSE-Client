'use client';

import IconChevronLeft from '@/assets/common/icons/IconChevronLeft.svg';
import IconChevronRight from '@/assets/common/icons/IconChevronRight.svg';
import CLOSE from '@/assets/common/logo/close.svg';
import { ImageResponse } from '@/types';
import { MouseEvent, useCallback, useEffect, useState } from 'react';
import * as S from './index.styled';

export interface ImageModalProps {
  images: ImageResponse[];
  /** index of the image the user clicked on */
  initialIndex?: number;
  title?: string;
  handleClose?: () => void;
}

export default function ImageModal({
  images,
  initialIndex = 0,
  title,
  handleClose,
}: ImageModalProps) {
  const [animate, setAnimate] = useState(false);
  const [index, setIndex] = useState(initialIndex);

  const hasMultiple = images.length > 1;

  const onClose = useCallback(() => {
    setAnimate(false);

    if (handleClose) {
      setTimeout(() => {
        handleClose();
      }, 100);
    }
  }, [handleClose]);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!hasMultiple) return;
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, goPrev, goNext, hasMultiple]);

  /** Clicking the backdrop closes; clicking the image itself must not. */
  const onOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const current = images[index];

  if (!current) return null;

  return (
    <S.Overlay
      $visible={animate}
      onClick={onOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={title ?? 'Event photo'}
    >
      <S.CloseButton type="button" onClick={onClose} aria-label="Close">
        <CLOSE />
      </S.CloseButton>

      {hasMultiple && (
        <S.NavButton
          type="button"
          $side="prev"
          onClick={goPrev}
          aria-label="Previous photo"
        >
          <IconChevronLeft aria-hidden="true" />
        </S.NavButton>
      )}

      <S.Stage>
        <S.Image
          key={current.publicId}
          $visible={animate}
          src={current.full}
          alt={title ? `${title} photo ${index + 1}` : `Photo ${index + 1}`}
        />

        {(title || hasMultiple) && (
          <S.Caption>
            {title && <S.Title>{title}</S.Title>}
            {hasMultiple && (
              <S.Counter>
                {index + 1} / {images.length}
              </S.Counter>
            )}
          </S.Caption>
        )}
      </S.Stage>

      {hasMultiple && (
        <S.NavButton
          type="button"
          $side="next"
          onClick={goNext}
          aria-label="Next photo"
        >
          <IconChevronRight aria-hidden="true" />
        </S.NavButton>
      )}
    </S.Overlay>
  );
}

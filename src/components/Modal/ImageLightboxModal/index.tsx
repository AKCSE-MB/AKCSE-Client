'use client';

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import * as S from './index.styled';

export interface OriginRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface ImageLightboxModalProps {
  images: string[];
  initialIndex?: number;
  alt?: string;
  originRect?: OriginRect;
  handleClose: () => void;
}

const ENTER_MS = 340;
/**
 * useModalStore.closeModal unmounts the modal 150ms after it is called,
 * so the exit transition has to fit inside that window.
 */
const EXIT_MS = 150;
const SWIPE_THRESHOLD = 50;

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export default function ImageLightboxModal({
  images,
  initialIndex = 0,
  alt,
  originRect,
  handleClose,
}: ImageLightboxModalProps) {
  const [index, setIndex] = useState(initialIndex);
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);

  const figureRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const hasEnteredRef = useRef(false);
  const isClosingRef = useRef(false);
  const touchStartXRef = useRef<number | null>(null);
  const swipedRef = useRef(false);

  /** Transform that maps the lightbox image onto the clicked thumbnail. */
  const getOriginTransform = useCallback(() => {
    const el = figureRef.current;
    if (!el || !originRect) return null;

    const rect = el.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;

    const scale = Math.max(
      originRect.width / rect.width,
      originRect.height / rect.height,
    );
    const dx =
      originRect.left + originRect.width / 2 - (rect.left + rect.width / 2);
    const dy =
      originRect.top + originRect.height / 2 - (rect.top + rect.height / 2);

    return `translate(${dx}px, ${dy}px) scale(${scale})`;
  }, [originRect]);

  /** Grow the image out of the thumbnail and release the grayscale filter. */
  const playEnter = useCallback(() => {
    const el = figureRef.current;
    if (!el || hasEnteredRef.current) return;
    hasEnteredRef.current = true;
    setEntered(true);

    const originTransform = prefersReducedMotion()
      ? null
      : getOriginTransform();

    if (!originTransform) {
      el.style.transition = `opacity ${ENTER_MS}ms ease-out`;
      el.style.opacity = '1';
      return;
    }

    el.style.transition = 'none';
    el.style.opacity = '1';
    el.style.transform = originTransform;
    el.style.filter = 'grayscale(1)';

    // Force a reflow so the starting frame is committed before transitioning.
    el.getBoundingClientRect();

    el.style.transition = `transform ${ENTER_MS}ms cubic-bezier(0.4, 0, 0.2, 1), filter ${ENTER_MS}ms ease-out`;
    el.style.transform = 'none';
    el.style.filter = 'grayscale(0)';
  }, [getOriginTransform]);

  /** Shrink back into the thumbnail, then let the store unmount us. */
  const close = useCallback(() => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;

    const el = figureRef.current;
    if (el) {
      const originTransform = prefersReducedMotion()
        ? null
        : getOriginTransform();

      el.style.transition = `transform ${EXIT_MS}ms ease-in, filter ${EXIT_MS}ms ease-in, opacity ${EXIT_MS}ms ease-in`;
      if (originTransform) {
        el.style.transform = originTransform;
        el.style.filter = 'grayscale(1)';
      }
      el.style.opacity = '0';
    }

    setVisible(false);
    handleClose();
  }, [getOriginTransform, handleClose]);

  const goTo = useCallback(
    (next: number) => {
      if (next < 0 || next > images.length - 1) return;
      setIndex(next);
    },
    [images.length],
  );

  useLayoutEffect(() => {
    const img = imageRef.current;
    if (img?.complete) playEnter();
  }, [playEnter]);

  // Deferred to an effect (not a layout effect) so the backdrop actually
  // paints at opacity 0 once and the fade-in transition runs.
  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setIndex((prev) => Math.max(prev - 1, 0));
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setIndex((prev) => Math.min(prev + 1, images.length - 1));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [close, images.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const startX = touchStartXRef.current;
    touchStartXRef.current = null;
    if (startX === null) return;

    const deltaX = (e.changedTouches[0]?.clientX ?? startX) - startX;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;

    // A swipe over the backdrop still emits a click; don't let it close us.
    swipedRef.current = true;
    goTo(deltaX < 0 ? index + 1 : index - 1);
  };

  const onBackdropClick = () => {
    if (swipedRef.current) {
      swipedRef.current = false;
      return;
    }
    close();
  };

  if (images.length === 0) return null;

  const hasMultiple = images.length > 1;

  return (
    <S.Backdrop
      $visible={visible}
      onClick={onBackdropClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label={alt ? `${alt} photo viewer` : 'Photo viewer'}
    >
      <S.CloseButton
        type="button"
        aria-label="Close"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          close();
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          <path
            d="M1 1L17 17M17 1L1 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </S.CloseButton>

      <S.Figure
        ref={figureRef}
        onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
      >
        <S.Image
          key={index}
          ref={imageRef}
          src={images[index]}
          alt={alt ? `${alt} — photo ${index + 1}` : `Photo ${index + 1}`}
          onLoad={playEnter}
          onError={playEnter}
        />

        {hasMultiple && (
          <S.Capsule $visible={entered && visible}>
            <S.CapsuleButton
              type="button"
              aria-label="Previous photo"
              disabled={index === 0}
              onClick={() => goTo(index - 1)}
            >
              <svg width="9" height="15" viewBox="0 0 9 15" aria-hidden="true">
                <path
                  d="M7.5 1L1.5 7.5L7.5 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </S.CapsuleButton>

            <S.Counter aria-live="polite">
              {index + 1} / {images.length}
            </S.Counter>

            <S.CapsuleButton
              type="button"
              aria-label="Next photo"
              disabled={index === images.length - 1}
              onClick={() => goTo(index + 1)}
            >
              <svg width="9" height="15" viewBox="0 0 9 15" aria-hidden="true">
                <path
                  d="M1.5 1L7.5 7.5L1.5 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </S.CapsuleButton>
          </S.Capsule>
        )}
      </S.Figure>
    </S.Backdrop>
  );
}

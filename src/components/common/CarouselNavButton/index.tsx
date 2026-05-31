import IconChevronLeft from '@/assets/common/icons/IconChevronLeft.svg';
import IconChevronRight from '@/assets/common/icons/IconChevronRight.svg';
import * as S from './index.styled';

interface Props {
  onPrev: () => void;
  onNext: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  hideOnMobile?: boolean;
}

export default function CarouselNavButtons({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
  hideOnMobile,
}: Props) {
  return (
    <S.NavButtons $hideOnMobile={hideOnMobile}>
      <S.NavButton
        onClick={onPrev}
        disabled={prevDisabled}
        aria-label="Previous"
      >
        <IconChevronLeft aria-hidden="true" />
      </S.NavButton>
      <S.NavButton onClick={onNext} disabled={nextDisabled} aria-label="Next">
        <IconChevronRight aria-hidden="true" />
      </S.NavButton>
    </S.NavButtons>
  );
}

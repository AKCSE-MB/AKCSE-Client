/* eslint-disable @typescript-eslint/no-explicit-any */

import CAUTION from '@/assets/common/logo/caution.svg';
import CLOSE from '@/assets/common/logo/close.svg';
import DefaultButton from '@/components/common/Button';
import { ReactNode, useEffect, useState } from 'react';
import * as S from './index.styled';

export interface DialogModalProps {
  title?: string;
  message?: string;
  logo?: React.ReactElement;
  elementMessage?: ReactNode;
  handleClose?: (...arg: any[]) => any;
  handleConfirm?: (...arg: any[]) => any;
  needClose?: boolean;
}

export default function DialogModal({
  title,
  message,
  logo,
  elementMessage,
  handleClose,
  handleConfirm,
  needClose,
}: DialogModalProps) {
  const [animate, setAnimate] = useState(false);
  const onClose = () => {
    setAnimate(false);

    if (handleClose) {
      setTimeout(() => {
        handleClose();
      }, 100);
    }
  };

  const onConfirm = () => {
    setAnimate(false);

    if (needClose) onClose();

    if (handleConfirm) {
      setTimeout(() => {
        handleConfirm();
      }, 100);
    }
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <S.Overlay $visible={animate}>
      <S.Container $visible={animate}>
        <S.TextContainer>
          {title && <S.Title>{title}</S.Title>}

          <S.CloseButtonContainer
            type="button"
            onClick={() => {
              if (onClose) {
                onClose();
              }
            }}
          >
            <CLOSE />
          </S.CloseButtonContainer>

          {logo && (
            <S.LogoContainer>
              <CAUTION />
            </S.LogoContainer>
          )}

          {(message || elementMessage) && (
            <S.MessageContainer>
              {message && <S.Message>{message}</S.Message>}
              {elementMessage ?? null}
            </S.MessageContainer>
          )}
        </S.TextContainer>

        <S.ButtonContainer>
          <DefaultButton onClick={onConfirm} btnText="OK" />
        </S.ButtonContainer>
      </S.Container>
    </S.Overlay>
  );
}

import React, { FC } from 'react'
import * as S from './PopoverStyle';

interface PopoverProps {
  /**
   * @default false
   */
  open?: boolean;
  /**
   * fired when the close button
   * OR the backdrop is clicked
   */
  onClose?: () => void;
  /**
   * 
   */
  children?: React.ReactNode;
}

export const Popover: FC<PopoverProps> = (props) => {
  const { open = false, onClose = () => {}, children } = props;

  return (
    <S.Backdrop onClick={onClose}>
      <S.Popover open={open}>
        <S.CloseButton iconName="close" onClick={onClose} />
        <S.PopoverContent>
          {children}
        </S.PopoverContent>
      </S.Popover>
    </S.Backdrop>
  )
}

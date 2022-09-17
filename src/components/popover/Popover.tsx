import React, { FC } from 'react'
import * as S from './PopoverStyle';

export interface PopoverProps {
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
  const { open = false, onClose = () => { }, children } = props;

  return (
    <>
      {open &&
        <S.Backdrop>
          <S.Popover open>
            <S.CloseButton iconName="close" onClick={onClose} />
            <S.PopoverContent>
              {children}
            </S.PopoverContent>
          </S.Popover>
        </S.Backdrop>
      }
    </>
  )
}

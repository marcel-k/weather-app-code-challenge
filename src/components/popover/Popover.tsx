import React, { FC } from 'react';

import * as S from './PopoverStyle';

export interface PopoverProps {
  /**
   * popover visible or not
   * @default false
   */
  open?: boolean;
  /**
   * fired when the close button
   * OR the backdrop is clicked
   */
  onClose?: () => void;
  /**
   * The content of the popover
   */
  children?: React.ReactNode;
}

/**
 * Simple popover component with backdrop.
 * Will be removed from the DOM when open === false.
 * @param props 
 * @returns 
 */
export const Popover: FC<PopoverProps> = (props) => {
  const { open = false, onClose = () => { }, children } = props;

  return (
    <>
      {open &&
        <S.Backdrop>
          <S.Popover open>
            <S.CloseButton data-testid={'close-button-popover'} iconName='close' onClick={onClose} />
            <S.PopoverContent>
              {children}
            </S.PopoverContent>
          </S.Popover>
        </S.Backdrop>
      }
    </>
  )
}

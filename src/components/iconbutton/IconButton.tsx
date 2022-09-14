import React, { FC } from 'react';
import { Icon, IconName } from '../icon/Icon';
import * as S from './IconButtonStyle';

interface IconButtonProps extends S.IconButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * icomoon icon name 
   */
  iconName: IconName;
  /**
   * fires when button is clicked
   */
  onClick: () => void;
  /**
   * default state of icon
   * @default #fff
   */
  iconColor?: string;
}

export const IconButton: FC<IconButtonProps> = (props) => {
  const { onClick, iconName, iconColor = '#fff', ...buttonProps } = props;

  return (
    <S.IconButton onClick={onClick} {...buttonProps}>
      <Icon name={iconName} color={iconColor} aria-hidden='true' />
    </S.IconButton>

  )
}

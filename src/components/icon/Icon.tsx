import React, { FC } from 'react';
import * as S from './IconStyle';

interface IconProps extends S.IconProps {
  /**
   * icomoon name of the icon
   */
  name: IconName;
  /**
   * Used by styled components when wrapping
   */
  className?: string;
}

export type IconName = 'menu' | 'menu_open' | 'home' | 'reader';

export const Icon: FC<IconProps> = (props) => {
  const {
    name,
    size = '1.5rem',
    className = '',
    color = '#000'
  } = props;

  return (
    <S.Icon
      size={size}
      color={color}
      className={`material-icons ${className}`}
    >
      {name}
    </S.Icon>
  )
}

import React, { FC } from 'react';

import * as S from './IconStyle';

interface IconProps extends S.IconProps {
  /**
   * material ui name of the icon
   * https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Outlined
   */
  name: IconName;
  /**
   * Used by styled components when wrapping
   */
  className?: string;
}

export type IconName = string;

/**
 * Simple icon component
 * @param props
 * @returns 
 */
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
      className={`material-icons-outlined ${className}`}
    >
      {name}
    </S.Icon>
  )
}

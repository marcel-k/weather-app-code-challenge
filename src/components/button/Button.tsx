import React, { MouseEvent, FC } from 'react';
import * as S from './ButtonStyle';

export interface ButtonProps extends S.ButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * fires when button is clicked
   */
  onClick: (e:React.MouseEvent) => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const { onClick, ...buttonProps } = props;

  return (
    <S.Button onClick={onClick} {...buttonProps}>
    </S.Button>

  )
}

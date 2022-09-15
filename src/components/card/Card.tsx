import React, { FC } from 'react';
import * as S from './CardStyle';

export interface CardProps extends S.CardProps {
  /**
   * card id
   */
  id?: string;
  /**
   * property used and overwritten by styled components
   */
  className?: string;
  /**
   * child elements that will be placed in the card
   */
  children?: React.ReactNode;
}

export const Card: FC<CardProps> = (props) => {
  const { children } = props;

  return (
    <S.Card {...props}>
      {children}
    </S.Card>
  );
}

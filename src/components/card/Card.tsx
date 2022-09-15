import React from 'react';
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

export const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { children } = props;

  return (
    <S.Card {...props} ref={ref}>
      {children}
    </S.Card>
  );
});

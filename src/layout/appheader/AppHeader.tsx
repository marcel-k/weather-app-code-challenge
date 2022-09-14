import React, { FC } from 'react';
import { IconButton } from "../../components";
import * as S from './AppHeaderStyle';
import { Toolbar } from './toolbar/Toolbar';

interface AppHeaderProps {
  /**
   * fires when nav button is clicked
   */
  onOpenNavClick?: () => void;
  /**
   * Header title text
   */
  title?: string;
}

export const AppHeader: FC<AppHeaderProps> = (props) => {
  const { onOpenNavClick = () => { }, title = 'Bedum, Netherlands' } = props;

  return (
    <S.Header>
      <IconButton
        tabIndex={0}
        iconName={'menu'}
        onClick={onOpenNavClick}
        arial-label={'Open main menu'}
      />
      <S.Title>{title}</S.Title>
      <Toolbar />
    </S.Header>
  )
};


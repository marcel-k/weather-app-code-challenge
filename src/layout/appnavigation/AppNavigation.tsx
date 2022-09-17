import React, { FC } from 'react';

import * as S from './AppNavigationStyle';


interface AppNavigationProps {
  /**
   * is the navigation open or not
   * @default false
   */
  open?: boolean;
  /**
   * fires when close button is clicked
   */
  onCloseClick: () => void;
}

/**
 * Simple component that display the main navigation sidebar.
 * Open state is controlled with the open property and onCloseClick event.
 * @param props 
 * @returns 
 */
export const AppNavigation: FC<AppNavigationProps> = (props) => {
  const { open = false, onCloseClick } = props;

  return (
    <S.Nav open={open}>
      <S.NavCloseButton iconName={'close'} onClick={onCloseClick} />
      <S.NavList role={'navigation'}>
        <S.NavListItem>
          <S.NavLink to={'/'}>Home</S.NavLink>
        </S.NavListItem>
        <S.NavListItem>
          <S.NavLink to={'/about'}>About</S.NavLink>
        </S.NavListItem>
      </S.NavList>
    </S.Nav>
  )
}

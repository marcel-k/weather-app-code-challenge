import React, { FC } from "react";
import { IconButton } from "../../components";

import * as S from "./AppNavigationStyle";


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

export const AppNavigation: FC<AppNavigationProps> = (props) => {
  const { open = false, onCloseClick } = props;


  return (
    <S.Nav open={open}>
      <S.NavCloseButton iconName="close" onClick={onCloseClick} />
      <S.NavList role='navigation'>
        <S.NavListItem>
          <S.NavLink href="/">Home</S.NavLink>
        </S.NavListItem>
        <S.NavListItem>
          <S.NavLink href="/about">About</S.NavLink>
        </S.NavListItem>
      </S.NavList>
    </S.Nav>
  )
}

import React, { FC, useState } from 'react';
import { IconButton } from "../../components";
import * as S from './AppNavigationStyle';


interface AppNavigationProps { }

export const AppNavigation: FC<AppNavigationProps> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <S.Nav open={open} arial-label={'main menu'}>
      <S.NavButtonWrapper>
      <IconButton
        role=""
        onClick={() => setOpen(!open)}
        iconName={open ? 'menu_open' : 'menu'}
      />
      </S.NavButtonWrapper>
      <S.NavList>
        <S.NavListItem>
          <S.NavLink href="/"></S.NavLink>
        </S.NavListItem>
        <S.NavListItem>
          <S.NavLink href="/about">About</S.NavLink>
        </S.NavListItem>
      </S.NavList>
    </S.Nav>
  )
}

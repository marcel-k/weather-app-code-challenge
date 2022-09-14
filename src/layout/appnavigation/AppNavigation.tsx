import React, { FC, useState } from 'react';
import { IconButton } from "../../components";
import * as S from './AppNavigationStyle';


interface AppNavigationProps {
  /**
   * fires when navigation opens or closes
   */
  onOpenToggle?: (open: boolean) => void;
}

export const AppNavigation: FC<AppNavigationProps> = (props) => {
  const { onOpenToggle = () => { } } = props;
  const [open, setOpen] = useState(false);

  const toggle = () => {
    const o = !open;
    setOpen(o);
    onOpenToggle(o);
  }

  return (
    <S.Nav open={open}>
      <S.NavButtonWrapper>
        <IconButton
          tabIndex={0}
          aria-hidden='true'
          arial-label='Open main menu'
          onClick={toggle}
          iconName={open ? 'menu_open' : 'menu'}
        />
      </S.NavButtonWrapper>
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

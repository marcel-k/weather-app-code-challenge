import React, { FC } from 'react';
import * as S from './AppHeaderStyle';
import { Toolbar } from './toolbar/Toolbar';

interface AppHeaderProps {

}

export const AppHeader: FC<AppHeaderProps> = (props) => {
  // const { } = props;
  return (
    <S.Header>
      <S.LogoLink href='/' title='Home'>
        <S.Logo></S.Logo>
      </S.LogoLink>
      <S.Title>Marcel's Weather App</S.Title>
      <Toolbar />
    </S.Header>
  )
};


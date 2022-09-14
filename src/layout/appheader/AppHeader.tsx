import React, { FC } from 'react';
import * as S from './AppHeaderStyle';

interface AppHeaderProps {

}

export const AppHeader: FC<AppHeaderProps> = (props) => {
  // const { } = props;
  return (
    <S.Header>
      <S.LogoLink href="/">
        <S.Logo></S.Logo>
      </S.LogoLink>
      <S.Title>Marcel's Weather App</S.Title>
    </S.Header>
  )
};


import React, { FC, useContext } from 'react';
import { IconButton } from "../../components";
import { LocationContext } from "../../context";
import * as S from './AppHeaderStyle';
import { Toolbar } from './toolbar/Toolbar';

interface AppHeaderProps {
  /**
   * fires when nav button is clicked
   */
  onOpenNavClick?: () => void;
}

export const AppHeader: FC<AppHeaderProps> = (props) => {
  const { onOpenNavClick = () => { } } = props;

  const { location } = useContext(LocationContext);

  return (
    <S.Header>
      <IconButton
        tabIndex={0}
        iconName={'menu'}
        onClick={onOpenNavClick}
        arial-label={'Open main menu'}
      />
      {!location && <S.Title></S.Title>}
      {!!location && <S.Title>{location?.cityName}, {location?.countryCode}</S.Title> }
      <Toolbar />
    </S.Header>
  )
};


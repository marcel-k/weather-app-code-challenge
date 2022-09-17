import React, { FC, useContext } from 'react'
import { IconButton } from "../../../components";
import { LocationContext } from "../../../context";
import * as S from './ToolbarStyle';

interface ToolbarProps {

}

export const Toolbar: FC<ToolbarProps> = (_props) => {
  const { openPopover } = useContext(LocationContext);
  return (
    <S.Toolbar role={'toolbar'}>
      <IconButton
        iconName={"dark_mode"}
        title={'Sadly, dark mode has not been implemented yet!'}
        onClick={() => { alert('Sadly, dark mode has not been implemented yet!') }}
      />
      <IconButton iconName="search" onClick={openPopover} />
    </S.Toolbar>
  )
};

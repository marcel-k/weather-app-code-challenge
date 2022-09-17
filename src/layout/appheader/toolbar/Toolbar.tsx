import React, { FC } from 'react'
import { IconButton } from "../../../components";
import * as S from './ToolbarStyle';

interface ToolbarProps {

}

export const Toolbar: FC<ToolbarProps> = (props) => {
  return (
    <S.Toolbar role={'toolbar'}>
      <IconButton
        iconName={"dark_mode"}
        title={'Sadly, dark mode has not been implemented yet!'}
        onClick={() => { alert('Sadly, dark mode has not been implemented yet!') }}
      />
      <IconButton iconName="search" onClick={() => { }} />
    </S.Toolbar>
  )
};

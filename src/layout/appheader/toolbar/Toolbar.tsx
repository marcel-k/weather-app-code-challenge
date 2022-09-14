import React, { FC } from 'react'
import * as S from './ToolbarStyle';

interface ToolbarProps {

}

export const Toolbar: FC<ToolbarProps> = (props) => {
  return (
    <S.Toolbar role={'toolbar'}>
      <div>switch</div>
      <div>locationsearch</div>
    </S.Toolbar>
  )
};

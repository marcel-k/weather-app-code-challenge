import React, { FC, useContext } from 'react';

import { IconButton } from '../../../components';
import { LocationContext } from '../../../context';
import * as S from './ToolbarStyle';

interface ToolbarProps {

}
/**
 * Complex component that display toolbar buttons.
 * Uses the LocationContext to open the location popover.
 * @param props 
 * @returns 
 */
export const Toolbar: FC<ToolbarProps> = (_props) => {
  const { location, popoverOpen, openPopover } = useContext(LocationContext);
  return (
    <S.Toolbar role={'toolbar'}>
      <IconButton
        iconName={'dark_mode'}
        title={'Sadly, dark mode has not been implemented yet!'}
        onClick={() => { alert('Sadly, dark mode has not been implemented yet!') }}
      />
      <S.AnimatedButton
        iconName={'search'}
        onClick={openPopover}
        animate={!location && !popoverOpen}
      />
    </S.Toolbar>
  )
};

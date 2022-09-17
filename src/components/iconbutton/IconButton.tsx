import React, { FC } from 'react';
import { Icon, IconName } from '../icon/Icon';
import { Button, ButtonProps } from '../button/Button';

interface IconButtonProps extends ButtonProps {
  /**
   * icomoon icon name 
   */
  iconName: IconName;
  /**
   * default state of icon
   * @default ##4e4a7c
   */
  iconColor?: string;
}

/**
 * Simple icon button component that extends button component
 * @param props 
 * @returns 
 */
export const IconButton: FC<IconButtonProps> = (props) => {
  const { onClick, iconName, iconColor = '#4e4a7c', ...buttonProps } = props;

  return (
    <Button onClick={onClick} {...buttonProps}>
      <Icon name={iconName} color={iconColor} aria-hidden='true' />
    </Button>

  )
}

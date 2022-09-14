import styled from 'styled-components'

export interface IconButtonProps {
  /**
   * @default #fff
   */
  backgroundColor?: string;
  /**
   * @default #ccc
   */
  hoverColor?: string;
}

export const IconButton = styled.button<IconButtonProps>`
 outline: none;
 cursor: pointer;
 border: none;
 background-color: ${({ backgroundColor }) => backgroundColor || '#f58220'};

 &:hover {
  background-color: ${({ hoverColor }) => hoverColor || '#d16909'};
 }

 &:active {
  transform: scale(.95,.95);
 }
`

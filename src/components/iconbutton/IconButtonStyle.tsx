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
 border: none;
 cursor: pointer;
 min-width: 2.5rem;
 min-height: 2.5rem;
 border-radius: 0.75rem;
 background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};

 &:hover {
  color: #6350ee;
  background-color: ${({ hoverColor }) => hoverColor || '#f7f6ff'};
 }

 &:active {
  transform: scale(.9,.9);
 }
`

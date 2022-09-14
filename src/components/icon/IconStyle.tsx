import styled from 'styled-components'

export interface IconProps {
  /**
   * number will be used as pixels
   * string should be in the format of '1rem'
   * @default '1.5rem'
   */
  size?: number | string;
  /**
   * @default #000
   */
  color?: string;
}

export const Icon = styled.span<IconProps>`
  font-size: ${({ size }) => size || '1.5rem'};
  color: ${({ color }) => color || 'black'};
`

import styled from 'styled-components'

export interface CardProps {
  /**
   * The card background color
   * @default #6452ef
   */
  backgroundColor?: string;
  /**
   * optional height of the card
   * @default 100%
   */
  height?: string;
  /**
   * optional width of the card
   * @default 100%
   */
  width?: string;
  /**
   * an optional background image url that is placed over
   * the background color. image is positioned center bottom no repeat.
   */
  backgroundImageUrl?: string;
}

export const Card = styled.div<CardProps>`
  border: none;
  padding: 1rem;
  position: relative;
  border-radius: 2.5rem;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  background: ${({ backgroundImageUrl, backgroundColor }) => `${!!backgroundImageUrl ? `url(${backgroundImageUrl}) no-repeat bottom center,` : ''}${backgroundColor || '#6452ef'}`} 
`

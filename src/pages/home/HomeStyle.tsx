import styled from 'styled-components'

export const Home = styled.div`
`;

export const Grid = styled.div`
   display: grid;
   gap: 2rem;
   grid-template-columns: 1fr;

   @media only screen and (min-width: 600px) {
    //tablet 
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 2fr; 
  }
`;

export const GridItem = styled.div``;

export const GridItemWide = styled.div`
  @media only screen and (min-width: 600px) and (max-width: 1280px) {
    grid-column: span 2;
  }
`;

import styled from 'styled-components'

export const Home = styled.div`
`;



export const Grid = styled.div`
   gap: 1rem;
   display: grid;
   justify-content: center;

   grid-template-columns: 1fr;

 @media only screen and (min-width: 600px) {
    //tablet

    grid-template-columns: minmax(200px, 400px) minmax(400px, 800px);
  }

`;

export const CardScroller = styled.div`
  grid-column-start: 1;

  gap: 1rem;
  display: flex;
  overflow-x: auto;

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex: 0 0 200px;
  }


  @media only screen and (min-width: 600px) {
    grid-column: span 2;
  }
`;

export const GridItem = styled.div``;


import styled from 'styled-components'

export const Home = styled.div`

`;



export const Grid = styled.div`
   gap: 1rem;
   display: grid;
   justify-content: center;

   grid-template-columns: 100%;

 @media only screen and (min-width: 600px) {
    //tablet

    grid-template-columns: minmax(200px, 400px) minmax(400px, 800px);
  }

`;

export const CardScroller = styled.div`
  grid-column-start: 1;

  @media only screen and (min-width: 600px) { 
    grid-column: span 2;
   }
`;

export const CardScrollerTitle = styled.h2`
  padding: 2rem 0;
`;

export const CardScrollerContent = styled.div`
  gap: 1rem;
  display: flex;
  overflow-x: auto;
  padding-bottom: 1.5rem;

  scrollbar-width: none;  /* Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  &::-webkit-scrollbar { /* Chrome, Safari and Opera */
    display: none;
  }

  > div {
    flex: 0 0 9.25rem;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }
`;


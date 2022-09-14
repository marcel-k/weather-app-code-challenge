import styled, { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #58595b;
  }
`;

export const App = styled.div`
  padding: 0 0.75rem;

  @media only screen and (min-width: 600px) {
    padding: 0 0.75rem 0 4.75rem;
  }

  /* @media only screen and (min-width: 1921px) {
    padding: 0 0.75rem 0 13.25rem;
  } */
`;

export const Typography = createGlobalStyle`
*{
    font-family: 'Roboto', sans-serif;
}
`;

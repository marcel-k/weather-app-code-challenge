import styled, { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #4e4a7c;
  }
`;

export const App = styled.div`
  padding: 2rem 0;
  max-width: 105rem;

  @media only screen and (min-width: 1680px) {
    margin: 0 auto;
  }
`;

export const Typography = createGlobalStyle`
  * {
      font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1rem;
  }

  h1, h2 {
    color: #000;
  }
`;
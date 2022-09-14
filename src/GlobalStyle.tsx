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
  padding: 2rem;
`;

export const Typography = createGlobalStyle`
*{
    font-family: 'Roboto', sans-serif;
}
`;
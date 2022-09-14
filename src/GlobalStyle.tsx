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
`;

export const Typography = createGlobalStyle`
*{
    font-family: 'Roboto', sans-serif;
}
`;

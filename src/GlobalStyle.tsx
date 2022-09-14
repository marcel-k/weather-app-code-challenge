import styled, { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const App = styled.div`
  padding: 0 12px;
`;

export const Typography = createGlobalStyle`
*{
    font-family: 'Roboto', sans-serif;
}
`;

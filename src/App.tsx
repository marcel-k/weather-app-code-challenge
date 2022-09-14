import React from 'react';
import * as S from './GlobalStyle';
import { AppHeader } from './layout';
import { Home } from "./pages";

const App = () => {
  return (
    <S.App>
      <S.Reset />
      <S.Typography />
      <AppHeader />
      <Home />
    </S.App>
  );
}

export default App;

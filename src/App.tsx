import React from 'react';
import * as S from './GlobalStyle';
import { AppHeader, AppNavigation } from './layout';
import { Home } from "./pages";

const App = () => {
  return (
    <S.App>
      <S.Reset />
      <S.Typography />
      <AppHeader />
      <AppNavigation />
      <Home />
    </S.App>
  );
}

export default App;

import React from 'react';
import * as S from './GlobalStyle';
import { AppHeader, AppToolbar } from './layout';

const App = () => {
  return (
    <S.App>
      <S.Reset />
      <S.Typography />
      <AppHeader />
      <AppToolbar />
    </S.App>
  );
}

export default App;

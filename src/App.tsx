import React from 'react';
import * as S from './GlobalStyle';
import { AppHeader } from './layout';

const App = () => {
  return (
    <S.App>
      <S.Reset />
      <S.Typography />
      <AppHeader />
    </S.App>
  );
}

export default App;

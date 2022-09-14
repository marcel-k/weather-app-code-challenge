import React from 'react';
import * as GS from './GlobalStyle';
import { AppHeader } from './layout';

function App() {
  return (
    <>
      <GS.Reset />
      <GS.Typography />
      <AppHeader />
    </>
  );
}

export default App;

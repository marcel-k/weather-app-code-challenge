import React, { useState } from 'react';
import * as S from './GlobalStyle';
import { AppHeader, AppNavigation } from './layout';
import { Home } from "./pages";

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleOpenNavClick = () => {
    setNavOpen(true);
  };

  const handleCloseNavClick = () => {
    setNavOpen(false);
  }

  return (
    <S.App>
      <S.Reset />
      <S.Typography />
      <AppHeader onOpenNavClick={handleOpenNavClick} />
      <AppNavigation open={navOpen} onCloseClick={handleCloseNavClick} />
      <Home />
    </S.App>
  );
}

export default App;

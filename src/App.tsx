import React from "react";

import * as S from "./GlobalStyle";
import { useToggle } from "./hooks";
import { AppHeader, AppNavigation } from "./layout";
import { Home } from "./pages";


const App = () => {
  const [navOpen, toggleNavOpen] = useToggle(false);

  return (
    <S.App>
      <S.Reset />
      <S.Typography />
      <AppHeader onOpenNavClick={toggleNavOpen} />
      <AppNavigation open={navOpen} onCloseClick={toggleNavOpen} />
      <Home />
    </S.App>
  );
}

export default App;

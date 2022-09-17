import React, { useCallback, useEffect, useState } from "react";
import { LocationContext } from "./context";
import { LocationContextValue } from "./context/locationContext";

import * as S from "./GlobalStyle";
import { useToggle } from "./hooks";
import { AppHeader, AppNavigation } from "./layout";
import { Home } from "./pages";
import { getCurrentLocation, Location } from "./services";



const App = () => {
  const changeLocation = useCallback((location: Location) => {
    setLocationContextValue({
      location,
      changeLocation
    })
  }, []);

  const [navOpen, toggleNavOpen] = useToggle(false);
  const [locationContextValue, setLocationContextValue] = useState<LocationContextValue>({
    location: null,
    changeLocation
  });

  useEffect(() => {
    const getLocation = async () => {
      try {
        const location = await getCurrentLocation();
        setLocationContextValue({
          location,
          changeLocation
        });
      } catch (e) {
        // no location from geo location api, so be it
        // just continue, user will / has to click the search button
      }
    }

    getLocation();
  }, [changeLocation]);

  return (
    <S.App>
      <S.Reset />
      <S.Typography />
      <LocationContext.Provider value={locationContextValue}>
        <AppHeader onOpenNavClick={toggleNavOpen} />
        <AppNavigation open={navOpen} onCloseClick={toggleNavOpen} />
        <Home />
      </LocationContext.Provider>
    </S.App>
  );
}

export default App;

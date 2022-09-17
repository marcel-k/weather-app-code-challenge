import { createContext } from "react";
import { Location } from "../services";

export interface LocationContextValue {
  location: Location | null;
  /**
   * this function is set at provider level
   * and can be called by a consumer to change the global location
   */
  changeLocation: (location: Location) => void;
}

export const LocationContext = createContext<LocationContextValue>({
  location: null,
  changeLocation: () => { }
});
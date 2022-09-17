import { createContext } from "react";
import { Location } from "../services";

export interface LocationContextValue {
  /**
   * if the pop over is open or not
   */
  popoverOpen: boolean;
  /**
   * location to show weather for
   */
  location: Location | null;
  /**
   * this function is set at provider level
   * and can be called by a consumer to open the location popover
   */
  openPopover: () => void;
  /**
   * this function is set at provider level
   * and can be called by a consumer to change the global location
   */
  changeLocation: (location: Location) => void;
}

export const LocationContext = createContext<LocationContextValue>({
  location: null,
  popoverOpen: false,
  openPopover: () => { },
  changeLocation: () => { }
});
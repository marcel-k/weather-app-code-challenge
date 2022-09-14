import React, { FC } from 'react';
import * as PS from "../PageStyle";
import * as HS from "./HomeStyle";

interface HomeProps {

}

export const Home: FC<HomeProps> = (props) => {
  return (
    <PS.Page>
      <HS.Home>
        <HS.Grid>
          <HS.GridItem id='grid-item-weather-today' style={{ border: '1px solid black', height: '200px' }}>Card</HS.GridItem>
          <HS.GridItem id='grid-item-seven-day-forecast' style={{ border: '1px solid black', height: '200px' }}>Card</HS.GridItem>
          <HS.GridItemWide id='grid-item-temperature-and-humidity' style={{ border: '1px solid black', height: '200px' }}>Card</HS.GridItemWide>
        </HS.Grid>
      </HS.Home>
    </PS.Page>
  )
};

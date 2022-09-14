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
          <HS.GridItem id='grid-item-weather-today' style={{ border: '1px solid black', height: '200px' }}>Card 1</HS.GridItem>
          <HS.GridItem id='grid-item-temperature-and-humidity' style={{ border: '1px solid black', height: '200px' }}>Card 2</HS.GridItem>
        <HS.CardScroller>
            <HS.GridItem id='grid-item-forecast-1' style={{ border: '1px solid black', height: '200px' }}>Small Card 1</HS.GridItem>
            <HS.GridItem id='grid-item-forecast-2' style={{ border: '1px solid black', height: '200px' }}>Small Card 2</HS.GridItem>
            <HS.GridItem id='grid-item-forecast-3' style={{ border: '1px solid black', height: '200px' }}>Small Card 3</HS.GridItem>
            <HS.GridItem id='grid-item-forecast-4' style={{ border: '1px solid black', height: '200px' }}>Small Card 4</HS.GridItem>
            <HS.GridItem id='grid-item-forecast-5' style={{ border: '1px solid black', height: '200px' }}>Small Card 5</HS.GridItem>
            <HS.GridItem id='grid-item-forecast-1' style={{ border: '1px solid black', height: '200px' }}>Small Card 6</HS.GridItem>
            <HS.GridItem id='grid-item-forecast-2' style={{ border: '1px solid black', height: '200px' }}>Small Card 7</HS.GridItem>
            <HS.GridItem id='grid-item-forecast-3' style={{ border: '1px solid black', height: '200px' }}>Small Card 8</HS.GridItem>
            <HS.GridItem id='grid-item-forecast-4' style={{ border: '1px solid black', height: '200px' }}>Small Card 9</HS.GridItem>
            <HS.GridItem id='grid-item-forecast-5' style={{ border: '1px solid black', height: '200px' }}>Small Card 10</HS.GridItem>
            <HS.GridItem id='grid-item-forecast-1' style={{ border: '1px solid black', height: '200px' }}>Small Card 11</HS.GridItem>
            <HS.GridItem id='grid-item-forecast-2' style={{ border: '1px solid black', height: '200px' }}>Small Card 12</HS.GridItem>
            <HS.GridItem id='grid-item-forecast-3' style={{ border: '1px solid black', height: '200px' }}>Small Card 13</HS.GridItem>
            <HS.GridItem id='grid-item-forecast-4' style={{ border: '1px solid black', height: '200px' }}>Small Card 14</HS.GridItem>
            <HS.GridItem id='grid-item-forecast-5' style={{ border: '1px solid black', height: '200px' }}>Small Card 15</HS.GridItem>
          </HS.CardScroller>
          </HS.Grid>
      </HS.Home>
    </PS.Page>
  )
};

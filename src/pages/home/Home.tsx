import React, { FC } from 'react';
import { Card } from "../../components";
import { DayCard, TemperatureCard } from "../../features";
import * as PS from "../PageStyle";
import * as HS from "./HomeStyle";

interface HomeProps {

}

export const Home: FC<HomeProps> = (props) => {
  return (
    <PS.Page>
      <HS.Home>
        <HS.Grid>
          <DayCard
            height={'19rem'}
            forecast={false}
            date={new Date()}
            location={'Bedum'}
            id={'card-weather-today'}
            backgroundColor={'#6452ef'}
            backgroundImageUrl={'assets/images/card_background-374-314.png'}
          />
          <TemperatureCard 
            height={'19rem'}
            location={'Bedum'}
            endDate={new Date()}
            startDate={new Date()}
            backgroundColor={'#3addb1'}
            id={'card-temperature-and-humidity'}
          />


          {/* <Card
            height={'300px'}
            backgroundColor={'#3addb1'}
            id={'card-temperature-and-humidity'}
          >
            Card temperature and humidity
          </Card> */}
          <HS.CardScroller>
            <HS.CardScrollerTitle>Next 14 Days</HS.CardScrollerTitle>
            <HS.CardScrollerContent>
              {
                [
                  '#f82298', '#f9b423', '#219bfa', '#da2221', '#2162f8', '#3addb1', '#6452ef',
                  '#f82298', '#f9b423', '#219bfa', '#da2221', '#2162f8', '#3addb1', '#6452ef',
                ]
                  .map((color, index) =>
                    <DayCard
                      date={new Date()}
                      height={'13.25rem'}
                      location={'Bedum'}
                      backgroundColor={color}
                      id={`card-weather-forecast-${index + 1}`}
                      key={`card-weather-forecast-${index + 1}`}
                    />
                  )}
            </HS.CardScrollerContent>
          </HS.CardScroller>
        </HS.Grid>
      </HS.Home>
    </PS.Page>
  )
};

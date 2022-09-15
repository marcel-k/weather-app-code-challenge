import React, { FC } from 'react';
import { Card } from "../../components";
import { DayCard } from "../../features";
import * as PS from "../PageStyle";
import * as HS from "./HomeStyle";

interface HomeProps {

}

export const Home: FC<HomeProps> = (props) => {
  return (
    <PS.Page>
      <HS.Home>
        <HS.Grid>
          <Card
            height={'400px'}
            id={'card-weather-today'}
            backgroundColor={'#6452ef'}
            backgroundImageUrl={'assets/images/card_background-374-314.png'}
          >
            Card Weather today
          </Card>
          <Card
            height={'400px'}
            backgroundColor={'#3addb1'}
            id={'card-temperature-and-humidity'}
          >
            Card temperature and humidity
          </Card>
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
                      height={'225px'}
                      date={new Date()}
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

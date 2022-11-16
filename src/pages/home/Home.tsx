import React, { FC, useRef } from 'react';

import { DayCard, TemperatureCard } from '../../features';
import ErrorBoundary from '../ErrorBoundary';
import * as PS from '../PageStyle';
import * as HS from './HomeStyle';

interface HomeProps {

}

export const Home: FC<HomeProps> = (_props) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollerRef.current?.scrollBy({ behavior: 'smooth', left: 164, top: 0 });
  };
  
  const scrollRight = () => {
    scrollerRef.current?.scrollBy({ behavior: 'smooth', left: -164, top: 0 });
  };

  return (
    <PS.Page>
        <HS.Home>
        <ErrorBoundary>
          <HS.Grid>
            <DayCard
              height={'19rem'}
              forecast={false}
              elevated={false}
              id={'card-weather-today'}
              backgroundColor={'#6452ef'}
              backgroundImageUrl={'assets/images/card_background-374-314.png'}
            />
            <TemperatureCard
              height={'19rem'}
              elevated={false}
              backgroundColor={'#3addb1'}
              id={'card-temperature-and-humidity'}
            />
            <HS.CardScroller>
              <HS.CardScrollerTitle>14 Day Weather Forecast</HS.CardScrollerTitle>
              <HS.CardScrollerContent ref={scrollerRef}>
                {
                  [
                    '#f82298', '#f9b423', '#219bfa', '#da2221', '#2162f8', '#3addb1', '#6452ef',
                    '#f82298', '#f9b423', '#219bfa', '#da2221', '#2162f8', '#3addb1', '#6452ef',
                  ]
                    .map((color, index) =>
                      <DayCard
                        height={'13.25rem'}
                        placeholder={index > 4}
                        backgroundColor={color}
                        daysInTheFuture={index + 1}
                        id={`card-weather-forecast-${index + 1}`}
                        key={`card-weather-forecast-${index + 1}`}
                      />
                    )}
              </HS.CardScrollerContent>
              <HS.CardScrollerLeft iconName={'navigate_before'} onClick={scrollLeft} ></HS.CardScrollerLeft>
              <HS.CardScrollerRight iconName={'navigate_next'} onClick={scrollRight}></HS.CardScrollerRight>
            </HS.CardScroller>
          </HS.Grid>
    </ErrorBoundary>
        </HS.Home>
      </PS.Page>
  )
};

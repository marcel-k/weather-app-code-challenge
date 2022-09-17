import React, { FC, useContext, useEffect, useState } from 'react';

import { Card, CardProps, Icon } from '../../components';
import { LocationContext } from '../../context/locationContext';
import {
  getCurrentWeather,
  getWeatherForecastByDay,
  WeatherData,
  weatherMainToIconNameMapping,
} from '../../services/';
import * as S from './DayCardStyle';

interface DayCardProps extends CardProps {
  /**
   * How many days in the future the forecast should be
   * Max 5 for the real weather api and 14 when using mock data.
   * 0 is today
   * @default 0
   */
  daysInTheFuture?: number;
  /**
   * If the card is a forecast tile,
   * displaying a min and max temperature and the day name
   * @default true
   */
  forecast?: boolean;
  /**
   * If the card should only display a placeholder
   * Card will not fetch data if true
   * @default false
   */
  placeholder?: boolean;
  /**
   * No children allowed
   */
  children?: never;
}

/**
 * Complex card component that displays the weather of a given day.
 * Uses the weather api to fetch data and has to display modes depending on forecast prop.
 * @param props 
 * @returns 
 */
export const DayCard: FC<DayCardProps> = (props) => {
  const [dataset, setDataset] = useState<WeatherData>();
  const { location } = useContext(LocationContext);
  const { forecast = true, daysInTheFuture = 0, placeholder = false, ...cardProps } = props;

  useEffect(() => {
    const getData = async () => {
      if (!!location) {
        let weather: WeatherData;
        if (!forecast) {
          weather = await getCurrentWeather(location);
        } else {

          weather = await getWeatherForecastByDay(location, daysInTheFuture);
        }

        setDataset(weather);
      }
    }

    if (!placeholder) {
      getData();
    }
  }, [daysInTheFuture, forecast, location, placeholder]);


  return (
    <Card {...cardProps}>
      <S.DayCardContent forecast={forecast}>
        {placeholder &&
          <S.Skeleton>
            <Icon color={'#fff'} name={'thermostat'} size={'6rem'} />
          </S.Skeleton>
        }
        {forecast && !!dataset &&
          <>
            <S.Title>{dataset?.date.toLocaleDateString('en-EN', { weekday: 'long' })}</S.Title>
            <S.ForecastWeatherIcon>
              <Icon color={'#fff'} name={weatherMainToIconNameMapping[dataset?.main.toLowerCase() as string]} size={'3rem'} />
            </S.ForecastWeatherIcon>
            <S.Temperature size={'medium'}>{dataset?.temperature}°</S.Temperature>
            <S.TemperatureMinMaxWrapper>
              <S.Temperature transparent size={'smallest'} aria-label={'minimal temperature'}>{dataset?.minTemperature}°</S.Temperature>
              <S.Temperature size={'smallest'} aria-label={'maximum temperature'}>{dataset?.maxTemperature}°</S.Temperature>
            </S.TemperatureMinMaxWrapper>
          </>
        }
        {!forecast &&
          <>
            {!!dataset &&
              <>
                <S.SectionWrapper>
                  <S.Temperature size='large' aria-label='temperature'>{dataset?.temperature}°</S.Temperature>
                  <S.WeatherDescription>{dataset?.description}</S.WeatherDescription>
                </S.SectionWrapper>
                <S.SectionWrapper>
                  <S.Title size={'larger'}>Humidity</S.Title>
                  <S.Temperature size="small" transparent>{dataset?.humidity}°</S.Temperature>
                </S.SectionWrapper>
              </>
            }
            <S.BrandImage src="assets/images/day.svg" />
          </>
        }
      </S.DayCardContent>
    </Card>
  );
}

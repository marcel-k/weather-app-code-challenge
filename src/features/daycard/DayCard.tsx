import React, { FC, useEffect, useState } from 'react';
import { Card, CardProps, Icon } from '../../components';
import * as S from './DayCardStyle';
import { getCurrentWeather, 
  WeatherData, Location, 
  getWeatherForecastByDay, weatherMainToIconNameMapping } from '../../services/';

interface DayCardProps extends CardProps {
  /**
   * How many days in the future the forecast should be
   * Max 5 for the real weather api and 14 when using mock data.
   * 0 is today
   * @default 0
   */
  daysInTheFuture?: number;
  /**
   * the location / city which the card should display the weather of
   */
  location: Location;
  /**
   * If the card is a forecast tile,
   * displaying a min and max temperature and the day name
   * @default true
   */
  forecast?: boolean;
  /**
   * No children allowed
   */
  children?: never;
}

export const DayCard: FC<DayCardProps> = (props) => {
  const [dataset, setDataset] = useState<WeatherData>();
  const { location, forecast = true, daysInTheFuture = 0, ...cardProps } = props;

  useEffect(() => {
    const getData = async () => {
      let weather: WeatherData;
      if (!forecast) {
        weather = await getCurrentWeather(location);
      } else {

        weather = await getWeatherForecastByDay(location, daysInTheFuture);
      }

      setDataset(weather);
    }

    getData();
  }, [daysInTheFuture, forecast, location]);


  return (
    <Card {...cardProps}>
      <S.DayCardContent forecast={forecast}>
        {forecast &&
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
            <S.SectionWrapper>
              <S.Temperature size='large' aria-label='temperature'>{dataset?.temperature}°</S.Temperature>
              <S.WeatherDescription>{dataset?.description}</S.WeatherDescription>
            </S.SectionWrapper>
            <S.SectionWrapper>
              <S.Title size={'larger'}>Humidity</S.Title>
              <S.Temperature size="small" transparent>{dataset?.humidity}°</S.Temperature>
            </S.SectionWrapper>
            <S.BrandImage src="assets/images/day.svg" />
          </>
        }
      </S.DayCardContent>
    </Card>
  );
}

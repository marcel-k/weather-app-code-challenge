import React, { FC } from 'react';
import { Card, CardProps, Icon } from '../../components';
import * as S from './DayCardStyle';

interface DayCardProps extends CardProps {
  /**
   * The local date which the card should display the weather of
   */
  date: Date;
  /**
   * the location / city which the card should display the weather of
   */
  location: string;
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
  const { date, location, forecast = true, ...cardProps } = props;

  return (
    <Card {...cardProps}>
      <S.DayCardContent forecast={forecast}>
        {forecast &&
          <>
            <S.Title>Tuesday</S.Title>
            <S.ForecastWeatherIcon>
            <Icon color={'#fff'} name={'wb_sunny'} size={'3rem'} />
          </S.ForecastWeatherIcon>
          <S.Temperature size={'medium'}>50°</S.Temperature>
          <S.TemperatureMinMaxWrapper>
            <S.Temperature transparent size={'smallest'} aria-label={'minimal temperature'}>40°</S.Temperature>
            <S.Temperature size={'smallest'} aria-label={'maximum temperature'}>60°</S.Temperature>
          </S.TemperatureMinMaxWrapper>
          </>
        }
        {!forecast &&
          <>
            <S.SectionWrapper>
              <S.Temperature size='large' aria-label='temperature'>50°</S.Temperature>
              <S.WeatherDescription>Clouds and Sun</S.WeatherDescription>
            </S.SectionWrapper>
            <S.SectionWrapper>
              <S.Title size={'larger'}>Humidity</S.Title>
              <S.Temperature size="small" transparent>35°</S.Temperature>
            </S.SectionWrapper>
          </>
        }
      </S.DayCardContent>
    </Card>
  );
}

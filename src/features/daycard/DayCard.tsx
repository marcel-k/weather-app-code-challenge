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
  const { date, location, forecast, ...cardProps } = props;

  return (
    <Card {...cardProps}>
      <S.DayCardContent>
        <S.Title>Tuesday</S.Title>
        <S.ForecastWeatherIcon>
          <Icon color='#fff' name='wb_sunny' size={'3rem'} />
        </S.ForecastWeatherIcon>
        <S.Temperature size='medium'>50°</S.Temperature>
        <S.TemperatureMinMaxWrapper>
          <S.Temperature transparent size='small'>40°</S.Temperature>
          <S.Temperature size='small'>60°</S.Temperature>
        </S.TemperatureMinMaxWrapper>
      </S.DayCardContent>
    </Card>
  );
}

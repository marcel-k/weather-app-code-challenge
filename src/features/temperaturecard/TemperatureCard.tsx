import React, { FC, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";

import { Card, CardProps, Chart, ChartData } from "../../components";
import { LocationContext } from "../../context";
import { getThreeDayForecast, WeatherData } from "../../services";
import * as S from './TemperateCardStyle';

interface TemperatureCardProps extends CardProps {
  /**
   * The local date/hour at which the chart should start
   */
  startDate: Date;
  /**
  * The local date/hour at which the chart should end
  */
  endDate: Date;
  /**
   * No children allowed
   */
  children?: never;
}

const formatData = (data: WeatherData[]) => {
  const formattedData = data.reduce((previous, weatherItem) => {
    const { date, humidity, temperature } = weatherItem;
    const label = date.toISOString();
    return {
      humidity: [...previous.humidity, { label, value: humidity }],
      temperature: [...previous.temperature, { label, value: temperature }]
    };
  }, { humidity: [], temperature: [] } as ChartData);

  return formattedData;
};

export const TemperatureCard: FC<TemperatureCardProps> = (props) => {
  const { startDate, endDate, ...cardProps } = props;

  const { location } = useContext(LocationContext);
  const [dataset, setDataset] = useState<ChartData>();
  const chartRef = useRef<{ update: Function } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const observer = new ResizeObserver(entries => {
      // Only care about the first element, we expect one element to be watched
      const { width, height } = entries[0].contentRect;

      if (!chartRef.current) {
        const { initialize, update } = Chart("chart-goes-here", width, height);

        initialize();
        chartRef.current = { update };
      }

      if (!!dataset) {
        // Note: could debounce but not really necessary
        chartRef.current?.update(dataset, width, height);
      }
    });

    observer.observe(cardRef.current as HTMLDivElement);

    return () => {
      observer.disconnect();
    };
  }, [dataset]);


  useEffect(() => {
    const getData = async () => {
      if (!!location) {
        const weather = await getThreeDayForecast(location);
        const formatted = formatData(weather);

        setDataset(formatted);
      }
    }

    getData();
  }, [location]);

  return (
    <Card {...cardProps} ref={cardRef}>
      <S.TitleWrapper>
        <S.Title>3 Day Temperature and Humidity Forecast</S.Title>
      </S.TitleWrapper>
      <div id={'chart-goes-here'}></div>
    </Card>
  )
}

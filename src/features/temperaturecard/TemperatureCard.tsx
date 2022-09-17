import React, { FC, useEffect, useLayoutEffect, useRef, useState } from "react";

import { Card, CardProps, Chart, ChartData } from "../../components";
import { getThreeDayForecast, Location, WeatherData } from "../../services";

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
    * the location / city which the card should display the weather of
    */
  location: Location;
  /**
   * No children allowed
   */
  children?: never;
}

const d = {
  humidity: [
    { label: "A", value: 10 }, { label: "B", value: 30 }, { label: "C", value: 40 }, { label: "D", value: 20 },
    { label: "Z", value: 10 }, { label: "E", value: 30 }, { label: "F", value: 40 }, { label: "G", value: 20 },
    { label: "H", value: 10 }, { label: "I", value: 30 }, { label: "J", value: 40 }, { label: "K", value: 20 },
    { label: "L", value: 10 }, { label: "M", value: 30 }, { label: "N", value: 42 }, { label: "O", value: 20 },
    { label: "P", value: 10 }, { label: "Q", value: 30 }, { label: "R", value: 40 }, { label: "S", value: 20 }],
  temperature:
    [
      { label: "A", value: 24 }, { label: "B", value: 20 }, { label: "C", value: 15 }, { label: "D", value: 11 },
      { label: "Z", value: 18 }, { label: "E", value: 22 }, { label: "F", value: 27 }, { label: "G", value: 23 },
      { label: "H", value: 17 }, { label: "I", value: 10 }, { label: "J", value: 16 }, { label: "K", value: 21 },
      { label: "L", value: 24 }, { label: "M", value: 25 }, { label: "N", value: 20 }, { label: "O", value: 16 },
      { label: "P", value: 11 }, { label: "Q", value: 15 }, { label: "R", value: 18 }, { label: "S", value: 21 }],
};

const d2 = {
  humidity: [
    { label: "A", value: 20 }, { label: "B", value: 80 }, { label: "C", value: 10 }, { label: "D", value: 20 },
    { label: "Z", value: 20 }, { label: "E", value: 40 }, { label: "F", value: 10 }, { label: "G", value: 20 },
    { label: "H", value: 20 }, { label: "I", value: 40 }, { label: "J", value: 10 }, { label: "K", value: 20 },
    { label: "L", value: 20 }, { label: "M", value: 40 }, { label: "N", value: 12 }, { label: "O", value: 20 },
    { label: "P", value: 20 }, { label: "Q", value: 40 }, { label: "R", value: 10 }, { label: "S", value: 20 }
  ],
  temperature: [
    { label: "A", value: 24 }, { label: "B", value: 30 }, { label: "C", value: 15 }, { label: "D", value: 21 },
    { label: "Z", value: 28 }, { label: "E", value: 32 }, { label: "F", value: 17 }, { label: "G", value: 23 },
    { label: "H", value: 27 }, { label: "I", value: 30 }, { label: "J", value: 16 }, { label: "K", value: 21 },
    { label: "L", value: 24 }, { label: "M", value: 35 }, { label: "N", value: 10 }, { label: "O", value: 26 },
    { label: "P", value: 21 }, { label: "Q", value: 35 }, { label: "R", value: 18 }, { label: "S", value: 21 }
  ],
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
  const { startDate, endDate, location, ...cardProps } = props;

  const [dataset, setDataset] = useState<ChartData>();
  const chartRef = useRef<{ update: Function } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const observer = new ResizeObserver(entries => {
      // Only care about the first element, we expect one element ot be watched
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
      const weather = await getThreeDayForecast(location);
      const formatted = formatData(weather);

      setDataset(formatted);
    }

    getData();
  }, [location]);

  return (
    <Card {...cardProps} ref={cardRef}>
      <div id={'chart-goes-here'}></div>
    </Card>
  )
}

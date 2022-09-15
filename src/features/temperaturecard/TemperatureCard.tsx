import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Card, CardProps, Chart } from "../../components";
import debounce from 'lodash.debounce';

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
  location: string;
  /**
   * No children allowed
   */
  children?: never;
}

const d = [{ label: "A", value: 10 }, { label: "B", value: 30 }, { label: "C", value: 40 }, { label: "D", value: 20 }];

export const TemperatureCard: FC<TemperatureCardProps> = (props) => {
  const { startDate, endDate, location, ...cardProps } = props;

  const chartRef = useRef<{ update: Function, remove: Function } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const observer = new ResizeObserver(entries => {
      // Only care about the first element, we expect one element ot be watched
      const { width, height } = entries[0].contentRect;

      if (!chartRef.current) {
        const { initialize, update, remove } = Chart("chart-goes-here", width, height);

        initialize();
        chartRef.current = { update, remove };
      }

      //TODO: lodash.debounce?
      chartRef.current?.update(d, width, height)
    });

    observer.observe(cardRef.current as HTMLDivElement);

    return () => {
      observer.disconnect();
      chartRef.current?.remove();
    };
  }, []);

  return (
    <Card {...cardProps} ref={cardRef}>
      <div id={'chart-goes-here'}></div>
    </Card>
  )
}

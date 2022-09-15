import styled from 'styled-components'


export const DayCardContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h3`
  color: #fff;
  font-size: 1rem;
`;

export const TemperatureMinMaxWrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 5rem;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Temperature = styled.span<{ transparent?: boolean, size?: 'small' | 'medium' | 'large' }>`
  color: #fff;
  opacity: ${({ transparent }) => transparent ? 0.5 : 1};
  font-size: ${({ size = 'medium' }) => size === 'large' ? '5rem' : size === 'medium' ? '2rem' : '1rem'};
`;

export const Caption = styled.caption``;

export const WeatherIcon = styled.div``;
export const ForecastWeatherIcon = styled.div`
  /* height: 80px; */
`;


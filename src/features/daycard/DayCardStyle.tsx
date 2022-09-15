import styled from 'styled-components'


export const DayCardContent = styled.div<{forecast?: boolean}>`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: ${({ forecast }) => forecast ? 'space-between' : 'space-around' };
`

export const Title = styled.h3<{ size?: 'medium' | 'larger'}>`
  color: #fff;
  font-size: ${({ size = 'medium' }) => size === 'larger' ? '1.25rem' : '1rem'};
  font-weight: 700;
  padding-bottom: 0.5rem;
`;

export const TemperatureMinMaxWrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 5rem;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Temperature = styled.span<{ transparent?: boolean, size?: 'smallest' | 'small' | 'medium' | 'large' }>`
  color: #fff;
  opacity: ${({ transparent }) => transparent ? 0.5 : 1};
  font-size: ${({ size = 'medium' }) => size === 'large' ? '6rem' : size === 'medium' ? '2rem' : size === 'small' ? '1.5rem' : '1rem'};
`;

export const WeatherDescription = styled.span`
  color: #fff;
  font-size: 1.25rem;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WeatherIcon = styled.div``;
export const ForecastWeatherIcon = styled.div`
  /* height: 80px; */
`;


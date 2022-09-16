import { Location, CurrentWeatherResponse } from './interfaces';
const { apiKey, weatherApiUrl } = appConfig;

export interface CurrentWeatherData {
  main: string;
  humidity: number;
  temperature: number;
  description: string;
  minTemperature: number;
  maxTemperature: number;
}

export async function getCurrentWeather(location: Location) {
  const queryString = new URLSearchParams({
    appid: apiKey,
    units: 'metric',
    q: `${location.cityName}, ${location.countryCode}`,
  });

  try {
    const response = await fetch(`${weatherApiUrl}weather?${queryString}`);
    const result: CurrentWeatherResponse = await response.json();

    const data: CurrentWeatherData = {
      humidity: Math.round(result.main.humidity),
      temperature: Math.round(result.main.temp),
      minTemperature: Math.round(result.main.temp_min),
      maxTemperature: Math.round(result.main.temp_max),
      description: result.weather[0].description,
      main: result.weather[0].main
    };

    return data;
  } catch (e) {
    console.log(e);
    throw new Error('Error fetching current weather data, try reloading the page');
  }
}
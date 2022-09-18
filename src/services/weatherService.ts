import { Location, WeatherApiResponse } from './interfaces';
const { apiKey, forecastApiUrl, maxDaysForecast } = (window as any).appConfig as AppConfig;

export interface WeatherData {
  date: Date;
  main: string;
  humidity: number;
  temperature: number;
  description: string;
  minTemperature: number;
  maxTemperature: number;
}

/**
 * 
 * @param location 
 * @returns 
 */
export async function getCurrentWeather(location: Location) {
  const result = await getWeatherForecastByDay(location, 0);

  return result;
}

/**
 * Get the weather forecast of a given day, max five day's in the future
 * // TODO: get min and max temperature by looking at the whole day?
 * @param location
 * @param daysInTheFuture number of the day to add to today, starting with 1 for tomorrow and max 5 for the weatherApi and 14 for mockData
 */
export async function getWeatherForecastByDay(location: Location, daysInTheFuture: number) {
  const fiveDayForecast = await getFiveDayForecast(location);

  if (daysInTheFuture === 0) {
    return fiveDayForecast[0];
  } else {
    const today = new Date();
    const date = new Date(today);
    date.setDate(today.getDate() + daysInTheFuture);

    const hours = date.getHours();
    const nearestThreeHours = hours - (hours % 3);
    date.setHours(nearestThreeHours, 0, 0, 0);
    const timeValue = date.getTime();

    let forecast = fiveDayForecast.find((item) => item.date.getTime() === timeValue);

    if (!forecast && daysInTheFuture === maxDaysForecast) {
      forecast = fiveDayForecast[fiveDayForecast.length - 1];
    }

    return forecast as WeatherData;
  }
}

/**
 * Fetches a five day weather forecast, divided into sections of three hours
 * Because of max call limitations of the weather api,
 * this function uses a local cache per city to reduce the number of calls needed.
 * @param location 
 */
export async function getFiveDayForecast(location: Location) {
  return await getFiveDayForecastCached(location);
}

/**
 * Fetches a three day weather forecast, divided by into sections of three hours
 * @param location 
 */
export async function getThreeDayForecast(location: Location) {
  const fiveDayForecast = await getFiveDayForecastCached(location);
  const threeDayForecast = fiveDayForecast.slice(0, 24);

  return threeDayForecast;
}

/**
 * Local cache to temporary store five day forecast fetch response query of a given location when in development enviroment
 * 
 * @key location.cityName,location.countryCode
 */
const fiveDayForecastCache: { [key: string]: Promise<WeatherData[]> } = {};

const getFiveDayForecastCached = async (location: Location) => {
  let cachedPromise = fiveDayForecastCache[`${location.cityName},${location.countryCode}`];

  if (!!cachedPromise) {
    return await cachedPromise;
  }

  const promise = new Promise<WeatherData[]>(async (resolve, reject) => {
    let result: { list: WeatherApiResponse[] } | undefined = undefined;

    try {
      result = await fetchWeatherData(location);
    } catch (e) {
      delete fiveDayForecastCache[`${location.cityName},${location.countryCode}`];
      reject(e);
    }

    if (!!result) {
      const data = mapApiResultToWeatherData(result);

      resolve(data);
    }
  });

  fiveDayForecastCache[`${location.cityName},${location.countryCode}`] = promise;
  return promise;
}

/**
 * Fetch five day weatherdata from the weather api.
 * https://openweathermap.org/forecast5
 * @param location 
 * @returns 
 */
const fetchWeatherData = async (location: Location) => {
  const queryString = new URLSearchParams({
    appid: apiKey,
    units: 'metric',
    q: `${location.cityName},${location.countryCode}`,
  });

  let result: { list: WeatherApiResponse[] };
  try {
    const response = await fetch(`${forecastApiUrl}?${queryString}`);

    if (response.ok) {
      result = await response.json();
    } else {
      if (response.status === 404) {
        return Promise.reject(`No weather data found for ${location.cityName},${location.countryCode}`);
      } else {
        return Promise.reject(response.statusText);
      }
    }
  } catch (e) {
    console.log(e);
    return Promise.reject(`No weather data found for ${location.cityName},${location.countryCode}`);
  }

  return result;
}

const mapApiResultToWeatherData = function (apiResult: { list: WeatherApiResponse[] }) {
  const data: WeatherData[] = apiResult.list.map(({ main, weather, dt_txt }) => {

    return {
      main: weather[0].main,
      date: new Date(dt_txt?.replace(/-/g, '/') as string),
      humidity: Math.round(main.humidity),
      temperature: Math.round(main.temp),
      description: weather[0].description,
      minTemperature: Math.round(main.temp_min),
      maxTemperature: Math.round(main.temp_max),
    }
  });

  return data;
}
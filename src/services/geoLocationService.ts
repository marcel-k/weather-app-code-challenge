import { Location, ReverseGeoLocationApiResponse } from './interfaces';

const { apiKey, reverseGeocodingApiUrl } = appConfig;

/**
 * Try to get the current geolocation using the browsers navigator.
 * Will resolve a Location object when successfull.
 * @returns Promise of a Location
 */
export const getCurrentLocation = () => {
  const promise = new Promise<Location>((resolve, reject) => {
    const successCallback: PositionCallback = async (position) => {
      const { latitude, longitude } = position.coords;
      const geoLocation = await fetchReverseGeoLocation(latitude, longitude);

      resolve({ cityName: geoLocation[0].name, countryCode: geoLocation[0].country });
    }

    const errorCallback: PositionErrorCallback = (position) => {
      reject('Error getting geolocation');
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      reject('Browser does not support geolocation');
    }
  });

  return promise;
}

/**
 * Get a cityname and coutrycode from the weather service based on a lat and long geolocation.
 * https://openweathermap.org/api/geocoding-api#reverse
 * @param lat 
 * @param lon 
 * @returns 
 */
const fetchReverseGeoLocation = async (lat: number, lon: number) => {
  const queryString = new URLSearchParams({
    limit: '1',
    lat: `${lat}`,
    lon: `${lon}`,
    appid: apiKey
  });

  let result: ReverseGeoLocationApiResponse[];
  try {
    const response = await fetch(`${reverseGeocodingApiUrl}?${queryString}`);

    if (response.ok) {
      result = await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (e) {
    console.log(e);
    throw new Error('Error fetching reverse geo location');
  }

  return result;
}
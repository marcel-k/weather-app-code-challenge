import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getCurrentWeather } from './weatherService';
import { weatherApiResponse, forecastApiResponse, reverseGeoLocationApiResponse } from './services.test.json';


const server = setupServer(
  rest.get(`${(window as any).appConfig.weatherApiUrl}`, (req, res, ctx) => {
    return res(ctx.json(weatherApiResponse));
  }),
  rest.get(`${(window as any).appConfig.forecastApiUrl}`, (req, res, ctx) => {
    return res(ctx.json(
      {
        list: forecastApiResponse
      }
    ));
  }),
  rest.get(`${(window as any).appConfig.reverseGeocodingApiUrl}`, (req, res, ctx) => {
    return res(ctx.json(reverseGeoLocationApiResponse));
  }),
)

beforeAll(() => {
  server.listen();
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test('fetches current weather data', async () => {
  const currentWeather = await getCurrentWeather({ cityName: 'Groningen', countryCode: 'NL' });

  expect(currentWeather).toEqual({
    "date": new Date('2022-09-18T19:00:00.000Z'),
    "description": "light rain",
    "humidity": 86,
    "main": "Rain",
    "maxTemperature": 13,
    "minTemperature": 12,
    "temperature": 12,
  });
})
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

(window as any).appConfig = {
  "useMockData": false,
  "maxDaysForecast": 5,
  "environment": "development",
  "urlRoot": "/",
  "apiKey": "f5f602b5811d444692ab37bbeee62b23",
  "weatherApiUrl": "https://api.openweathermap.org/data/2.5/weather",
  "forecastApiUrl": "https://api.openweathermap.org/data/2.5/forecast",
  "reverseGeocodingApiUrl": "https://api.openweathermap.org/geo/1.0/reverse",
};
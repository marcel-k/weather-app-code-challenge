## Ordina Code Challenge Weather App

This code challenge is created for a Ordina code challenge.

The app has been deployed and is available here: https://marcel-k.github.io/weather-app-code-challenge/

The app is based on a opensource design: https://www.uplabs.com/posts/weather-app-freebie

The app has been (manually) tested with browsers chrome, safari, brave and chrome on android mobile and tablet
Mobile devices can 'install' the app on the home screen via browser menu --> 'add to startscreen' or 'add to homescreen' or something like that.

CORS problems have been (automatically) solved by Create-React-App.
I you do encounter CORS problems, add a proxy property in the package.json the weatherapi.
further reading: https://create-react-app.dev/docs/proxying-api-requests-in-development/ 

The project contains an app-config.js file that contains global config values that the app needs
to run. This file can be edited while the app is running (should be cache busted though).
The app-config.js file also contains the apikey for the weather api. Normally, such an api key should be a secret
and only available on the server side.

The weather API used is openweathermap: https://openweathermap.org/api
This api has a free subscription with which you can get a forecast of maximum 5 days.
It also has a call limit, that is why the app limits the number of calls by getting all the data in one call and
locally caching it.


tools used:
- Visual Studio Code, Typescript Hero, EsLint, vscode-styled-components
- Node.js v16.17.0, npm 8.15.0, Create-React-App, TypeScript
- React.js, D3.js, react-router-dom, styled-components, testing-library
- material-ui icon font (CDN), Google Roboto font (CDN)
- gh-pages to deploy to github pages


To run the project in a local development environment:
- clone or download the repository
- run scripts in (visual studio code) terminal:
  - npm install
  - npm run start-https

See below for more available script

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run start-https`

Runs the app in the development mode and fakes a https certificate.\
This is needed for usage of browser geolocation in development mode.
Open [https://localhost:3000](https://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

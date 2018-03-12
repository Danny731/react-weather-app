//1. set API Key to constant
const API_KEY = '844f2fe7e7bee499da9300e36f289250';

//2. Set base url for openweathermap.org
const baseURL = 'http://api.openweathermap.org/data/2.5/'

//3. define URL string key:value pairs that takes in a city as the argument
function getQueryStringData (city) {
  return {
    q: city,
    type: 'accurate',
    units: 'imperial',
    APPID: API_KEY,
    cnt: 5
  }
} 

//4. format string into single segments that return url encoded formats like this ${key}=${value}&
// example: q=chicago&
//look up how this works
function RouteParams(urlStringData) {
  return Object.keys(urlStringData)
    .map((key) => {
      return key + '=' + encodeURIComponent(urlStringData[key])
    }).join('&')
}

//5. function to get the full URL route
function configRoute(type, urlStringData) {
  return baseURL + type + '?' + RouteParams(urlStringData);
}


//Get current weather
export function getCurrentWeather (city) {
  let queryStringData = getQueryStringData(city);
  // console.log(queryStringData)
  let url = configRoute('weather', queryStringData);
  return fetch(url)
    .then(response => response.json())
    .then(myJson => myJson);
}

//Get 5 day forecast
export function getExtendedForecast(city) {
  let queryStringData = getQueryStringData(city); 
  let url = configRoute('forecast/daily', queryStringData);
  return fetch(url)
    .then(response => response.json())
    .then(forecastData => forecastData);
}
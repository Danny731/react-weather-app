//1. set API Key to constant
const API_KEY = '844f2fe7e7bee499da9300e36f289250';

//2. Set endpoints
const baseURL = 'http://api.openweathermap.org/data/2.5/'

//3. define URL string key:value pairs that takes in a city as the parameter
function getQueryStringData (city) {
  return {
    q: city,
    type: 'accurate',
    units: 'imperial',
    APPID: API_KEY,
    cnt: 5
  }
} 

//3. format string into single small chunks that returns ${key}=${value}& format
//look up how this works
function RouteParams(urlStringData) {
  return Object.keys(urlStringData)
    .map((key) => {
      return key + '=' + encodeURIComponent(urlStringData[key])
    }).join('&')
}

//4. function to get the full URL route
function configRoute(type, urlStringData) {
  return baseURL + type + '?' + RouteParams(urlStringData);
}


//Get current weather
export function getCurrentWeather (city) {
  let queryStringData = getQueryStringData(city);
  console.log(queryStringData)
  let url = configRoute('weather', queryStringData);
  fetch(url)
    .then(response => response.json())
    .then(currentData => currentData.data)
}

//Get 5 day forecast
export function getExtendedForecast(city) {
  let queryStringData = getQueryStringData(city); 
  let url = configRoute('forecast/daily', queryStringData);
  fetch(url)
    .then(response => response.json())
    .then(forecastData => forecastData.data)
}
// Init Weather Object
const weather = new Weather ('Madrid');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Barcelona');

function getWeather() {
  weather.getWeather()
  .then(data => console.log('data: ', data))
  .catch(err => console.log ('error: ', err));
}

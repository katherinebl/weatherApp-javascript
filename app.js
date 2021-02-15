// Init Weather Object
const weather = new Weather ('Madrid');
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Barcelona');

function getWeather() {
  weather.getWeather()
  .then(data => ui.paint(data))
  .catch(err => console.log ('error: ', err));
}

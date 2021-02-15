// Init Weather Object
const weather = new Weather ('Madrid');
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location Event
document.getElementById('save-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  weather.changeLocation(city);

  // Get and display weather
  getWeather();

  // Close Modal
  document.querySelector(".modal-container").classList.remove("fade-in");
})

// weather.changeLocation('Barcelona');

function getWeather() {
  weather.getWeather()
  .then(data => ui.paint(data))
  .catch(err => console.log ('error: ', err));
}

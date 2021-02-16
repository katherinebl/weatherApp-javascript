// Init Local Storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init Weather Object
const weather = new Weather (weatherLocation.city);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location Event
document.getElementById('save-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  // Change location
  weather.changeLocation(city);

  // Set location in LS
  storage.setLocationData(city);

  // Get and display weather
  getWeather();

  // Close Modal
  document.querySelector(".modal-container").classList.remove("fade-in");
})

function getWeather() {
  weather.getWeather()
  .then(data => ui.paint(data))
  .catch(err => console.log ('error: ', err));
}

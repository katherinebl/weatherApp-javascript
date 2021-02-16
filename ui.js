class UI {
  constructor() {
    this.location = document.getElementById('location');
    this.conditionText = document.getElementById('condition-text');
    this.temperature = document.getElementById('temperature');
    this.conditionIcon = document.getElementById('condition-icon');
    this.currentHumidity = document.getElementById('current-humidity');
    this.currentPrecip = document.getElementById('current-precip');
    this.currentFeelslike = document.getElementById('current-feelslike');
    this.localTime = document.getElementById('location-localtime');
  }

  paint(data) {
    this.location.textContent = data.location.name;
    this.conditionText.textContent = data.current.condition.text;
    this.temperature.textContent = `${data.current.temp_c} °C`;
    this.conditionIcon.setAttribute('src', data.current.condition.icon);
    this.currentHumidity.textContent = `Humidity: ${data.current.humidity} %`;
    this.currentPrecip.textContent = `Precipitation: ${data.current.precip_mm} mm`;
    this.currentFeelslike.textContent = `Feels like: ${data.current.feelslike_c} °C`;
    this.localTime.textContent = `Date & Time: ${data.location.localtime}`;
  }
}

// Modal Controler
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".modal-button").addEventListener("click", function() {
    document.querySelector(".modal-container").classList.add("fade-in");
  })
  document.querySelectorAll(".modal-exit").forEach((elem) => {
    elem.addEventListener("click", () => {
      document.querySelector(".modal-container").classList.remove("fade-in");
    })
  })
})
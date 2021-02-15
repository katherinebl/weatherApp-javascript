class Weather {
  constructor(city) {
    this.apiKey= 'fefbd65fb1f34792a3d170143211502';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);
    const data = await response.json();
    //console.log('data: ', data);
    return data;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}
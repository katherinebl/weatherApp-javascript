class Storage {
  constructor() {
    this.city;
    this.defaultCity = 'Madrid';
  }

  // Set data to localStorage
  setLocationData(city) {
    localStorage.setItem('city', city);
  }

  // Get data from localStorage
  getLocationData() {
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    return {
      'city': this.city
    }
  }
}
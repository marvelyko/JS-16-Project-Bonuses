const apiKey = "1ef07e84c45eec7aa9eafee4df15573a";
const cities = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const iconn = document.querySelector(".icon");
const desc = document.querySelector(".description");
const hum = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

let data = {
  coord: { lon: -0.1257, lat: 51.5085 },
  weather: [
    { id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" },
  ],
  base: "stations",
  main: {
    temp: 289.49,
    feels_like: 289.06,
    temp_min: 288.62,
    temp_max: 290.93,
    pressure: 1018,
    humidity: 72,
  },
  visibility: 10000,
  wind: { speed: 4.12, deg: 230 },
  clouds: { all: 40 },
  dt: 1665588573,
  sys: {
    type: 2,
    id: 2075535,
    country: "GB",
    sunrise: 1665555533,
    sunset: 1665594890,
  },
  timezone: 3600,
  id: 2643743,
  name: "London",
  cod: 200,
};

let weather_result = {
  fetch_weather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        apiKey
    )
    .then((response) => response.json())
    .then((info) => this.display_weather(info))
  },
  display_weather: function(info){
    const {name} = info;
    const {icon, description} = info.weather[0];
    const {speed} = info.wind;
    const {temp, humidity} = info.main;
    cities.textContent = "Weather in " + name;
    iconn.src = "https://openweathermap.org/img/wn/" + icon + '.png';
    temperature.textContent = "Temperature is: " + temp + " F";
    desc.textContent = "Description: " + description;
    hum.textContent = "Humidity: " + humidity + "%";
    wind.textContent = "Wind speed: " + speed + "Km/h";
  },
  search: function (){
    this.fetch_weather(document.querySelector('.search').value)
  }
};
document.querySelector('button').addEventListener('click', function () {
    weather_result.search()
})

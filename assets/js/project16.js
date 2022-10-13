const apiKey = "1ef07e84c45eec7aa9eafee4df15573a";
const cities = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const iconn = document.querySelector(".icon");
const desc = document.querySelector(".description");
const hum = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

let weather_result = {
  fetch_weather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        apiKey
    )
      .then((response) => response.json())
      .then((info) => this.display_weather(info));
  },
  display_weather: function (info) {
    const { name } = info;
    const { icon, description } = info.weather[0];
    const { speed } = info.wind;
    const { temp, humidity } = info.main;
    cities.textContent = "Weather in " + name;
    iconn.src = "https://openweathermap.org/img/wn/" + icon + ".png";
    temperature.textContent =
      "Temperature is: " + Math.floor(temp - 273.15) + "C";
    desc.textContent = "Description: " + description;
    hum.textContent = "Humidity: " + humidity + "%";
    wind.textContent = "Wind speed: " + speed + "Km/h";
  },
  search: function () {
    this.fetch_weather(document.querySelector(".search").value);
  },
};
document.querySelector("button").addEventListener("click", function () {
  weather_result.search();
});

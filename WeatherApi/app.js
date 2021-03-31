window.onload = () => {
  let date = document.getElementById("date");
  date.innerText = getTime();
  const api = {
    key: "e76ba6c4a3ba695de57e943190fe2106",
    url: "https://api.openweathermap.org/data/2.5/weather",
  };

  let searchcity = document.getElementById("inputcity");
  searchcity.addEventListener("keypress", findWeather);

  function findWeather(event) {
    if (event.keyCode == 13) {
      getWeather(searchcity.value);
    }
  }

  function getWeather(city) {
    fetch(`${api.url}?q=${city}&appid=${api.key}&units=metric`)
      .then((weather) => {
        return weather.json();
      })
      .then(displayWeather);
  }
  function displayWeather(weather) {
    let temperature = document.getElementById("temperature");
    console.log(weather.main.temp);
    temperature.innerText = `${Math.floor(weather.main.temp)}`;

    let city = document.getElementById("city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let status = document.getElementById("status");
    console.log(weather.weather[0].main);
    status.innerText = `${weather.weather[0].main}`;
    let mintemp = document.getElementById("mintemp");
    mintemp.innerText = `${Math.floor(weather.main.temp_min)}`;
    let maxtemp = document.getElementById("maxtemp");
    maxtemp.innerText = `${Math.ceil(weather.main.temp_max)}`;
  }
  function getTime() {
    let date = new Date();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let str = "";
    str =
      days[date.getDay()] +
      " " +
      date.getDate() +
      " " +
      months[date.getMonth()] +
      " " +
      date.getFullYear();
    return str;
  }
};

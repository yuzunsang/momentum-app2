// apikey 숨기기
const API_KEY = config.apikey;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector(".weather img");
      const cityTemp = document.querySelector(".weather span");
      weather.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      cityTemp.innerText = `${data.name} ${~~data.main.temp}°C`;
    })
  );
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

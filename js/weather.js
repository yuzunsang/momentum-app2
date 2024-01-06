// apikey 숨기기
const API_KEY = config.apikey;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector(".weather span:first-child");
      const city = document.querySelector(".weather span:last-child");
      weather.innerText = `현재 위치 : ${data.name}`;
      city.innerText = `현재 기온 : ${~~data.main.temp}°C 현재 날씨 : ${
        data.weather[0].description
      }`;
    })
  );
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

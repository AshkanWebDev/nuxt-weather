<script setup>
// import { ref, computed } from "vue";
const getLoc = async () => {
  const url =
    "http://ip-api.com/json/?fields=status,country,city,lat,lon,timezone";

  const response = await fetch(url);
  const data = response.json();

  return data;
};
const getWeather = async (lat, lon) => {
  let api = "f0894defae7c5584798f8812232a40c2";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;

  const response = await fetch(url);
  const data = response.json();

  return data;
};
function getIcon(weMain) {
  let icon;
  switch (weMain) {
    case "Thunderstorm":
      icon = `${weMain}.svg`;
      break;
    case "Drizzle":
      icon = `${weMain}.svg`;
      break;
    case "Rain":
      icon = `${weMain}.svg`;
      break;
    case "Snow":
      icon = `${weMain}.svg`;
      break;
    case "Clear":
      const DayOrNigh = getDayOrNight();
      icon = `${weMain}-${DayOrNigh}.svg`;
      break;
    case "Clouds":
      icon = `${weMain}.svg`;
      break;
    case "Atmosphere":
      icon = `${weMain}.png`;
      break;
  }
  return icon;
}
function getDayOrNight() {
  let DayOrNigh;
  var d = new Date();

  const hour = d.getHours();

  if (hour >= 6 && hour <= 19) {
    DayOrNigh = "Day";
  } else {
    DayOrNigh = "Night";
  }

  return DayOrNigh;
}
function getTemp(weTemp) {
  const k = weTemp;
  const f = ((k - 273.15) * 9) / 5 + 32;
  const c = k - 273.15;
  return (temp = {
    kel: Math.floor(k),
    far: Math.floor(f),
    can: Math.floor(c),
  });
}
getLoc().then((locData) => {
  const timeZone = locData.timezone;
  console.log(locData);
  console.log(timeZone);
  getWeather(locData.lat, locData.lon).then((weData) => {
    const weTemp = weData.main.temp;
    const weMain = weData.weather[0].main;
    const weDes = weData.weather[0].description;
    console.log(weData);
    console.log(weTemp, weMain, weDes);
    return { weTemp, weMain, weDes };
  });
  return { timeZone };
});
</script>

<template>
  <h1 id="opencode">نمونه اپ آب و هوایی</h1>
  <div class="location">
    <h1 class="timezone">{{ timeZone }}</h1>
    <p class="icon">{{ weMain }}</p>
  </div>
  <div class="temperature">
    <div class="degree-section">
      <h2 class="degree">{{ weTemp }}</h2>
      <span>K</span>
    </div>
    <div class="temperature-description">{{ weDes }}</div>
  </div>
</template>

<style>
#opencode {
  font-size: 45px;
  margin-bottom: 100px;
}
.icon img {
  height: 256px;
  width: 256px;
}
.location,
.temperature {
  height: 30vh;
  /* width: 50%; */
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.temperature {
  flex-direction: column;
}
.temperature-description {
  font-size: 25px;
}
.degree-section {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.degree-section span {
  margin: 10px;
  font-size: 30px;
}
.degree-section h2 {
  font-size: 40px;
}
</style>

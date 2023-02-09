const axios = require("axios");

exports.getWeather = () => {
  return axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?lat=37.81&lon=144.96&appid=48c813cfb6b0b34e0ed5a2c2eb711307"
    )
    .then((res) => {
      return res.data;
    });
};

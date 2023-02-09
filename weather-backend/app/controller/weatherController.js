const openweathermapServiceAPI = require("../services/openweathermapServiceAPI");
const axios = require("axios");

exports.index = (req, res) => {
  res.json({
    message: "im fantastic oh yeah",
  });
};

exports.indexNew = async (req, res) => {
  const data = await openweathermapServiceAPI.getWeather();

  res.json(data);
};

const express = require("express");

const weatherController = require("../../../controller/weatherController");
const router = new express.Router();

router.get("/", weatherController.index);
router.get("/weather", weatherController.indexNew);

module.exports = router;

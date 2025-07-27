const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { registerHotel } = require("../controllers/HotelController");

const hotelRouter = express.Router();

hotelRouter.post("/", protect, registerHotel);

module.exports = hotelRouter;

const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  getUserData,
  storeRecentSearchedCities,
} = require("../controllers/UserController");

const userRouter = express.Router();

// In this route, it is a GET request to "/" route. Before request, the protect middleware will be called, which will get the user data in the "req" object and call next(), means getUserData() controller. Now it will get the user data with the "req" object
userRouter.get("/", protect, getUserData);
userRouter.post(
  "/store-recent-searched-cities",
  protect,
  storeRecentSearchedCities
);

module.exports = userRouter;

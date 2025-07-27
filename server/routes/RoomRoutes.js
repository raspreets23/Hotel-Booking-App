const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const {
  createRoom,
  getRooms,
  getOwnerRooms,
  toggleRoomAvailability,
} = require("../controllers/RoomController");

const roomRouter = express.Router();

roomRouter.post("/", upload.array("images", 4), protect, createRoom);
roomRouter.get("/", getRooms);
roomRouter.get("/owner", protect, getOwnerRooms);
roomRouter.post("toggle-availability", protect, toggleRoomAvailability);

module.exports = roomRouter;

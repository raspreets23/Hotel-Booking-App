const mongoose = require("mongoose");
const User = require("../models/User");
const Hotel = require("../models/Hotel");
const Room = require("../models/Room");

const bookingSchema = mongoose.Schema(
  {
    user: { type: String, required: true, ref: "User" },
    room: { type: String, required: true, ref: "Room" },
    hotel: { type: String, required: true, ref: "Hotel" },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
    guests: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },
    paymentMethod: { type: String, required: true, default: "Pay at hotel" },
    isPaid: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);

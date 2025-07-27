const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    hotel: { type: String, required: true, ref: "Hotel" },
    roomType: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    amenities: { type: Array, required: true },
    images: [{ type: String }],
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);

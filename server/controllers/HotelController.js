const Hotel = require("../models/Hotel");
const User = require("../models/User");

// API to register a hotel
const registerHotel = async (req, res) => {
  try {
    const { name, address, contact, city } = req.body;
    const owner = req.user._id;

    // Here check if hotel is already registered
    const hotel = await Hotel.findOne({ owner });

    if (hotel) {
      return res.json({ success: false, message: "Hotel already registered" });
    }

    await Hotel.create({ name, address, contact, owner, city });

    await User.findByIdAndUpdate(owner, { role: "hotel-owner" });

    res.json({ success: true, message: "Hotel registered successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = { registerHotel };

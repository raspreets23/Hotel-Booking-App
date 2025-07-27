const User = require("../models/User");
const { getAuth } = require("@clerk/express");

// Middleware to check if middleware is authenticated
const protect = async (req, res, next) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.json({ success: false, message: "Not authenticated" });
  }

  const user = await User.findOne({ id: userId });

  if (!user) {
    // 👈 Added null check
    return res.status(404).json({ success: false, message: "User not found" });
  }

  req.user = user;
  next();
};

module.exports = { protect };

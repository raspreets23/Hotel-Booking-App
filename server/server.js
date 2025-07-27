const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./configs/db");
const { clerkMiddleware } = require("@clerk/express");
const clerkWebhooks = require("./controllers/clerkWebhooks");
const userRouter = require("./routes/UserRoutes");
const hotelRouter = require("./routes/HotelRoutes");
const connectCloudinary = require("./configs/cloudinary");
const roomRouter = require("./routes/RoomRoutes");
const bookingRouter = require("./routes/BookingRoutes");

connectDB();
connectCloudinary();

const app = express();

// Enable cross-origin resource sharing
app.use(cors());

// Middlewares
app.use(express.json());
app.use(clerkMiddleware());

// API to listen clerk webhooks
app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => {
  res.send("API working fine");
});
app.use("/api/user", userRouter);
app.use("/api/hotel", hotelRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/bookings", bookingRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./configs/db");
const { clerkMiddleware } = require("@clerk/express");
const clerkWebhooks = require("./controllers/clerkWebhooks");

connectDB();

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

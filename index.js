const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./src/configs/db");
const config = require("./src/configs/config");
const authRoutes = require("./src/routes/authRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// connect to MongoDB - FIXED: Use db.connect() instead of connectDB()
db.connect();

// Routes
app.use("/api/auth/v1", authRoutes);

app.get("/", (req, res) => {
  res.send("Server is running successfully.");
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
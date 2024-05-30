import express from "express";
import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();
import userRoutes from "./routes/user.route.js";
import { signup } from "./controllers/auth.controller.js";

mongoose
  .connect(
    "mongodb+srv://shreyansh:shreyansh@mern.tjbbuks.mongodb.net/mern-auth?retryWrites=true&w=majority&appName=mern"
  )
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/auth", signup);
app.use((err, res) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});

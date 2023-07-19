import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import cors from "cors";

import connectDB from "./config/db.js";

//configure env
dotenv.config();

//databse config
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", CategoryRoute);
app.use("/api/v1/product", ProductRoute);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running onmode on port ${PORT}`.bgGreen.white);
});

import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import userRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import connectDB from "./config/db.js";
import { fileURLToPath } from "url";

//configure env
dotenv.config();

//databse config
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: "500mb",
    extended: true,
    parameterLimit: 1000000,
  })
);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/category", CategoryRoute);
app.use("/api/v1/product", ProductRoute);

app.use(express.static(path.join(__dirname, "./client/build")));

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running onmode on port ${PORT}`.bgGreen.white);
});

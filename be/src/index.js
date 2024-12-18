import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const MONGO = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use("/api", routes);

if (!MONGO) {
  throw new Error("MONGODB_CONNECTION_STRING is not set");
}

mongoose
  .connect(MONGO)
  .then(async () => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

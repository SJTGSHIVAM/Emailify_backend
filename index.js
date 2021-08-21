import express from "express";
import mongoose from "mongoose";
import _ from "./services/passport.js";
import authRoutes from "./routes/authRoutes.js";
import { monoURI } from "./config/keys.js";
mongoose.connect(monoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();
authRoutes(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);

import express from "express";
import _ from "./services/passport.js";
import authRoutes from "./routes/authRoutes.js";
const app = express();
authRoutes(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);

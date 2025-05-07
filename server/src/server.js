import express from "express";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/posts", postRoutes);

app.listen(8800, () => {
  console.log("Connected");
});

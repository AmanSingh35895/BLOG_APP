import express from "express";
import { testPost } from "../controller/postsController.js";

const router = express.Router();

router.get("/test", testPost);

export default router;

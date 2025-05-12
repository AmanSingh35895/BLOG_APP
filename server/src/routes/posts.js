import express from "express";
import { getpost, getPosts } from "../controller/postsController.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getpost);

export default router;

import { db } from "../db.js";
import jwt from "jsonwebtoken";
export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";
  // console.log(q);
  // console.log(req);

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);
    // console.log(data);
    return res.status(200).json(data);
  });
};

export const getpost = (req, res) => {
  console.log(req.params);
  const q =
    "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.id WHERE p.id=?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    console.log(data);
    return res.status(200).json(data);
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

    const q =
      "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`, `uid`) VALUES(?)";

    const { title, desc, img, cat, date } = req.body;

    const values = [title, desc, img, cat, date, userInfo.id];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Post has been created", data);
    });
  });
};

export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

    const postId = req.params.id;

    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err)
        return res.status(403).json("You can delete only your post", err);

      return res.status(200).json("Post has been deleted", data);
    });
  });
};

export const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

    const postId = req.params.id;

    const q =
      "UPDATE posts SET `title`=?, `desc`=?, `img`=?, `cat`=?, WHERE `id`=? AND `uid`=?";

    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }

      return res.status(200).json("Post has been updated", data);
    });
  });
};

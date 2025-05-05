import { db } from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const avatar = "https://avatar.iran.liara.run/public";

export const register = (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  const query = "SELECT * FROM users WHERE email=? OR username=?";
  db.query(query, [email, username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists!");

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const query =
      "INSERT INTO users(`username`, `email`, `password`, `img`) VALUES(?)";
    const values = [username, email, hashedPassword, avatar];

    db.query(query, [values], (err, data) => {
      if (err) return res.json(err);
      console.log(data);
      return res.status(200).json("User has been created");
    });
  });
};

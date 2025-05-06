import { db } from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const avatar = "https://avatar.iran.liara.run/public";

export const register = (req, res) => {
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

export const login = (req, res) => {
  const { username } = req.body;
  const query = "SELECT * FROM users WHERE username = ?";

  db.query(query, [username], (err, data) => {
    if (err) return res.json(err);
    console.log(data);
    if (data.length === 0)
      return res.status(404).json("User not found! Please register first");

    //checking password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password,
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Username or password is incorrect");
    const token = jwt.sign({ id: data[0].id }, "jwtKey");
    const { password, ...restUser } = data[0];

    res
      .cookie("access-token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(restUser);
  });
};

export const logout = (_req, res) => {
  res
    .clearCookie("access-token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out");
};

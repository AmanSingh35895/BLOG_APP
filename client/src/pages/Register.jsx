import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const userInputs = {
    username: username,
    email: email,
    password: password,
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/v1/auth/register", userInputs);
      console.log(response.data);
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-orange-300">
      <div className="Register-form">
        <h1 className="flex justify-center text-2xl font-bold text-slate-600 mb-3">
          Register
        </h1>
        <div className="flex flex-col p-12 bg-white justify-center items-center border rounded-md shadow-md">
          <div className="flex flex-col gap-6 mb-5">
            <input
              className="border-b border-black p-2 text-xs focus:outline-none"
              name="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                console.log(username);
              }}
            />
            <input
              className="border-b border-black p-2 text-xs focus:outline-none"
              name="email"
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="border-b border-black p-2 text-xs focus:outline-none"
              name="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="py-2 px-5 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-400 w-full focus:outline-none"
          >
            Register
          </button>
          <div className="flex flex-col mt-4 items-center justify-center">
            <span className="text-xs">Do you have an account?</span>
            <Link to="/login">
              <span className="text-xs text-blue-700 hover:text-blue-500 hover:text-sm">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

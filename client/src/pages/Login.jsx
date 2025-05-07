import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const userInputs = {
    username: username,
    password: password,
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(userInputs);
    if (result.success) {
      if (error !== "") setError("");
      console.log(result.data);
      navigate("/");
    } else {
      setError(error.response.data);
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-orange-300">
      <div className="login-form">
        <h1 className="flex justify-center text-2xl font-bold text-slate-600 mb-3">
          Login
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
              }}
            />
            <input
              className="border-b border-black p-2 text-xs focus:outline-none"
              name="password"
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            onClick={handleLogin}
            className="py-2 px-5 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-400 w-full focus:outline-none"
          >
            Login
          </button>
          <div className="flex flex-col mt-4 items-center justify-center">
            <span className="text-xs">Don't you have an account?</span>
            <Link to="/register">
              <span className="text-xs text-blue-700 hover:text-blue-500 hover:text-sm">
                Register
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

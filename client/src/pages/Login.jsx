import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
            />
            <input
              className="border-b border-black p-2 text-xs focus:outline-none"
              name="password"
              type="text"
              placeholder="password"
            />
          </div>
          <button className="py-2 px-5 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-400 w-full focus:outline-none">
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

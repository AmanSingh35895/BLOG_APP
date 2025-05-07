import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Header = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      console.log(result.data);
      navigate("/login");
    } else {
      alert("something went wrong");
      console.log(result.error);
    }
  };

  return (
    <div className="container flex min-w-full justify-between p-2 mb-8">
      <div className="logo flex items-center">
        <Link to="/">Logo</Link>
      </div>
      <div className="links flex gap-4 items-center">
        <Link>
          <h6 className="shadow-lg">Art</h6>
        </Link>
        <Link>
          <h6 className="shadow-lg">Science</h6>
        </Link>
        <Link>
          <h6 className="shadow-lg">Technology</h6>
        </Link>
        <Link>
          <h6 className="shadow-lg">Cinema</h6>
        </Link>
        <Link>
          <h6 className="shadow-lg">Design</h6>
        </Link>
        <Link>
          <h6 className="shadow-lg">Food</h6>
        </Link>
        <div className="flex font-medium gap-5 ml-8 items-center">
          <span className="shadow-lg">{currentUser?.username || ""}</span>
          {currentUser ? (
            <button className="shadow-lg" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="link">
              Login
            </Link>
          )}
          <h6 className="bg-orange-300 rounded-full p-2">
            <Link>Write</Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Header;

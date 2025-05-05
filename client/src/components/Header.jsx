import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
          <button className="shadow-lg">Aman</button>
          <button className="shadow-lg">Logout</button>
          <h6 className="bg-orange-300 rounded-full p-2">
            <Link>Write</Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Header;

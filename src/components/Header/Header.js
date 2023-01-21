import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-12 py-4 bg-orange-100">
      <div>
        <h1 className="text-2xl font-bold">
          <span className="text-red-600">Quiz</span>{" "}
          <span className="text-blue-900">Hunter</span>
        </h1>
      </div>
      <nav className="font-bold text-blue-900">
        <Link className="mr-4 " to="/">
          Home
        </Link>
        <Link className="mr-4 " to="/topics">
          Topics
        </Link>
        <Link className="mr-4 " to="/statistics">
          Statistics
        </Link>
        <Link className="mr-4 " to="/blog">
          Blog
        </Link>
      </nav>
    </div>
  );
};

export default Header;

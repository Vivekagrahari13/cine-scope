import React from "react";
import Logo from "../assets/movie-logo.png";

import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex border space-x-8  pl-3 py-4">
      <img className="w-12.5" src={Logo} alt="" />
      <Link to="/" className="text-blue-500 text-3xl font-bold">
        Movies
      </Link>
      <Link to="/watchlist" className="text-blue-500 text-3xl font-bold">
        Watchlist
      </Link>
    </div>
  );
};

export default Navbar;

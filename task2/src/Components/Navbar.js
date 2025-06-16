import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link className="nav-logo" to={"/"}>
        <h1>Note-ify</h1>
      </Link>
    </nav>
  );
};

export default Navbar;

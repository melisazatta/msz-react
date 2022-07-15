import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Gallery
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

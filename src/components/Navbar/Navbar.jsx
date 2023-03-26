import React from "react";
import { Link } from "react-router-dom";
import { YoutubeIcon } from "../Assets/Constants";
import { SearchBar } from "../Container";
import "./Navbar.scss";

const Navbar = () => (
  <nav className="nav-bar">
    <Link to="/" className="nav-logo">
      <YoutubeIcon style={{ color: "red", fontSize: "2rem", scale: "1.5" }} />
    </Link>

    <SearchBar />
  </nav>
);

export default Navbar;

import React from "react";
import { SearchIcon } from "../../Assets/Constants";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <form className="search-form" onSubmit={() => {}}>
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        value={""}
        onChange={() => {}}
      />
      <button className="search-btn" type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;

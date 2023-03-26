import React from "react";
import { categories } from "../../Assets/Constants";
import "./SideBar.scss";

const selectedCategory = "New";

const SideBar = () => (
  <div className="sidebar">
    {categories.map((category) => (
      <button
        className="category-btn"
        key={category.name}
        style={{
          backgroundColor: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.name === selectedCategory ? "1" : "0.8",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </div>
);

export default SideBar;

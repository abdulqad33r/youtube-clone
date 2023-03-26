import React from "react";
import "./Feed.scss";
import { SideBar } from "../Container";

const Feed = () => {
  return (
    <div className="feed-container">
      <div className="feed-box">
        <SideBar />
        <p className="copyright">Copyright 2023 Scienmatic</p>
      </div>

      <div className="feed-videos">
        <h4 className="video-category-text">
          New
          <span style={{ color: "#F31503" }}>Videos</span>
        </h4>
      </div>
    </div>
  );
};

export default Feed;

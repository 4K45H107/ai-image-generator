import React from "react";
import "./ImageGenerator.css";
import defaultImage from "../Assets/default_image.svg";

const ImageGenerator = () => {
  return (
    <div className="ai-image-generator">
      <div className="header">
        AI Image <span>Generator</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img src={defaultImage} alt="" />
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          className="search-text"
          placeholder="Describe what you want to create!"
        ></input>
        <div className="generate-btn">Generate</div>
      </div>
    </div>
  );
};

export default ImageGenerator;

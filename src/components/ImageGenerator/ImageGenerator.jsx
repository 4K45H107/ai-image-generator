import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import defaultImage from "../Assets/default_image.svg";

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState("/");
  const [loading, setLoading] = useState(false);
  let inputRef = useRef(null);

  const handleGenerate = async () => {
    setLoading(true);
    // TODO: API call of openAI
    // if (inputRef.current.value === "") {
    //   return 0;
    // }
    // const response = await fetch(
    //   "https://api.openai.com/v1/images/generations",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization:
    //         "Bearer sk-loQLlmYPXh_Slxpw8vDeZZinAo0HPjthGU9o4FhAV1T3BlbkFJmUETFO_9RbLTTBd4UWUwiwutciVnYz-xqzOpgHhaEA",
    //       "User-Agent": "Chrome",
    //     },
    //     body: JSON.stringify({
    //       prompt: `${inputRef.current.value}`,
    //       size: "512x512",
    //       n: 1,
    //     }),
    //   }
    // );
    // let json = await response.json();
    // let data = json.data;
    // setImageUrl(data[0].url);
    setImageUrl("https://picsum.photos/424/424");
    setTimeout(() => {  
      setLoading(false);
    }, 2000);
  };

  // sk-R5Eyz2xM_Tivvqcgktk9BkigGWVGoV-_OpvaGSmTnVT3BlbkFJfq2OqBuHjYAv8LJYtQYAMyv770r-XBYD_G3prp2PAA
  return (
    <div className="ai-image-generator">
      <div className="header">
        AI Image <span>Generator</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img src={imageUrl === "/" ? defaultImage : imageUrl} alt="" />
        </div>
      </div>
      <div className="loading">
        <div className={loading ? "loading-bar-full" : "loading-bar"} ></div>
      </div>
      <div className="search-box">
        <input
          ref={inputRef}
          type="text"
          className="search-text"
          placeholder="Describe what you want to create!"
        ></input>
        <button className="generate-btn" onClick={handleGenerate}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default ImageGenerator;

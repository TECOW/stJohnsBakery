import React from "react";
import "./ImageBox.css"
import HomeBread1 from "./HomeBread1.png";
import HomeBread2 from "./HomeBread2.png";
import HomeBread3 from "./HomeBread3.png";

function ImageBox() {
  return (
    <div className="HomeBread1Container">
      <img className="HomeBread1ImgFile" src={HomeBread1} alt="HomeBread1" />;
      <img className="HomeBread2ImgFile" src={HomeBread2} alt="HomeBread2" />;
      <img className="HomeBread3ImgFile" src={HomeBread3} alt="HomeBread3" />;
    </div>
  )
}





export default ImageBox;

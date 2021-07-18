import React from "react";
import Header from "./Header";
import WebsiteName from "./WebsiteName";
import "./App.css"
import ImageBox from "./ImageBox"
import Contact from "./ContactMe"

function App() {
  return (
    <div className="HomeBody">
      <div className="heading">
        <WebsiteName />
        <Header />
        <ImageBox />
      </div>
      <div className="footer">
        <Contact />
      </div>
    </div>
  );
}

export default App;

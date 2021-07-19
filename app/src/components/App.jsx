import React from "react";
import Header from "./Header";
import "./App.css"
import ImageBox from "./ImageBox"
import Contact from "./ContactMe"

function App() {
  return (
    <div className="HomeBody">
      <div className="heading">
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

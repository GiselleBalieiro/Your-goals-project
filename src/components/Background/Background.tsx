import React from "react";
import "./Background.css";

const Background = ({children}) => {
  return (
    <div className="background">
        <div className="circle"></div>
        {children}
    </div>
  );
}

export default Background;
import React from "react";
import "./flexwrapper.css";

function FlexWrapper({ children, className = "" }) {
  return <div className={`flex ${className}`}>{children}</div>;
}

export default FlexWrapper;
import React from "react";
import "./Overlay.css";

const Overlay: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return <div className="overlay" onClick={onClick}></div>;
};

export default Overlay;

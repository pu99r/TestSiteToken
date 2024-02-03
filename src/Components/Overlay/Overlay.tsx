import React from "react";
import "./Overlay.css";

interface OverlayProps {
  onClick: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ onClick }) => {
  return <div className="overlay" onClick={onClick}></div>;
};

export default Overlay;
/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const LampLight = ({ className, overlapGroupClassName }) => {
  return (
    <div className={`lamp-light ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <img
          className="ellipse"
          alt="Ellipse"
          src="https://generation-sessions.s3.amazonaws.com/66f771482170ed4ccb5de595a9f3c525/img/ellipse-75-4.svg"
        />
        <img
          className="vector"
          alt="Vector"
          src="https://generation-sessions.s3.amazonaws.com/66f771482170ed4ccb5de595a9f3c525/img/vector-265-4.svg"
        />
      </div>
    </div>
  );
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IosUiStatusBar = ({
  className,
  rightSideClassName,
  rightSide = "https://generation-sessions.s3.amazonaws.com/66f771482170ed4ccb5de595a9f3c525/img/right-side-1@2x.png",
  unionClassName,
  union = "https://generation-sessions.s3.amazonaws.com/66f771482170ed4ccb5de595a9f3c525/img/union-6.svg",
}) => {
  return (
    <div className={`ios-UI-status-bar ${className}`}>
      <img className={`right-side ${rightSideClassName}`} alt="Right side" src={rightSide} />
      <div className="left-side">
        <div className="time">
          <div className="element">9:41</div>
        </div>
      </div>
      <img className={`union ${unionClassName}`} alt="Union" src={union} />
    </div>
  );
};

IosUiStatusBar.propTypes = {
  rightSide: PropTypes.string,
  union: PropTypes.string,
};

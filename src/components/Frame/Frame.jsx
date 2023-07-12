/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { UiHome23 } from "../../icons/UiHome23";
import "./style.css";

export const Frame = ({
  nav,
  className,
  icon = <UiHome23 className="UI-home" />,
  vectorClassName,
  vector = "https://generation-sessions.s3.amazonaws.com/66f771482170ed4ccb5de595a9f3c525/img/vector-4.svg",
  groupClassName,
  group = "https://generation-sessions.s3.amazonaws.com/66f771482170ed4ccb5de595a9f3c525/img/group-21-4@2x.png",
}) => {
  return (
    <div className={`frame ${className}`}>
      {icon}
      <img
        className={`img ${nav} ${vectorClassName}`}
        alt="Vector"
        src={
          nav === "add"
            ? "https://generation-sessions.s3.amazonaws.com/66f771482170ed4ccb5de595a9f3c525/img/vector-3.svg"
            : vector
        }
      />
      <img
        className={`group nav-${nav} ${groupClassName}`}
        alt="Group"
        src={
          nav === "community"
            ? "https://generation-sessions.s3.amazonaws.com/66f771482170ed4ccb5de595a9f3c525/img/group-21-2@2x.png"
            : group
        }
      />
    </div>
  );
};

Frame.propTypes = {
  nav: PropTypes.oneOf(["community", "home", "add", "none-selected"]),
  vector: PropTypes.string,
  group: PropTypes.string,
};

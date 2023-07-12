/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const CalendarLight = ({ className }) => {
  return (
    <svg
      className={`calendar-light ${className}`}
      fill="none"
      height="30"
      viewBox="0 0 30 30"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="white" height="18.75" rx="2" stroke="#222222" width="22.5" x="3.75" y="7.5" />
      <path className="path" d="M3.75 13.75L26.25 13.75" stroke="#222222" strokeLinecap="round" />
      <path className="path" d="M11.25 20H18.75" stroke="#222222" strokeLinecap="round" />
      <path className="path" d="M10 3.75L10 8.75" stroke="#222222" strokeLinecap="round" />
      <path className="path" d="M20 3.75L20 8.75" stroke="#222222" strokeLinecap="round" />
    </svg>
  );
};

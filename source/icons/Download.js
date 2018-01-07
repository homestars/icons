import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  stroke: PropTypes.string
};

function Download({ stroke }) {
  return pug`
    svg(xmlns="http://www.w3.org/2000/svg", width="22", height="22", viewBox="0 0 22 22")
      polyline(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth="2"
        points="20 16 20 20 2 20 2 16"
      )
      path(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth="2"
        d="M10.9996,16 L10.9996,2"
      )
      polyline(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth="2"
        points="16.003 11 11 16.001 6.002 11"
      )
  `;
}

Download.propTypes = propTypes;

export default iconWrapper(Download);

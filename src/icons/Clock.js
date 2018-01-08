import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string
};

const defaultProps = {
  fill: "none"
};

function Clock({ fill, stroke }) {
  return pug`
    svg(width="22", height="22", viewBox="0 0 22 22")
      path(
        fill=fill
        stroke=stroke
        strokeLinecap="round"
        style={ strokeLinejoin: "round" }
        strokeWidth="2"
        d="M11,21 C5.47677802,21 1,16.523222 1,11 C1,5.47677802 5.47677802,1 11,1 C16.523222,1 21,5.47677802 21,11 C21,16.523222 16.523222,21 11,21 Z"
      )
      polyline(
        fill=fill
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth="2"
        points="11 5 11 10.834 14 14"
      )
  `;
}

Clock.propTypes = propTypes;
Clock.defaultProps = defaultProps;

export default iconWrapper(Clock);

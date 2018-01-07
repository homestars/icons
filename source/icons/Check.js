import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  stroke: PropTypes.string
};

function Check({ stroke }) {
  return pug`
    svg(width="20", height="20", viewbox="0 0 20 20")
      polyline(
        fill="none"
        stroke=stroke
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="2,11.484 7.867,16.668 18,3.333"
      )
  `;
}

Check.propTypes = propTypes;

export default iconWrapper(Check);

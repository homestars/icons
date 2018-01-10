import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  stroke: PropTypes.string
};

function X({ stroke }) {
  return pug`
    svg(xmlns="http://www.w3.org/2000/svg", width="22", height="22", viewBox="0 0 22 22")
      path(
        fill="none"
        stroke=stroke
        strokeWidth="2"
        strokeLinecap="round"
        d="M17.5 4.5L4.5 17.5M4.5 4.5L17.5 17.5"
      )
  `;
}

X.propTypes = propTypes;

export default iconWrapper(X, { height: 12, width: 12 });

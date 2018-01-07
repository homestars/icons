import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  stroke: PropTypes.string
};

function Add({ stroke }) {
  return pug`
    svg(xmlns="http://www.w3.org/2000/svg", width="22", height="22", viewbox="0 0 22 22")
      path(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeWidth="2"
        d="M11 2L11 20M2 11L20 11"
      )
  `;
}

Add.propTypes = propTypes;

export default iconWrapper(Add);

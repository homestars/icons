import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  fill: PropTypes.string,
  innerFill: PropTypes.string,
  stroke: PropTypes.string
};

const defaultProps = {
  fill: "none"
};

function VacationMode({ fill, innerFill, stroke }) {
  return pug`
    svg(xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", width="22", height="22", viewbox="0 0 22 22")
      path(
        fill=fill
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.7586207,19 L3.24137931,19 C2.55582759,19 2,18.4301364 2,17.7272727 L2,6.27272727 C2,5.56986364 2.55582759,5 3.24137931,5 L18.7586207,5 C19.4441724,5 20,5.56986364 20,6.27272727 L20,17.7272727 C20,18.4301364 19.4441724,19 18.7586207,19 Z"
      )
      path(
        fill=innerFill || fill
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 5C8 3.34325 9.34325 2 11 2 12.65675 2 14 3.34325 14 5M15 12C15 14.209 13.209 16 11 16 8.791 16 7 14.209 7 12 7 9.791 8.791 8 11 8 13.209 8 15 9.791 15 12L15 12z"
      )
      path(
        fill="none"
        stroke=stroke
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14,9.02380371 L8,15"
      )
  `;
}

VacationMode.propTypes = propTypes;
VacationMode.defaultProps = defaultProps;

export default iconWrapper(VacationMode);

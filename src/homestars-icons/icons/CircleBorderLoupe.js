import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import { cyan } from "../colours";

const propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number
};

const defaultProps = {
  fill: "#DDF4EC",
  stroke: "#CFCFCF",
  strokeWidth: 2
};

function CircleBorderLoupe({ circleStroke, fill, stroke, strokeWidth }) {
  return (
    <svg viewBox="0 0 47 47">
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <circle
          fill={fill}
          cx="22.9500006"
          cy="22.9500006"
          r="22.9500006"
        ></circle>
        <circle fill="#FFFFFF" cx="23" cy="23" r="15"></circle>
        <g
          transform="translate(16.000000, 16.000000)"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        >
          <line
            x1="10.8333333"
            y1="10.8333333"
            x2="15"
            y2="15"
            stroke={stroke}
            strokeLinecap="round"
          ></line>
          <path
            d="M12.5,6.25 C12.5,9.70208333 9.70208333,12.5 6.25,12.5 C2.79791667,12.5 0,9.70208333 0,6.25 C0,2.79791667 2.79791667,0 6.25,0 C9.70208333,0 12.5,2.79791667 12.5,6.25 Z"
            stroke={stroke}
            strokeLinecap="round"
          ></path>
        </g>
      </g>
    </svg>
  );
}

CircleBorderLoupe.propTypes = propTypes;
CircleBorderLoupe.defaultProps = defaultProps;

export default iconWrapper(CircleBorderLoupe);

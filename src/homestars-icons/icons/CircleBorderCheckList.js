import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import { cyan } from "../colours";

const propTypes = {
  fill: PropTypes.string,
  checkStroke: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number
};

const defaultProps = {
  fill: "#DDF4EC",
  checkStroke: "#00C991",
  stroke: "#979797",
  strokeWidth: 1
};

function CircleBorderCheckList({
  fill,
  checkStroke,
  stroke,
  strokeWidth
}) {
  return (
    <svg viewBox="0 0 47 47">
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <circle
          fill={fill}
          cx="22.9500006"
          cy="22.9500006"
          r="22.9500006"
        ></circle>
        <circle fill="#FFFFFF" cx="23" cy="23" r="16"></circle>
        <line
          x1="25"
          y1="18"
          x2="32.0369882"
          y2="18"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        ></line>
        <line
          x1="25"
          y1="28"
          x2="32.0369882"
          y2="28"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        ></line>
        <polyline
          stroke={checkStroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          points="15 18 17 20 20 15"
        ></polyline>
        <rect
          stroke={stroke}
          strokeWidth={strokeWidth}
          x="14"
          y="25"
          width="6"
          height="6"
          rx="1"
        ></rect>
      </g>
    </svg>
  );
}

CircleBorderCheckList.propTypes = propTypes;
CircleBorderCheckList.defaultProps = defaultProps;

export default iconWrapper(CircleBorderCheckList);

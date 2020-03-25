import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import { cyan } from "../colours";

const propTypes = {
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number
};

const defaultProps = {
  stroke: cyan,
  strokeWidth: 2,
};

function Fence({ stroke, strokeWidth }) {
  return (
    <svg viewBox="0 0 56 57">
      <g
        fill="none"
        fillRule="evenodd"
        stroke={stroke}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        transform="translate(3 6)"
      >
        <path
          d="M5,35 L5,40 L0,40 L0,35 L5,35 Z M20,35 L20,40 L16,40 L16,35 L20,35 Z M35,35 L35,40 L31,40 L31,35 L35,35 Z M51,35 L51,40 L46,40 L46,35 L51,35 Z M5,9 L5,14 L0,14 L0,9 L5,9 Z M20,9 L20,14 L16,14 L16,9 L20,9 Z M35,9 L35,14 L31,14 L31,9 L35,9 Z M51,9 L51,14 L46,14 L46,9 L51,9 Z"
        />
        <path
          d="M5.49800079,0 L11,4.96158914 L11,45.9615891 L0,45.9615891 L0,4.96158914 L5.49800079,0 Z M20.4980008,0 L26,4.96158914 L26,45.9615891 L15,45.9615891 L15,4.96158914 L20.4980008,0 Z M35.4980008,0 L41,4.96158914 L41,45.9615891 L30,45.9615891 L30,4.96158914 L35.4980008,0 Z"
          transform="translate(5)"
        />
      </g>
    </svg>
  );
}

Fence.propTypes = propTypes;
Fence.defaultProps = defaultProps;

export default iconWrapper(Fence);

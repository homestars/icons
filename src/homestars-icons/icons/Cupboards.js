import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import { cyan } from "../colours";

const propTypes = {
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number
};

function Cupboards({ stroke, strokeWidth }) {
  return (
    <svg viewBox="0 0 45 46">
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          stroke={stroke}
          strokeWidth={strokeWidth}
        >
          <rect
            strokeLinejoin="round"
            x="5.625"
            y="1.61403509"
            width="34.5535714"
            height="41.9649123"
          ></rect>
          <line
            x1="22.9017857"
            y1="1.21052632"
            x2="22.9017857"
            y2="43.9824561"
          ></line>
          <ellipse
            cx="17.2767857"
            cy="38.3333333"
            rx="2.00892857"
            ry="2.01754386"
          ></ellipse>
          <ellipse
            cx="28.5267857"
            cy="38.3333333"
            rx="2.00892857"
            ry="2.01754386"
          ></ellipse>
        </g>
      </g>
    </svg>
  );
}

Cupboards.propTypes = propTypes;

export default iconWrapper(Cupboards);

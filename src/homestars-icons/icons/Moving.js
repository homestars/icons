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
  stroke: cyan,
  strokeWidth: 2,
};

function Moving({ stroke, strokeWidth }) {
  return (
    <svg
      viewBox="0 0 56 57"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke={stroke}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        transform="translate(2 11)"
      >
        <path
          d="M32.7200001,8.96000004 L41.6161602,8.96000004 C42.3564802,8.96000004 43.0497602,9.32624004 43.4675202,9.93776004 L47.2800002,16.8000001 L48.4000002,16.8000001 C49.6600002,16.8000001 50.6400002,17.6310401 50.6400002,19.2740801 L50.6400002,26.8766401 C50.6400002,28.1131201 49.6364802,29.1200001 48.4000002,29.1200001 L46.1600002,29.1200001"
        />
        <polyline
          strokeLinecap="round"
          points="15.36 1.12 32.72 1.12 32.72 29.12 15.92 29.12"
        />
        <line
          x1="6.96"
          x2="1.36"
          y1="29.12"
          y2="29.12"
          strokeLinecap="round"
        />
        <path
          strokeLinecap="round"
          d="M46.1600002 30.2498561C46.1600002 32.7183361 44.1496002 34.7197761 41.6699202 34.7197761 39.1902402 34.7197761 37.1798402 32.7183361 37.1798402 30.2498561 37.1798402 27.7813761 39.1902402 25.7799361 41.6699202 25.7799361 44.1496002 25.7799361 46.1600002 27.7813761 46.1600002 30.2498561zM15.9397121 30.2498561C15.9397121 32.7183361 13.9293121 34.7197761 11.4496321 34.7197761 8.96995205 34.7197761 6.95955204 32.7183361 6.95955204 30.2498561 6.95955204 27.7813761 8.96995205 25.7799361 11.4496321 25.7799361 13.9293121 25.7799361 15.9397121 27.7813761 15.9397121 30.2498561z"
        />
        <line
          x1="32.72"
          x2="37.2"
          y1="29.12"
          y2="29.12"
          strokeLinecap="round"
        />
        <polyline
          strokeLinecap="round"
          points="36.295 17.92 42.8 17.92 42.8 16.797 40.56 13.439"
        />
        <line
          x1="4.72"
          x2="2.48"
          y1="7.84"
          y2="7.84"
          strokeLinecap="round"
        />
        <line
          x1="11.44"
          x2="9.2"
          y1="1.12"
          y2="1.12"
          strokeLinecap="round"
        />
        <line
          x1="8.96"
          x2="24.76"
          y1="7.84"
          y2="7.84"
          strokeLinecap="round"
        />
        <line
          x2="19.04"
          y1="14.56"
          y2="14.56"
          strokeLinecap="round"
        />
    </g>
  </svg>
  );
}

Moving.propTypes = propTypes;
Moving.defaultProps = defaultProps;

export default iconWrapper(Moving);

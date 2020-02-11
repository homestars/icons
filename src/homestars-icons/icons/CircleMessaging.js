import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import { cyan } from "../colours";

const propTypes = {
  fill: PropTypes.string,
  dotFill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number
};

const defaultProps = {
  fill: "#F0FAFF",
  dotFill: "#27A9E1",
  stroke: "#818181",
  strokeWidth: 1
};

function CircleMessaging({ fill, dotFill, stroke, strokeWidth }) {
  return (
    <svg viewBox="0 0 47 47">
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <circle
          fill={fill}
          cx="22.9500006"
          cy="22.9500006"
          r="22.9500006"
        ></circle>
        <path
          d="M10,27.8708558 C10,30.0399634 11.5818289,31.8 13.5347613,31.8 L15.5065087,31.8 L15.5065087,36 L20.7681042,31.8 L28.4565603,31.8 C30.4079465,31.8 31.9913217,30.0399634 31.9913217,27.8708558 L32,18.9291442 C32,16.7600366 30.4166248,15 28.4652387,15 L13.5434396,15 C11.5905072,15 10.0086783,16.7600366 10.0086783,18.9291442 L10,27.8708558 Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          fill="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M31.9649113,27.3163786 L32.4222722,27.3200004 C34.3815272,27.3200004 35.9712872,25.5851071 35.9712872,23.4469867 L35.9800006,14.6330137 C35.9800006,12.4948933 34.3902405,10.7600001 32.4309855,10.7600001 L17.4490152,10.7600001 C15.4882077,10.7600001 13.9000001,12.4948933 13.9000001,14.6330137"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <circle fill={dotFill} cx="15.5" cy="23.5" r="1.5"></circle>
        <circle fill={dotFill} cx="20.5" cy="23.5" r="1.5"></circle>
        <circle fill={dotFill} cx="25.5" cy="23.5" r="1.5"></circle>
      </g>
    </svg>
  );
}

CircleMessaging.propTypes = propTypes;
CircleMessaging.defaultProps = defaultProps;

export default iconWrapper(CircleMessaging);

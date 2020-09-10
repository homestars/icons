import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number
};

const defaultProps = {
  fill: "none",
  stroke: "none",
  strokeWidth: "1"
};

function WaitingClock({ fill, stroke, strokeWidth }) {
  return (
    <svg
      width="21px"
      height="21px"
      viewBox="0 0 21 21"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fill-rule="evenodd"
      >
        <g
          id="Company/Chat-view----empty-state"
          transform="translate(-350.000000, -140.000000)"
        >
          <g id="Group-2" transform="translate(350.000000, 140.000000)">
            <path
              d="M10.5,0.5 C13.2614,0.5 15.7613993,1.61930112 17.5710491,3.42895089 C19.3806989,5.23860066 20.5,7.7386 20.5,10.5 C20.5,13.2614 19.3806989,15.7613993 17.5710491,17.5710491 C15.7613993,19.3806989 13.2614,20.5 10.5,20.5 C7.7386,20.5 5.23860066,19.3806989 3.42895089,17.5710491 C1.61930112,15.7613993 0.5,13.2614 0.5,10.5 C0.5,7.7386 1.61930112,5.23860066 3.42895089,3.42895089 C5.23860066,1.61930112 7.7386,0.5 10.5,0.5 Z"
              id="Stroke-1"
              stroke="#C1C2C3"
              fill="#F8F9FA"
            ></path>
            <path
              d="M10.5,2.5 C12.70912,2.5 14.7091193,3.39544112 16.1568391,4.84316089 C17.6045589,6.29088066 18.5,8.29088 18.5,10.5 C18.5,12.70912 17.6045589,14.7091193 16.1568391,16.1568391 C14.7091193,17.6045589 12.70912,18.5 10.5,18.5 C8.29088,18.5 6.29088066,17.6045589 4.84316089,16.1568391 C3.39544112,14.7091193 2.5,12.70912 2.5,10.5 C2.5,8.29088 3.39544112,6.29088066 4.84316089,4.84316089 C6.29088066,3.39544112 8.29088,2.5 10.5,2.5 L10.5,2.5 Z"
              id="Stroke-1"
              stroke="#DEDFE0"
              fill="#F8F9FA"
            ></path>
            <line
              x1="10.5"
              y1="5"
              x2="10.5"
              y2="11"
              id="Stroke-3"
              stroke="#535455"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></line>
            <line
              x1="10"
              y1="11"
              x2="5"
              y2="11"
              id="Stroke-3"
              stroke="#E07474"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></line>
          </g>
        </g>
      </g>
    </svg>
  );
}

WaitingClock.propTypes = propTypes;
WaitingClock.defaultProps = defaultProps;

export default iconWrapper(WaitingClock);

import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import { cyan } from "../colours";

const propTypes = {
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number
};

const defaultProps = {
  stroke: cyan
};

function Window({ stroke, strokeWidth }) {
  return (
    <svg viewBox="0 0 45 43">
      <g
        stroke="none"
        stroke-width={strokeWidth}
        fill="none"
        fill-rule="evenodd"
      >
        <g
          transform="translate(-458.000000, -746.000000)"
          stroke={stroke}
          stroke-width={strokeWidth}
        >
          <g id="Group" transform="translate(240.000000, 714.000000)">
            <g transform="translate(160.000000, 0.000000)">
              <g transform="translate(58.000000, 31.000000)">
                <g id="windows-icon" transform="translate(1.607143, 2.421053)">
                  <rect
                    stroke-linejoin="round"
                    x="0"
                    y="0"
                    width="41.7857143"
                    height="40.3508772"
                  ></rect>
                  <rect
                    stroke-linejoin="round"
                    x="5.625"
                    y="5.64912281"
                    width="30.5357143"
                    height="29.0526316"
                  ></rect>
                  <line
                    x1="35.3571429"
                    y1="20.1754386"
                    x2="7.23214286"
                    y2="20.1754386"
                    id="Line"
                    stroke-linecap="square"
                  ></line>
                  <line
                    x1="21.2946429"
                    y1="6.05263158"
                    x2="21.2946429"
                    y2="34.2982456"
                    id="Line"
                    stroke-linecap="square"
                  ></line>
                  <rect
                    stroke-linejoin="round"
                    x="0"
                    y="0"
                    width="41.7857143"
                    height="40.3508772"
                  ></rect>
                  <line
                    x1="30.0824363"
                    y1="8.62474525"
                    x2="27.3214278"
                    y2="11.2982456"
                    id="Line"
                    stroke-linecap="round"
                  ></line>
                  <line
                    x1="33.296722"
                    y1="11.0457979"
                    x2="27.37089"
                    y2="16.9970428"
                    id="Line-Copy"
                    stroke-linecap="round"
                  ></line>
                  <line
                    x1="14.0110085"
                    y1="23.4035088"
                    x2="11.25"
                    y2="26.0770091"
                    id="Line"
                    stroke-linecap="round"
                  ></line>
                  <line
                    x1="17.2252942"
                    y1="25.8245614"
                    x2="11.2994622"
                    y2="31.7758063"
                    id="Line-Copy"
                    stroke-linecap="round"
                  ></line>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

Window.propTypes = propTypes;

export default iconWrapper(Window);

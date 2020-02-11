import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import { cyan } from "../colours";

const propTypes = {
  fill: PropTypes.string,
  strokeWidth: PropTypes.number
};

const defaultProps = {
  fill: "#F0FAFF",
  strokeWidth: 1
};

function CircleVerified({ circleFill, fill, strokeWidth }) {
  return (
    <svg viewBox="0 0 47 47">
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <path
          d="M12.7499998,0.708333339 C16.5325808,0.708333339 20.209621,1.96457149 23.2373744,3.89254244 C23.3226513,3.94716149 23.3749996,4.04172582 23.3749996,4.1411814 L23.3749996,12.5174611 C23.3749996,15.8647121 21.5335243,19.0741927 18.4508897,21.1032497 L12.9197094,24.7415306 C12.8175459,24.8083778 12.6824537,24.8083778 12.5802903,24.7415306 L7.04910993,21.1032497 C3.96563098,19.0741927 2.12500006,15.8647121 2.12500006,12.5174611 L2.12500006,4.1411814 C2.12500006,4.04172582 2.17650396,3.94716149 2.26262522,3.89254244 C5.29037864,1.96457149 8.96741884,0.708333339 12.7499998,0.708333339 Z"
          id="path-1"
        ></path>
        <circle
          fill={fill}
          cx="22.9500006"
          cy="22.9500006"
          r="22.9500006"
        ></circle>
        <g transform="translate(10.200000, 10.200000)">
          <rect x="0" y="0" width="25.5" height="25.5"></rect>
          <path
            d="M12.7499998,0.708333339 C16.5325808,0.708333339 20.209621,1.96457149 23.2373744,3.89254244 C23.3226513,3.94716149 23.3749996,4.04172582 23.3749996,4.1411814 L23.3749996,12.5174611 C23.3749996,15.8647121 21.5335243,19.0741927 18.4508897,21.1032497 L12.9197094,24.7415306 C12.8175459,24.8083778 12.6824537,24.8083778 12.5802903,24.7415306 L7.04910993,21.1032497 C3.96563098,19.0741927 2.12500006,15.8647121 2.12500006,12.5174611 L2.12500006,4.1411814 C2.12500006,4.04172582 2.17650396,3.94716149 2.26262522,3.89254244 C5.29037864,1.96457149 8.96741884,0.708333339 12.7499998,0.708333339 Z"
            fill="#27A9E1"
          ></path>
          <use
            stroke="#1D79A1"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            xlinkHref="#path-1"
          ></use>
          <g transform="translate(5.312500, 5.489583)">
            <polygon
              fillOpacity="0.400000006"
              fill="#232F3A"
              points="13.28125 1.26562497 5.31244727 8.85939502 2.65619727 6.32810484 0 8.85939502 5.31244727 13.9218749 15.9375 3.7968649"
            ></polygon>
            <polygon
              fill="#FFFFFF"
              points="13.28125 0 5.31244727 7.59377005 2.65619727 5.06247986 0 7.59377005 5.31244727 12.6562499 15.9375 2.53123993"
            ></polygon>
          </g>
        </g>
      </g>
    </svg>
  );
}

CircleVerified.propTypes = propTypes;
CircleVerified.defaultProps = defaultProps;

export default iconWrapper(CircleVerified);

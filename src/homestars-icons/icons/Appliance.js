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

function Appliance({ stroke, strokeWidth }) {
  return (
    <svg
      viewBox="0 0 56 57"
    >
      <defs>
        <polygon
          id="appliance-repair-a"
          points="0 54.24 40.68 54.24 40.68 0 0 0"
        />
      </defs>
      <g
        fill="none"
        fillRule="evenodd"
        transform="translate(8 2)"
      >
        <path
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M38.4199998,53.1099998 L2.25999999,53.1099998 C1.63510999,53.1099998 1.13,52.6037598 1.13,51.9799998 L1.13,2.25999999 C1.13,1.63623999 1.63510999,1.13 2.25999999,1.13 L38.4199998,1.13 C39.0448898,1.13 39.5499998,1.63623999 39.5499998,2.25999999 L39.5499998,51.9799998 C39.5499998,52.6037598 39.0448898,53.1099998 38.4199998,53.1099998 Z"
        />
        <line 
          x1="29.38"
          x2="27.12"
          y1="7.91"
          y2="7.91"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <line
          x1="35.03"
          x2="32.77"
          y1="7.91"
          y2="7.91"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <line
          x1="23.73"
          x2="21.47"
          y1="7.91"
          y2="7.91"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <path
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M5.64999998,32.7699999 C5.64999998,40.8833998 12.2265999,47.4599998 20.3399999,47.4599998 C28.4533999,47.4599998 35.0299999,40.8833998 35.0299999,32.7699999 C35.0299999,24.6565999 28.4533999,18.0799999 20.3399999,18.0799999 C12.2265999,18.0799999 5.64999998,24.6565999 5.64999998,32.7699999 Z"
        />
        <path
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M20.3399999,22.5999999 C23.8203999,22.5999999 26.8894799,24.3503699 28.7223399,27.0160399 C27.7618399,28.2127099 27.1199999,30.3393699 27.1199999,32.7699999 C27.1199999,35.2006299 27.7618399,37.3272898 28.7223399,38.5239598 C26.8894799,41.1896298 23.8203999,42.9399998 20.3399999,42.9399998 C14.7227699,42.9399998 10.17,38.3872298 10.17,32.7699999 C10.17,27.1527699 14.7227699,22.5999999 20.3399999,22.5999999 Z"
        />
        <mask
          id="appliance-repair-b"
          fill="#fff"
        >
          <use xlinkHref="#appliance-repair-a"/>
        </mask>
        <polygon
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          points="5.65 11.3 15.82 11.3 15.82 5.65 5.65 5.65"
          mask="url(#appliance-repair-b)"
        />
        <path
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M15.8222599,36.1638418 C15.1114899,35.2191619 14.6899999,34.0439619 14.6899999,32.7704519 C14.6899999,29.6493919 17.2189399,27.1204519 20.3399999,27.1204519"
          mask="url(#appliance-repair-b)"
        />
      </g>
    </svg>
  );
}

Appliance.propTypes = propTypes;
Appliance.defaultProps = defaultProps;

export default iconWrapper(Appliance);

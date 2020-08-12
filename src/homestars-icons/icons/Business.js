import React from "react";
import iconWrapper from "../iconWrapper";
import PropTypes from "prop-types";

const propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
};

const defaultProps = {
  fill: "none",
  stroke: "black",
};

const Business = ({ fill, stroke }) => {
  return pug`
    svg(width="22", height="22", viewBox="0 0 66 66")
      polygon(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth=1
        points="14 61 52 61 52 11 14 11"
      )
      polygon(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth=1
        points="18 61 48 61 48 15 18 15"
      )
      path(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth=1
        d="M42 14.9998L42 44.9998M36 14.9998L36 44.9998M30 14.9998L30 44.9998M33 2.9998L33 6.9998M24 14.9998L24 44.9998"
      )
      g(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth=1
        transform="translate(26 45)"
      )
        path(d="M0-.0002L0 15.9998M14-.0002L14 15.9998M7-.0002L7 15.9998")
      path(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth=1
        d="M48 20.9998L18 20.9998M48 26.9998L18 26.9998M48 32.9998L18 32.9998M48 38.9998L18 38.9998M48 44.9998L18 44.9998"
      )
      polygon(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth=1
        points="20 11 46 11 46 7 20 7"
      )
      path(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth=1
        d="M54,60.9998 L12,60.9998"
      )

  `;
};

Business.propTypes = propTypes;
Business.defaultProps = defaultProps;

export default iconWrapper(Business);

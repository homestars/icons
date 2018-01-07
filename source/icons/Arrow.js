import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import * as colours from "../colours";

const propTypes = {
  direction: PropTypes.string,
  stroke: PropTypes.string
};

const defaultProps = {
  direction: "left",
  stroke: colours.trueBlack
};

function Arrow({ direction, stroke }) {
  const directionTranslation = () => {
    switch (direction) {
      case "bottom":
      case "down":
        return `rotate(-90 10 10)`;
      case "right":
        return `rotate(180 10 10)`;
      case "top":
      case "up":
        return `rotate(90 10 10)`;
      default:
        return "";
    }
  };

  return pug`
    svg(width="20px", height="20px", viewBox="0 0 20 20")
      g(transform=directionTranslation())
        path(
          fill="none"
          stroke=stroke
          strokeWidth="3.9175"
          strokeLinecap="round"
          d="M9.43,17.426L2,10"
        )
        path(
          fill="none"
          stroke=stroke
          strokeWidth="3.9175"
          strokeLinecap="round"
          d="M18,10H3.132"
        )
        path(
          fill="none"
          stroke=stroke
          strokeWidth="3.9175"
          strokeLinecap="round"
          d="M2,10l7.43-7.427"
        )

  `;
}

Arrow.propTypes = propTypes;
Arrow.defaultProps = defaultProps;

export default iconWrapper(Arrow);

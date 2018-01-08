import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import * as colours from "../colours";

const propTypes = {
  direction: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string
};

const defaultProps = {
  direction: "right",
  fill: "none"
};

function Chevron({ direction, fill, stroke }) {
  const directionTranslation = () => {
    switch (direction) {
      case "bottom":
      case "down":
        return `rotate(90 10 10) translate(0 -2)`;
      case "back":
      case "backward":
      case "left":
        return `rotate(180 10 10) translate(-1 -2)`;
      case "top":
      case "up":
        return `rotate(-90 10 10) translate(-1 0)`;
      default:
        return "translate(1 0)";
    }
  };

  return pug`
    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewBox='0 0 22 22')
      g(transform=directionTranslation())
        polyline(
          fill=fill
          stroke=stroke
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          style={ strokeLinejoin: 'round' }
          points='7.001 2 15.997 11 7.001 20'
        )

  `;
}

Chevron.propTypes = propTypes;
Chevron.defaultProps = defaultProps;

export default iconWrapper(Chevron);

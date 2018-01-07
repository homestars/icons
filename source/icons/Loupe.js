import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  fill: PropTypes.string,
  glassStroke: PropTypes.string,
  stroke: PropTypes.string
};

const defaultProps = {
  fill: "none"
};

function Loupe({ fill, glassStroke, stroke }) {
  return pug`
    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewBox='0 0 22 22')
      path(
        fill=fill
        stroke=stroke
        strokeLinecap='round'
        strokeLinejoin='round'
        style={ strokeLinejoin: 'round' }
        strokeWidth='2'
        d='M15 15L20 20M17 9.5C17 13.6425 13.6425 17 9.5 17 5.3575 17 2 13.6425 2 9.5 2 5.3575 5.3575 2 9.5 2 13.6425 2 17 5.3575 17 9.5z'
      )
      path(
        fill="none"
        stroke=glassStroke || stroke
        strokeLinecap='round'
        strokeLinejoin='round'
        style={ strokeLinejoin: 'round' }
        d='M5,10 C5,7.2385 7.01465,5 9.5,5'
      )
  `;
}

Loupe.propTypes = propTypes;
Loupe.defaultProps = defaultProps;

export default iconWrapper(Loupe);

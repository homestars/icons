import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string
};

const defaultProps = {
  fill: "none"
};

function Prohibition({ fill, stroke }) {
  return pug`
    svg(x='0px', y='0px', width='22px', height='22px', viewbox='0 0 22 22')
      path(
        fill=fill
        stroke=stroke
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21,11 c0,5.522-4.478,10-10,10S1,16.522,1,11S5.478,1,11,1S21,5.478,21,11L21,11z'
      )
      path(stroke=stroke, strokeWidth='2', strokeLinecap='square', d='M4,18L18,4')
  `;
}

Prohibition.propTypes = propTypes;
Prohibition.defaultProps = defaultProps;

export default iconWrapper(Prohibition);

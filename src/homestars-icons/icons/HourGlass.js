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

function HourGlass({ fill, sandFill, stroke }) {
  return pug`
    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewBox='0 0 22 22')
      polygon(
        fill=fill
        stroke="none"
        points='7 20 7 14 11 11 15 14 15 20'
      )
      polygon(
        fill=fill
        stroke="none"
        points='11 11 7 8 7 2 15 2 15 8'
      )
      path(
        fill="none"
        stroke=stroke
        strokeWidth='2'
        strokeLinecap='round'
        d='M11,11 L11,14.0003478'
      )
      path(
        fill=sandFill || stroke
        stroke="none"
        d='M7,20 L15,20 L15,18.75 L12.0077271,16.4237988 C11.669432,16.1421607 11.3335229,16.0008958 11,16.0000042 C10.6664771,15.9991127 10.3329541,16.138588 9.99943115,16.4184302 L7,18.75 L7,20 Z'
      )
      polygon(
        fill=sandFill || stroke
        stroke="none"
        points='11 11 15 8 7 8'
      )
      path(
        fill="none"
        stroke=stroke
        strokeWidth='2'
        strokeLinecap='round'
        d='M5 20L17 20M5 2L17 2'
      )
      polyline(
        fill="none"
        stroke=stroke
        strokeWidth='2'
        strokeLinecap='round'
        points='7 20 7 14 11 11.004 15 14 15 20'
      )
      polyline(
        fill="none"
        stroke=stroke
        strokeWidth='2'
        strokeLinecap='round'
        points='7 2.003 7 8 11 11 15.001 8 15.001 2.003'
      )
  `;
}

HourGlass.propTypes = propTypes;
HourGlass.defaultProps = defaultProps;

export default iconWrapper(HourGlass);

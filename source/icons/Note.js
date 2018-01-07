import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  fill: PropTypes.string,
  pencilFill: PropTypes.string,
  pencilStroke: PropTypes.string,
  stroke: PropTypes.string
};

const defaultProps = {
  fill: "none"
};

function Note({ fill, pencilFill, pencilStroke, stroke }) {
  return pug`
    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')
      polyline(
        fill=fill
        stroke=stroke
        strokeLinejoin='round'
        strokeWidth='2'
        points='12.003,4 2,4 2,19.999 18,19.999 18,11'
      )
      polygon(
        fill=pencilFill || fill
        stroke=pencilStroke || stroke
        strokeLinecap='round'
        strokeLinejoin='round'
        style={ strokeLinejoin: 'round' }
        strokeWidth='2'
        points='18,1 9,9.998 7.001,14.998 12.001,13.001 21,4'
      )
      path(
        fill=pencilFill || fill
        stroke=pencilStroke || stroke
        strokeLinecap='round'
        strokeLinejoin='round'
        style={ strokeLinejoin: 'round' }
        d='M16.501,3.498l2,2 M9.001,9.998l3,3'
      )
  `;
}

Note.propTypes = propTypes;
Note.defaultProps = defaultProps;

export default iconWrapper(Note);

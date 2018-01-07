import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  statLine: PropTypes.string,
  stroke: PropTypes.string
};

function Stats({ statLine, stroke }) {
  return pug`
    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')
      polyline(
        fill="none"
        stroke=statLine || stroke
        strokeLinecap='round'
        strokeLinejoin='round'
        style={ strokeLinejoin: "round" }
        points='2.5 15.717 8.577 8.448 12.654 13.734 19 5.143'
      )
      polyline(
        fill="none"
        stroke=stroke
        strokeLinecap='round'
        strokeLinejoin='round'
        style={ strokeLinejoin: "round" }
        strokeWidth='2'
        points='2 2 2 20 20 20'
      )
  `;
}

Stats.propTypes = propTypes;

export default iconWrapper(Stats);

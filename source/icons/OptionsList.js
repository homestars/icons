import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  boxColor: PropTypes.string,
  boxFill: PropTypes.string,
  checkColor: PropTypes.string,
  lineColor: PropTypes.string,
  stroke: PropTypes.string
};

function OptionsList({ boxColor, boxFill, checkColor, lineColor, stroke }) {
  return pug`
    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')
      path(
        d='M13 6L20.0369882 6M13 16L20.0369882 16'
        fill="none"
        stroke=${checkColor || stroke}
        strokeLinecap="round"
        strokeWidth="2"
      )
      polyline(
        fill="none"
        stroke=${lineColor || stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        points='3 6 5 8 8 3'
      )
      rect(
        fill=${boxFill || "none"}
        height="6"
        width="6"
        x="2"
        y="13"
        rx="1"
        stroke=${boxColor || stroke}
        strokeWidth="2"
      )
  `;
}

OptionsList.propTypes = propTypes;

export default iconWrapper(OptionsList);

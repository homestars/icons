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

function Listing({ fill, stroke }) {
  return pug`
    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')
        g(transform='translate(2 2.182)')
          polygon(
            fill="none"
            stroke=stroke
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            points='0 16.818 18 16.818 18 .818 0 .818'
          )
          path(
            fill=fill
            stroke=stroke
            d='M0.5,3.3178 L17.682,3.3178'
          )
        path(
          fill=fill
          stroke=stroke
          strokeLinecap='round', stroke-linejoin='round', d='M11.5 8.5L16.5 8.5M11.5 10.5L16.5 10.5M4.5 15.5L17.5 15.5'
        )
        polygon(
          fill=fill
          stroke=stroke
          strokeLinecap='round'
          strokeLinejoin='round'
          points='4.5 12.5 9.5 12.5 9.5 7.5 4.5 7.5'
        )
  `;
}

Listing.propTypes = propTypes;
Listing.defaultProps = defaultProps;

export default iconWrapper(Listing);

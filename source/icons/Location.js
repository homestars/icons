import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import { white } from "../colours";

const propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number
};

const defaultProps = {
  fill: white,
  strokeWidth: 2
};

function Location({ fill, stroke, strokeWidth }) {
  return pug`
    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')
      path(
        fill=fill
        stroke=stroke
        strokeWidth=strokeWidth
        strokeMiterlimit="10"
        d='M18,8 C18,11.4482759 15.6666667,15.7816092 11,21 C6.33333333,15.7816092 4,11.4482759 4,8 C4,4.00068966 7.134,1 11,1 C14.866,1 18,4.00068966 18,8 Z M11,10 C12.1045695,10 13,9.1045695 13,8 C13,6.8954305 12.1045695,6 11,6 C9.8954305,6 9,6.8954305 9,8 C9,9.1045695 9.8954305,10 11,10 Z'
      )
  `;
}

Location.propTypes = propTypes;
Location.defaultProps = defaultProps;

export default iconWrapper(Location);

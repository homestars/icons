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

function Messaging({ fill, rearBubbleFill, stroke }) {
  return pug`
    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')
      path(
        fill="none"
        stroke=stroke
        strokeLinecap='round'
        strokeLinejoin='round'
        style={ strokeLinejoin: 'round' }
        strokeWidth='2'
        d='M18.0905151,13.9973755 L18.421936,14 C19.841686,14 20.993686,12.742831 20.993686,11.1934684 L21,4.80653157 C21,3.257169 19.848,2 18.42825,2 L7.57175,2 C6.150875,2 5,3.257169 5,4.80653157'
      )
      path(
        fill="none"
        stroke=stroke
        strokeLinecap='round'
        strokeLinejoin='round'
        style={ strokeLinejoin: 'round' }
        strokeWidth='2'
        d='M2,14.1934684 C2,15.742831 3.150875,17 4.57175,17 L6.00631396,17 L6.00631396,20 L9.83443896,17 L15.42825,17 C16.848,17 18,15.742831 18,14.1934684 L18.006314,7.80653157 C18.006314,6.257169 16.854314,5 15.434564,5 L4.57806396,5 C3.15718896,5 2.00631396,6.257169 2.00631396,7.80653157 L2,14.1934684 Z'
      )
      path(
        fill=stroke
        fill-rule='nonzero'
        stroke="none"
        d='M13.2937063,11.6942505 C13.2017982,11.6002505 13.1278721,11.4902505 13.0779221,11.3682505 C13.025974,11.2462505 13,11.1162505 13,10.9862505 C13,10.8542505 13.025974,10.7262505 13.0779221,10.6022505 C13.1278721,10.4802505 13.2017982,10.3722505 13.2937063,10.2782505 C13.6653347,9.90625051 14.3366633,9.90825051 14.7062937,10.2782505 C14.8921079,10.4662505 15,10.7222505 15,10.9862505 C15,11.2482505 14.8921079,11.5062505 14.7062937,11.6942505 C14.5204795,11.8782505 14.2627373,11.9862505 13.999001,11.9862505 C13.7372627,11.9862505 13.4795205,11.8782505 13.2937063,11.6942505 Z M9.294,11.691502 C9.106,11.507502 9,11.249502 9,10.985502 C9,10.853502 9.026,10.725502 9.076,10.603502 C9.128,10.479502 9.2,10.371502 9.294,10.277502 C9.664,9.90950203 10.334,9.90550203 10.706,10.277502 C10.894,10.467502 11,10.723502 11,10.985502 C11,11.247502 10.894,11.505502 10.706,11.691502 C10.52,11.877502 10.264,11.985502 10,11.985502 C9.736,11.985502 9.478,11.877502 9.294,11.691502 Z M5.294,11.693 C5.108,11.507 5,11.249 5,10.987 C5,10.723 5.108,10.467 5.294,10.279 C5.664,9.907 6.338,9.907 6.706,10.279 C6.892,10.467 7,10.723 7,10.987 C7,11.249 6.892,11.507 6.706,11.693 C6.522,11.881 6.264,11.987 6,11.987 C5.736,11.987 5.478,11.881 5.294,11.693 Z'
      )
  `;
}

Messaging.propTypes = propTypes;
Messaging.defaultProps = defaultProps;

export default iconWrapper(Messaging);

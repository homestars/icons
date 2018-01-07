import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import { white } from "../colours";

const propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string
};

const defaultProps = {
  fill: "none"
};

function Toolkit({ bottomFill, fill, handleFill, stroke, topFill }) {
  return pug`
    svg(xmlns="http://www.w3.org/2000/svg", width="22", height="22", viewbox="0 0 22 22")
      polygon(
        fill=topFill || fill
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth="2"
        points="2 10 20 10 20 6 2 6"
      )
      polygon(
        fill=bottomFill || fill
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth="2"
        points="3 18 19 18 19 10 3 10"
      )
      polygon(
        fill=handleFill || "none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth="2"
        points="7.5 6.041 14.5 6.041 14.5 3.5 7.5 3.5"
      )
      polygon(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth="2"
        points="9.5 12.5 12.5 12.5 12.5 10.5 9.5 10.5"
      )
  `;
}

Toolkit.propTypes = propTypes;
Toolkit.defaultProps = defaultProps;

export default iconWrapper(Toolkit);

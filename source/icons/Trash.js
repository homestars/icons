import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  fill: PropTypes.string,
  handleFill: PropTypes.string,
  stroke: PropTypes.string
};

const defaultProps = {
  fill: "none",
  handleFill: "none"
};

function Trash({ fill, handleFill, stroke }) {
  return pug`
    svg(xmlns="http://www.w3.org/2000/svg", width="22", height="22", viewbox="0 0 22 22")
      path(
        fill=fill
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth="2"
        d="M17.2626998 20L4.73730018 20C4.33072824 20 4 19.7018703 4 19.3328646L4 4 18 4 18 19.3328646C18 19.7018703 17.6692718 20 17.2626998 20zM3 4L19 4"
      )
      path(
        fill=handleFill
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        d="M14 3.5L8 3.5 8 2.16704162C8 1.79808774 8.2992126 1.5 8.66704162 1.5L13.3329584 1.5C13.7007874 1.5 14 1.79808774 14 2.16704162L14 3.5zM11 6.86733774L11 17.0705353M14 6.86733774L14 17.0705353M8 6.86733774L8 17.0705353"
      )
  `;
}

Trash.propTypes = propTypes;
Trash.defaultProps = defaultProps;

export default iconWrapper(Trash);

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

function Project({ fill, stroke }) {
  return pug`
    svg(xmlns="http://www.w3.org/2000/svg", width="22", height="22", viewBox="0 0 22 22")
      g(transform="translate(2 2)")
        polyline(
          fill="none"
          stroke=stroke
          strokeLinecap="round"
          strokeLinejoin="round"
          style={ strokeLinejoin: "round" }
          strokeWidth="2"
          points="9 13 14 18 18 14 13 9"
        )
        polyline(
          fill="none"
          stroke=stroke
          strokeLinecap="round"
          strokeLinejoin="round"
          style={ strokeLinejoin: "round" }
          strokeWidth="2"
          points="9 5.001 4.004 0 0 4 5.002 9"
        )
        path(
          fill="none"
          stroke=stroke
          strokeLinecap="round"
          strokeLinejoin="round"
          style={ strokeLinejoin: "round" }
          d="M3 6L3.5 5.5M2 4.99558972L3 4M4 6.99558972L5 6M12 15L12.5 14.5M11 13.9955897L12 13M13 15.9955897L14 15"
        )
      g(transform="translate(2 1)")
        path(
          fill="none"
          stroke=stroke
          strokeLinecap="round"
          strokeLinejoin="round"
          style={ strokeLinejoin: "round" }
          strokeWidth="2",
          d="M15.9988659,6.99785786 L11.9983619,3.00321321 L13.5,1.5 C14.1802745,0.80612 15.3201569,0.80612 16,1.5 L17.4985509,3 C18.1723548,3.68728 18.1723548,4.81158593 17.4985509,5.49886593 L15.9988659,6.99785786 Z"
        )
        polygon(
          fill="none"
          stroke=stroke
          strokeLinecap="round"
          strokeLinejoin="round"
          style={ strokeLinejoin: "round" }
          strokeWidth="2",
          points="12 3 1.999 13 0 19 6.004 17 16 7.001"
        )
        path(
          fill="none"
          stroke=stroke
          strokeLinecap="round"
          strokeLinejoin="round"
          style={ strokeLinejoin: "round" }
          d="M14.0009451,5.00264617 L5,14"
        )
        polyline(
          fill="none"
          stroke=stroke
          strokeLinecap="round"
          strokeLinejoin="round"
          style={ strokeLinejoin: "round" }
          points="2 13 3 14 5 14 5 16 6 17"
        )
        path(
          fill="none"
          stroke=stroke
          strokeLinecap="round"
          strokeLinejoin="round"
          style={ strokeLinejoin: "round" }
          d="M0.997290827,16 L3,18"
        )
  `;
}

Project.propTypes = propTypes;
Project.defaultProps = defaultProps;

export default iconWrapper(Project);

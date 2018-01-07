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

function Photo({ fill, stroke }) {
  return pug`
    svg(xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22")
      polygon(
        fill=fill
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth="2"
        points="2 19 20 19 20 3 2 3"
      )
      polygon(
        fill=fill
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        points="2 19 6.154 13.286 10.308 16.143 14.5 9 20 19"
      )
      path(
        fill=fill
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        d="M9,8 C9,9.10438729 8.10416141,10 6.99949559,10 C5.89482976,10 5,9.10438729 5,8 C5,6.89561271 5.89482976,6 6.99949559,6 C8.10416141,6 9,6.89561271 9,8 L9,8 Z"
      )
  `;
}

Photo.propTypes = propTypes;
Photo.defaultProps = defaultProps;

export default iconWrapper(Photo);

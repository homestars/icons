import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  fill: PropTypes.string,
};

const defaultProps = {
  fill: "#000000"
};

function ShowMore({ fill }) {
  return pug`
    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewBox='0 0 22 22')
      path(d="M11,9 C12.1,9 13,8.1 13,7 C13,5.9 12.1,5 11,5 C9.9,5 9,5.9 9,7 C9,8.1 9.9,9 11,9 L11,9 Z M11,11 C9.9,11 9,11.9 9,13 C9,14.1 9.9,15 11,15 C12.1,15 13,14.1 13,13 C13,11.9 12.1,11 11,11 L11,11 Z M11,17 C9.9,17 9,17.9 9,19 C9,20.1 9.9,21 11,21 C12.1,21 13,20.1 13,19 C13,17.9 12.1,17 11,17 L11,17 Z" id="Shape" fill=fill)
  `;
}

ShowMore.propTypes = propTypes;

export default iconWrapper(ShowMore);

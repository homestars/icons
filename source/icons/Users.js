import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  stroke: PropTypes.string
};

function Users({ stroke }) {
  return pug`
    svg(width="22", height="22", viewbox="0 0 22 22")
      path(
        stroke=stroke
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 20L14 18C14 15.791 12.209 14 10 14L6 14C3.791 14 2 15.791 2 18L2 20M8 2C10.209 2 12 3.791 12 6 12 8.209 10.209 10 8 10 5.791 10 4 8.209 4 6 4 3.791 5.791 2 8 2zM20 20L20 18C19.999 16.177 18.765 14.586 17 14.13M15 2.1299C17.14 2.6779 18.431 4.8569 17.883 6.9969 17.521 8.4129 16.415 9.5179 15 9.879"
      )
  `;
}

Users.propTypes = propTypes;

export default iconWrapper(Users);

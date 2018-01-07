import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string
};

function Share({ fill, stroke }) {
  return pug`
    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')
      path(
        stroke=stroke
        strokeLinecap='round'
        strokeLinejoin='round'
        style={ strokeLinejoin: 'round' }
        d='M18 4L4 11M18 18L4 11'
      )
      path(
        fill=fill || stroke
        d='M21 4C21 5.65691789 19.656666 7 17.9994375 7 16.3422089 7 15 5.65691789 15 4 15 2.34308211 16.3422089 1 17.9994375 1 19.656666 1 21 2.34308211 21 4zM21 18C21 19.6569179 19.656666 21 17.9994375 21 16.3422089 21 15 19.6569179 15 18 15 16.3430821 16.3422089 15 17.9994375 15 19.656666 15 21 16.3430821 21 18zM7 11C7 12.6569179 5.65666604 14 3.99943746 14 2.34333396 14 1 12.6569179 1 11 1 9.34308211 2.34333396 8 3.99943746 8 5.65666604 8 7 9.34308211 7 11z'
      )
  `;
}

Share.propTypes = propTypes;

export default iconWrapper(Share);

import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import {darkerGrey, cyan} from "../colours";

const propTypes = {
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string
};

const defaultProps = {
  fill: "none",
  strokeWidth: 0.5,
  primaryColor: darkerGrey,
  secondaryColor: cyan
};

function PostCode({ fill, strokeWidth, primaryColor, secondaryColor }) {
  return pug`
    svg(xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22")
      polygon( 
        fill=fill
        strokeWidth=strokeWidth
        points="0 22 22 22 22 0 0 0"
      )
      g(
        transform="translate(1.100000, 1.100000)" 
        stroke="#000000" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
        polygon(
          fill=fill
          stroke=primaryColor 
          strokeWidth=strokeWidth
          points="13.2 2.2 6.6 0 0 2.2 0 19.8 6.6 17.6 13.2 19.8 19.8 17.6 19.8 0"
        )
        path( 
          fill=fill
          stroke=secondaryColor 
          strokeWidth=strokeWidth
          d="M13.2,8.43333333 C13.2,11.3666667 9.9,14.6666667 9.9,14.6666667 C9.9,14.6666667 6.6,11.3666667 6.6,8.43333333 C6.6,6.61063333 8.0773,5.13333333 9.9,5.13333333 C11.7227,5.13333333 13.2,6.61063333 13.2,8.43333333 Z"
        )
        path(
          fill=fill
          stroke=secondaryColor 
          strokeWidth=strokeWidth 
          d="M11,8.43333333 C11,9.0409 10.5075667,9.53333333 9.9,9.53333333 C9.29243333,9.53333333 8.8,9.0409 8.8,8.43333333 C8.8,7.82576667 9.29243333,7.33333333 9.9,7.33333333 C10.5075667,7.33333333 11,7.82576667 11,8.43333333 Z"
        )
  `;
}

PostCode.propTypes = propTypes;
PostCode.defaultProps = defaultProps;

export default iconWrapper(PostCode, {strokeWidth: 0.5});

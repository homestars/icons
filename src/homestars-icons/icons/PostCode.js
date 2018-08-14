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
        points="2 20 20 20 20 2 2 2"
      )
      polygon(
        fill=fill
        strokeWidth=strokeWidth
        stroke=primaryColor
        points="13.7 4.7 8.3 2.9 2.9 4.7 2.9 19.1 8.3 17.3 13.7 19.1 19.1 17.3 19.1 2.9"
      )
      path(
        fill=fill
        strokeWidth=strokeWidth
        d="M13.7,9.8 C13.7,12.2 11,14.9 11,14.9 C11,14.9 8.3,12.2 8.3,9.8 C8.3,8.3087 9.5087,7.1 11,7.1 C12.4913,7.1 13.7,8.3087 13.7,9.8 Z" 
        stroke=secondaryColor
      )
      path(
        fill=fill
        strokeWidth=strokeWidth
        d="M11.9,9.8 C11.9,10.2971 11.4971,10.7 11,10.7 C10.5029,10.7 10.1,10.2971 10.1,9.8 C10.1,9.3029 10.5029,8.9 11,8.9 C11.4971,8.9 11.9,9.3029 11.9,9.8 Z"
        stroke=secondaryColor
      )
  `;
}

PostCode.propTypes = propTypes;
PostCode.defaultProps = defaultProps;

export default iconWrapper(PostCode, {strokeWidth: 0.5});

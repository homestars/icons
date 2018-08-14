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

function Description({ fill, strokeWidth, primaryColor, secondaryColor }) {
  return pug`
    svg(xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22")
      polygon(
        fill=fill 
        points="4 22 21 22 21 5 4 5"
      )
      polygon(
        fill=fill 
        stroke=primaryColor
        strokeWidth=strokeWidth 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        points="15.0093133 15.4198383 13.41358 13.824105 18.3914633 8.84622167 19.9871967 10.441955"
      )
      path(
        fill=fill 
        d="M19.18933,11.2398217 L17.5935967,9.64408833" 
        stroke=primaryColor
        strokeWidth=strokeWidth 
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        strokeWidth=strokeWidth 
        d="M19.9871683,10.4418417 L18.391435,8.84610833 L18.7903683,8.447175 C19.231235,8.00659167 19.9455183,8.00659167 20.3861017,8.447175 C20.826685,8.88775833 20.826685,9.602325 20.3861017,10.0429083 L19.9871683,10.4418417 Z" 
        stroke=primaryColor
      )
      polygon( 
        fill=fill 
        stroke=primaryColor
        strokeWidth=strokeWidth 
        points="12.2166667 16.6166667 13.4134667 13.8241333 15.0092 15.4198667"
      )
      path(
        fill=fill
        strokeWidth=strokeWidth 
        d="M12.4597383,13.2166667 L4.84997167,13.2166667 C4.53717167,13.2166667 4.283305,13.4705333 4.283305,13.7833333 L4.283305,18.8833333 C4.283305,19.1961333 4.53717167,19.45 4.84997167,19.45 L20.1499717,19.45 C20.463055,19.45 20.7166383,19.1961333 20.7166383,18.8833333 L20.7166383,13.7833333 C20.7166383,13.4705333 20.463055,13.2166667 20.1499717,13.2166667 L18.8151883,13.2166667" 
        stroke=secondaryColor
      )
  `;
}

Description.propTypes = propTypes;
Description.defaultProps = defaultProps;

export default iconWrapper(Description, {strokeWidth: 0.5});

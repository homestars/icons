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
        strokeWidth=strokeWidth
        points="0 22 22 22 22 0 0 0"
      )
      polygon( 
        fill=fill
        strokeWidth=strokeWidth
        stroke=primaryColor
        strokeLlinecap="round" 
        strokeLlinejoin="round" 
        points="14.247 13.484 12.182 11.419 18.624 4.977 20.689 7.043"
      )
      path( 
        fill=fill
        strokeWidth=strokeWidth
        stroke=primaryColor 
        strokeLlinecap="round" 
        strokeLlinejoin="round" 
        d="M19.65678 8.07506333L17.5917133 6.00999667M20.6892767 7.04238333L18.62421 4.97731667 19.1404767 4.46105C19.71101 3.89088333 20.6353767 3.89088333 21.2055433 4.46105 21.77571 5.03121667 21.77571 5.95595 21.2055433 6.52611667L20.6892767 7.04238333z"
      )
      polygon( 
        fill=fill
        strokeWidth=strokeWidth
        stroke=primaryColor 
        strokeLlinecap="round" 
        strokeLlinejoin="round" 
        points="10.633 15.033 12.182 11.419 14.247 13.485"
      )
      path( 
        fill=fill
        strokeWidth=strokeWidth
        stroke=secondaryColor
        strokeLlinecap="round" 
        strokeLlinejoin="round" 
        d="M10.9478967,10.6333333 L1.09996333,10.6333333 C0.695163333,10.6333333 0.36663,10.9618667 0.36663,11.3666667 L0.36663,17.9666667 C0.36663,18.3714667 0.695163333,18.7 1.09996333,18.7 L20.8999633,18.7 C21.30513,18.7 21.6332967,18.3714667 21.6332967,17.9666667 L21.6332967,11.3666667 C21.6332967,10.9618667 21.30513,10.6333333 20.8999633,10.6333333 L19.1725967,10.6333333"
      )
  `;
}

Description.propTypes = propTypes;
Description.defaultProps = defaultProps;

export default iconWrapper(Description, {strokeWidth: 0.5});

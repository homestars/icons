import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import {trueBlack, darkerGrey, cyan} from "../colours";

const propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string
};

const defaultProps = {
  fill: "none",
  stroke: trueBlack,
  strokeWidth: 0.5,
  primaryColor: darkerGrey,
  secondaryColor: cyan
};

function FindAPro({ fill, stroke, strokeWidth, primaryColor, secondaryColor }) {
  return pug`
    svg(xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22")
      polygon(
        fill=fill
        points="2 20 20 20 20 2 2 2"
        strokeWidth=strokeWidth
      )
      path( 
        fill=fill
        d="M13.56875,14.64086 C13.35005,15.50006 13.73705,16.21676 14.03015,16.26056 C15.82025,16.52906 17.08025,17.13476 17.94605,17.88146 C18.37685,18.25286 18.19175,18.95546 17.63435,19.06886 C16.33025,19.33406 13.98875,19.70006 10.99985,19.70006 C7.95905,19.70006 5.67995,19.34426 4.40645,19.08026 C3.84815,18.96446 3.66965,18.25616 4.10585,17.88896 C4.97915,17.15336 6.22985,16.55816 7.96775,16.26056 C8.26175,16.21046 8.67515,15.47486 8.42525,14.64086" 
        stroke=primaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M6.8996,9.37871 C6.7895,9.50471 6.6932,9.66161 6.6932,9.85691 C6.6932,10.37561 6.8249,11.42501 7.4141,11.72111 C7.4675,12.86081 8.4254,14.64101 8.4254,14.64101 C9.4664,15.58271 10.2083,15.99311 10.5992,15.99311 C10.616,15.99311 10.7852,15.89381 11.048,15.89381 C11.3195,15.89381 11.5049,15.99311 11.5214,15.99311 C11.6651,15.99311 12.8021,15.43271 13.5686,14.64101 C13.5686,14.64101 14.5304,12.86081 14.5838,11.72111 C15.1748,11.40011 15.3047,10.37561 15.3047,9.85691 C15.3047,9.66101 15.2078,9.50411 15.0974,9.37781"
        stroke=primaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M9.4625,11.06006 L9.59042857,11.06006" 
        stroke=primaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M12.46439,11.06006 L12.5923186,11.06006"
        stroke=primaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M8.75015,10.7 L10.21265,10.7" 
        stroke=primaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M13.25792,10.7 L11.79542,10.7"
        stroke=primaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M11.6,13.7 C11.6,13.7 11.3939,13.835 11,13.835 C10.6061,13.835 10.4,13.7 10.4,13.7"
        stroke=primaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M12.2003,3.04985 C14.1827,3.55535 15.7133,5.28455 16.0367,7.43855" 
        stroke=secondaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M5.96051,7.4567 C6.27791,5.2943 7.81181,3.5567 9.79991,3.05"
        stroke=secondaryColor
        strokeWidth=strokeWidth
        strokeLinecap="round"
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M7.10147,8.23673 C6.41237,8.02823 6.00017,7.71143 6.00017,7.24043"
        stroke=secondaryColor
        strokeWidth=strokeWidth
        strokeLinecap="round"
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M15.99995,7.24049 C15.99995,8.33729 13.76135,8.59949 10.99985,8.59949 C9.87455,8.59949 8.83565,8.55599 7.99985,8.42999"
        stroke=secondaryColor
        strokeWidth=strokeWidth
        strokeLlinecap="round"
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M9.8,4.39985 L9.8,3.92015 L9.8,2.59985 C9.8,2.59985 10.175,2.29985 11,2.29985 C12.05,2.29985 12.2,2.59985 12.2,2.59985 L12.2,3.92015 L12.2,4.39985"
        stroke=secondaryColor
        strokeWidth=strokeWidth
        strokeLinecap="round"
        strokeLinejoin="round"
      )
      path(
        fill=fill
        d="M11,8.62958 L11,9.79958"
        stroke=secondaryColor
        strokeWidth=strokeWidth
        strokeLinecap="round"
        strokeLinejoin="round"
      )
      path(
        fill=fill
        d="M9.8,8.62988 L9.8,9.73958"
        stroke=secondaryColor
        strokeWidth=strokeWidth
        strokeLinecap="round"
        strokeLinejoin="round"
      )
      path(
        fill=fill
        d="M12.2,8.62988 L12.2,9.73958"
        stroke=secondaryColor
        strokeWidth=strokeWidth
        strokeLinecap="round"
        strokeLinejoin="round"
      )
      path(
        fill=fill
        d="M5.9375,7.52438 C5.8439,7.98128 5.8751,8.19998 5.5751,8.42978 C5.5751,9.18668 7.9862,9.79988 10.9607,9.79988 C13.9349,9.79988 16.3463,9.18668 16.3463,8.42978 C16.0499,8.19998 16.1075,7.96238 16.0511,7.52438"
        stroke=secondaryColor
        strokeWidth=strokeWidth
        strokeLinecap="round"
        strokeLinejoin="round"
      )
      path(
        fill=fill
        d="M6.5,16.61387 L6.5,19.39517"
        stroke=primaryColor
        strokeWidth=strokeWidth
        strokeLinecap="round"
        strokeLinejoin="round"
      )
      path(
        fill=fill
        d="M15.5,16.61387 L15.5,19.39517"
        stroke=primaryColor
        strokeWidth=strokeWidth
        strokeLinecap="round"
        strokeLinejoin="round"
      )
      path(
        fill=fill
        d="M11,2.3 L11,5"
        stroke=secondaryColor
        strokeWidth=strokeWidth
        strokeLinecap="round"
        strokeLinejoin="round"
      )
      path(
        fill=fill
        d="M13.76753,16.1183 C13.56023,16.5959 12.53393,17.5625 11.01233,17.5625 C9.49073,17.5625 8.37803,16.5677 8.25713,16.1183"
        stroke=primaryColor
        strokeWidth=strokeWidth
        strokeLinecap="round"
        strokeLinejoin="round"
      )
  `;
}

FindAPro.propTypes = propTypes;
FindAPro.defaultProps = defaultProps;

export default iconWrapper(FindAPro, {strokeWidth: 0.5});

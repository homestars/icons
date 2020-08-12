import React from "react";
import iconWrapper from "../iconWrapper";
import PropTypes from "prop-types";

const propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
};

const defaultProps = {
  fill: "none",
  stroke: "black",
};

const HomeResidence = ({ fill, stroke }) => {
  return pug`
    svg(width="22", height="22", viewBox="0 0 66 66")
      defs
        polygon#locationresidence-a(points="0 52 60 52 60 0 0 0")
      rect(width="6", height="8", x="50", y="10", fill=fill)
      polygon(fill=fill, points="49 10 57 10 57 6 49 6")
      g(transform="translate(3 5)")
        polygon(
          fill=fill
          stroke=stroke
          strokeLinecap="round"
          strokeLinejoin="round"
          style={ strokeLinejoin: "round" }
          strokeWidth=1
          points="3 51 57 51 57 19 3 19"
        )
        path(
          fill="none"
          stroke=stroke
          strokeLinecap="round"
          strokeLinejoin="round"
          style={ strokeLinejoin: "round" }
          strokeWidth=1
          d="M23 46.9998L3 46.9998 23 46.9998zM57 22.9998L3 22.9998M57 46.9998L37 46.9998"
        )
        mask#locationresidence-b(fill="#fff")
          use(xlinkHref="#locationresidence-a")
        polygon(
          fill=fill
          stroke=stroke
          strokeLinecap="round"
          strokeLinejoin="round"
          style={ strokeLinejoin: "round" }
          strokeWidth=1
          points="1 19 11 9 49 9 59 19"
          mask="url(#locationresidence-b)"
        )
      polygon(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth=1
        points="44 46 54 46 54 36 44 36"
      )
      path(
        fill=fill
        stroke="none"
        d="M32,47 C32,47.56 31.56,48 31,48 C30.44,48 30,47.56 30,47 C30,46.46 30.44,46 31,46 C31.56,46 32,46.46 32,47 Z"
      )
      path(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth=1
        d="M50 9.9998L50 13.9998M56 17.9998L56 9.9998"
      )
      polygon(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth=1
        points="49 10 57 10 57 6 49 6"
      )
      path(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth=1
        d="M49 35.9998L49 45.9998M55 45.9998L43 45.9998"
      )
      polygon(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth=1
        points="12 46 22 46 22 36 12 36"
      )
      polygon(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth=1
        points="26 56 40 56 40 36 26 36"
      )
      path(
        fill="none"
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth=1
        d="M17 35.9998L17 45.9998M22 39.9998L12 39.9998M54 39.9998L44 39.9998M23 45.9998L11 45.9998"
      )
  `;
};

HomeResidence.propTypes = propTypes;
HomeResidence.defaultProps = defaultProps;

export default iconWrapper(HomeResidence);

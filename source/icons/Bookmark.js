import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import * as colours from "../colours";

const propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string
};

function Bookmark({ fill, stroke }) {
  return pug`
    svg(width="20px", height="20px", viewbox="0 0 20 20")
      path(
        fill=fill || stroke
        stroke=stroke
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M3.369,18.464c0,0.45,0.466,0.696,0.782,0.42 L9.7,13.966c0.175-0.157,0.427-0.157,0.601,0l5.549,4.918c0.312,0.276,0.781,0.03,0.781-0.42V1.85c0-0.469-0.347-0.85-0.767-0.85 H4.135C3.714,1,3.369,1.381,3.369,1.85V18.464z"
      )
  `;
}

Bookmark.propTypes = propTypes;

export default iconWrapper(Bookmark, { height: 20, width: 20 });

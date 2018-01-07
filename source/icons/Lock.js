import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  fill: PropTypes.string,
  keyholeFill: PropTypes.string,
  stroke: PropTypes.string
};

const defaultProps = {
  keyholeFill: "none"
};

function Lock({ fill, keyholeFill, stroke }) {
  return pug`
    svg(x="0px", y="0px", width="22px", height="22px", viewbox="0 0 22 22")
      path(
        fill="none"
        stroke=stroke
        strokeWidth="2"
        d="M6,10V6c0-2.761,2.238-5,5-5s5,2.239,5,5v4"
      )
      path(
        fill=fill || stroke
        stroke="none"
        d="M19,9H3c-1.104,0-2,0.896-2,2v8c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2v-8C21,9.896,20.104,9,19,9z M12.345,17.379 c0.01,0.039,0.015,0.08,0.015,0.121c0,0.276-0.224,0.5-0.5,0.5h-1.719c-0.041,0-0.082-0.005-0.122-0.016 c-0.268-0.066-0.431-0.338-0.364-0.605l0.639-2.555C9.821,14.571,9.5,14.073,9.5,13.5c0-0.828,0.671-1.5,1.5-1.5 c0.828,0,1.5,0.672,1.5,1.5c0,0.573-0.321,1.071-0.794,1.324L12.345,17.379z"
      )
      path(
        fill=keyholeFill
        d="M10.294,14.824l-0.639,2.555c-0.067,0.268,0.096,0.539,0.364,0.605C10.059,17.995,10.1,18,10.141,18h1.719 c0.276,0,0.5-0.224,0.5-0.5c0-0.041-0.005-0.082-0.015-0.121l-0.639-2.555c0.473-0.253,0.794-0.751,0.794-1.324 c0-0.828-0.672-1.5-1.5-1.5c-0.829,0-1.5,0.672-1.5,1.5C9.5,14.073,9.821,14.571,10.294,14.824z"
      )
  `;
}

Lock.propTypes = propTypes;
Lock.defaultProps = defaultProps;

export default iconWrapper(Lock);

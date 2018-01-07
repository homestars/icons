import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string
};

const defaultProps = {
  fill: "none"
};

function Invisible({ fill, slashColor, stroke }) {
  return pug`
    svg(x='0px', y='0px', width='22px', height='22px', viewbox='0 0 22 22')
      path(
        fill=stroke
        stroke="none"
        d='M6.984,11.464c0-2.344,1.77-4.246,3.952-4.246c0.842,0,1.603,0.287,2.242,0.751l1.543-1.658l0.001,0 c-1.214-0.597-2.511-0.995-3.827-0.995c-4.569,0-8.418,4.091-9.694,5.617c-0.268,0.31-0.268,0.796,0,1.105 c0.741,0.885,2.387,2.631,4.527,3.936l1.956-2.102C7.251,13.188,6.984,12.37,6.984,11.464z'
      )
      path(
        fill=stroke
        stroke="none"
        d='M17.555,8.21l-2.621,2.601c0.041,0.227,0.062,0.454,0.062,0.681c0,2.188-1.789,3.963-3.993,3.963 c-0.229,0-0.458-0.021-0.686-0.062l-1.539,1.527c0.707,0.187,1.456,0.289,2.225,0.289c4.575,0,8.464-3.736,9.774-5.161 c0.291-0.33,0.291-0.784,0-1.093C20.174,10.336,19.01,9.222,17.555,8.21z'
      )
      path(
        fill=stroke
        stroke="none"
        d='M9.619,11.464c0,0.11,0,0.22,0.021,0.307l1.562-1.678c-0.083,0-0.184-0.022-0.287-0.022 C10.195,10.071,9.619,10.69,9.619,11.464z'
      )
      polygon(
        fill=slashColor
        stroke="none"
        points='18.735,2.001 18.734,2 14.722,6.312 14.721,6.312 13.178,7.97 11.202,10.094 9.639,11.771 7.683,13.873 5.728,15.975 5.727,15.976 3.133,18.762 4.286,20 4.287,19.999 19.887,3.238   '
      )
  `;
}

Invisible.propTypes = propTypes;
Invisible.defaultProps = defaultProps;

export default iconWrapper(Invisible, { height: 20, width: 22 });

import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import { white } from "../colours";

const propTypes = {
  arrowColor: PropTypes.string,
  fill: PropTypes.string,
  maskFill: PropTypes.string,
  phoneFill: PropTypes.string,
  stroke: PropTypes.string
};

const defaultProps = {
  fill: "none",
  maskFill: white
};

function ToPhone({ arrowColor, fill, maskFill, stroke }) {
  return pug`
    svg(width='22', height='22', viewBox='0 0 22 22')
      defs
        polygon#ToPhoneA(points='11 14.254 14.252 11 11 7.759 9 5.756 9 1 21 1.001 21 21 9 21 9 16.238')
      mask#ToPhoneB(fill=maskFill)
        use(href='#ToPhoneA')
      rect(
        width='10'
        height='18'
        x='10'
        y='2'
        fill=fill
        stroke=stroke
        strokeLinecap='round'
        style={ strokeLinejoin: 'round' }
        strokeWidth='2'
        mask='url(#ToPhoneB)'
        rx='1'
      )
      path(
        stroke=stroke
        strokeLinecap='round'
        strokeLinejoin='round'
        style={ strokeLinejoin: 'round' }
        d='M13.5,4.5 L16.5,4.5'
      )
      path(
        stroke=arrowColor || stroke
        strokeLinecap='round'
        strokeWidth='2'
        d='M2,11 L10,11'
      )
      polyline(
        stroke=arrowColor || stroke
        fill="none"
        strokeLinecap='round'
        strokeWidth='2'
        points='7 8 10 11.001 7 14'
      )
      circle(cx='15', cy='17', r='1', fill=stroke)
  `;
}

ToPhone.propTypes = propTypes;
ToPhone.defaultProps = defaultProps;

export default iconWrapper(ToPhone);

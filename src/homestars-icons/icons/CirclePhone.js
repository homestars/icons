import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

import { cyan, white } from "../colours";

const propTypes = {
  fill: PropTypes.string
};

const defaultProps = {
  fill: cyan
};

function CirclePhone({ fill }) {
  return pug`
    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewBox='0 0 22 22')
      circle(cx="11" cy="11" r="11" fill=cyan)
      path(fill=white stroke=cyan strokeWidth=".2" d="M8.04089915,15.9508557 L13.7507675,15.9508557 L13.7507675,6.65714083 L8.04089915,6.65714083 L8.04089915,15.9508557 Z M10.3755287,17.2737087 C10.2325863,17.2737087 10.115159,17.1581807 10.115159,17.0169162 C10.115159,16.8759377 10.2325863,16.7604097 10.3755287,16.7604097 L11.4164279,16.7604097 C11.5596602,16.7604097 11.6767977,16.8759377 11.6767977,17.0169162 C11.6767977,17.1581807 11.5596602,17.2737087 11.4164279,17.2737087 L10.3755287,17.2737087 Z M7.78081932,5 C7.35141219,5 7,5.34658406 7,5.77009153 L7,6.40063431 L7,16.2076481 L7,16.432699 L7,17.0632418 C7,17.4870352 7.35141219,17.8333333 7.78081932,17.8333333 L14.0111373,17.8333333 C14.4405444,17.8333333 14.7916667,17.4870352 14.7916667,17.0632418 L14.7916667,16.432699 L14.7916667,16.2076481 L14.7916667,6.40063431 L14.7916667,5.77009153 C14.7916667,5.34658406 14.4405444,5 14.0111373,5 L7.78081932,5 Z")
  `;
}

CirclePhone.propTypes = propTypes;
CirclePhone.defaultProps = defaultProps;

export default iconWrapper(CirclePhone);
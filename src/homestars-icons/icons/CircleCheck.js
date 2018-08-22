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

function CircleCheck({ fill }) {
  return pug`
    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewBox='0 0 22 22')
      circle(cx="11" cy="11" r="11" fill=cyan fill-rule="nonzero")
      path(fill=white d="M10.9989551,15.1200044 C8.57331002,15.1200044 6.59979683,13.1110272 6.59979683,10.6416946 C6.59979683,8.17240621 8.57331002,6.16336996 10.9989551,6.16336996 C13.4246002,6.16336996 15.3981135,8.17240621 15.3981135,10.6416946 C15.3981135,13.1110272 13.4246002,15.1200044 10.9989551,15.1200044 M10.9989551,5.04379988 C7.96698945,5.04379988 5.5,7.55523555 5.5,10.6416946 C5.5,13.7281979 7.96698945,16.2395893 10.9989551,16.2395893 C14.0309063,16.2395893 16.4979103,13.7281979 16.4979103,10.6416946 C16.4979103,7.55523555 14.0309063,5.04379988 10.9989551,5.04379988")
      polygon(fill=white points="10.194 11.304 9.109 10.247 8.314 11.022 10.194 12.854 13.942 9.202 13.147 8.427")
  `;
}

CircleCheck.propTypes = propTypes;
CircleCheck.defaultProps = defaultProps;

export default iconWrapper(CircleCheck);

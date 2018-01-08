import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import { linkedinBlue, white } from "../colours";

const propTypes = {
  fill: PropTypes.string
};

const defaultProps = {
  fill: linkedinBlue,
  stroke: white
};

function Linkedin({ fill, stroke }) {
  return pug`
    svg(x="0px", y="0px", width="22px", height="22px", viewBox="0 0 22 22")
      g(transform="translate(1 1)")
        path(
          fill=fill
          d="M15.833,0H4.167C1.866,0,0,1.866,0,4.167v11.667C0,18.134,1.866,20,4.167,20h11.667C18.135,20,20,18.134,20,15.833V4.167 C20,1.866,18.135,0,15.833,0z M6.667,15.833h-2.5V6.667h2.5V15.833z M5.417,5.61c-0.805,0-1.458-0.658-1.458-1.47 c0-0.811,0.653-1.47,1.458-1.47c0.805,0,1.458,0.659,1.458,1.47C6.875,4.952,6.222,5.61,5.417,5.61z M16.667,15.833h-2.5v-4.669 c0-2.807-3.333-2.594-3.333,0v4.669h-2.5V6.667h2.5v1.471c1.164-2.155,5.833-2.314,5.833,2.063V15.833z"
        )
        g(fill=stroke)
          path(d="M10.833,8.138V6.667h-2.5v9.167h2.5v-4.669c0-2.594,3.333-2.807,3.333,0v4.669h2.5v-5.632 C16.667,5.823,11.997,5.982,10.833,8.138z")
          ellipse(cx="5.417", cy="4.14", rx="1.458", ry="1.47")
          rect(x="4.167", y="6.667", width="2.5", height="9.167")
  `;
}

Linkedin.propTypes = propTypes;
Linkedin.defaultProps = defaultProps;

export default iconWrapper(Linkedin, { stroke: white });

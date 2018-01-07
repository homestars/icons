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

function ChatBubble({ stroke, fill }) {
  return pug`
    svg(width="22", height="22", viewbox="0 0 22 22")
      path(
        fill=fill
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth="2"
        d="M4,2.99753289 L18,2.99753289 C19.1045695,2.99753289 20,3.8929634 20,4.99753289 L20,15 C20,16.1045695 19.1045695,17 18,17 L11,17 L6.5,21 L6.5,17 L4,17 C2.8954305,17 2,16.1045695 2,15 L2,4.99753289 C2,3.8929634 2.8954305,2.99753289 4,2.99753289 Z"
      )
      circle(cx="7", cy="10", r="1", fill=stroke)
      circle(cx="11", cy="10", r="1", fill=stroke)
      circle(cx="15", cy="10", r="1", fill=stroke)
  `;
}

ChatBubble.propTypes = propTypes;
ChatBubble.defaultProps = defaultProps;

export default iconWrapper(ChatBubble);

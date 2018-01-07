import React from "react";
import * as colours from "colours";

import {
  circle,
  computeSize,
  getTranslation,
  getViewboxSize,
  square
} from "./iconWrapperMethods";

export default function iconWrapper(Icon, options = {}) {
  const defaultOptions = {
    stroke: colours.trueBlack
  };

  const opts = { ...defaultOptions, ...options };

  const IconWrapper = props => {
    const viewBoxSize = getViewboxSize(props, opts);
    const defaultSize = 22;

    return pug`
      svg(
        x="0px"
        y="0px"
        width=props.size || viewBoxSize
        height=props.size || viewBoxSize
        viewBox=${`0 0 ${viewBoxSize} ${viewBoxSize}`}
      )
        = circle(props)
        = square(props)
        g(transform=getTranslation(defaultSize, viewBoxSize))
          Icon(stroke=opts.stroke, ...props)
    `;
  };

  IconWrapper.displayName = `${Icon.displayName || Icon.name || ""}Icon`;

  return IconWrapper;
}

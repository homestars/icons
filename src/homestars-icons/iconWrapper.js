import React from "react";
import * as colours from "./colours";

import {
  circle,
  getTranslation,
  getViewboxSize,
  square
} from "./iconWrapperMethods";

export default function iconWrapper(Icon, opts = {}) {
  const defaultProps = {
    stroke: colours.trueBlack,
    strokeWidth: 2,
    ...opts
  };

  const IconWrapper = props => {
    const viewBoxSize = getViewboxSize(props, opts);
    const defaultSize = 22;

    const iconClass = props.wrapperClass ? props.iconClass : undefined;

    const iconProps = {
      ...props,
      iconClass: undefined,
      wrapperClass: undefined
    };

    return pug`
      svg(
        className=props.wrapperClass || props.iconClass
        x="0px"
        y="0px"
        width=props.size || viewBoxSize
        height=props.size || viewBoxSize
        viewBox=${`0 0 ${viewBoxSize} ${viewBoxSize}`}
      )
        = circle(props)
        = square(props)
        g(
          className=iconClass
          transform=getTranslation(defaultSize, viewBoxSize)
        )
          Icon(...iconProps)
    `;
  };

  IconWrapper.displayName = `${Icon.displayName || Icon.name || ""}Icon`;
  IconWrapper.defaultProps = defaultProps;

  return IconWrapper;
}

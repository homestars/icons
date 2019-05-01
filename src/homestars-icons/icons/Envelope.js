import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import { black } from "../colours";

const propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number
};

const defaultProps = {
  fill: black,
  stroke: "none",
  strokeWidth: 0
}

function Envelope({ fill, stroke, strokeWidth }) {
  return pug`
    svg(xmlns="http://www.w3.org/2000/svg", width="22", height="22", viewBox="0 0 22 22")
      path(
        fill=fill
        stroke=stroke
        strokeWidth=strokeWidth
        d="M14.3615385,10.6931818 L20.2307692,5.25311238 L20.2307692,16.1336231 L14.3615385,10.6931818 Z M8.19423077,11.2085568 L9.13538465,12.0812733 C9.6580769,12.566529 10.3292308,12.808971 11.0003846,12.808971 C11.6707692,12.808971 12.3419231,12.566529 12.8642308,12.0812733 L13.8061539,11.2085568 L19.6684615,16.6426768 L2.33192308,16.6426768 L8.19423077,11.2085568 Z M12.3319231,11.5447033 C11.585,12.2381913 10.4146154,12.2378194 9.6680769,11.5447033 L2.33192308,4.74368687 L19.6684615,4.74368687 L12.3319231,11.5447033 Z M1.76923077,5.25274053 L7.63846155,10.6931818 L1.76923077,16.1339949 L1.76923077,5.25274053 Z M21,5.1155303 C21,4.81359344 20.8742308,4.53991667 20.6715385,4.33874937 C20.4557692,4.12679861 20.1661539,4 19.8461539,4 L2.15384615,4 C1.83384615,4 1.54384615,4.12717045 1.33461538,4.33168434 C1.12653846,4.53805745 1,4.81284975 1,5.1155303 L1,16.2708333 C1,16.5738857 1.12653846,16.8486781 1.33,17.0498453 C1.54384615,17.259565 1.83346154,17.3863636 2.15384615,17.3863636 L19.8461539,17.3863636 C20.1661539,17.3863636 20.4557692,17.259565 20.665,17.0557948 C20.8742308,16.8468188 21,16.573142 21,16.2708333 L21,5.1155303 Z"
      )
  `;
}

Envelope.propTypes = propTypes;
Envelope.defaultProps = defaultProps;

export default iconWrapper(Envelope);
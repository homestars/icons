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

function Hammer({ fill, stroke }) {
  return pug`
    svg(xmlns="http://www.w3.org/2000/svg", width="22", height="22", viewBox="0 0 22 22")
      path(
        fill=fill
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth="2"
        d="M16.0279478,5.11156611 L17.5086034,6.55020179 C17.695068,6.73170089 17.7827696,6.98705676 17.7452397,7.24084121 L17.5086034,8.85233317 L18.1007866,9.42786602 L18.7435365,9.21965277 C18.8940514,9.17093873 19.0599733,9.20904568 19.1721681,9.31786657 L19.8773363,10.0033989 C20.0408879,10.1621124 20.0408879,10.4198254 19.8773363,10.5789317 L17.5086034,12.8806702 C17.3450518,13.0397766 17.0799718,13.0397766 16.9164202,12.8806702 L16.210857,12.1955308 C16.0986621,12.0863171 16.059552,11.9252464 16.1097236,11.7791043 L16.3242369,11.1544646 L15.7316587,10.5789317 L14,11 L10.5,7.5 L11.5863761,4.82399611 C9.95520561,3.23843259 8.97745145,3.08168337 7.35852759,2.75482786 C7.45571043,2.5615431 10.9222934,0.149805126 16.0279478,5.11156611 Z"
      )
      polygon(
        fill=fill
        stroke=stroke
        strokeLinecap="round"
        strokeLinejoin="round"
        style={ strokeLinejoin: "round" }
        strokeWidth="2"
        points="11.5 8.5 2 18 4 20 13.5 10.5"
      )
  `;
}

Hammer.propTypes = propTypes;
Hammer.defaultProps = defaultProps;

export default iconWrapper(Hammer);

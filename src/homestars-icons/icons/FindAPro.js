import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import {trueBlack, darkerGrey, cyan} from "../colours";

const propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string
};

const defaultProps = {
  fill: "none",
  stroke: trueBlack,
  strokeWidth: 0.5,
  primaryColor: darkerGrey,
  secondaryColor: cyan
};

function FindAPro({ fill, stroke, strokeWidth, primaryColor, secondaryColor }) {
  return pug`
    svg(xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22")
      rect(
        fill=fill
        id="22x22" 
        x="0" 
        y="0" 
        width="22" 
        height="22"
      )
      path( 
        fill=fill
        d="M14.1395833,15.44994 C13.8722833,16.5000733 14.3452833,17.37604 14.7035167,17.4295733 C16.8914167,17.75774 18.4314167,18.49804 19.4896167,19.4106733 C20.01615,19.8646067 19.7899167,20.72334 19.10865,20.86194 C17.51475,21.1860733 14.6529167,21.6334067 10.9998167,21.6334067 C7.28328333,21.6334067 4.49771667,21.19854 2.94121667,20.8758733 C2.25885,20.73434 2.04068333,19.86864 2.57381667,19.41984 C3.64118333,18.5207733 5.16981667,17.7933067 7.29391667,17.4295733 C7.65325,17.36834 8.15851667,16.4692733 7.85308333,15.44994" 
        stroke=primaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M5.9884,9.01842333 C5.85383333,9.17242333 5.73613333,9.36419 5.73613333,9.60289 C5.73613333,10.2368567 5.8971,11.5194567 6.61723333,11.8813567 C6.6825,13.2743233 7.85326667,15.4501233 7.85326667,15.4501233 C9.1256,16.60109 10.0323667,17.10269 10.5101333,17.10269 C10.5306667,17.10269 10.7374667,16.9813233 11.0586667,16.9813233 C11.3905,16.9813233 11.6171,17.10269 11.6372667,17.10269 C11.8129,17.10269 13.2025667,16.4177567 14.1394,15.4501233 C14.1394,15.4501233 15.3149333,13.2743233 15.3802,11.8813567 C16.1025333,11.4890233 16.2613,10.2368567 16.2613,9.60289 C16.2613,9.36345667 16.1428667,9.17169 16.0079333,9.01732333" 
        stroke=primaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M9.12083333,11.0734067 L9.1938,11.0734067" 
        stroke=primaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M12.78981,11.0734067 L12.8627767,11.0734067"
        stroke=primaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M8.25018333,10.6333333 L10.0376833,10.6333333" 
        stroke=primaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M13.75968,10.6333333 L11.97218,10.6333333"
        stroke=primaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M11.7333333,14.3 C11.7333333,14.3 11.4814333,14.41 11,14.41 C10.5185667,14.41 10.2666667,14.3 10.2666667,14.3"
        stroke=primaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M5.5,17.8613967 L5.5,21.2607633"
        stroke=primaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M16.5,17.8613967 L16.5,21.2607633"
        stroke=primaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M14.3825367,17.2557 C14.12917,17.8394333 12.8748033,19.0208333 11.01507,19.0208333 C9.15533667,19.0208333 7.79537,17.8049667 7.64760333,17.2557"
        stroke=primaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M12.4670333,1.28315 C14.8899667,1.90098333 16.7607,4.01445 17.1559667,6.64711667"
        stroke=secondaryColor
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M4.84062333,6.6693 C5.22855667,4.02636667 7.10332333,1.90263333 9.53322333,1.28333333" 
        stroke=secondaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M6.23513,7.62267 C5.39289667,7.36783667 4.88909667,6.98063667 4.88909667,6.40497"
        stroke=secondaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M17.11105,6.40504333 C17.11105,7.74557667 14.3749833,8.06604333 10.9998167,8.06604333 C9.62445,8.06604333 8.35468333,8.01287667 7.33315,7.85887667"
        stroke=secondaryColor
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M9.53333333,2.93315 L9.53333333,2.34685 L9.53333333,0.73315 C9.53333333,0.73315 9.99166667,0.366483333 11,0.366483333 C12.2833333,0.366483333 12.4666667,0.73315 12.4666667,0.73315 L12.4666667,2.34685 L12.4666667,2.93315"
        stroke=secondaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path(
        fill=fill 
        d="M11,8.10282 L11,9.53282"
        stroke=secondaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M9.53333333,8.10318667 L9.53333333,9.45948667"
        stroke=secondaryColor 
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M12.4666667,8.10318667 L12.4666667,9.45948667"
        stroke=secondaryColor
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path( 
        fill=fill
        d="M4.8125,6.75202 C4.6981,7.31045333 4.73623333,7.57775333 4.36956667,7.85862 C4.36956667,8.78372 7.31646667,9.53318667 10.9519667,9.53318667 C14.5871,9.53318667 17.5343667,8.78372 17.5343667,7.85862 C17.1721,7.57775333 17.2425,7.28735333 17.1735667,6.75202"
        stroke=secondaryColor
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
      path(
        fill=fill 
        d="M11,0.366666667 L11,3.66666667"
        stroke=secondaryColor
        strokeWidth=strokeWidth
        strokeLinecap="round" 
        strokeLinejoin="round"
      )
  `;
}

FindAPro.propTypes = propTypes;
FindAPro.defaultProps = defaultProps;

export default iconWrapper(FindAPro, {strokeWidth: 0.5});

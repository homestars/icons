import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import * as colours from "../colours";

const propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string
};

const defaultProps = {
  fill: "none"
};

function Phone({ fill, stroke }) {
  return pug`
    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')
      path(
        fill=fill
        stroke=stroke
        strokeWidth=2
        d='M18.7323846,20.4227217 L20.5109784,18.6389601 C21.2206697,17.9289555 21.1483286,16.7539479 20.356318,16.1364439 L17.5711848,13.9651798 C16.9650161,13.4914267 16.1143843,13.4951767 15.5119574,13.9726798 L14.8920688,14.461433 C14.2285261,14.9876864 13.2756189,14.9326861 12.678181,14.3326822 L7.69662165,9.34014978 C7.0979365,8.74014589 7.04180977,7.7863897 7.56690653,7.12138538 L8.05583274,6.50013135 C8.53228633,5.89637743 8.53602812,5.0438719 8.0633163,4.43636796 L5.89557716,1.64509984 C5.27943036,0.851344689 4.10825254,0.778844218 3.39856118,1.49009883 L1.61996739,3.2726104 C0.393910094,4.50136838 0.398899137,7.94514073 7.23388792,14.7951852 C14.070124,21.6464796 17.6048609,21.551479 18.7323846,20.4227217'
      )
  `;
}

Phone.propTypes = propTypes;
Phone.defaultProps = defaultProps;

export default iconWrapper(Phone);

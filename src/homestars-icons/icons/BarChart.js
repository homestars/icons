import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  stroke: PropTypes.string
};

function BarChart({ fill }) {
  return pug`
    svg(xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22")
      rect(width="4" height="6" y="14" fill=fill)
      rect(width="4" height="20" x="8" fill=fill)
      rect(width="4" height="10" x="16" y="10" fill=fill)
    `;
}

BarChart.propTypes = propTypes;

export default iconWrapper(BarChart);

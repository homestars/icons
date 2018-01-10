import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import { pinterestRed, white } from "../colours";

const propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string
};

const defaultProps = {
  fill: pinterestRed,
  stroke: white
};

function Pinterest({ fill, stroke }) {
  return pug`
    svg(x='0px', y='0px', width='22px', height='22px', viewBox='0 0 22 22')
      path(
        fill=fill
        d='M11,0C4.925,0,0,4.925,0,11c0,4.504,2.708,8.373,6.584,10.075c-0.031-0.768-0.005-1.69,0.191-2.526 c0.211-0.893,1.416-5.994,1.416-5.994s-0.352-0.702-0.352-1.74c0-1.63,0.945-2.848,2.122-2.848c1,0,1.484,0.752,1.484,1.651 c0,1.006-0.641,2.51-0.972,3.903c-0.275,1.167,0.585,2.119,1.736,2.119c2.084,0,3.488-2.677,3.488-5.849 c0-2.411-1.624-4.215-4.577-4.215c-3.336,0-5.415,2.488-5.415,5.268c0,0.958,0.282,1.634,0.725,2.158 c0.204,0.24,0.232,0.336,0.158,0.613c-0.053,0.202-0.173,0.689-0.224,0.883c-0.073,0.278-0.298,0.378-0.55,0.275 c-1.537-0.627-2.252-2.311-2.252-4.202c0-3.125,2.635-6.871,7.861-6.871c4.199,0,6.963,3.039,6.963,6.301 c0,4.315-2.398,7.539-5.935,7.539c-1.188,0-2.305-0.642-2.688-1.371c0,0-0.639,2.534-0.773,3.023 c-0.233,0.849-0.69,1.696-1.107,2.357C8.872,21.84,9.917,22,11,22c6.074,0,10.999-4.925,10.999-11S17.074,0,11,0z'
      )
      path(
        fill=stroke,
        d='M9.76,16.176c0.383,0.729,1.5,1.371,2.688,1.371c3.536,0,5.935-3.224,5.935-7.539 c0-3.262-2.764-6.301-6.963-6.301c-5.227,0-7.861,3.747-7.861,6.871c0,1.892,0.715,3.575,2.252,4.202 c0.252,0.104,0.478,0.004,0.55-0.274c0.051-0.193,0.171-0.681,0.224-0.883c0.074-0.276,0.046-0.373-0.158-0.613 c-0.443-0.523-0.725-1.199-0.725-2.157c0-2.779,2.079-5.268,5.415-5.268c2.953,0,4.577,1.804,4.577,4.215 c0,3.172-1.404,5.849-3.488,5.849c-1.151,0-2.012-0.952-1.736-2.119c0.331-1.394,0.972-2.897,0.972-3.903 c0-0.899-0.483-1.651-1.484-1.651c-1.176,0-2.122,1.217-2.122,2.848c0,1.038,0.352,1.74,0.352,1.74s-1.204,5.101-1.416,5.993 c-0.196,0.834-0.222,1.755-0.191,2.522c0.42,0.185,0.854,0.343,1.3,0.475c0.417-0.66,0.873-1.507,1.105-2.354 C9.122,18.71,9.76,16.176,9.76,16.176z'
      )
  `;
}

Pinterest.propTypes = propTypes;
Pinterest.defaultProps = defaultProps;

export default iconWrapper(Pinterest, { height: 22, width: 22, stroke: white });
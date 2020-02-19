import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import { cyan } from "../colours";

const propTypes = {
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number
};

function ProjectsList({ stroke, strokeWidth }) {
  return (
    <svg viewBox="0 0 45 46">
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          stroke={stroke}
          strokeWidth={strokeWidth}
        >
          <g transform="translate(7.232143, 5.649123)">
            <rect
              strokeLinejoin="round"
              x="0"
              y="-7.16775567e-16"
              width="6.42857143"
              height="6.45614035"
            ></rect>
            <rect
              strokeLinejoin="round"
              x="0"
              y="13.7192982"
              width="6.42857143"
              height="6.45614035"
            ></rect>
            <rect
              strokeLinejoin="round"
              x="0"
              y="27.4385965"
              width="6.42857143"
              height="6.45614035"
            ></rect>
            <line
              x1="30.3852983"
              y1="3.4805179"
              x2="11.099584"
              y2="3.4805179"
              strokeLinecap="round"
            ></line>
            <line
              x1="30.3852983"
              y1="17.1998162"
              x2="11.099584"
              y2="17.1998162"
              strokeLinecap="round"
            ></line>
            <line
              x1="30.3852983"
              y1="30.9191144"
              x2="11.099584"
              y2="30.9191144"
              strokeLinecap="round"
            ></line>
          </g>
        </g>
      </g>
    </svg>
  );
}

ProjectsList.propTypes = propTypes;

export default iconWrapper(ProjectsList);

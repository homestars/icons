import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import { cyan } from "../colours";

const propTypes = {
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number
};

function PaintBrush({ stroke, strokeWidth }) {
  return (
    <svg viewBox="0 0 45 46">
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinejoin="round"
      >
        <g stroke={stroke} strokeWidth={strokeWidth}>
          <g transform="translate(8.035714, 0.807018)">
            <path d="M26.0616212,23.4904094 C26.0616212,25.5060165 25.5666212,27.3221287 22.3812641,28.1717568 C18.9747642,29.0807814 18.354407,30.9466059 19.1232642,36.4123743 C19.8921213,41.8781427 16.7183356,43.6839252 14.0594785,43.6839252 C11.4006214,43.6839252 8.22619283,41.8781427 8.99569282,36.4123743 C9.76454996,30.9466059 9.14419282,29.0807814 5.73769285,28.1717568 C2.55233573,27.3221287 2.05733574,25.5060165 2.05733574,23.4904094"></path>
            <polygon
              strokeLinecap="round"
              points="26.2747298 15.3912453 1.84422866 15.3912453 -0.000128571425 -0.000193684217 28.1190871 -0.000193684217"
            ></polygon>
            <line
              x1="22.0484573"
              y1="-0.000129122804"
              x2="22.0484573"
              y2="8.35799024"
              strokeLinecap="round"
            ></line>
            <line
              x1="19.3938429"
              y1="-0.000129122804"
              x2="19.3938429"
              y2="6.46763267"
              strokeLinecap="round"
            ></line>
            <line
              x1="16.7389081"
              y1="-0.000129122804"
              x2="16.7389081"
              y2="8.35799024"
              strokeLinecap="round"
            ></line>
            <path
              d="M12.5465147,38.6588534 C12.5465147,39.497506 13.2240861,40.1779832 14.0598004,40.1779832 C14.8948718,40.1779832 15.5724432,39.497506 15.5724432,38.6588534 C15.5724432,37.8195551 14.8948718,37.1397235 14.0598004,37.1397235 C13.2240861,37.1397235 12.5465147,37.8195551 12.5465147,38.6588534 Z"
              strokeLinecap="round"
            ></path>
            <polygon points="1.26900002 23.3636749 26.8502145 23.3636749 26.8502145 15.391633 1.26900002 15.391633"></polygon>
          </g>
          <line
            x1="12.8571429"
            y1="19.7719298"
            x2="31.5368296"
            y2="19.7719298"
            strokeLinecap="round"
          ></line>
        </g>
      </g>
    </svg>
  );
}

PaintBrush.propTypes = propTypes;

export default iconWrapper(PaintBrush);

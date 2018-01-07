"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      path(\n        fill=fill\n        stroke=stroke\n        strokeLinecap='round'\n        strokeLinejoin='round'\n        style={ strokeLinejoin: 'round' }\n        strokeWidth='2'\n        d='M15 15L20 20M17 9.5C17 13.6425 13.6425 17 9.5 17 5.3575 17 2 13.6425 2 9.5 2 5.3575 5.3575 2 9.5 2 13.6425 2 17 5.3575 17 9.5z'\n      )\n      path(\n        fill=\"none\"\n        stroke=glassStroke || stroke\n        strokeLinecap='round'\n        strokeLinejoin='round'\n        style={ strokeLinejoin: 'round' }\n        d='M5,10 C5,7.2385 7.01465,5 9.5,5'\n      )\n  "], ["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      path(\n        fill=fill\n        stroke=stroke\n        strokeLinecap='round'\n        strokeLinejoin='round'\n        style={ strokeLinejoin: 'round' }\n        strokeWidth='2'\n        d='M15 15L20 20M17 9.5C17 13.6425 13.6425 17 9.5 17 5.3575 17 2 13.6425 2 9.5 2 5.3575 5.3575 2 9.5 2 13.6425 2 17 5.3575 17 9.5z'\n      )\n      path(\n        fill=\"none\"\n        stroke=glassStroke || stroke\n        strokeLinecap='round'\n        strokeLinejoin='round'\n        style={ strokeLinejoin: 'round' }\n        d='M5,10 C5,7.2385 7.01465,5 9.5,5'\n      )\n  "]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _iconWrapper = require("../iconWrapper");

var _iconWrapper2 = _interopRequireDefault(_iconWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
  fill: _propTypes2.default.string,
  glassStroke: _propTypes2.default.string,
  stroke: _propTypes2.default.string
};

var defaultProps = {
  fill: "none"
};

function Loupe(_ref) {
  var fill = _ref.fill,
      glassStroke = _ref.glassStroke,
      stroke = _ref.stroke;

  return pug(_templateObject);
}

Loupe.propTypes = propTypes;
Loupe.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(Loupe);
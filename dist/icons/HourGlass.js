"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      polygon(\n        fill=fill\n        stroke=\"none\"\n        points='7 20 7 14 11 11 15 14 15 20'\n      )\n      polygon(\n        fill=fill\n        stroke=\"none\"\n        points='11 11 7 8 7 2 15 2 15 8'\n      )\n      path(\n        fill=\"none\"\n        stroke=stroke\n        strokeWidth='2'\n        strokeLinecap='round'\n        d='M11,11 L11,14.0003478'\n      )\n      path(\n        fill=sandFill || stroke\n        stroke=\"none\"\n        d='M7,20 L15,20 L15,18.75 L12.0077271,16.4237988 C11.669432,16.1421607 11.3335229,16.0008958 11,16.0000042 C10.6664771,15.9991127 10.3329541,16.138588 9.99943115,16.4184302 L7,18.75 L7,20 Z'\n      )\n      polygon(\n        fill=sandFill || stroke\n        stroke=\"none\"\n        points='11 11 15 8 7 8'\n      )\n      path(\n        fill=\"none\"\n        stroke=stroke\n        strokeWidth='2'\n        strokeLinecap='round'\n        d='M5 20L17 20M5 2L17 2'\n      )\n      polyline(\n        fill=\"none\"\n        stroke=stroke\n        strokeWidth='2'\n        strokeLinecap='round'\n        points='7 20 7 14 11 11.004 15 14 15 20'\n      )\n      polyline(\n        fill=\"none\"\n        stroke=stroke\n        strokeWidth='2'\n        strokeLinecap='round'\n        points='7 2.003 7 8 11 11 15.001 8 15.001 2.003'\n      )\n  "], ["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      polygon(\n        fill=fill\n        stroke=\"none\"\n        points='7 20 7 14 11 11 15 14 15 20'\n      )\n      polygon(\n        fill=fill\n        stroke=\"none\"\n        points='11 11 7 8 7 2 15 2 15 8'\n      )\n      path(\n        fill=\"none\"\n        stroke=stroke\n        strokeWidth='2'\n        strokeLinecap='round'\n        d='M11,11 L11,14.0003478'\n      )\n      path(\n        fill=sandFill || stroke\n        stroke=\"none\"\n        d='M7,20 L15,20 L15,18.75 L12.0077271,16.4237988 C11.669432,16.1421607 11.3335229,16.0008958 11,16.0000042 C10.6664771,15.9991127 10.3329541,16.138588 9.99943115,16.4184302 L7,18.75 L7,20 Z'\n      )\n      polygon(\n        fill=sandFill || stroke\n        stroke=\"none\"\n        points='11 11 15 8 7 8'\n      )\n      path(\n        fill=\"none\"\n        stroke=stroke\n        strokeWidth='2'\n        strokeLinecap='round'\n        d='M5 20L17 20M5 2L17 2'\n      )\n      polyline(\n        fill=\"none\"\n        stroke=stroke\n        strokeWidth='2'\n        strokeLinecap='round'\n        points='7 20 7 14 11 11.004 15 14 15 20'\n      )\n      polyline(\n        fill=\"none\"\n        stroke=stroke\n        strokeWidth='2'\n        strokeLinecap='round'\n        points='7 2.003 7 8 11 11 15.001 8 15.001 2.003'\n      )\n  "]);

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
  stroke: _propTypes2.default.string
};

var defaultProps = {
  fill: "none"
};

function HourGlass(_ref) {
  var fill = _ref.fill,
      sandFill = _ref.sandFill,
      stroke = _ref.stroke;

  return pug(_templateObject);
}

HourGlass.propTypes = propTypes;
HourGlass.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(HourGlass, { width: 14 });
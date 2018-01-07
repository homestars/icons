"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      path(\n        d='M13 6L20.0369882 6M13 16L20.0369882 16'\n        fill=\"none\"\n        stroke=", "\n        strokeLinecap=\"round\"\n        strokeWidth=\"2\"\n      )\n      polyline(\n        fill=\"none\"\n        stroke=", "\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        strokeWidth=\"2\"\n        points='3 6 5 8 8 3'\n      )\n      rect(\n        fill=", "\n        height=\"6\"\n        width=\"6\"\n        x=\"2\"\n        y=\"13\"\n        rx=\"1\"\n        stroke=", "\n        strokeWidth=\"2\"\n      )\n  "], ["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      path(\n        d='M13 6L20.0369882 6M13 16L20.0369882 16'\n        fill=\"none\"\n        stroke=", "\n        strokeLinecap=\"round\"\n        strokeWidth=\"2\"\n      )\n      polyline(\n        fill=\"none\"\n        stroke=", "\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        strokeWidth=\"2\"\n        points='3 6 5 8 8 3'\n      )\n      rect(\n        fill=", "\n        height=\"6\"\n        width=\"6\"\n        x=\"2\"\n        y=\"13\"\n        rx=\"1\"\n        stroke=", "\n        strokeWidth=\"2\"\n      )\n  "]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _iconWrapper = require("../iconWrapper");

var _iconWrapper2 = _interopRequireDefault(_iconWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
  boxColor: _propTypes2.default.string,
  boxFill: _propTypes2.default.string,
  checkColor: _propTypes2.default.string,
  lineColor: _propTypes2.default.string,
  stroke: _propTypes2.default.string
};

function OptionsList(_ref) {
  var boxColor = _ref.boxColor,
      boxFill = _ref.boxFill,
      checkColor = _ref.checkColor,
      lineColor = _ref.lineColor,
      stroke = _ref.stroke;

  return pug(_templateObject, checkColor || stroke, lineColor || stroke, boxFill || "none", boxColor || stroke);
}

OptionsList.propTypes = propTypes;

exports.default = (0, _iconWrapper2.default)(OptionsList);
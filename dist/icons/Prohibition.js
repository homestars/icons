"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(x='0px', y='0px', width='22px', height='22px', viewbox='0 0 22 22')\n      path(\n        fill=fill\n        stroke=stroke\n        strokeWidth='2'\n        strokeLinecap='round'\n        strokeLinejoin='round'\n        d='M21,11 c0,5.522-4.478,10-10,10S1,16.522,1,11S5.478,1,11,1S21,5.478,21,11L21,11z'\n      )\n      path(stroke=stroke, strokeWidth='2', strokeLinecap='square', d='M4,18L18,4')\n  "], ["\n    svg(x='0px', y='0px', width='22px', height='22px', viewbox='0 0 22 22')\n      path(\n        fill=fill\n        stroke=stroke\n        strokeWidth='2'\n        strokeLinecap='round'\n        strokeLinejoin='round'\n        d='M21,11 c0,5.522-4.478,10-10,10S1,16.522,1,11S5.478,1,11,1S21,5.478,21,11L21,11z'\n      )\n      path(stroke=stroke, strokeWidth='2', strokeLinecap='square', d='M4,18L18,4')\n  "]);

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

function Prohibition(_ref) {
  var fill = _ref.fill,
      stroke = _ref.stroke;

  return pug(_templateObject);
}

Prohibition.propTypes = propTypes;
Prohibition.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(Prohibition);
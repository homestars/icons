"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      path(\n        fill=fill\n        stroke=stroke\n        strokeWidth=strokeWidth\n        strokeMiterlimit=\"10\"\n        d='M18,8 C18,11.4482759 15.6666667,15.7816092 11,21 C6.33333333,15.7816092 4,11.4482759 4,8 C4,4.00068966 7.134,1 11,1 C14.866,1 18,4.00068966 18,8 Z M11,10 C12.1045695,10 13,9.1045695 13,8 C13,6.8954305 12.1045695,6 11,6 C9.8954305,6 9,6.8954305 9,8 C9,9.1045695 9.8954305,10 11,10 Z'\n      )\n  "], ["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      path(\n        fill=fill\n        stroke=stroke\n        strokeWidth=strokeWidth\n        strokeMiterlimit=\"10\"\n        d='M18,8 C18,11.4482759 15.6666667,15.7816092 11,21 C6.33333333,15.7816092 4,11.4482759 4,8 C4,4.00068966 7.134,1 11,1 C14.866,1 18,4.00068966 18,8 Z M11,10 C12.1045695,10 13,9.1045695 13,8 C13,6.8954305 12.1045695,6 11,6 C9.8954305,6 9,6.8954305 9,8 C9,9.1045695 9.8954305,10 11,10 Z'\n      )\n  "]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _iconWrapper = require("../iconWrapper");

var _iconWrapper2 = _interopRequireDefault(_iconWrapper);

var _colours = require("../colours");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
  fill: _propTypes2.default.string,
  stroke: _propTypes2.default.string,
  strokeWidth: _propTypes2.default.number
};

var defaultProps = {
  fill: _colours.white,
  strokeWidth: 2
};

function Location(_ref) {
  var fill = _ref.fill,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth;

  return pug(_templateObject);
}

Location.propTypes = propTypes;
Location.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(Location);
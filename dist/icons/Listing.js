"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n        g(transform='translate(2 2.182)')\n          polygon(\n            fill=\"none\"\n            stroke=stroke\n            strokeLinecap='round'\n            strokeLinejoin='round'\n            strokeWidth='2'\n            points='0 16.818 18 16.818 18 .818 0 .818'\n          )\n          path(\n            fill=fill\n            stroke=stroke\n            d='M0.5,3.3178 L17.682,3.3178'\n          )\n        path(\n          fill=fill\n          stroke=stroke\n          strokeLinecap='round', stroke-linejoin='round', d='M11.5 8.5L16.5 8.5M11.5 10.5L16.5 10.5M4.5 15.5L17.5 15.5'\n        )\n        polygon(\n          fill=fill\n          stroke=stroke\n          strokeLinecap='round'\n          strokeLinejoin='round'\n          points='4.5 12.5 9.5 12.5 9.5 7.5 4.5 7.5'\n        )\n  "], ["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n        g(transform='translate(2 2.182)')\n          polygon(\n            fill=\"none\"\n            stroke=stroke\n            strokeLinecap='round'\n            strokeLinejoin='round'\n            strokeWidth='2'\n            points='0 16.818 18 16.818 18 .818 0 .818'\n          )\n          path(\n            fill=fill\n            stroke=stroke\n            d='M0.5,3.3178 L17.682,3.3178'\n          )\n        path(\n          fill=fill\n          stroke=stroke\n          strokeLinecap='round', stroke-linejoin='round', d='M11.5 8.5L16.5 8.5M11.5 10.5L16.5 10.5M4.5 15.5L17.5 15.5'\n        )\n        polygon(\n          fill=fill\n          stroke=stroke\n          strokeLinecap='round'\n          strokeLinejoin='round'\n          points='4.5 12.5 9.5 12.5 9.5 7.5 4.5 7.5'\n        )\n  "]);

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

function Listing(_ref) {
  var fill = _ref.fill,
      stroke = _ref.stroke;

  return pug(_templateObject);
}

Listing.propTypes = propTypes;
Listing.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(Listing);
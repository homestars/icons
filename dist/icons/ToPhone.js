"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(width='22', height='22', viewbox='0 0 22 22')\n      defs\n        polygon#ToPhoneA(points='11 14.254 14.252 11 11 7.759 9 5.756 9 1 21 1.001 21 21 9 21 9 16.238')\n      mask#ToPhoneB(fill=maskFill)\n        use(href='#ToPhoneA')\n      rect(\n        width='10'\n        height='18'\n        x='10'\n        y='2'\n        fill=fill\n        stroke=stroke\n        strokeLinecap='round'\n        style={ strokeLinejoin: 'round' }\n        strokeWidth='2'\n        mask='url(#ToPhoneB)'\n        rx='1'\n      )\n      path(\n        stroke=stroke\n        strokeLinecap='round'\n        strokeLinejoin='round'\n        style={ strokeLinejoin: 'round' }\n        d='M13.5,4.5 L16.5,4.5'\n      )\n      path(\n        stroke=arrowColor || stroke\n        strokeLinecap='round'\n        strokeWidth='2'\n        d='M2,11 L10,11'\n      )\n      polyline(\n        stroke=arrowColor || stroke\n        fill=\"none\"\n        strokeLinecap='round'\n        strokeWidth='2'\n        points='7 8 10 11.001 7 14'\n      )\n      circle(cx='15', cy='17', r='1', fill=stroke)\n  "], ["\n    svg(width='22', height='22', viewbox='0 0 22 22')\n      defs\n        polygon#ToPhoneA(points='11 14.254 14.252 11 11 7.759 9 5.756 9 1 21 1.001 21 21 9 21 9 16.238')\n      mask#ToPhoneB(fill=maskFill)\n        use(href='#ToPhoneA')\n      rect(\n        width='10'\n        height='18'\n        x='10'\n        y='2'\n        fill=fill\n        stroke=stroke\n        strokeLinecap='round'\n        style={ strokeLinejoin: 'round' }\n        strokeWidth='2'\n        mask='url(#ToPhoneB)'\n        rx='1'\n      )\n      path(\n        stroke=stroke\n        strokeLinecap='round'\n        strokeLinejoin='round'\n        style={ strokeLinejoin: 'round' }\n        d='M13.5,4.5 L16.5,4.5'\n      )\n      path(\n        stroke=arrowColor || stroke\n        strokeLinecap='round'\n        strokeWidth='2'\n        d='M2,11 L10,11'\n      )\n      polyline(\n        stroke=arrowColor || stroke\n        fill=\"none\"\n        strokeLinecap='round'\n        strokeWidth='2'\n        points='7 8 10 11.001 7 14'\n      )\n      circle(cx='15', cy='17', r='1', fill=stroke)\n  "]);

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
  arrowColor: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  maskFill: _propTypes2.default.string,
  phoneFill: _propTypes2.default.string,
  stroke: _propTypes2.default.string
};

var defaultProps = {
  fill: "none",
  maskFill: _colours.white
};

function ToPhone(_ref) {
  var arrowColor = _ref.arrowColor,
      fill = _ref.fill,
      maskFill = _ref.maskFill,
      stroke = _ref.stroke;

  return pug(_templateObject);
}

ToPhone.propTypes = propTypes;
ToPhone.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(ToPhone);
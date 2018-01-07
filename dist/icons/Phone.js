"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      path(\n        fill=fill\n        stroke=stroke\n        strokeWidth=2\n        d='M18.7323846,20.4227217 L20.5109784,18.6389601 C21.2206697,17.9289555 21.1483286,16.7539479 20.356318,16.1364439 L17.5711848,13.9651798 C16.9650161,13.4914267 16.1143843,13.4951767 15.5119574,13.9726798 L14.8920688,14.461433 C14.2285261,14.9876864 13.2756189,14.9326861 12.678181,14.3326822 L7.69662165,9.34014978 C7.0979365,8.74014589 7.04180977,7.7863897 7.56690653,7.12138538 L8.05583274,6.50013135 C8.53228633,5.89637743 8.53602812,5.0438719 8.0633163,4.43636796 L5.89557716,1.64509984 C5.27943036,0.851344689 4.10825254,0.778844218 3.39856118,1.49009883 L1.61996739,3.2726104 C0.393910094,4.50136838 0.398899137,7.94514073 7.23388792,14.7951852 C14.070124,21.6464796 17.6048609,21.551479 18.7323846,20.4227217'\n      )\n  "], ["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      path(\n        fill=fill\n        stroke=stroke\n        strokeWidth=2\n        d='M18.7323846,20.4227217 L20.5109784,18.6389601 C21.2206697,17.9289555 21.1483286,16.7539479 20.356318,16.1364439 L17.5711848,13.9651798 C16.9650161,13.4914267 16.1143843,13.4951767 15.5119574,13.9726798 L14.8920688,14.461433 C14.2285261,14.9876864 13.2756189,14.9326861 12.678181,14.3326822 L7.69662165,9.34014978 C7.0979365,8.74014589 7.04180977,7.7863897 7.56690653,7.12138538 L8.05583274,6.50013135 C8.53228633,5.89637743 8.53602812,5.0438719 8.0633163,4.43636796 L5.89557716,1.64509984 C5.27943036,0.851344689 4.10825254,0.778844218 3.39856118,1.49009883 L1.61996739,3.2726104 C0.393910094,4.50136838 0.398899137,7.94514073 7.23388792,14.7951852 C14.070124,21.6464796 17.6048609,21.551479 18.7323846,20.4227217'\n      )\n  "]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _iconWrapper = require("../iconWrapper");

var _iconWrapper2 = _interopRequireDefault(_iconWrapper);

var _colours = require("../colours");

var colours = _interopRequireWildcard(_colours);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
  fill: _propTypes2.default.string,
  stroke: _propTypes2.default.string
};

var defaultProps = {
  fill: "none"
};

function Phone(_ref) {
  var fill = _ref.fill,
      stroke = _ref.stroke;

  return pug(_templateObject);
}

Phone.propTypes = propTypes;
Phone.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(Phone);
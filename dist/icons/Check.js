"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(width=\"20\", height=\"20\", viewbox=\"0 0 20 20\")\n      polyline(\n        fill=\"none\"\n        stroke=stroke\n        strokeWidth=\"4\"\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        points=\"2,11.484 7.867,16.668 18,3.333\"\n      )\n  "], ["\n    svg(width=\"20\", height=\"20\", viewbox=\"0 0 20 20\")\n      polyline(\n        fill=\"none\"\n        stroke=stroke\n        strokeWidth=\"4\"\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        points=\"2,11.484 7.867,16.668 18,3.333\"\n      )\n  "]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _iconWrapper = require("../iconWrapper");

var _iconWrapper2 = _interopRequireDefault(_iconWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
  stroke: _propTypes2.default.string
};

function Check(_ref) {
  var stroke = _ref.stroke;

  return pug(_templateObject);
}

Check.propTypes = propTypes;

exports.default = (0, _iconWrapper2.default)(Check);
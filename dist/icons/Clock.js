"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(width=\"22\", height=\"22\", viewbox=\"0 0 22 22\")\n      path(\n        fill=fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        d=\"M11,21 C5.47677802,21 1,16.523222 1,11 C1,5.47677802 5.47677802,1 11,1 C16.523222,1 21,5.47677802 21,11 C21,16.523222 16.523222,21 11,21 Z\"\n      )\n      polyline(\n        fill=fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        points=\"11 5 11 10.834 14 14\"\n      )\n  "], ["\n    svg(width=\"22\", height=\"22\", viewbox=\"0 0 22 22\")\n      path(\n        fill=fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        d=\"M11,21 C5.47677802,21 1,16.523222 1,11 C1,5.47677802 5.47677802,1 11,1 C16.523222,1 21,5.47677802 21,11 C21,16.523222 16.523222,21 11,21 Z\"\n      )\n      polyline(\n        fill=fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        points=\"11 5 11 10.834 14 14\"\n      )\n  "]);

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

function Clock(_ref) {
  var fill = _ref.fill,
      stroke = _ref.stroke;

  return pug(_templateObject);
}

Clock.propTypes = propTypes;
Clock.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(Clock);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns=\"http://www.w3.org/2000/svg\", width=\"22\", height=\"22\", viewbox=\"0 0 22 22\")\n      polyline(\n        fill=\"none\"\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        points=\"20 16 20 20 2 20 2 16\"\n      )\n      path(\n        fill=\"none\"\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        d=\"M10.9996,16 L10.9996,2\"\n      )\n      polyline(\n        fill=\"none\"\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        points=\"16.003 11 11 16.001 6.002 11\"\n      )\n  "], ["\n    svg(xmlns=\"http://www.w3.org/2000/svg\", width=\"22\", height=\"22\", viewbox=\"0 0 22 22\")\n      polyline(\n        fill=\"none\"\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        points=\"20 16 20 20 2 20 2 16\"\n      )\n      path(\n        fill=\"none\"\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        d=\"M10.9996,16 L10.9996,2\"\n      )\n      polyline(\n        fill=\"none\"\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        points=\"16.003 11 11 16.001 6.002 11\"\n      )\n  "]);

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

function Download(_ref) {
  var stroke = _ref.stroke;

  return pug(_templateObject);
}

Download.propTypes = propTypes;

exports.default = (0, _iconWrapper2.default)(Download);
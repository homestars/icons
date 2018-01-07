"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns=\"http://www.w3.org/2000/svg\", width=\"22\", height=\"22\", viewbox=\"0 0 22 22\")\n      path(\n        fill=fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        d=\"M17.2626998 20L4.73730018 20C4.33072824 20 4 19.7018703 4 19.3328646L4 4 18 4 18 19.3328646C18 19.7018703 17.6692718 20 17.2626998 20zM3 4L19 4\"\n      )\n      path(\n        fill=handleFill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        d=\"M14 3.5L8 3.5 8 2.16704162C8 1.79808774 8.2992126 1.5 8.66704162 1.5L13.3329584 1.5C13.7007874 1.5 14 1.79808774 14 2.16704162L14 3.5zM11 6.86733774L11 17.0705353M14 6.86733774L14 17.0705353M8 6.86733774L8 17.0705353\"\n      )\n  "], ["\n    svg(xmlns=\"http://www.w3.org/2000/svg\", width=\"22\", height=\"22\", viewbox=\"0 0 22 22\")\n      path(\n        fill=fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        d=\"M17.2626998 20L4.73730018 20C4.33072824 20 4 19.7018703 4 19.3328646L4 4 18 4 18 19.3328646C18 19.7018703 17.6692718 20 17.2626998 20zM3 4L19 4\"\n      )\n      path(\n        fill=handleFill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        d=\"M14 3.5L8 3.5 8 2.16704162C8 1.79808774 8.2992126 1.5 8.66704162 1.5L13.3329584 1.5C13.7007874 1.5 14 1.79808774 14 2.16704162L14 3.5zM11 6.86733774L11 17.0705353M14 6.86733774L14 17.0705353M8 6.86733774L8 17.0705353\"\n      )\n  "]);

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
  handleFill: _propTypes2.default.string,
  stroke: _propTypes2.default.string
};

var defaultProps = {
  fill: "none",
  handleFill: "none"
};

function Trash(_ref) {
  var fill = _ref.fill,
      handleFill = _ref.handleFill,
      stroke = _ref.stroke;

  return pug(_templateObject);
}

Trash.propTypes = propTypes;
Trash.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(Trash);
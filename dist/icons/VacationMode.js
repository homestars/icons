"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns=\"http://www.w3.org/2000/svg\", xmlns:xlink=\"http://www.w3.org/1999/xlink\", width=\"22\", height=\"22\", viewbox=\"0 0 22 22\")\n      path(\n        fill=fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        strokeWidth=\"2\"\n        d=\"M18.7586207,19 L3.24137931,19 C2.55582759,19 2,18.4301364 2,17.7272727 L2,6.27272727 C2,5.56986364 2.55582759,5 3.24137931,5 L18.7586207,5 C19.4441724,5 20,5.56986364 20,6.27272727 L20,17.7272727 C20,18.4301364 19.4441724,19 18.7586207,19 Z\"\n      )\n      path(\n        fill=innerFill || fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        strokeWidth=\"2\"\n        d=\"M8 5C8 3.34325 9.34325 2 11 2 12.65675 2 14 3.34325 14 5M15 12C15 14.209 13.209 16 11 16 8.791 16 7 14.209 7 12 7 9.791 8.791 8 11 8 13.209 8 15 9.791 15 12L15 12z\"\n      )\n      path(\n        fill=\"none\"\n        stroke=stroke\n        strokeLinejoin=\"round\"\n        strokeWidth=\"2\"\n        d=\"M14,9.02380371 L8,15\"\n      )\n  "], ["\n    svg(xmlns=\"http://www.w3.org/2000/svg\", xmlns:xlink=\"http://www.w3.org/1999/xlink\", width=\"22\", height=\"22\", viewbox=\"0 0 22 22\")\n      path(\n        fill=fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        strokeWidth=\"2\"\n        d=\"M18.7586207,19 L3.24137931,19 C2.55582759,19 2,18.4301364 2,17.7272727 L2,6.27272727 C2,5.56986364 2.55582759,5 3.24137931,5 L18.7586207,5 C19.4441724,5 20,5.56986364 20,6.27272727 L20,17.7272727 C20,18.4301364 19.4441724,19 18.7586207,19 Z\"\n      )\n      path(\n        fill=innerFill || fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        strokeWidth=\"2\"\n        d=\"M8 5C8 3.34325 9.34325 2 11 2 12.65675 2 14 3.34325 14 5M15 12C15 14.209 13.209 16 11 16 8.791 16 7 14.209 7 12 7 9.791 8.791 8 11 8 13.209 8 15 9.791 15 12L15 12z\"\n      )\n      path(\n        fill=\"none\"\n        stroke=stroke\n        strokeLinejoin=\"round\"\n        strokeWidth=\"2\"\n        d=\"M14,9.02380371 L8,15\"\n      )\n  "]);

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
  innerFill: _propTypes2.default.string,
  stroke: _propTypes2.default.string
};

var defaultProps = {
  fill: "none"
};

function VacationMode(_ref) {
  var fill = _ref.fill,
      innerFill = _ref.innerFill,
      stroke = _ref.stroke;

  return pug(_templateObject);
}

VacationMode.propTypes = propTypes;
VacationMode.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(VacationMode);
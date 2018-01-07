"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns=\"http://www.w3.org/2000/svg\", width=\"22\", height=\"22\", viewbox=\"0 0 22 22\")\n      path(\n        fill=\"none\"\n        stroke=stroke\n        strokeWidth=\"2\"\n        strokeLinecap=\"round\"\n        d=\"M20 2L2 20M2 2L20 20\"\n      )\n  "], ["\n    svg(xmlns=\"http://www.w3.org/2000/svg\", width=\"22\", height=\"22\", viewbox=\"0 0 22 22\")\n      path(\n        fill=\"none\"\n        stroke=stroke\n        strokeWidth=\"2\"\n        strokeLinecap=\"round\"\n        d=\"M20 2L2 20M2 2L20 20\"\n      )\n  "]);

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

function X(_ref) {
  var stroke = _ref.stroke;

  return pug(_templateObject);
}

X.propTypes = propTypes;

exports.default = (0, _iconWrapper2.default)(X, { height: 12, width: 12 });
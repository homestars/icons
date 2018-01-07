"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(width=\"22\", height=\"22\", viewbox=\"0 0 22 22\")\n      path(\n        stroke=stroke\n        fill=\"none\"\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        strokeWidth=\"2\"\n        d=\"M14 20L14 18C14 15.791 12.209 14 10 14L6 14C3.791 14 2 15.791 2 18L2 20M8 2C10.209 2 12 3.791 12 6 12 8.209 10.209 10 8 10 5.791 10 4 8.209 4 6 4 3.791 5.791 2 8 2zM20 20L20 18C19.999 16.177 18.765 14.586 17 14.13M15 2.1299C17.14 2.6779 18.431 4.8569 17.883 6.9969 17.521 8.4129 16.415 9.5179 15 9.879\"\n      )\n  "], ["\n    svg(width=\"22\", height=\"22\", viewbox=\"0 0 22 22\")\n      path(\n        stroke=stroke\n        fill=\"none\"\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        strokeWidth=\"2\"\n        d=\"M14 20L14 18C14 15.791 12.209 14 10 14L6 14C3.791 14 2 15.791 2 18L2 20M8 2C10.209 2 12 3.791 12 6 12 8.209 10.209 10 8 10 5.791 10 4 8.209 4 6 4 3.791 5.791 2 8 2zM20 20L20 18C19.999 16.177 18.765 14.586 17 14.13M15 2.1299C17.14 2.6779 18.431 4.8569 17.883 6.9969 17.521 8.4129 16.415 9.5179 15 9.879\"\n      )\n  "]);

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

function Users(_ref) {
  var stroke = _ref.stroke;

  return pug(_templateObject);
}

Users.propTypes = propTypes;

exports.default = (0, _iconWrapper2.default)(Users);
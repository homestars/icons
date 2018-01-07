"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" viewBox=\"0 0 22 22\")\n      polygon(\n        fill=fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        points=\"2 19 20 19 20 3 2 3\"\n      )\n      polygon(\n        fill=fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        points=\"2 19 6.154 13.286 10.308 16.143 14.5 9 20 19\"\n      )\n      path(\n        fill=fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        d=\"M9,8 C9,9.10438729 8.10416141,10 6.99949559,10 C5.89482976,10 5,9.10438729 5,8 C5,6.89561271 5.89482976,6 6.99949559,6 C8.10416141,6 9,6.89561271 9,8 L9,8 Z\"\n      )\n  "], ["\n    svg(xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" viewBox=\"0 0 22 22\")\n      polygon(\n        fill=fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        points=\"2 19 20 19 20 3 2 3\"\n      )\n      polygon(\n        fill=fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        points=\"2 19 6.154 13.286 10.308 16.143 14.5 9 20 19\"\n      )\n      path(\n        fill=fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        d=\"M9,8 C9,9.10438729 8.10416141,10 6.99949559,10 C5.89482976,10 5,9.10438729 5,8 C5,6.89561271 5.89482976,6 6.99949559,6 C8.10416141,6 9,6.89561271 9,8 L9,8 Z\"\n      )\n  "]);

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

function Photo(_ref) {
  var fill = _ref.fill,
      stroke = _ref.stroke;

  return pug(_templateObject);
}

Photo.propTypes = propTypes;
Photo.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(Photo);
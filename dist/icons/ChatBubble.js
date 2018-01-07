"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(width=\"22\", height=\"22\", viewbox=\"0 0 22 22\")\n      path(\n        fill=fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        d=\"M4,2.99753289 L18,2.99753289 C19.1045695,2.99753289 20,3.8929634 20,4.99753289 L20,15 C20,16.1045695 19.1045695,17 18,17 L11,17 L6.5,21 L6.5,17 L4,17 C2.8954305,17 2,16.1045695 2,15 L2,4.99753289 C2,3.8929634 2.8954305,2.99753289 4,2.99753289 Z\"\n      )\n      circle(cx=\"7\", cy=\"10\", r=\"1\", fill=stroke)\n      circle(cx=\"11\", cy=\"10\", r=\"1\", fill=stroke)\n      circle(cx=\"15\", cy=\"10\", r=\"1\", fill=stroke)\n  "], ["\n    svg(width=\"22\", height=\"22\", viewbox=\"0 0 22 22\")\n      path(\n        fill=fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        d=\"M4,2.99753289 L18,2.99753289 C19.1045695,2.99753289 20,3.8929634 20,4.99753289 L20,15 C20,16.1045695 19.1045695,17 18,17 L11,17 L6.5,21 L6.5,17 L4,17 C2.8954305,17 2,16.1045695 2,15 L2,4.99753289 C2,3.8929634 2.8954305,2.99753289 4,2.99753289 Z\"\n      )\n      circle(cx=\"7\", cy=\"10\", r=\"1\", fill=stroke)\n      circle(cx=\"11\", cy=\"10\", r=\"1\", fill=stroke)\n      circle(cx=\"15\", cy=\"10\", r=\"1\", fill=stroke)\n  "]);

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

function ChatBubble(_ref) {
  var stroke = _ref.stroke,
      fill = _ref.fill;

  return pug(_templateObject);
}

ChatBubble.propTypes = propTypes;
ChatBubble.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(ChatBubble);
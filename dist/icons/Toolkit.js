"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns=\"http://www.w3.org/2000/svg\", width=\"22\", height=\"22\", viewbox=\"0 0 22 22\")\n      polygon(\n        fill=topFill || fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        points=\"2 10 20 10 20 6 2 6\"\n      )\n      polygon(\n        fill=bottomFill || fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        points=\"3 18 19 18 19 10 3 10\"\n      )\n      polygon(\n        fill=handleFill || \"none\"\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        points=\"7.5 6.041 14.5 6.041 14.5 3.5 7.5 3.5\"\n      )\n      polygon(\n        fill=\"none\"\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        points=\"9.5 12.5 12.5 12.5 12.5 10.5 9.5 10.5\"\n      )\n  "], ["\n    svg(xmlns=\"http://www.w3.org/2000/svg\", width=\"22\", height=\"22\", viewbox=\"0 0 22 22\")\n      polygon(\n        fill=topFill || fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        points=\"2 10 20 10 20 6 2 6\"\n      )\n      polygon(\n        fill=bottomFill || fill\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        points=\"3 18 19 18 19 10 3 10\"\n      )\n      polygon(\n        fill=handleFill || \"none\"\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        points=\"7.5 6.041 14.5 6.041 14.5 3.5 7.5 3.5\"\n      )\n      polygon(\n        fill=\"none\"\n        stroke=stroke\n        strokeLinecap=\"round\"\n        strokeLinejoin=\"round\"\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth=\"2\"\n        points=\"9.5 12.5 12.5 12.5 12.5 10.5 9.5 10.5\"\n      )\n  "]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _iconWrapper = require("../iconWrapper");

var _iconWrapper2 = _interopRequireDefault(_iconWrapper);

var _colours = require("../colours");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
  fill: _propTypes2.default.string,
  stroke: _propTypes2.default.string
};

var defaultProps = {
  fill: "none"
};

function Toolkit(_ref) {
  var bottomFill = _ref.bottomFill,
      fill = _ref.fill,
      handleFill = _ref.handleFill,
      stroke = _ref.stroke,
      topFill = _ref.topFill;

  return pug(_templateObject);
}

Toolkit.propTypes = propTypes;
Toolkit.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(Toolkit);
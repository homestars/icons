"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      polyline(\n        fill=fill\n        stroke=stroke\n        strokeLinejoin='round'\n        strokeWidth='2'\n        points='12.003,4 2,4 2,19.999 18,19.999 18,11'\n      )\n      polygon(\n        fill=pencilFill || fill\n        stroke=pencilStroke || stroke\n        strokeLinecap='round'\n        strokeLinejoin='round'\n        style={ strokeLinejoin: 'round' }\n        strokeWidth='2'\n        points='18,1 9,9.998 7.001,14.998 12.001,13.001 21,4'\n      )\n      path(\n        fill=pencilFill || fill\n        stroke=pencilStroke || stroke\n        strokeLinecap='round'\n        strokeLinejoin='round'\n        style={ strokeLinejoin: 'round' }\n        d='M16.501,3.498l2,2 M9.001,9.998l3,3'\n      )\n  "], ["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      polyline(\n        fill=fill\n        stroke=stroke\n        strokeLinejoin='round'\n        strokeWidth='2'\n        points='12.003,4 2,4 2,19.999 18,19.999 18,11'\n      )\n      polygon(\n        fill=pencilFill || fill\n        stroke=pencilStroke || stroke\n        strokeLinecap='round'\n        strokeLinejoin='round'\n        style={ strokeLinejoin: 'round' }\n        strokeWidth='2'\n        points='18,1 9,9.998 7.001,14.998 12.001,13.001 21,4'\n      )\n      path(\n        fill=pencilFill || fill\n        stroke=pencilStroke || stroke\n        strokeLinecap='round'\n        strokeLinejoin='round'\n        style={ strokeLinejoin: 'round' }\n        d='M16.501,3.498l2,2 M9.001,9.998l3,3'\n      )\n  "]);

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
  pencilFill: _propTypes2.default.string,
  pencilStroke: _propTypes2.default.string,
  stroke: _propTypes2.default.string
};

var defaultProps = {
  fill: "none"
};

function Note(_ref) {
  var fill = _ref.fill,
      pencilFill = _ref.pencilFill,
      pencilStroke = _ref.pencilStroke,
      stroke = _ref.stroke;

  return pug(_templateObject);
}

Note.propTypes = propTypes;
Note.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(Note);
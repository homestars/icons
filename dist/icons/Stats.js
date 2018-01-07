"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      polyline(\n        fill=\"none\"\n        stroke=statLine || stroke\n        strokeLinecap='round'\n        strokeLinejoin='round'\n        style={ strokeLinejoin: \"round\" }\n        points='2.5 15.717 8.577 8.448 12.654 13.734 19 5.143'\n      )\n      polyline(\n        fill=\"none\"\n        stroke=stroke\n        strokeLinecap='round'\n        strokeLinejoin='round'\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth='2'\n        points='2 2 2 20 20 20'\n      )\n  "], ["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      polyline(\n        fill=\"none\"\n        stroke=statLine || stroke\n        strokeLinecap='round'\n        strokeLinejoin='round'\n        style={ strokeLinejoin: \"round\" }\n        points='2.5 15.717 8.577 8.448 12.654 13.734 19 5.143'\n      )\n      polyline(\n        fill=\"none\"\n        stroke=stroke\n        strokeLinecap='round'\n        strokeLinejoin='round'\n        style={ strokeLinejoin: \"round\" }\n        strokeWidth='2'\n        points='2 2 2 20 20 20'\n      )\n  "]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _iconWrapper = require("../iconWrapper");

var _iconWrapper2 = _interopRequireDefault(_iconWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
  statLine: _propTypes2.default.string,
  stroke: _propTypes2.default.string
};

function Stats(_ref) {
  var statLine = _ref.statLine,
      stroke = _ref.stroke;

  return pug(_templateObject);
}

Stats.propTypes = propTypes;

exports.default = (0, _iconWrapper2.default)(Stats);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(width=\"20px\", height=\"20px\", viewbox=\"0 0 20 20\")\n      path(\n        fill=fill || stroke\n        stroke=stroke\n        strokeWidth=\"2\"\n        strokeLinecap=\"round\"\n        strokeMiterlimit=\"10\"\n        d=\"M3.369,18.464c0,0.45,0.466,0.696,0.782,0.42 L9.7,13.966c0.175-0.157,0.427-0.157,0.601,0l5.549,4.918c0.312,0.276,0.781,0.03,0.781-0.42V1.85c0-0.469-0.347-0.85-0.767-0.85 H4.135C3.714,1,3.369,1.381,3.369,1.85V18.464z\"\n      )\n  "], ["\n    svg(width=\"20px\", height=\"20px\", viewbox=\"0 0 20 20\")\n      path(\n        fill=fill || stroke\n        stroke=stroke\n        strokeWidth=\"2\"\n        strokeLinecap=\"round\"\n        strokeMiterlimit=\"10\"\n        d=\"M3.369,18.464c0,0.45,0.466,0.696,0.782,0.42 L9.7,13.966c0.175-0.157,0.427-0.157,0.601,0l5.549,4.918c0.312,0.276,0.781,0.03,0.781-0.42V1.85c0-0.469-0.347-0.85-0.767-0.85 H4.135C3.714,1,3.369,1.381,3.369,1.85V18.464z\"\n      )\n  "]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _iconWrapper = require("../iconWrapper");

var _iconWrapper2 = _interopRequireDefault(_iconWrapper);

var _colours = require("../colours");

var colours = _interopRequireWildcard(_colours);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
  fill: _propTypes2.default.string,
  stroke: _propTypes2.default.string
};

function Bookmark(_ref) {
  var fill = _ref.fill,
      stroke = _ref.stroke;

  return pug(_templateObject);
}

Bookmark.propTypes = propTypes;

exports.default = (0, _iconWrapper2.default)(Bookmark, { height: 20, width: 20 });
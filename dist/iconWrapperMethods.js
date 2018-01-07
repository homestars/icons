"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.square = exports.circle = exports.getViewboxSize = exports.getTranslation = undefined;

var _templateObject = _taggedTemplateLiteral(["\n    circle(\n      fill=circleFill || \"none\"\n      stroke=circleStroke || circleFill || \"none\"\n      strokeWidth=\"2\"\n      cx=\"17\"\n      cy=\"17\"\n      r=\"16\"\n    )\n  "], ["\n    circle(\n      fill=circleFill || \"none\"\n      stroke=circleStroke || circleFill || \"none\"\n      strokeWidth=\"2\"\n      cx=\"17\"\n      cy=\"17\"\n      r=\"16\"\n    )\n  "]),
    _templateObject2 = _taggedTemplateLiteral(["\n    rect(\n      fill=squareFill || \"none\"\n      stroke=\"none\"\n      width=defaultSize\n      height=defaultSize\n      rx=squareRounded && rounded\n      ry=squareRounded && rounded\n    )\n  "], ["\n    rect(\n      fill=squareFill || \"none\"\n      stroke=\"none\"\n      width=defaultSize\n      height=defaultSize\n      rx=squareRounded && rounded\n      ry=squareRounded && rounded\n    )\n  "]);

exports.computeSize = computeSize;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function computeSize(dimension, size, opts) {
  if (!dimension || !size) return false;

  if (opts[dimension] > 22) {
    var ratio = opts[dimension] / 22;
    return size * ratio;
  } else {
    return size;
  }
}

var getTranslation = exports.getTranslation = function getTranslation(size, viewBoxSize) {
  var differential = viewBoxSize - size;
  var translation = differential > 0 ? differential / 2 : 0;

  return "translate(" + translation + " " + translation + ")";
};

var getViewboxSize = exports.getViewboxSize = function getViewboxSize(_ref) {
  var circleFill = _ref.circleFill,
      circleStroke = _ref.circleStroke;

  return circleFill || circleStroke ? 34 : 22;
};

var circle = exports.circle = function circle(_ref2) {
  var circleFill = _ref2.circleFill,
      circleStroke = _ref2.circleStroke;

  if (!circleFill && !circleStroke) return null;

  return pug(_templateObject);
};

var square = exports.square = function square(_ref3) {
  var squareFill = _ref3.squareFill,
      squareRounded = _ref3.squareRounded;

  if (!squareFill) return null;

  var defaultSize = 22;
  var rounded = 0.15 * defaultSize;

  return pug(_templateObject2);
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      g(transform=directionTranslation())\n        polyline(\n          fill='none'\n          stroke=stroke\n          strokeWidth='2'\n          strokeLinecap='round'\n          strokeLinejoin='round'\n          style={ strokeLinejoin: 'round' }\n          points='7.001 2 15.997 11 7.001 20'\n        )\n\n  "], ["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      g(transform=directionTranslation())\n        polyline(\n          fill='none'\n          stroke=stroke\n          strokeWidth='2'\n          strokeLinecap='round'\n          strokeLinejoin='round'\n          style={ strokeLinejoin: 'round' }\n          points='7.001 2 15.997 11 7.001 20'\n        )\n\n  "]);

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
  direction: _propTypes2.default.string,
  stroke: _propTypes2.default.string
};

var defaultProps = {
  direction: "right"
};

function Chevron(_ref) {
  var direction = _ref.direction,
      stroke = _ref.stroke;

  var directionTranslation = function directionTranslation() {
    switch (direction) {
      case "bottom":
      case "down":
        return "rotate(90 10 10) translate(0 -2)";
      case "back":
      case "backward":
      case "left":
        return "rotate(180 10 10) translate(-1 -2)";
      case "top":
      case "up":
        return "rotate(-90 10 10) translate(-1 0)";
      default:
        return "translate(1 0)";
    }
  };

  return pug(_templateObject);
}

Chevron.propTypes = propTypes;
Chevron.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(Chevron);
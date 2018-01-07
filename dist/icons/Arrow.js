"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(width=\"20px\", height=\"20px\", viewbox=\"0 0 20 20\")\n      g(transform=directionTranslation())\n        path(\n          fill=\"none\"\n          stroke=stroke\n          strokeWidth=\"3.9175\"\n          strokeLinecap=\"round\"\n          d=\"M9.43,17.426L2,10\"\n        )\n        path(\n          fill=\"none\"\n          stroke=stroke\n          strokeWidth=\"3.9175\"\n          strokeLinecap=\"round\"\n          d=\"M18,10H3.132\"\n        )\n        path(\n          fill=\"none\"\n          stroke=stroke\n          strokeWidth=\"3.9175\"\n          strokeLinecap=\"round\"\n          d=\"M2,10l7.43-7.427\"\n        )\n\n  "], ["\n    svg(width=\"20px\", height=\"20px\", viewbox=\"0 0 20 20\")\n      g(transform=directionTranslation())\n        path(\n          fill=\"none\"\n          stroke=stroke\n          strokeWidth=\"3.9175\"\n          strokeLinecap=\"round\"\n          d=\"M9.43,17.426L2,10\"\n        )\n        path(\n          fill=\"none\"\n          stroke=stroke\n          strokeWidth=\"3.9175\"\n          strokeLinecap=\"round\"\n          d=\"M18,10H3.132\"\n        )\n        path(\n          fill=\"none\"\n          stroke=stroke\n          strokeWidth=\"3.9175\"\n          strokeLinecap=\"round\"\n          d=\"M2,10l7.43-7.427\"\n        )\n\n  "]);

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
  direction: "left",
  stroke: colours.trueBlack
};

function Arrow(_ref) {
  var direction = _ref.direction,
      stroke = _ref.stroke;

  var directionTranslation = function directionTranslation() {
    switch (direction) {
      case "bottom":
      case "down":
        return "rotate(-90 10 10)";
      case "right":
        return "rotate(180 10 10)";
      case "top":
      case "up":
        return "rotate(90 10 10)";
      default:
        return "";
    }
  };

  return pug(_templateObject);
}

Arrow.propTypes = propTypes;
Arrow.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(Arrow);
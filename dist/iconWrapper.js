"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(["\n      svg(\n        x=\"0px\"\n        y=\"0px\"\n        width=props.size || viewBoxSize\n        height=props.size || viewBoxSize\n        viewBox=", "\n      )\n        = circle(props)\n        = square(props)\n        g(transform=getTranslation(defaultSize, viewBoxSize))\n          Icon(stroke=opts.stroke, ...props)\n    "], ["\n      svg(\n        x=\"0px\"\n        y=\"0px\"\n        width=props.size || viewBoxSize\n        height=props.size || viewBoxSize\n        viewBox=", "\n      )\n        = circle(props)\n        = square(props)\n        g(transform=getTranslation(defaultSize, viewBoxSize))\n          Icon(stroke=opts.stroke, ...props)\n    "]);

exports.default = iconWrapper;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _colours = require("colours");

var colours = _interopRequireWildcard(_colours);

var _iconWrapperMethods = require("./iconWrapperMethods");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function iconWrapper(Icon) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var defaultOptions = {
    stroke: colours.trueBlack
  };

  var opts = _extends({}, defaultOptions, options);

  var IconWrapper = function IconWrapper(props) {
    var viewBoxSize = (0, _iconWrapperMethods.getViewboxSize)(props, opts);
    var defaultSize = 22;

    return pug(_templateObject, "0 0 " + viewBoxSize + " " + viewBoxSize);
  };

  IconWrapper.displayName = (Icon.displayName || Icon.name || "") + "Icon";

  return IconWrapper;
}
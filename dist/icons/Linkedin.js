"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(x=\"0px\", y=\"0px\", width=\"22px\", height=\"22px\", viewbox=\"0 0 22 22\")\n      g(transform=\"translate(1 1)\")\n        path(\n          fill=fill\n          d=\"M15.833,0H4.167C1.866,0,0,1.866,0,4.167v11.667C0,18.134,1.866,20,4.167,20h11.667C18.135,20,20,18.134,20,15.833V4.167 C20,1.866,18.135,0,15.833,0z M6.667,15.833h-2.5V6.667h2.5V15.833z M5.417,5.61c-0.805,0-1.458-0.658-1.458-1.47 c0-0.811,0.653-1.47,1.458-1.47c0.805,0,1.458,0.659,1.458,1.47C6.875,4.952,6.222,5.61,5.417,5.61z M16.667,15.833h-2.5v-4.669 c0-2.807-3.333-2.594-3.333,0v4.669h-2.5V6.667h2.5v1.471c1.164-2.155,5.833-2.314,5.833,2.063V15.833z\"\n        )\n        g(fill=stroke)\n          path(d=\"M10.833,8.138V6.667h-2.5v9.167h2.5v-4.669c0-2.594,3.333-2.807,3.333,0v4.669h2.5v-5.632 C16.667,5.823,11.997,5.982,10.833,8.138z\")\n          ellipse(cx=\"5.417\", cy=\"4.14\", rx=\"1.458\", ry=\"1.47\")\n          rect(x=\"4.167\", y=\"6.667\", width=\"2.5\", height=\"9.167\")\n  "], ["\n    svg(x=\"0px\", y=\"0px\", width=\"22px\", height=\"22px\", viewbox=\"0 0 22 22\")\n      g(transform=\"translate(1 1)\")\n        path(\n          fill=fill\n          d=\"M15.833,0H4.167C1.866,0,0,1.866,0,4.167v11.667C0,18.134,1.866,20,4.167,20h11.667C18.135,20,20,18.134,20,15.833V4.167 C20,1.866,18.135,0,15.833,0z M6.667,15.833h-2.5V6.667h2.5V15.833z M5.417,5.61c-0.805,0-1.458-0.658-1.458-1.47 c0-0.811,0.653-1.47,1.458-1.47c0.805,0,1.458,0.659,1.458,1.47C6.875,4.952,6.222,5.61,5.417,5.61z M16.667,15.833h-2.5v-4.669 c0-2.807-3.333-2.594-3.333,0v4.669h-2.5V6.667h2.5v1.471c1.164-2.155,5.833-2.314,5.833,2.063V15.833z\"\n        )\n        g(fill=stroke)\n          path(d=\"M10.833,8.138V6.667h-2.5v9.167h2.5v-4.669c0-2.594,3.333-2.807,3.333,0v4.669h2.5v-5.632 C16.667,5.823,11.997,5.982,10.833,8.138z\")\n          ellipse(cx=\"5.417\", cy=\"4.14\", rx=\"1.458\", ry=\"1.47\")\n          rect(x=\"4.167\", y=\"6.667\", width=\"2.5\", height=\"9.167\")\n  "]);

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
  fill: _propTypes2.default.string
};

var defaultProps = {
  fill: _colours.linkedinBlue,
  stroke: _colours.white
};

function Linkedin(_ref) {
  var fill = _ref.fill,
      stroke = _ref.stroke;

  return pug(_templateObject);
}

Linkedin.propTypes = propTypes;
Linkedin.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(Linkedin, { stroke: _colours.white });
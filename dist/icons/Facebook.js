"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(x=\"0px\" y=\"0px\" width=\"22px\" height=\"22px\" viewBox=\"0 0 22 22\")\n      g(transform=\"translate(1 1)\")\n        path(\n          fill=fill\n          d=\"M18.896,0H1.104C0.494,0,0,0.493,0,1.103v17.793C0,19.506,0.494,20,1.104,20h9.579v-7.744H8.076V9.237 h2.606V7.01c0-2.583,1.578-3.99,3.882-3.99c1.104,0,2.053,0.082,2.329,0.119v2.7h-1.598c-1.255,0-1.496,0.596-1.496,1.47v1.928 h2.989l-0.391,3.019h-2.6V20h5.097C19.505,20,20,19.506,20,18.896V1.103C20,0.493,19.505,0,18.896,0z\"\n        )\n        path(\n          fill=stroke\n          stroke=\"none\"\n          d=\"M16.398,12.254l0.391-3.019H13.8V7.307c0-0.874,0.241-1.47,1.496-1.47h1.598v-2.7 c-0.276-0.037-1.225-0.119-2.329-0.119c-2.304,0-3.882,1.407-3.882,3.99v2.227H8.076v3.019h2.606v7.744H13.8v-7.744H16.398z\"\n        )\n  "], ["\n    svg(x=\"0px\" y=\"0px\" width=\"22px\" height=\"22px\" viewBox=\"0 0 22 22\")\n      g(transform=\"translate(1 1)\")\n        path(\n          fill=fill\n          d=\"M18.896,0H1.104C0.494,0,0,0.493,0,1.103v17.793C0,19.506,0.494,20,1.104,20h9.579v-7.744H8.076V9.237 h2.606V7.01c0-2.583,1.578-3.99,3.882-3.99c1.104,0,2.053,0.082,2.329,0.119v2.7h-1.598c-1.255,0-1.496,0.596-1.496,1.47v1.928 h2.989l-0.391,3.019h-2.6V20h5.097C19.505,20,20,19.506,20,18.896V1.103C20,0.493,19.505,0,18.896,0z\"\n        )\n        path(\n          fill=stroke\n          stroke=\"none\"\n          d=\"M16.398,12.254l0.391-3.019H13.8V7.307c0-0.874,0.241-1.47,1.496-1.47h1.598v-2.7 c-0.276-0.037-1.225-0.119-2.329-0.119c-2.304,0-3.882,1.407-3.882,3.99v2.227H8.076v3.019h2.606v7.744H13.8v-7.744H16.398z\"\n        )\n  "]);

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
  fill: _colours.facebookBlue,
  stroke: _colours.white
};

function Facebook(_ref) {
  var fill = _ref.fill,
      stroke = _ref.stroke;

  return pug(_templateObject);
}

Facebook.propTypes = propTypes;
Facebook.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(Facebook, { stroke: _colours.white });
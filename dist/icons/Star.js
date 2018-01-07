"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      path(\n        fill=fill\n        stroke=stroke\n        strokeLinecap='round'\n        strokeLinejoin='round'\n        style={ strokeLinejoin: 'round' }\n        strokeWidth='2'\n        d='M5.94780935,19.9103119 C5.39362363,20.2063737 4.74571533,19.726644 4.8516626,19.0975128 L5.74949779,13.7601774 C5.79160504,13.510718 5.71010714,13.2557759 5.53217006,13.0789612 L1.72893473,9.29869134 C1.28069628,8.85322806 1.52790658,8.07743663 2.14729062,7.98560266 L7.40390516,7.20706992 C7.64975716,7.1700622 7.86301,7.01243673 7.97303217,6.7849078 L10.3228883,1.92867274 C10.5999811,1.35710909 11.4000189,1.35710909 11.6771117,1.92867274 L14.0283261,6.7849078 C14.1383483,7.01243673 14.3516011,7.1700622 14.5974531,7.20706992 L19.8527094,7.98560266 C20.4720934,8.07743663 20.7193037,8.85322806 20.2710653,9.29869134 L16.4678299,13.0789612 C16.2898929,13.2557759 16.208395,13.510718 16.2505022,13.7601774 L17.1483374,19.0975128 C17.2542847,19.726644 16.6077347,20.2063737 16.0535489,19.9103119 L11.3511201,17.3896751 C11.1310758,17.2717987 10.8689242,17.2717987 10.6488799,17.3896751 L5.94780935,19.9103119 Z'\n    )\n  "], ["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      path(\n        fill=fill\n        stroke=stroke\n        strokeLinecap='round'\n        strokeLinejoin='round'\n        style={ strokeLinejoin: 'round' }\n        strokeWidth='2'\n        d='M5.94780935,19.9103119 C5.39362363,20.2063737 4.74571533,19.726644 4.8516626,19.0975128 L5.74949779,13.7601774 C5.79160504,13.510718 5.71010714,13.2557759 5.53217006,13.0789612 L1.72893473,9.29869134 C1.28069628,8.85322806 1.52790658,8.07743663 2.14729062,7.98560266 L7.40390516,7.20706992 C7.64975716,7.1700622 7.86301,7.01243673 7.97303217,6.7849078 L10.3228883,1.92867274 C10.5999811,1.35710909 11.4000189,1.35710909 11.6771117,1.92867274 L14.0283261,6.7849078 C14.1383483,7.01243673 14.3516011,7.1700622 14.5974531,7.20706992 L19.8527094,7.98560266 C20.4720934,8.07743663 20.7193037,8.85322806 20.2710653,9.29869134 L16.4678299,13.0789612 C16.2898929,13.2557759 16.208395,13.510718 16.2505022,13.7601774 L17.1483374,19.0975128 C17.2542847,19.726644 16.6077347,20.2063737 16.0535489,19.9103119 L11.3511201,17.3896751 C11.1310758,17.2717987 10.8689242,17.2717987 10.6488799,17.3896751 L5.94780935,19.9103119 Z'\n    )\n  "]);

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
  stroke: _propTypes2.default.string
};

var defaultProps = {
  fill: "none"
};

function Star(_ref) {
  var fill = _ref.fill,
      stroke = _ref.stroke;

  return pug(_templateObject);
}

Star.propTypes = propTypes;
Star.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(Star);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      path(\n        fill=fill\n        stroke=\"none\"\n        d='M20.5820795,6.18612258 C20.3520795,5.32557419 19.6744659,4.64792903 18.8137841,4.41794516 C17.2542386,3.99997742 11.0000341,3.99997742 11.0000341,3.99997742 C11.0000341,3.99997742 4.74582955,3.99997742 3.18617045,4.41794516 C2.32560227,4.64792903 1.647875,5.32557419 1.417875,6.18612258 C1.00003409,7.74576774 1.00003409,10.9999774 1.00003409,10.9999774 C1.00003409,10.9999774 1.00003409,14.2540742 1.417875,15.8139452 C1.647875,16.6743806 2.32560227,17.3520258 3.18617045,17.5821226 C4.74582955,17.9999774 11.0000341,17.9999774 11.0000341,17.9999774 C11.0000341,17.9999774 17.2542386,17.9999774 18.8137841,17.5821226 C19.6744659,17.3520258 20.3520795,16.6743806 20.5820795,15.8139452 C21.0000341,14.2540742 21.0000341,10.9999774 21.0000341,10.9999774 C21.0000341,10.9999774 21.0000341,7.74576774 20.5820795,6.18612258'\n      )\n      polygon(fill=arrowFill, stroke=\"none\", points='9 14 14 11 9 8')\n  "], ["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      path(\n        fill=fill\n        stroke=\"none\"\n        d='M20.5820795,6.18612258 C20.3520795,5.32557419 19.6744659,4.64792903 18.8137841,4.41794516 C17.2542386,3.99997742 11.0000341,3.99997742 11.0000341,3.99997742 C11.0000341,3.99997742 4.74582955,3.99997742 3.18617045,4.41794516 C2.32560227,4.64792903 1.647875,5.32557419 1.417875,6.18612258 C1.00003409,7.74576774 1.00003409,10.9999774 1.00003409,10.9999774 C1.00003409,10.9999774 1.00003409,14.2540742 1.417875,15.8139452 C1.647875,16.6743806 2.32560227,17.3520258 3.18617045,17.5821226 C4.74582955,17.9999774 11.0000341,17.9999774 11.0000341,17.9999774 C11.0000341,17.9999774 17.2542386,17.9999774 18.8137841,17.5821226 C19.6744659,17.3520258 20.3520795,16.6743806 20.5820795,15.8139452 C21.0000341,14.2540742 21.0000341,10.9999774 21.0000341,10.9999774 C21.0000341,10.9999774 21.0000341,7.74576774 20.5820795,6.18612258'\n      )\n      polygon(fill=arrowFill, stroke=\"none\", points='9 14 14 11 9 8')\n  "]);

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
  arrowFill: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

var defaultProps = {
  arrowFill: "none",
  fill: colours.trueBlack
};

function YouTube(_ref) {
  var arrowFill = _ref.arrowFill,
      fill = _ref.fill;

  return pug(_templateObject);
}

YouTube.propTypes = propTypes;
YouTube.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(YouTube);
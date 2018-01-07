"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      path(\n        fill=stroke\n        d='M2.9921875,12 L1.04624078,19.5794753 C0.875162755,20.161105 1.19356375,20.7760629 1.75743357,20.9525945 C2.01332128,21.0325821 2.28900486,21.010865 2.52988938,20.8910987 L20.4274425,11.9462566 C20.9333834,11.6916726 21.143428,11.0620933 20.8965005,10.5402392 C20.796896,10.3295194 20.631861,10.1590083 20.4274425,10.0562286 L2.52988938,1.10923625 C1.99894322,0.845406409 1.36130773,1.07590811 1.10583677,1.62377969 C0.98997882,1.8723431 0.968515926,2.15681488 1.04624078,2.42085974 L3,10 L11.3525975,10.3314545 C11.7064227,10.3675779 11.9650193,10.6929036 11.9300119,11.0580079 C11.8997971,11.3732276 11.6580791,11.6226511 11.3525975,11.653829 L2.9921875,12 Z'\n      )\n  "], ["\n    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewbox='0 0 22 22')\n      path(\n        fill=stroke\n        d='M2.9921875,12 L1.04624078,19.5794753 C0.875162755,20.161105 1.19356375,20.7760629 1.75743357,20.9525945 C2.01332128,21.0325821 2.28900486,21.010865 2.52988938,20.8910987 L20.4274425,11.9462566 C20.9333834,11.6916726 21.143428,11.0620933 20.8965005,10.5402392 C20.796896,10.3295194 20.631861,10.1590083 20.4274425,10.0562286 L2.52988938,1.10923625 C1.99894322,0.845406409 1.36130773,1.07590811 1.10583677,1.62377969 C0.98997882,1.8723431 0.968515926,2.15681488 1.04624078,2.42085974 L3,10 L11.3525975,10.3314545 C11.7064227,10.3675779 11.9650193,10.6929036 11.9300119,11.0580079 C11.8997971,11.3732276 11.6580791,11.6226511 11.3525975,11.653829 L2.9921875,12 Z'\n      )\n  "]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _iconWrapper = require("../iconWrapper");

var _iconWrapper2 = _interopRequireDefault(_iconWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
  stroke: _propTypes2.default.string
};

function Settings(_ref) {
  var stroke = _ref.stroke;

  return pug(_templateObject);
}

Settings.propTypes = propTypes;

exports.default = (0, _iconWrapper2.default)(Settings);
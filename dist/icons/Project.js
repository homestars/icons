"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    svg(xmlns=\"http://www.w3.org/2000/svg\", width=\"22\", height=\"22\", viewbox=\"0 0 22 22\")\n      g(transform=\"translate(2 2)\")\n        polyline(\n          fill=\"none\"\n          stroke=stroke\n          strokeLinecap=\"round\"\n          strokeLinejoin=\"round\"\n          style={ strokeLinejoin: \"round\" }\n          strokeWidth=\"2\"\n          points=\"9 13 14 18 18 14 13 9\"\n        )\n        polyline(\n          fill=\"none\"\n          stroke=stroke\n          strokeLinecap=\"round\"\n          strokeLinejoin=\"round\"\n          style={ strokeLinejoin: \"round\" }\n          strokeWidth=\"2\"\n          points=\"9 5.001 4.004 0 0 4 5.002 9\"\n        )\n        path(\n          fill=\"none\"\n          stroke=stroke\n          strokeLinecap=\"round\"\n          strokeLinejoin=\"round\"\n          style={ strokeLinejoin: \"round\" }\n          d=\"M3 6L3.5 5.5M2 4.99558972L3 4M4 6.99558972L5 6M12 15L12.5 14.5M11 13.9955897L12 13M13 15.9955897L14 15\"\n        )\n      g(transform=\"translate(2 1)\")\n        path(\n          fill=\"none\"\n          stroke=stroke\n          strokeLinecap=\"round\"\n          strokeLinejoin=\"round\"\n          style={ strokeLinejoin: \"round\" }\n          strokeWidth=\"2\",\n          d=\"M15.9988659,6.99785786 L11.9983619,3.00321321 L13.5,1.5 C14.1802745,0.80612 15.3201569,0.80612 16,1.5 L17.4985509,3 C18.1723548,3.68728 18.1723548,4.81158593 17.4985509,5.49886593 L15.9988659,6.99785786 Z\"\n        )\n        polygon(\n          fill=\"none\"\n          stroke=stroke\n          strokeLinecap=\"round\"\n          strokeLinejoin=\"round\"\n          style={ strokeLinejoin: \"round\" }\n          strokeWidth=\"2\",\n          points=\"12 3 1.999 13 0 19 6.004 17 16 7.001\"\n        )\n        path(\n          fill=\"none\"\n          stroke=stroke\n          strokeLinecap=\"round\"\n          strokeLinejoin=\"round\"\n          style={ strokeLinejoin: \"round\" }\n          d=\"M14.0009451,5.00264617 L5,14\"\n        )\n        polyline(\n          fill=\"none\"\n          stroke=stroke\n          strokeLinecap=\"round\"\n          strokeLinejoin=\"round\"\n          style={ strokeLinejoin: \"round\" }\n          points=\"2 13 3 14 5 14 5 16 6 17\"\n        )\n        path(\n          fill=\"none\"\n          stroke=stroke\n          strokeLinecap=\"round\"\n          strokeLinejoin=\"round\"\n          style={ strokeLinejoin: \"round\" }\n          d=\"M0.997290827,16 L3,18\"\n        )\n  "], ["\n    svg(xmlns=\"http://www.w3.org/2000/svg\", width=\"22\", height=\"22\", viewbox=\"0 0 22 22\")\n      g(transform=\"translate(2 2)\")\n        polyline(\n          fill=\"none\"\n          stroke=stroke\n          strokeLinecap=\"round\"\n          strokeLinejoin=\"round\"\n          style={ strokeLinejoin: \"round\" }\n          strokeWidth=\"2\"\n          points=\"9 13 14 18 18 14 13 9\"\n        )\n        polyline(\n          fill=\"none\"\n          stroke=stroke\n          strokeLinecap=\"round\"\n          strokeLinejoin=\"round\"\n          style={ strokeLinejoin: \"round\" }\n          strokeWidth=\"2\"\n          points=\"9 5.001 4.004 0 0 4 5.002 9\"\n        )\n        path(\n          fill=\"none\"\n          stroke=stroke\n          strokeLinecap=\"round\"\n          strokeLinejoin=\"round\"\n          style={ strokeLinejoin: \"round\" }\n          d=\"M3 6L3.5 5.5M2 4.99558972L3 4M4 6.99558972L5 6M12 15L12.5 14.5M11 13.9955897L12 13M13 15.9955897L14 15\"\n        )\n      g(transform=\"translate(2 1)\")\n        path(\n          fill=\"none\"\n          stroke=stroke\n          strokeLinecap=\"round\"\n          strokeLinejoin=\"round\"\n          style={ strokeLinejoin: \"round\" }\n          strokeWidth=\"2\",\n          d=\"M15.9988659,6.99785786 L11.9983619,3.00321321 L13.5,1.5 C14.1802745,0.80612 15.3201569,0.80612 16,1.5 L17.4985509,3 C18.1723548,3.68728 18.1723548,4.81158593 17.4985509,5.49886593 L15.9988659,6.99785786 Z\"\n        )\n        polygon(\n          fill=\"none\"\n          stroke=stroke\n          strokeLinecap=\"round\"\n          strokeLinejoin=\"round\"\n          style={ strokeLinejoin: \"round\" }\n          strokeWidth=\"2\",\n          points=\"12 3 1.999 13 0 19 6.004 17 16 7.001\"\n        )\n        path(\n          fill=\"none\"\n          stroke=stroke\n          strokeLinecap=\"round\"\n          strokeLinejoin=\"round\"\n          style={ strokeLinejoin: \"round\" }\n          d=\"M14.0009451,5.00264617 L5,14\"\n        )\n        polyline(\n          fill=\"none\"\n          stroke=stroke\n          strokeLinecap=\"round\"\n          strokeLinejoin=\"round\"\n          style={ strokeLinejoin: \"round\" }\n          points=\"2 13 3 14 5 14 5 16 6 17\"\n        )\n        path(\n          fill=\"none\"\n          stroke=stroke\n          strokeLinecap=\"round\"\n          strokeLinejoin=\"round\"\n          style={ strokeLinejoin: \"round\" }\n          d=\"M0.997290827,16 L3,18\"\n        )\n  "]);

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

function Project(_ref) {
  var fill = _ref.fill,
      stroke = _ref.stroke;

  return pug(_templateObject);
}

Project.propTypes = propTypes;
Project.defaultProps = defaultProps;

exports.default = (0, _iconWrapper2.default)(Project);
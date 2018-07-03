"use strict";

exports.__esModule = true;
exports.default = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _core = require("@babel/core");

var TRACE_ID = "__self";

var _default = (0, _helperPluginUtils.declare)(function (api) {
  api.assertVersion(7);
  var visitor = {
    JSXOpeningElement: function JSXOpeningElement(_ref) {
      var node = _ref.node;

      var id = _core.types.jsxIdentifier(TRACE_ID);

      var trace = _core.types.thisExpression();

      node.attributes.push(_core.types.jsxAttribute(id, _core.types.jsxExpressionContainer(trace)));
    }
  };
  return {
    visitor: visitor
  };
});

exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMount;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _reactDom = require("react-dom");

var _enzyme = require("enzyme");

//  weak
// Generate an enhanced mount function.
function createMount() {
  var options1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options1$mount = options1.mount,
      mount = _options1$mount === void 0 ? _enzyme.mount : _options1$mount,
      other1 = (0, _objectWithoutProperties2.default)(options1, ["mount"]);
  var attachTo = window.document.createElement('div');
  attachTo.className = 'app';
  attachTo.setAttribute('id', 'app');
  window.document.body.insertBefore(attachTo, window.document.body.firstChild);

  var mountWithContext = function mountWithContext(node) {
    var options2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return mount(node, (0, _objectSpread2.default)({
      attachTo: attachTo
    }, other1, options2));
  };

  mountWithContext.attachTo = attachTo;

  mountWithContext.cleanUp = function () {
    (0, _reactDom.unmountComponentAtNode)(attachTo);
    attachTo.parentNode.removeChild(attachTo);
  };

  return mountWithContext;
}
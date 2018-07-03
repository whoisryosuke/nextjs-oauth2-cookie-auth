"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _stringify = _interopRequireDefault(require("@babel/runtime/core-js/json/stringify"));

var _path = require("path");

var _loaderUtils = _interopRequireDefault(require("loader-utils"));

module.exports = function (content, sourceMap) {
  this.cacheable();

  var options = _loaderUtils.default.getOptions(this);

  var route = getRoute(this, options); // Webpack has a built in system to prevent default from colliding, giving it a random letter per export.
  // We can safely check if Component is undefined since all other pages imported into the entrypoint don't have __webpack_exports__.default

  this.callback(null, "".concat(content, "\n    (function (Component, route) {\n      if(!Component) return\n      if (!module.hot) return\n      module.hot.accept()\n      Component.__route = route\n\n      if (module.hot.status() === 'idle') return\n\n      var components = next.router.components\n      for (var r in components) {\n        if (!components.hasOwnProperty(r)) continue\n\n        if (components[r].Component.__route === route) {\n          next.router.update(r, Component)\n        }\n      }\n    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), ").concat((0, _stringify.default)(route), ")\n  "), sourceMap);
};

var nextPagesDir = (0, _path.resolve)(__dirname, '..', '..', '..', 'pages');

function getRoute(loaderContext, options) {
  var pagesDir = (0, _path.resolve)(loaderContext.options.context, 'pages');
  var resourcePath = loaderContext.resourcePath;
  var dir = [pagesDir, nextPagesDir].find(function (d) {
    return resourcePath.indexOf(d) === 0;
  });

  if (!options.extensions) {
    throw new Error('extensions is not provided to hot-self-accept-loader. Please upgrade all next-plugins to the latest version.');
  }

  var path = (0, _path.relative)(dir, resourcePath).replace(options.extensions, '.js');
  return '/' + path.replace(/((^|\/)index)?\.js$/, '');
}
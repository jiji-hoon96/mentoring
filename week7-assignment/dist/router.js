"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createRouter;
function createRouter() {
  var routes = [];
  var ROUTE_PARAMETER_REGEXP = /:(\w+)/g;
  var URL_REGEXP = '([^\\/]+)';
  var router = {
    addRouter: function addRouter(fragment, component) {
      var params = [];
      var parsedFragment = fragment.replace(ROUTE_PARAMETER_REGEXP, function (_, paramsName) {
        params.push(paramsName);
        return URL_REGEXP;
      }).replace(/\//g, '\\/');
      routes.push({
        fragmentRegExp: new RegExp("^".concat(parsedFragment, "$")),
        component: component,
        params: params
      });
      return this;
    },
    start: function start() {
      var getUrlParams = function getUrlParams(route, hash) {
        console.log(route, hash);
        var params = {};
        var matches = hash.match(route.fragmentRegExp);
        matches.shift();
        matches.forEach(function (paramValue, index) {
          var paramsName = route.params[index];
          params[paramsName] = paramValue;
        });
        return params;
      };
      var checkRoutes = function checkRoutes() {
        var currentRoute = routes.find(function (route) {
          return route.fragmentRegExp.test(window.location.hash);
        });
        if (currentRoute.params.length) {
          var urlParams = getUrlParams(currentRoute, window.location.hash);
          currentRoute.component(urlParams);
        } else {
          currentRoute.component();
        }
      };
      window.addEventListener('hashchange', checkRoutes);
      checkRoutes();
    },
    navigate: function navigate(fragment, replace) {
      if (replace) {
        var href = window.location.href.replace(window.location.hash, '#' + fragment);
        window.location.replace(fragment);
      } else {
        window.location.hash = fragment;
      }
    }
  };
  return router;
}
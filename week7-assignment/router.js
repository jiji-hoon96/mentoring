export default function createRouter() {
  const routes = [];
  const ROUTE_PARAMETER_REGEXP = /:(\w+)/g;
  const URL_REGEXP = '([^\\/]+)';

  const router = {
    addRouter(fragment, component) {
      const params = [];
      const parsedFragment = fragment
        .replace(ROUTE_PARAMETER_REGEXP, (_, paramsName) => {
          params.push(paramsName);
          return URL_REGEXP;
        })
        .replace(/\//g, '\\/');

      routes.push({
        fragmentRegExp: new RegExp(`^${parsedFragment}$`),
        component,
        params,
      });

      return this;
    },
    start() {
      const getUrlParams = (route, hash) => {
        console.log(route, hash);
        const params = {};
        const matches = hash.match(route.fragmentRegExp);

        matches.shift();
        matches.forEach((paramValue, index) => {
          const paramsName = route.params[index];
          params[paramsName] = paramValue;
        });
        return params;
      };

      const checkRoutes = () => {
        const currentRoute = routes.find((route) =>
          route.fragmentRegExp.test(window.location.hash)
        );

        if (currentRoute.params.length) {
          const urlParams = getUrlParams(currentRoute, window.location.hash);
          currentRoute.component(urlParams);
        } else {
          currentRoute.component();
        }
      };

      window.addEventListener('hashchange', checkRoutes);
      checkRoutes();
    },

    navigate(fragment, replace) {
      if (replace) {
        const href = window.location.href.replace(
          window.location.hash,
          '#' + fragment
        );
        window.location.replace(fragment);
      } else {
        window.location.hash = fragment;
      }
    },
  };

  return router;
}

const route = (entry, resolve) => ({
  template: '<' + entry + '></' + entry + '>',
  resolve: {
    async: ['$q', function ($q) {
      const defer = $q.defer();

      resolve(defer.resolve);
      return defer.promise;
    }]
  }
});


export default app => {
  const $inject = ['$routeProvider'];

  // We have to use hardcoded value for 'require' so it can be statically built
  const RouterConfig = function ($routeProvider) {
    $routeProvider
      .when('/', route('home', callback =>
        require.ensure([], () =>
          callback(app.register(require('./home').name)))));
  };

  RouterConfig.$inject = $inject;

  return RouterConfig;
};

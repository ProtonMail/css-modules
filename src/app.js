const app = angular.module('app', [
  'ngRoute'
]);

require('./theme/global.css');
require('./theme/ui.css');
require('./theme/colors.css');

app.config(require('./app/app_router_config')(app));
app.run(['$injector', $injector => app.register = $injector.loadModule.bind($injector)]);

export default app;

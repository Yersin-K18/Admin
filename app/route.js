app.config(['$routeProvider',
function config($routeProvider) {
  $routeProvider.
    when('/login', {
      template: '<login-page></login-page>'
    })
}]);
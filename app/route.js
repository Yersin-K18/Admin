app.config(['$routeProvider',
function config($routeProvider) {
  $routeProvider.
    when('/login', {
      template: '<login-page></login-page>'
    })
}]);
app.config(['$routeProvider',
function config($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl:'/app/directive/index/content.html',
    })
}]);
app.config(['$routeProvider',
function config($routeProvider) {
  $routeProvider.
    when('/login', {
      template: '<login-page></login-page>'
    })
    .when('/', {
      templateUrl:'/app/directive/index/content.html',
    })
    .when('/order', {
      templateUrl: '/app/directive/Order/order.html'
    })
    . when('/addorder', {
      templateUrl:'/app/directive/Order/add_order.html',
    })
    . when('/user', {
      templateUrl:'/app/directive/User/user.html',
    })
    . when('/adduser', {
      templateUrl:'/app/directive/User/add_user.html',
    })
    . when('/product', {
      templateUrl:'/app/directive/Product/product.html',
    })
    . when('/editproduct', {
      templateUrl:'/app/directive/Product/edit_product.html',
    })
    . when('/addproduct', {
      templateUrl:'/app/directive/Product/add_product1.html',
    })
}]);
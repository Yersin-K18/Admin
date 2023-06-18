app.directive('loginpage', () => {
    return {
      restrict: 'E',
      templateUrl: '../app/directive/login/login.html',
      controller: () => {
        console.log('load login');
      },
    };
  });
  app.directive('sidebar', () => {
    return {
      restrict: 'E',
      templateUrl: '../app/directive/index/sidebar.html',
      controller: () => {
        console.log('load sidebar');
      },
    };
  });
  app.directive('editproduct', () => {
    return {
      restrict: 'E',
      templateUrl: '../app/directive/Product/edit_product.html',
      controller: () => {
        console.log('load editproduct');
      },
    };
  });
  app.directive('addproduct2', () => {
    return {
      restrict: 'E',
      templateUrl: '../app/directive/Product/add_product2.html',
      controller: () => {
        console.log('load addproduct2');
      },
    };
  });
app.directive('loginpage', () => {
    return {
      restrict: 'E',
      templateUrl: './app/directive/login/login.html',
      controller: () => {
        console.log('load login');
      },
    };
  });
  app.directive('sidebar', () => {
    return {
      restrict: 'E',
      templateUrl: '/app/directive/index/sidebar.html',
      controller: () => {
        console.log('load sidebar');
      },
    };
  });
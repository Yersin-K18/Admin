console.log("loading");

var app = angular.module("myApp", ["ngRoute"]);

app.controller('UserController', function($scope) {
    $scope.users = [
        {
            id: "1",
            name: "Nguyễn Hồng Phú",
            images: "../assets/img-anhthe/1.jpg",
            diachi: "155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh",
            date: "12/02/1999",
            gioitinh: "Nữ",
            phone: "0797878315",
          },
    ];
  
    $scope.addUser = function() {
        $scope.users.push(angular.copy($scope.newUser));
        $scope.newUser = {};
      };
  
      $scope.deleteUser = function(user) {
        // Hiển thị cảnh báo trước khi xóa
        if (confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
          // Tìm chỉ mục của người dùng trong danh sách
          var index = $scope.users.indexOf(user);
          
          // Xóa người dùng khỏi danh sách
          if (index !== -1) {
            $scope.users.splice(index, 1);
            
            
            // Thông báo xóa thành công
            alert("Đã xóa thành công!");
            $window.location.reload();
          }
        }};
        $scope.openEditModal = function() {
            $('#editModal').modal('show');
          };
  
          // Function to save changes
          $scope.saveChanges = function() {
            // Perform save operation here
            // ...
  
            // Close the edit modal
            $('#editModal').modal('hide');
  
            // Reload the page to reflect the updated customer information
            location.reload();
          };
})


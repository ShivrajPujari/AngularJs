app.controller('homeCtrl',function($scope, $mdSidenav,$http){
  $scope.toggleLeft = buildToggler('left');
      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      }

      $http.get("assets/products.json").then(function(response) {
        $scope.jsonData = response.data;
    });

  $scope. manufacturer=[];
  $scope. os=[];
  $scope. camera=[];
  $scope.storage=[];

    $scope.action=function($scope.item,  $scope. manufacturer){

    });

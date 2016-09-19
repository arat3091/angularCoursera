(function() {
    var mymod = angular.module('myApp', ['ngMaterial','ngMessages']);

    mymod.controller('myController', ['$scope' , function($scope) {
      $scope.name = "ankur ratra";
    }]);

})();

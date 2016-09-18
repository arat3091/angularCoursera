(function() {
    var mymod = angular.module('myApp', ['ngMaterial','ngMessages']);

    mymod.controller('myController', function($scope) {
      $scope.name = "ankur ratra";
    });

})();

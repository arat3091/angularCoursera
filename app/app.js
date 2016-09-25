(function() {
    var mymod = angular.module('myApp', ['ngMaterial', 'ngMessages']);

    mymod.controller('myController', ['$scope', function($scope) {
        $scope.name = "test";
        $scope.showWatchers = function() {
            console.log($scope);
        }
        $scope.oneConstant = 1;
        $scope.counter = 1;

        $scope.showConstant = function() {
          setTimeout(function(){
            $scope.counter++;
          }, 2000);
        }

        $scope.$watch('oneConstant', function(newValue,oldValue){
          console.log("old value :" + oldValue);
          console.log("new value :" + newValue);
        })

        $scope.$watch(function(){
          console.log("digest looop fired");
        })
    }]);

})();

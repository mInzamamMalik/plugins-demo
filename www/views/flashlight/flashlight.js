/**
 * Created by SkyNetServer on 9/24/2015.
 */
angular.module("starter")

  .controller("flashlightController",function($scope,$cordovaFlashlight){

    $scope.on = false;

    $scope.toggleLight = function(){
        $cordovaFlashlight.toggle().
          then(
            function(success){
              $scope.on = !$scope.on;
            },
            function(error){
              console.log(error);
            }
          )

    }




  });

/**
 * Created by SkyNetServer on 9/24/2015.
 */

angular.module("starter")

.controller("deviceController",function($scope,$cordovaDevice){

  document.addEventListener("deviceready", function () {

    $scope.device   = $cordovaDevice.getDevice();

    $scope.cordova  = $cordovaDevice.getCordova();

    $scope.model    = $cordovaDevice.getModel();

    $scope.platform = $cordovaDevice.getPlatform();

    $scope.uuid     = $cordovaDevice.getUUID();

    $scope.version  = $cordovaDevice.getVersion();
  }, false);

});

/**
 * Created by SkyNetServer on 9/24/2015.
 */
angular.module("starter")

  .controller("geolocationController",function($scope,$cordovaGeolocation) {

    var posOptions = {
      timeout: 10000,
      enableHighAccuracy: false
    };

      $cordovaGeolocation.getCurrentPosition(posOptions)
        .then(function (position) {
          $scope. lat  = position.coords.latitude;
          $scope. long = position.coords.longitude;

          alert(position.coords.latitude + " -- " + position.coords.longitude);
        }, function(err) {
          console.log( err);
        });
  });

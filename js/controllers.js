angular.module('starter.controllers', [])

    .controller('MapCtrl', function($scope, $ionicLoading, $timeout) {

  $scope.positions = [{
    lat: 43.07493,
    lng: -89.381388
  }];

  $scope.$on('mapInitialized', function(event, map) {
    $scope.map = map;
  });

  $scope.centerOnMe= function(){
  $scope.positions = [];
    
    
    $ionicLoading.show({
      template: 'Loading...'
    });


    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      $scope.positions.push({lat: pos.k,lng: pos.B});
      console.log(pos);
      $scope.map.setCenter(pos);
      $ionicLoading.hide();
    });

  };


})
	
	
    .controller('cameraCtrl', function($ionicPlatform, $rootScope, $scope, $cordovaCamera) {
        $ionicPlatform.ready(function() {


            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 100,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            };

            $scope.takePicture = function() {
                $cordovaCamera.getPicture(options).then(function(imageData) {
                    $scope.imgSrc = "data:image/jpeg;base64," + imageData;
                }, function(err) {
                    console.log(err);
                });
            }
 
    });
});

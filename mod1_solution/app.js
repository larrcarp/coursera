(function () {
'use strict';

angular.module("LunchCheck",[]).controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.texto = "";
  $scope.mensaje = "";

  $scope.cantidad = function() {
    if ($scope.texto == "") {
      $scope.mensaje = "Fill data first";
    }else {
      var texto = $scope.texto;
      var array = $scope.texto.split(',');
      var cantidad = array.filter(String).length;

      $scope.mensaje = cantidad;
    }

  }
}




})();

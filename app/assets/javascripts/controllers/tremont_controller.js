  app.controller("TremontController", ['$scope', function ($scope) {
    'use strict'
    var building_1 = "<%= asset_path 'Building1-format'%>" ;

    $scope.image = building_1;
  }]);
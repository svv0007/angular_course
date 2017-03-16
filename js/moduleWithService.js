// app
var xmpApp = angular.module('indexParentControllerApp', [
    'sampleParentController',
    'xmp.directives',
    'xmp.controllers',
    'xmp.services'
]).config(['xmpResourceProvider', function(inProvider) {
    inProvider.configure({
        access:xmpcfg.access
    });
}]);

xmpApp.controller('mainController', ['$scope','service', function ($scope) {
    $scope.xmp = {};
    $scope.showName = function(){
        service.showName();
    }
}]);

xmpApp.factory('service', ['$timeout', function($timeout) {
    return {
        name: function() {
            alert (xmp.firstName);
        },
        showName: function() {
            $timeout(this.name, 500);
        }
    };
}]);
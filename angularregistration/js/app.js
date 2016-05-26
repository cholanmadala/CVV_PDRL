var myApp = angular.module('CVV', ['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider.
    when('/login',{
        templateUrl:'views/login.html',
        controller:'RegistrationController'
    }).
     when('/register',{
        templateUrl:'views/register.html',
        controller:'RegistrationController'
    }).
     when('/success',{
        templateUrl:'views/success.html',
        controller:'SuccessController'
    }).
    otherwise({
    redirectTo:'/login'
    });
    
}]);


/*myApp.controller('appController', ['$scope', function($scope) {
  $scope.message = "Welcome to CVV yoga";
    $scope.age = 26;
    $scope.name="Cholan";
}])*/
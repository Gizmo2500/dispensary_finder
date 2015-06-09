  angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/Map.html',
            controller: 'MapController'
        })

        // nerds page that will use the NerdController
        .when('/list', {
            templateUrl: 'views/List.html',
            controller: 'ListController'
        });

    $locationProvider.html5Mode(true);

}]);
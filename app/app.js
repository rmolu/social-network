(function () {

    angular.module('myApp', ['ui.router']);

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.view.html',
                controller: 'homeCtrl',
            })
            .state('register', {
                url: '/register',
                templateUrl: '/auth/register/register.view.html',
                controller: 'registerCtrl',
                controllerAs: 'vm'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/auth/login/login.view.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: '/profile/profile.view.html',
                controller: 'profileCtrl',
                controllerAs: 'vm'
            })
            .state('editProfile', {
                url: '/edit-profile',
                templateUrl: '/profile/edit-profile.view.html',
                controller: 'editProfileCtrl',
                controllerAs: 'vm'
            })
            .state('timeline', {
                url: '/timeline',
                templateUrl: '/timeline/timeline.view.html',
                controller: 'timelineCtrl',
                controllerAs: 'vm'
            });

    }

    function run($rootScope, $location, authentication) {
        $rootScope.$on('$routeChangeStart', function (event, nextRoute, currentRoute) {
            if ($location.path() === '/profile' && !authentication.isLoggedIn()) {
                $location.path('/');
            }
        });
    }

    angular
        .module('myApp')
        .config(['$stateProvider', '$urlRouterProvider', config])
        .run(['$rootScope', '$location', 'authentication', run]);

})();
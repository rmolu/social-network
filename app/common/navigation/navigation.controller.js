(function () {

    angular
        .module('myApp')
        .controller('navigationCtrl', navigationCtrl);

    navigationCtrl.$inject = ['$location', 'authentication', 'meanData'];

    function navigationCtrl($location, authentication, meanData) {
        var vm = this;

        vm.isLoggedIn = authentication.isLoggedIn();

        vm.user = {};

        if (vm.isLoggedIn){
            meanData.getProfile()
                    .success(function (data) {
                        vm.user = data;
                    })
        };

        vm.logout = function () {
            authentication.logout();
        }


    };

})();
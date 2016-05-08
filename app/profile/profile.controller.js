(function () {

    angular
        .module('myApp')
        .controller('profileCtrl', ['$location', 'meanData',

            function ($location, meanData) {
                var vm = this;

                vm.user = {};

                meanData.getProfile()
                    .success(function (data) {
                        vm.user = data;
                    })
                    .error(function (e) {
                        console.log(e);
                    });

            }]);
}());
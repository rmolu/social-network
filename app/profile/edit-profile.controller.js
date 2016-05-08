(function () {
    angular.module('myApp')
        .controller('editProfileCtrl', ['$state', '$http', '$location', 'meanData',

        function ($state, $http, $location, meanData) {

                var vm = this;

                vm.user = {};

                meanData.getProfile()
                    .success(function (data) {
                        vm.user = data;
                    })
                    .error(function (e) {
                        console.log(e);
                    });


                vm.updateUsername = function () {
                    var request = {
                        userId: vm.user._id,
                        username: vm.user.username
                    }

                    $http.post('api/profile/update-username', request)
                        .success(function () {
                            console.log("Update successful");
                        }).error(function (error) {
                            console.log("Update failed");
                        }).then(function () {
                            $location.path("profile");
                        })
                };

        }]);
}());
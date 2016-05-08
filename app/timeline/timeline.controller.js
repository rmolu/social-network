(function () {
    angular.module('myApp')
        .controller('timelineCtrl', ['$http', '$interval', 'meanData',
                        function ($http, $interval, meanData) {

                var vm = this;

                vm.user = {};

                meanData.getProfile()
                    .success(function (data) {
                        vm.user = data;
                    })
                    .error(function (e) {
                        console.log(e);
                    });

                vm.sendChitchat = function () {
                        var request = {
                            user: vm.user.username,
                            userId: vm.user._id,
                            content: vm.newChitchat
                        }

                        $http.post('api/chitchat/post', request)
                        .success(function (response) {
                            console.log(response);
                            vm.chitchats = response;
                        }).error(function (error) {
                            console.error(error);
                        });
                };

                function getChitchats(initial) {
                    var data = {};

                    console.log(data);
                    $http.post('api/chitchat/get', data)
                        .success(function (response) {
                            if (initial) {
                                vm.chitchats = response;
                            } else {
                                if (response.length > vm.chitchats.length) {
                                    vm.incomingChitchats = response;
                                }
                            }
                        })
                };

                $interval(function () {
                    getChitchats(false);
                    if (vm.incomingChitchats) {
                        vm.difference = vm.incomingChitchats.length - vm.chitchats.length;
                    }
                    console.log("waiting for new chitchats")
                }, 5000);

                vm.setNewChitchats = function () {
                    vm.chitchats = angular.copy(vm.incomingChitchats);
                    vm.incomingChitchats = undefined;
                }

                //Init
                getChitchats(true);

    }]);
}());
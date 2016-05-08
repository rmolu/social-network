(function () {

  angular
    .module('myApp')
    .directive('navigation', navigation);

  function navigation () {
    return {
      restrict: 'EA',
      templateUrl: '/common/navigation/navigation.template.html',
      controller: 'navigationCtrl as navvm'
    };
  }

})();
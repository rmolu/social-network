(function() {
  
  angular
    .module('myApp')
    .controller('homeCtrl', homeCtrl);

    function homeCtrl () {
      console.log('home');
    }

})();
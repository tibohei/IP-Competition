(function(){
  var gem = { name: 'Azurite', price: 2.95 };
  var app = angular.module('competitionModule', ['competition-directives']);

  app.controller('StoreController',function(){
     this.product = gem;

  });

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(sTab){
      this.tab = sTab;
    };

    this.isSet = function(checkTab){
      return this.tab === checkTab;
    };
  });
})();

(function() {

var app = angular.module('competition',[]);

app.controller('tabController',function(){
  this.tab = 1;

  this.setTab = function(vTab){
    this.tab = vTab;
  };

  this.isSet = function(checkTab){
    return this.tab === checkTab;
  };
});

})();

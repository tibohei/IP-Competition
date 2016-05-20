(function() {

var app = angular.module('competition',[]);

app.controller('competitionController',function(){
  this.teams = teams;
});

app.controller('tabController',function(){
  this.tab = 1;

  this.setTab = function(vTab){
    this.tab = vTab;
  };

  this.isSet = function(checkTab){
    return this.tab === checkTab;
  };
});
/* Something with this objects is wrong...
var teams = [
  {
    name: '01a',
    system: {
      mass: 2.0,
      sizeOK: false
    }
  },
  {
    name: '02a',
    system: {
      mass: 3.0,
      sizeOK: true
    }
  },
  {
    name: '03a',
    system: {
      mass: 2.5,
      sizeOK: true
  }
]; */

})();

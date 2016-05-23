(function() {

var app = angular.module('competition',[]);

app.controller('competitionController', ['$http', function($http){
  var competition = this;
  competition.teams = [];
  $http.get('data.json').success(function(data){
    competition.teams = data;
  });
}]);

app.controller('tabController',function(){
  this.tab = 1;

  this.setTab = function(vTab){
    this.tab = vTab;
  };

  this.isSet = function(checkTab){
    return this.tab === checkTab;
  };
});

app.controller("dataController", function(){

    this.team = {};
    this.teamNames = ['01a', '02a', '03a'];

    this.addData = function(teams){
      this.team.modifiedOn = Date.now();
      teams.push(this.team);
      this.team = {};
    };

    this.loadData = function(team){
      this.team = team;
    };

    this.clearForm = function(){
      this.team = {};
    };

  });


/* Something with this objects is wrong... */
/*
var teams = [
  {
    name: '01a',
    mass: 2.0,
    sizeOK: false,
    modifiedOn: 0
  },
  {
    name: '02a',
    mass: 3.0,
    sizeOK: false,
    modifiedOn: 0
  },
  {
    name: '03a',
    mass: 2.5,
    sizeOK: false,
    modifiedOn: 0
  }
];  */

})();

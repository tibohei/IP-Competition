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

app.controller("dataController", function(){

    this.team = {};

    this.addData = function(team){
      this.team.modifiedOn = Date.now();
      teams.push(this.team);
      this.team = {};
    };
  });


/* Something with this objects is wrong... */
var teams = [
  {
    name: '01a',
    mass: 2.0,
    sizeOK: false,
    modifiedOn: 0
    /*system: {
      mass: 2.0,
      sizeOK: false
    }*/
  },
  {
    name: '02a',
    mass: 3.0,
    sizeOK: false,
    modifiedOn: 0
    /*system: {
      mass: 2.0,
      sizeOK: false
    }*/
  },
  {
    name: '03a',
    mass: 2.5,
    sizeOK: false,
    modifiedOn: 0
    /*system: {
      mass: 2.0,
      sizeOK: false
    }*/
  }
];

})();

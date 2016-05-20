(function(){
  var app = angular.module('competition-directives', []);

  app.directive("competitionTabs", function() {
    return {
      restrict: "E",
      templateUrl: "templates/pages/tabs/index.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });
})();

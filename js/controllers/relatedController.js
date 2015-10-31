app.controller('RelatedController',['$scope','player', function($scope, player){
	  $scope.player = player;

	  $scope.$watch('player.current', function(program) {
	    if (program) {
	      $scope.related = [];
	      angular.forEach(program.relatedLink, function(link) {
	        $scope.related.push({
	          link: link.link[0].$text, 
	          caption: link.caption.$text
	        });
	      });
	    }
	  });
}]);
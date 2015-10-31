app.controller('PlayerController', ['$scope', 'nprService','player', function($scope,nprService,player){
	var apiKey = 'MDIxMDM5NDE2MDE0NDYxODQwODY2ZTllNg000';	
	$scope.shows = [];
	$scope.player = player;
	nprService.programs(apiKey)
	.success(function(data, status){
		 var programs = data.list.story;
		 for(var i = 0; i < programs.length; i++)
		 {
		 	$scope.shows[i] = {
		 		show_audio: programs[i], 
		 		show_playing: $scope.player.playing
		 	};
		 }
	});
}]);
app.controller('PlayerController', ['$scope', 'nprService','player', function($scope,nprService,player){
	var apiKey = 'MDIxMDM5NDE2MDE0NDYxODQwODY2ZTllNg000';	
	$scope.shows = [];
	$scope.player = player;
	nprService.programs(apiKey)
	.success(function(data, status){
		 var programs = data.list.story;
		 for(var i = 0; i < programs.length; i++)
		 {
		 	//if .mp4 file exists
		 	if(programs[i].audio[0].format.mp4 !== undefined)
		 	{
		 		$scope.shows.push({
			 		show_audio: programs[i], 
			 		show_playing: $scope.player.playing
		 		});
		 	}		 	
		 }
	});
}]);
var app = angular.module('playerApp',[]);

var apiKey = 'MDIxMDM5NDE2MDE0NDYxODQwODY2ZTllNg000';
var nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';

app.controller('PlayerController', ['$scope', '$http', function($scope,$http){
	$scope.playing = false;
	$scope.audio = document.createElement('audio');
	$scope.shows = [];
	// $scope.audio.src = './media/cartman-InGhetto.mp3';
	$scope.play = function(program){
		if($scope.playing)
		{
			$scope.audio.pause();
			$scope.playing = false;
			program.show_audio.pause;
			program.show_playing = false;
		}else{
			var url = program.show_audio.audio[0].format.mp4.$text;
			$scope.audio.src = url;
			$scope.audio.play();
			$scope.playing = true;
			program.show_playing = true;
		}		
	};
	$scope.stop = function(program){
		$scope.audio.pause();
		$scope.playing = false;
		program.show_playing = false;
	};
	$scope.audio.addEventListener('ended', function(){
		$scope.$apply(function(){
			$scope.stop();
		});
	});

	$http({
		method: 'JSONP',
		url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
	}).success(function(data, status){
		//store NPR response object
		 var programs = data.list.story;
		 for(var i = 0; i < programs.length; i++)
		 {
		 	$scope.shows[i] = {
		 		show_audio: programs[i], 
		 		show_playing: $scope.playing
		 	};
		 }
	}).error(function(data, status){

	});
}]);

app.controller('RelatedController', ['$scope', function($scope){

}]);
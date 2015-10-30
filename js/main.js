var app = angular.module('playerApp',[]);

app.controller('PlayerController', ['$scope', function($scope){
	$scope.playing = false;
	$scope.audio = document.createElement('audio');
	$scope.audio.src = './media/cartman-InGhetto.mp3';
	$scope.play = function(){
		$scope.audio.play();
		$scope.playing = true;
	};
	$scope.stop = function(){
		$scope.audio.pause();
		$scope.playing = false;
	};
	$scope.audio.addEventListener('ended', function(){
		$scope.$apply(function(){
			console.log("stopping");
			$scope.stop();
		});
	});
}]);

app.controller('RelatedController', ['$scope', function($scope){

}]);
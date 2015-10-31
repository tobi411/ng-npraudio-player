app.factory('player',['audio', '$rootScope', function(audio, $rootScope){
	var player = {
		playing: false,		
		ready: false,
		current: null,
		play: function(program){
			console.log(program.show_audio);
			if(player.playing)
				player.stop(program);
			else{
				var url = program.show_audio.audio[0].format.mp4.$text;
				audio.src = url;
				audio.play();
				player.playing = true;
				this.current = program.show_audio;
				program.show_playing = true;
			}
		},
		stop: function(program){
			var url = program.show_audio.audio[0].format.mp4.$text;
			if(url === audio.src && player.playing)
			{
				audio.pause();
				this.playing = false;
				program.show_playing = false;
			}		
		},
		 currentTime: function() {
	      	return audio.currentTime;
	    },
	    currentDuration: function() {
	     	return parseInt(audio.duration);
	    }
	};
	audio.addEventListener('ended', function(){
		$rootScope.$apply(player.stop());
	});

	audio.addEventListener('timeupdate', function(evt) {
	    $rootScope.$apply(function() {
	      player.progress = player.currentTime();
	      player.progress_percent = player.progress / player.currentDuration();
	    });
  	});
  	audio.addEventListener('canplay', function(evt) {
	    $rootScope.$apply(function() {
	      player.ready = true;
	    });
 	});	
	return player;
}]);
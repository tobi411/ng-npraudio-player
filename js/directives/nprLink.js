app.directive('nprLink', function() {
  return {
    restrict: 'EA',
    require: ['^ngModel'],
    replace: true,
    scope: {
      ngModel: '=',
      play: '&',
      stop: '&'
    },
    templateUrl: './views/nprListItem.html',
    link: function(scope, ele, attr) {
      scope.duration = scope.ngModel.show_audio.audio[0].duration.$text;
    }
  }
});
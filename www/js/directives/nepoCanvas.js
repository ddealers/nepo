angular.module('nepo.directives', [])
.directive('nepoCanvas', function(loaderService){
	"use strict";
	return {
		restrict: "E",
		replace: true,
		scope: {},
		template: "<canvas width='100%' height='100%'></canvas>",
		link: function(scope, element, attribute){
			var w, h, loader, manifest, table, pieces;
			drawGame();
			function drawGame(){
				if(scope.stage){
					scope.stage.autoClear = true;
					scope.stage.removeAllChildren();
					scope.stage.update();
				}else{
					scope.stage = new createjs.Stage(element[0]);
				}
				w = scope.stage.canvas.width;
				h = scope.stage.canvas.height;
				loaderService.getLoader().addEventListener('complete', handleComplete);
				loaderService.loadAssets();
			}
			function handleComplete(){
				console.log('complete');
				createjs.Ticker.timingMode = createjs.Ticker.RAF;
            	createjs.Ticker.addEventListener("tick", tick);
			}
			function tick(event){
				scope.stage.update(event);
			}
		}
	}
});
angular.module('nepo.directives', [])
.directive('nepoCanvas', function(loaderService, Abacus, Column, Piece){
	"use strict";
	return {
		restrict: "E",
		replace: true,
		scope: {},
		template: "<canvas id='game-container'></canvas>",
		link: function(scope, element, attribute){
			var w, h, ratio;
			drawGame();
			function drawGame(){
				setStage();
				resize();
				loaderService.getLoader().addEventListener('complete', handleComplete);
				loaderService.loadAssets();
			}
			function setStage(){
				if(scope.stage){
					scope.stage.autoClear = true;
					scope.stage.removeAllChildren();
					scope.stage.update();
				}else{
					scope.stage = new createjs.Stage(element[0]);
				}
				createjs.Ticker.addEventListener("tick", scope.stage);
				createjs.Ticker.setFPS(60);
				createjs.Touch.enable(scope.stage);
				scope.stage.enableMouseOver(50);
			}
			function resize(){
				w = window.innerWidth;
				h = window.innerHeight;
				scope.stage.canvas.width = w;
				scope.stage.canvas.height = h;
				ratio = {w: w / 4116, h: h / 2390}
			}
			function handleComplete(){
				var abacus = new Abacus({_w: w, _h: h, _ratio: ratio});
				abacus.addToStage(scope.stage);
				//var column = new Column({_x: w / 2, _y: h / 2, _piece:"btn1", _ratio: ratio});
				//column.addToStage(scope.stage);
				var btn1 = new Piece({_pieceName: "btn1", _x: w / 2, _y: h / 2 + 20, _scale: ratio.w});
				btn1.addToStage(scope.stage);
				var btn2 = new Piece({_pieceName: "btn1", _x: w / 2, _y: h / 2, _scale: ratio.w});
				btn2.addToStage(scope.stage);
			}
			function open(e){
				e.currentTarget.gotoAndPlay('open');
			}
		}
	}
});
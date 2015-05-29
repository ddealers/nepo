angular.module('nepo.directives', [])
.directive('nepoCanvas', function($window, PreloaderService, Abacus, Column, Piece){
	"use strict";
	return {
		restrict: "E",
		replace: true,
		scope: {},
		template: "<canvas id='game-container'></canvas>",
		link: function(scope, element, attribute){
			var w, h, r, scene;
			
			function drawGame(){
				setStage();
				resize();
				PreloaderService.addEventListener('complete', handleComplete);
				PreloaderService.loadAssets(scope.stage, w, h);
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
				w = angular.element('.has-header').width();
				h = angular.element('.has-header').height();
				scope.stage.canvas.width = w;
				scope.stage.canvas.height = h;
				r = w / 4116;
				if(2390 * r > h){
					r = h / 2390;	
				}
				scene = {width: 4116 * r, height: 2390 * r, ratio: r};
			}
			function handleComplete(){
				var abacus = new Abacus({ratio: scene.ratio, stage: scope.stage});
				abacus.addToStage(scope.stage);
				var uu = new Column({x: abacus.getBounds().width * 80 / 100, y: abacus.getBounds().height * 55 / 100, pieceName:"btn1", scale: scene.ratio});
				var du = new Column({x: abacus.getBounds().width * 75 / 100, y: abacus.getBounds().height * 55 / 100, pieceName:"btn1", scale: scene.ratio});
				var cu = new Column({x: abacus.getBounds().width * 70 / 100, y: abacus.getBounds().height * 55 / 100, pieceName:"btn1", scale: scene.ratio});
				abacus.addChild(uu,du,cu);
			}
			function open(e){
				e.currentTarget.gotoAndPlay('open');
			}
			drawGame();
		}
	}
});
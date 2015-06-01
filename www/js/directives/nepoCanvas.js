angular.module('nepo.directives', [])
.directive('nepoCanvas', function($window, PreloaderService, Abacus, Column, Piece){
	"use strict";
	return {
		restrict: "E",
		replace: true,
		scope: {},
		template: "<canvas id='game-container'></canvas>",
		link: function(scope, element, attribute){
			var w, h, r, scene, abacus;
			
			function drawGame(){
				setStage();
				resize();
				PreloaderService.addEventListener('complete', handleComplete);
				PreloaderService.loadAssets(scope.stage, w, h);
				$window.addEventListener('resize', resize);
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
				if(abacus) abacus.resize({ratio: scene.ratio, stage: scope.stage});
			}
			function handleComplete(){
				abacus = new Abacus({ratio: scene.ratio, stage: scope.stage});
				abacus.addToStage(scope.stage);
					var t = new Column({x: abacus.getBounds().width * 15.3 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn1", scale: scene.ratio});
				abacus.addChild(t);
				var t = new Column({x: abacus.getBounds().width * 15.3 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn1", scale: scene.ratio});
				abacus.addChild(t);


				var g = new Column({x: abacus.getBounds().width * 22 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn2", scale: scene.ratio});
					var dm = new Column({x: abacus.getBounds().width * 26.5 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn2", scale: scene.ratio});
				var cm = new Column({x: abacus.getBounds().width * 31 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn2", scale: scene.ratio});
				abacus.addChild(g,dm,cm);
				var g = new Column({x: abacus.getBounds().width * 22 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn2", scale: scene.ratio});
					var dm = new Column({x: abacus.getBounds().width * 26.5 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn2", scale: scene.ratio});
				var cm = new Column({x: abacus.getBounds().width * 31 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn2", scale: scene.ratio});
				abacus.addChild(g,dm,cm);


				var m = new Column({x: abacus.getBounds().width * 38 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn3", scale: scene.ratio});
					var dm = new Column({x: abacus.getBounds().width * 42.5 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn3", scale: scene.ratio});
				var cm = new Column({x: abacus.getBounds().width * 47 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn3", scale: scene.ratio});
				abacus.addChild(m,dm,cm);
				var m = new Column({x: abacus.getBounds().width * 38 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn3", scale: scene.ratio});
					var dm = new Column({x: abacus.getBounds().width * 42.5 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn3", scale: scene.ratio});
				var cm = new Column({x: abacus.getBounds().width * 47 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn3", scale: scene.ratio});
				abacus.addChild(m,dm,cm);


				var k = new Column({x: abacus.getBounds().width * 54 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn4", scale: scene.ratio});
					var dm = new Column({x: abacus.getBounds().width * 58.5 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn4", scale: scene.ratio});
				var cm = new Column({x: abacus.getBounds().width * 63 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn4", scale: scene.ratio});
				abacus.addChild(k,dm,cm);
				var k = new Column({x: abacus.getBounds().width * 54 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn4", scale: scene.ratio});
					var dm = new Column({x: abacus.getBounds().width * 58.5 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn4", scale: scene.ratio});
				var cm = new Column({x: abacus.getBounds().width * 63 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn4", scale: scene.ratio});
				abacus.addChild(k,dm,cm);


				var u = new Column({x: abacus.getBounds().width * 70 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn5", scale: scene.ratio});
					var dm = new Column({x: abacus.getBounds().width * 75 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn5", scale: scene.ratio});
				var cm = new Column({x: abacus.getBounds().width * 80/ 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn5", scale: scene.ratio});
				abacus.addChild(u,dm,cm);
				var u = new Column({x: abacus.getBounds().width * 70 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn5", scale: scene.ratio});
					var dm = new Column({x: abacus.getBounds().width * 75 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn5", scale: scene.ratio});
				var cm = new Column({x: abacus.getBounds().width * 80/ 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn5", scale: scene.ratio});
				abacus.addChild(u,dm,cm);

			}
			function open(e){
				e.currentTarget.gotoAndPlay('open');
			}
			drawGame();
		}
	}
});
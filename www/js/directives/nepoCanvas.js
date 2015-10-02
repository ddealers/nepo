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
				var ts, tb,
					gus, gds, gcs, gub, gdb, gcb,
					mus, mds, mcs, mub, mdb, mcb,
					kus, kds, kcs, kub, kdb, kcb,
					us,ds,cs,ub,db,cb;
				abacus = new Abacus({ratio: scene.ratio, stage: scope.stage});
				abacus.addToStage(scope.stage);
				ts = new Column({x: abacus.getBounds().width * 15.3 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn1", pieces: 3, scale: scene.ratio});
				tb = new Column({x: abacus.getBounds().width * 15.3 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn1", scale: scene.ratio});
				abacus.addChild(ts,tb);

				gcb = new Column({x: abacus.getBounds().width * 22 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn2", scale: scene.ratio});
				gdb = new Column({x: abacus.getBounds().width * 26.5 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn2", scale: scene.ratio});
				gub = new Column({x: abacus.getBounds().width * 31 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn2", scale: scene.ratio});
				abacus.addChild(gcb,gdb,gub);
				gcs = new Column({x: abacus.getBounds().width * 22 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn2", pieces: 3, scale: scene.ratio});
				gds = new Column({x: abacus.getBounds().width * 26.5 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn2", pieces: 3, scale: scene.ratio});
				gus = new Column({x: abacus.getBounds().width * 31 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn2", pieces: 3, scale: scene.ratio});
				abacus.addChild(gcs,gds,gus);

				mcb = new Column({x: abacus.getBounds().width * 38 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn3", scale: scene.ratio});
				mdb = new Column({x: abacus.getBounds().width * 42.5 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn3", scale: scene.ratio});
				mub = new Column({x: abacus.getBounds().width * 47 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn3", scale: scene.ratio});
				abacus.addChild(mcb,mdb,mub);
				mcs = new Column({x: abacus.getBounds().width * 38 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn3", pieces: 3, scale: scene.ratio});
				mds = new Column({x: abacus.getBounds().width * 42.5 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn3", pieces: 3, scale: scene.ratio});
				mus = new Column({x: abacus.getBounds().width * 47 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn3", pieces: 3, scale: scene.ratio});
				abacus.addChild(mcs,mds,mus);

				kcb = new Column({x: abacus.getBounds().width * 54 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn4", scale: scene.ratio});
				kdb = new Column({x: abacus.getBounds().width * 58.5 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn4", scale: scene.ratio});
				kub = new Column({x: abacus.getBounds().width * 63 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn4", scale: scene.ratio});
				abacus.addChild(kcb,kdb,kub);
				kcs = new Column({x: abacus.getBounds().width * 54 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn4", pieces: 3, scale: scene.ratio});
				kds = new Column({x: abacus.getBounds().width * 58.5 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn4", pieces: 3, scale: scene.ratio});
				kus = new Column({x: abacus.getBounds().width * 63 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn4", pieces: 3, scale: scene.ratio});
				abacus.addChild(kcs,kds,kus);

				cb = new Column({x: abacus.getBounds().width * 70 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn5", scale: scene.ratio});
				db = new Column({x: abacus.getBounds().width * 75 / 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn5", scale: scene.ratio});
				ub = new Column({x: abacus.getBounds().width * 80/ 100, y: abacus.getBounds().height * 47.5 / 100, pieceName:"btn5", scale: scene.ratio});
				abacus.addChild(ub,db,cb);
				cs = new Column({x: abacus.getBounds().width * 70 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn5", pieces: 3, scale: scene.ratio});
				ds = new Column({x: abacus.getBounds().width * 75 / 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn5", pieces: 3, scale: scene.ratio});
				us = new Column({x: abacus.getBounds().width * 80/ 100, y: abacus.getBounds().height * 19 / 100, pieceName:"btn5", pieces: 3, scale: scene.ratio});
				abacus.addChild(us,ds,cs);
			}
			function open(e){
				e.currentTarget.gotoAndPlay('open');
			}
			drawGame();
		}
	}
});
uiClasses.factory('Abacus', function(PreloaderService){
	/*=========================
	* properties {ratio, stage}
	=========================*/
	function Abacus(properties){
		this.initialize();
		this.bitmap = new createjs.Bitmap(PreloaderService.preload.getResult('abacus'));
		this.addChild(this.bitmap);
		this.resize(properties);
	};
	Abacus.prototype = new createjs.Container();
	Abacus.prototype.Container_initialize = Abacus.prototype.initialize;
    Abacus.prototype.initialize = function() {
		this.Container_initialize();
		this.name = 'abacus';
	};
	Abacus.prototype.resize = function(properties){
		this.bitmap.set({scaleX: properties.ratio, scaleY: properties.ratio});
		var _regX = this.getBounds().width / 2;
		var _regY = this.getBounds().height / 2;
		this.set({x: properties.stage.canvas.width / 2, y: properties.stage.canvas.height / 2, regX: _regX, regY: _regY});
	}
	Abacus.prototype.addToStage = function(stage){
		stage.addChild(this);
		TweenLite.from(this, 0.5, {alpha: 0, ease: Power2.easeOut});
	}
	Abacus.prototype.removeFromStage = function(stage){
		stage.removeChild(this);
	}
	return Abacus;
});
uiClasses.factory('Abacus', function(loaderService){
	function Abacus(properties){
		this.abacus = new createjs.Bitmap(loaderService.getResult('abacus'));
		var newX = properties._w / 2 - this.abacus.getBounds().width * properties._ratio.w / 2;
		var newY = properties._h / 2 - this.abacus.getBounds().height * properties._ratio.h / 2;
		this.abacus.set({scaleX : properties._ratio.w, scaleY : properties._ratio.h, x: newX, y: newY});
	};
	Abacus.prototype = {
		addToStage: function(stage){
			stage.addChild(this.abacus);
		},
		removeFromStage: function(stage){
			stage.removeChild(this.abacus);
		}
	};
	return Abacus;
});
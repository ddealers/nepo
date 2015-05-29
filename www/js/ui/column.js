uiClasses.factory('Column', function(Piece){
	/*=========================
	* properties {x, y, scale, pieceName}
	=========================*/
	function Column(properties){
		this.initialize();
		this.piece1 = new Piece({x: 0, y: 0, scale: properties.scale, pieceName: properties.pieceName});
		this.piece2 = new Piece({x: 0, y: 140 * properties.scale, scale: properties.scale, pieceName: properties.pieceName});
		this.piece3 = new Piece({x: 0, y: 275 * properties.scale, scale: properties.scale, pieceName: properties.pieceName});
		this.piece4 = new Piece({x: 0, y: 402 * properties.scale, scale: properties.scale, pieceName: properties.pieceName});
		this.addChild(this.piece4, this.piece3, this.piece2, this.piece1);
		this.set({x: properties.x, y: properties.y});
	};
	Column.prototype = new createjs.Container();
	Column.prototype.Container_initialize = Column.prototype.initialize;
    Column.prototype.initialize = function() {
		this.Container_initialize();
		//this.name = '';
	};
	Column.prototype.addToStage = function(stage){
		stage.addChild(this);
	};
	Column.prototype.removeFromStage = function(stage){
		stage.removeChild(this);
	};
	return Column;
});
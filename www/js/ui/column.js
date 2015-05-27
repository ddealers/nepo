uiClasses.factory('Column', function(Piece){
	function Column(properties){
		this.column = new createjs.Container();
		this.piece1 = new Piece({_pieceName: properties._piece, _x: 0, _y: 0, _scale: properties._ratio.w});
		this.piece2 = new Piece({_pieceName: properties._piece, _x: 0, _y: 20, _scale: properties._ratio.w});
		this.piece3 = new Piece({_pieceName: properties._piece, _x: 0, _y: 40, _scale: properties._ratio.w});
		this.piece4 = new Piece({_pieceName: properties._piece, _x: 0, _y: 60, _scale: properties._ratio.w});
		this.piece5 = new Piece({_pieceName: properties._piece, _x: 0, _y: 80, _scale: properties._ratio.w});
		this.column.addChild(this.piece1, this.piece2, this.piece3, this.piece4, this.piece5);
		this.column.set({x: properties._x, y: properties._y});
	};
	Column.prototype = {
		addToStage: function(stage){
			stage.addChild(this.piece);
		},
		removeFromStage: function(stage){
			stage.removeChild(this.piece);
		}
	};
	return Column;
});
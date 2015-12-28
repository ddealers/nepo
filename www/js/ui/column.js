uiClasses.factory('Column', function(Piece){
	/*=========================
	* properties {x, y, scale, pieceName}
	=========================*/
	var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
	function Column(properties){
		this.initialize();
		this.lastIndex = 0;
		this.toggle = __bind(this.toggle, this);
		if(properties.pieces == 3){
			this.piece1 = new Piece({x: 0, y: 0, scale: properties.scale, pieceName: properties.pieceName, index: 1});
			this.piece2 = new Piece({x: 0, y: 43 * properties.scale, scale: properties.scale, pieceName: properties.pieceName, index: 2});
			this.piece3 = new Piece({x: 0, y: 84 * properties.scale, scale: properties.scale, pieceName: properties.pieceName, index: 3});
			
			this.piece1.addEventListener('click', this.toggle);
			this.piece2.addEventListener('click', this.toggle);
			this.piece3.addEventListener('click', this.toggle);

			this.addChild(this.piece3, this.piece2, this.piece1);
		}else{
			this.piece1 = new Piece({x: 0, y: 0, scale: properties.scale, pieceName: properties.pieceName, index: 1});
			this.piece2 = new Piece({x: 0, y: 43 * properties.scale, scale: properties.scale, pieceName: properties.pieceName, index: 2});
			this.piece3 = new Piece({x: 0, y: 84 * properties.scale, scale: properties.scale, pieceName: properties.pieceName, index: 3});
			this.piece4 = new Piece({x: 0, y: 125 * properties.scale, scale: properties.scale, pieceName: properties.pieceName, index: 4});
		
			this.piece1.addEventListener('click', this.toggle);
			this.piece2.addEventListener('click', this.toggle);
			this.piece3.addEventListener('click', this.toggle);
			this.piece4.addEventListener('click', this.toggle);

			this.addChild(this.piece4, this.piece3, this.piece2, this.piece1);
		}
		this.set({x: properties.x, y: properties.y});
	};
	Column.prototype = new createjs.Container();
	Column.prototype.Container_initialize = Column.prototype.initialize;
    Column.prototype.initialize = function() {
		this.Container_initialize();
	};
	Column.prototype.selected = null;
	Column.prototype.toggle = function(e){
		var index = this.children.length - 1;
		var current = e.currentTarget;
		
		if(this.lastIndex + 1 == current.index){
			this.lastIndex = current.index;
		}else if(this.lastIndex == current.index){
			this.lastIndex = current.index - 1;
		}else{
			return false;
		}
		
		current.toggle(e);
		this.setChildIndex(current, index);
	};
	Column.prototype.addToStage = function(stage){
		stage.addChild(this);
	};
	Column.prototype.removeFromStage = function(stage){
		stage.removeChild(this);
	};
	return Column;
});
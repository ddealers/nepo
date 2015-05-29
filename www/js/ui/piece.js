uiClasses.factory('Piece', function(PreloaderService){
	var pieceName;
	/*=========================
	* properties {x, y, scale, pieceName}
	=========================*/
	function Piece(properties){
		pieceName = properties.pieceName;
		this.initialize();
		var imgs = [], _width, _height;
		for( i = 1; i <= 11; i++){
			imgs.push(PreloaderService.preload.getResult(properties.pieceName+"."+i));
		}
		for( i = 11; i >= 1; i--){
			imgs.push(PreloaderService.preload.getResult(properties.pieceName+"."+i));
		}
		_width = imgs[0].width;
		_height = imgs[0].height;
		this.spritesheet = new createjs.SpriteSheet({
			images: imgs,
			animations: {
				close: [12, 20, "closed"],
				closed: 21,
				open: [1, 10, "opened"],
				opened: 11
			},
			frames: {
				width: _width,
				height: _height
			}
		});
		this.open = false;
		this.piece = new createjs.Sprite(this.spritesheet);
		this.piece.addEventListener('click', this.toggle);
		this.addChild(this.piece);
		this.set({x: properties.x, y: properties.y, scaleX: properties.scale, scaleY: properties.scale});
	};
	Piece.prototype = new createjs.Container();
	Piece.prototype.Container_initialize = Piece.prototype.initialize;
    Piece.prototype.initialize = function() {
		this.Container_initialize();
		this.name = pieceName;
	};
	Piece.prototype.addToStage = function(stage){
			stage.addChild(this);
		},
	Piece.prototype.removeFromStage = function(stage){
		stage.removeChild(this);
	},
	Piece.prototype.toggle = function(e){
		var tgt = e.currentTarget;
		if(tgt.open){
			tgt.gotoAndPlay('close');
		}else{
			tgt.gotoAndPlay('open');
		}
		tgt.open = !tgt.open;
	};
	return Piece;
});
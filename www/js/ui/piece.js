uiClasses.factory('Piece', function(loaderService){
	function Piece(properties){
		var imgs = [], _w, _h;
		for( i = 1; i <= 11; i++){
			imgs.push(loaderService.getResult(properties._pieceName+"."+i));
		}
		for( i = 11; i >= 1; i--){
			imgs.push(loaderService.getResult(properties._pieceName+"."+i));
		}
		_w = imgs[0].width;
		_h = imgs[0].height;
		this.spritesheet = new createjs.SpriteSheet({
			images: imgs,
			animations: {
				close: [12, 20, "closed"],
				closed: 21,
				open: [1, 10, "opened"],
				opened: 11
			},
			frames: {
				width: _w,
				height: _h
			}
		});
		this.open = false;
		this.piece = new createjs.Sprite(this.spritesheet);
		this.piece.addEventListener('click', this.toggle);
		this.piece.set({x: properties._x, y: properties._y, scaleX: properties._scale, scaleY: properties._scale});
	};
	Piece.prototype = {
		dispatchEvent: function(ev){
			this.piece.dispatchEvent(ev);
		},
		addToStage: function(stage){
			stage.addChild(this.piece);
		},
		removeFromStage: function(stage){
			stage.removeChild(this.piece);
		},
		toggle: function(e){
			var tgt = e.currentTarget;
			if(tgt.open){
				tgt.gotoAndPlay('close');
			}else{
				tgt.gotoAndPlay('open');
			}
			tgt.open = !tgt.open;
		}
	};
	return Piece;
});
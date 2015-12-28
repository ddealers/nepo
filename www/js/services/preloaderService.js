servicesProviders.service('PreloaderService', function(){
	var bgBar, i, _i, _ref, _results;
	var _self = this;
	var _stage;
	_self.__proto__ = new createjs.EventDispatcher();
	_self.initialize = function(){
		_self.preload = new createjs.LoadQueue(true);
		_self.loadStep = 0;
		_self.barHeight = 7;
		_self.barWidth = 35;
		_self.loaderColor = '#6C0B2C';
		_self.loaderBar = new createjs.Container();
		_results = [];
		for (i = _i = 1; _i <= 13; i = _i += 1) {
	      	bgBar = new createjs.Shape();
	        bgBar.graphics.setStrokeStyle(1).beginStroke(_self.loaderColor).beginFill(_self.loaderColor).drawRoundRect(0, 0, _self.barWidth, _self.barHeight, 5);
	        bgBar.regX = -20;
	        bgBar.regY = this.barHeight / 2;
	        bgBar.rotation = (i - 1) * 30;
	        bgBar.alpha = 0.05;
	        bgBar.name = 'bar' + i.toString();
	        _results.push(this.loaderBar.addChild(bgBar));
	    }
	}

	_self.loadAssets = function(stage, width, height){
		var manifest = [
			{src: "abaco.png", id:"abacus"},
			{src: "btn/azul/1.png", id:"btn1.1"},
			{src: "btn/azul/2.png", id:"btn1.2"},
			{src: "btn/azul/3.png", id:"btn1.3"},
			{src: "btn/azul/4.png", id:"btn1.4"},
			{src: "btn/azul/5.png", id:"btn1.5"},
			{src: "btn/azul/6.png", id:"btn1.6"},
			{src: "btn/azul/7.png", id:"btn1.7"},
			{src: "btn/azul/8.png", id:"btn1.8"},
			{src: "btn/azul/9.png", id:"btn1.9"},
			{src: "btn/azul/10.png", id:"btn1.10"},
			{src: "btn/azul/11.png", id:"btn1.11"},

			{src: "btn/bugambilia/1.png", id:"btn2.1"},
			{src: "btn/bugambilia/2.png", id:"btn2.2"},
			{src: "btn/bugambilia/3.png", id:"btn2.3"},
			{src: "btn/bugambilia/4.png", id:"btn2.4"},
			{src: "btn/bugambilia/5.png", id:"btn2.5"},
			{src: "btn/bugambilia/6.png", id:"btn2.6"},
			{src: "btn/bugambilia/7.png", id:"btn2.7"},
			{src: "btn/bugambilia/8.png", id:"btn2.8"},
			{src: "btn/bugambilia/9.png", id:"btn2.9"},
			{src: "btn/bugambilia/10.png", id:"btn2.10"},
			{src: "btn/bugambilia/11.png", id:"btn2.11"},

			{src: "btn/rojo/1.png", id:"btn3.1"},
			{src: "btn/rojo/2.png", id:"btn3.2"},
			{src: "btn/rojo/3.png", id:"btn3.3"},
			{src: "btn/rojo/4.png", id:"btn3.4"},
			{src: "btn/rojo/5.png", id:"btn3.5"},
			{src: "btn/rojo/6.png", id:"btn3.6"},
			{src: "btn/rojo/7.png", id:"btn3.7"},
			{src: "btn/rojo/8.png", id:"btn3.8"},
			{src: "btn/rojo/9.png", id:"btn3.9"},
			{src: "btn/rojo/10.png", id:"btn3.10"},
			{src: "btn/rojo/11.png", id:"btn3.11"},

			{src: "btn/verde/1.png", id:"btn4.1"},
			{src: "btn/verde/2.png", id:"btn4.2"},
			{src: "btn/verde/3.png", id:"btn4.3"},
			{src: "btn/verde/4.png", id:"btn4.4"},
			{src: "btn/verde/5.png", id:"btn4.5"},
			{src: "btn/verde/6.png", id:"btn4.6"},
			{src: "btn/verde/7.png", id:"btn4.7"},
			{src: "btn/verde/8.png", id:"btn4.8"},
			{src: "btn/verde/9.png", id:"btn4.9"},
			{src: "btn/verde/10.png", id:"btn4.10"},
			{src: "btn/verde/11.png", id:"btn4.11"},

			{src: "btn/limon/1.png", id:"btn5.1"},
			{src: "btn/limon/2.png", id:"btn5.2"},
			{src: "btn/limon/3.png", id:"btn5.3"},
			{src: "btn/limon/4.png", id:"btn5.4"},
			{src: "btn/limon/5.png", id:"btn5.5"},
			{src: "btn/limon/6.png", id:"btn5.6"},
			{src: "btn/limon/7.png", id:"btn5.7"},
			{src: "btn/limon/8.png", id:"btn5.8"},
			{src: "btn/limon/9.png", id:"btn5.9"},
			{src: "btn/limon/10.png", id:"btn5.10"},
			{src: "btn/limon/11.png", id:"btn5.11"}
		]
		_stage = stage;
		_self.loaderBar.x = width / 2;
		_self.loaderBar.y = height / 2;
	    _self.preload.addEventListener('progress', _self.handleProgress);
	    _self.preload.addEventListener('complete', _self.handleComplete);
	    _self.preload.loadManifest(manifest, true, './img/');
	    _stage.addChild(_self.loaderBar);
	    TweenLite.from(_self.loaderBar, 1, {
	    	alpha: 0.1,
	    	ease: Quart.easeOut
	    });
	    return _self;
	}

	_self.handleProgress = function(e) {
      var percent;
      percent = Math.round(_self.preload.progress * 100);
      if (e.loaded >= _self.loadStep / 12 && _self.loadStep < 12) {
        _self.showBar("bar" + (_self.loadStep + 1));
        return _self.loadStep++;
      }
    };

	_self.handleComplete = function() {
		_self.preload.removeEventListener('progress', this.handleProgress);
		_self.preload.removeEventListener('complete', this.handleComplete);
		_self.dispatchEvent({
			type: 'complete'
		});
		_stage.removeChild(_self.loaderBar);
	};

	_self.showBar = function(name) {
      return TweenLite.to(_self.loaderBar.getChildByName(name), 2.5, {
        alpha: 1,
        ease: Quart.easeOut
      });
    };

    _self.initialize();
});
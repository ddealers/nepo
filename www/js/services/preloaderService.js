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
			{src: "btn/1.png", id:"btn1.1"},
			{src: "btn/2.png", id:"btn1.2"},
			{src: "btn/3.png", id:"btn1.3"},
			{src: "btn/4.png", id:"btn1.4"},
			{src: "btn/5.png", id:"btn1.5"},
			{src: "btn/6.png", id:"btn1.6"},
			{src: "btn/7.png", id:"btn1.7"},
			{src: "btn/8.png", id:"btn1.8"},
			{src: "btn/9.png", id:"btn1.9"},
			{src: "btn/10.png", id:"btn1.10"},
			{src: "btn/11.png", id:"btn1.11"}
		]
		_stage = stage;
		_self.loaderBar.x = width / 2;
		_self.loaderBar.y = height / 2;
	    _self.preload.addEventListener('progress', _self.handleProgress);
	    _self.preload.addEventListener('complete', _self.handleComplete);
	    _self.preload.loadManifest(manifest, true, '/img/');
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
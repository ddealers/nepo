servicesProviders.service('loaderService', function(){
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
	loader = new createjs.LoadQueue(true);

	this.getResult = function(asset){
		return loader.getResult(asset);
	}
	this.getLoader = function(){
		return loader;
	}
	this.loadAssets = function(){
		loader.loadManifest(manifest, true, "/img/");
	}
});
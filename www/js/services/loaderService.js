angular.module('nepo.services', [])
.service('loaderService', function(){
	var manifest = []
	loader = new createjs.LoadQueue(true);

	this.getResult = function(asset){
		return loader.getResult(asset);
	}
	this.getLoader = function(){
		return loader;
	}
	this.loadAssets = function(){
		loader.loadManifest(manifest, true, "img");
	}
});
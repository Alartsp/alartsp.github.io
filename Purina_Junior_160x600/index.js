(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,46);


(lib._2pngcopy2 = function() {
	this.initialize(img._2pngcopy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,45);


(lib._3pngcopy2 = function() {
	this.initialize(img._3pngcopy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,39);


(lib._4 = function() {
	this.initialize(img._4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,39);


(lib.cat_sm = function() {
	this.initialize(img.cat_sm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,312);


(lib.Pack_big_s = function() {
	this.initialize(img.Pack_big_s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,311,367);


(lib.Pack_sm_s = function() {
	this.initialize(img.Pack_sm_s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,287);


(lib.Sahd_sm_2 = function() {
	this.initialize(img.Sahd_sm_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,376);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,421,85);


(lib.shadow_BIG = function() {
	this.initialize(img.shadow_BIG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,569,97);


(lib.Tx_2 = function() {
	this.initialize(img.Tx_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,134);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.T2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwsC+IAAl7MAhaAAAIAAF7g");
	mask.setTransform(83,8.5);

	// Layer_1
	this.instance = new lib.Tx_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,27.5);


(lib.T2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyHEAIAAn/MAkOAAAIAAH/g");
	mask.setTransform(83.05,53.225);

	// Layer_1
	this.instance = new lib.Tx_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,27.7,160,39.3);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-32,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-32,0,137.5,19.5), null);


(lib.Shad_sm_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Sahd_sm_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103,188);


(lib.Shad_sm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shadow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210.5,42.5);


(lib.Shad_big = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shadow_BIG();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,284.5,48.5);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib._3pngcopy2();
	this.instance.parent = this;
	this.instance.setTransform(19,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(19,0,268,39), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib._2pngcopy2();
	this.instance.parent = this;
	this.instance.setTransform(6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(6,0,235,45), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-42,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-42,-7,291,46), null);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.2,2).p("AARAWQAAABACAAQABABADgBIAAADIgDABQgKACgBgJIgBABQgHAHgJAAQgGAAgEgDQgEgFAAgGQAAgFACgEQADgDAFgCIAKgBQAIgCABgBQACgBAAgEQAAgHgEgDQgDgEgFAAQgFAAgEADQgDACgBADIgBAAIAAgGQAJgGAIAAQARAAAAATgAAEAAQgLADgCABQgEACAAAHQAAAKAKAAQADAAABgBQADgCABgBIACgCIABgBIAAgQg");
	this.shape.setTransform(216.975,-107.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAZQgEgFAAgGQAAgFACgEQADgDAFgCIAKgBIAJgDQACgBAAgEQAAgHgEgDQgDgEgFAAQgFAAgEADQgDACgBADIgBAAIAAgGQAJgGAIAAQARAAAAATIAAAeQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAQABgBAAAAIAAADIgDABQgKACgBgJIgBABQgHAHgJAAQgGAAgEgDgAAEAAIgNAEQgEACAAAHQAAAKAKAAIAEgBIAEgDIACgCIABgBIAAgQg");
	this.shape_1.setTransform(216.975,-107.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgTAqIgFABIAAhUIACAAIADAAIACAAIACAAIAAALIAAAAQACgFAFgEQAEgDAHAAQAGAAAFADQAFAEADAGQADAHAAAHQAAAOgHAHQgGAIgLAAQgKAAgGgLIAAAAIAAAogAAMACQADgHAAgKQAAgKgDgGQgEgGgIAAQgHAAgEAHQgEAIAAAKQAAAJAEAGQAEAGAHAAQAIAAAEgHg");
	this.shape_2.setTransform(211.575,-105.8668);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTArIgFAAIAAhUIACAAIADAAIACAAIACAAIAAALIAAAAQACgFAFgEQAEgDAHAAQAGAAAFADQAFAEADAHQADAGAAAHQAAAOgHAHQgGAIgLAAQgKAAgGgLIAAAAIAAAogAgLgeQgEAIAAAKQAAAKAEAFQAEAGAHABQAIAAAEgIQADgHAAgKQAAgKgDgGQgEgGgIAAQgHAAgEAHg");
	this.shape_3.setTransform(211.575,-105.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.2,2).p("AAEAbIgIAAIAAgwQgKAAgJABIAAgGIAuAAIgBADIABADQgJgBgKAAg");
	this.shape_4.setTransform(206.2259,-107.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDAbIAAgwIgTABIAAgGIAtAAIAAADIAAADIgTgBIAAAwg");
	this.shape_5.setTransform(206.175,-107.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgLgaIAUAAQASAAAAANQAAAFgDADQgEADgFABQAHAAAEADQAEADAAAHQAAAHgFAEQgHAEgHAAIgWAAgAAHgDQAKAAAAgKQAAgJgKAAIgJAAIAAATgAAIAXQAFAAAEgDQADgDAAgFQAAgGgDgDQgDgDgGAAIgKAAIAAAXg");
	this.shape_6.setTransform(200.5997,-107.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IAUAAQASAAAAANQAAAFgDADQgEADgFABQAHAAAEADQAEADAAAHQAAAHgFAEQgHAEgHAAgAgLAXIALAAQAEAAAEgDQADgDAAgFQAAgGgDgDQgDgDgFAAIgLAAgAgLgDIAKAAQAJAAAAgKQAAgJgJAAIgKAAg");
	this.shape_7.setTransform(201.475,-107.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.2,2).p("AARAWQAAABACAAQABABADgBIAAADIgDABQgKACgBgJIgBABQgHAHgJAAQgGAAgEgDQgEgFAAgGQAAgFACgEQADgDAFgCQAGgBAEAAQAHgCABgBQADgBAAgEQAAgHgEgDQgDgEgFAAQgFAAgEADQgDACgBADIgBAAIAAgGQAJgGAIAAQARAAAAATgAAEAAQgLADgCABQgEACAAAHQAAAKAKAAQADAAABgBIAEgDIACgCIABgBIAAgQg");
	this.shape_8.setTransform(196.225,-107.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAZQgEgFAAgGQAAgFACgEQADgDAFgCIAKgBIAIgDQADgBAAgEQAAgHgEgDQgDgEgFAAQgFAAgEADQgDACgBADIgBAAIAAgGQAJgGAIAAQARAAAAATIAAAeQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAQAAgBABAAIAAADIgDABQgKACgBgJIgBABQgHAHgJAAQgGAAgEgDgAAEAAIgNAEQgEACAAAHQAAAKAKAAIAEgBIAEgDIACgCIABgBIAAgQg");
	this.shape_9.setTransform(196.225,-107.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.2,2).p("AAaACQAEAEAAAGQAAAIgHAEQgGAEgJAAQgKAAgHgDIADgJIABAAQAEAJAJAAQAFAAAEgEQADgDAAgFIgBgHQgCgDgDgBQgDgCgDAAIgIABIAAgEIAIAAQAEAAACgDQADgCAAgFQAAgEgDgEQgDgDgEAAQgHAAgDAIIgBAAIgDgIQAFgDAKAAQAIAAAFADQAGAEAAAHQAAAFgEADQgDADgFABQAGAAAFADg");
	this.shape_10.setTransform(190.2373,-107.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTAZIADgJIABAAQAEAJAKAAQAEAAAEgEQADgDAAgFIgBgHQgCgDgDgBQgDgCgCAAIgIABIAAgEIAIAAQADAAACgDQADgCAAgFQAAgEgDgEQgDgDgDAAQgIAAgDAIIgBAAIgDgIQAFgDALAAQAHAAAFADQAGAEAAAHQAAAFgEADQgDADgFABQAGAAAFADQAEAEAAAGQAAAIgHAEQgGAEgIAAQgLAAgHgDg");
	this.shape_11.setTransform(191.225,-107.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.2,2).p("AARAWQAAABACAAQABABADgBIAAADIgDABQgKACgCgJIAAABQgHAHgJAAQgGAAgEgDQgEgFAAgGQAAgFACgEQADgDAFgCQAEgBAGAAQAHgCABgBQADgBAAgEQAAgHgEgDQgDgEgFAAQgGAAgDADQgDACgBADIgBAAIAAgGQAJgGAIAAQARAAAAATIAAAagAAEAAQgLADgCABQgEACAAAHQAAAKAKAAQADAAABgBIAEgDIACgCIABgBIAAgQg");
	this.shape_12.setTransform(183.875,-107.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAZQgEgFAAgGQAAgFACgEQADgDAFgCQAEgBAGAAIAIgDQADgBAAgEQAAgHgEgDQgDgEgFAAQgGAAgDADQgDACgBADIgBAAIAAgGQAJgGAIAAQARAAAAATIAAAaIAAAEQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAQABgBAAAAIAAADIgDABQgKACgCgJIAAABQgHAHgJAAQgGAAgEgDgAAEAAIgNAEQgEACAAAHQAAAKAKAAIAEgBIAEgDIACgCIABgBIAAgQg");
	this.shape_13.setTransform(183.875,-107.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(0.2,2).p("AAEAbIgIAAIAAgwQgKAAgJABIAAgGIAuAAIgBADIABADQgJgBgKAAg");
	this.shape_14.setTransform(179.0259,-107.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDAbIAAgwIgTABIAAgGIAtAAIAAADIAAADIgTgBIAAAwg");
	this.shape_15.setTransform(178.975,-107.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgDgdQgCgCAAgCQAAgDACgCQABgBACAAQACAAACABQABABABAEQAAACgCACQgCABgCAAQgBAAgCgBgAAEAoIgIAAIAAg2IADAAIABABIACgBIACAAg");
	this.shape_16.setTransform(172.725,-108.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAoIAAg2IADAAIABABIACgBIACAAIAAA2gAgDgdQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIACAFQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgDgBg");
	this.shape_17.setTransform(172.725,-108.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(0.2,2).p("AANgbIACAAIADAAIAEAAIAAA2IgCAAIgHAAIAAgbIgUAAIgGAAIAAAbIgCAAIgGAAIAAg2IAEAAIAEAAIAAAXIANABIANgBg");
	this.shape_18.setTransform(168.6,-107.288);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAUAbIgHAAIAAgaIgUgBIgGABIAAAbIgCgBIgGAAIAAg2IAFABIADgBIAAAYIANAAIANAAIAAgYIACAAIADABIAEgBIAAA3g");
	this.shape_19.setTransform(168.6,-107.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.2,2).p("AAAgQIAAAAIgPAlIAdAAQgEgOgKgXgAgWAVIAUgwIACAAIABAAIACAAIABAAIATAwIAEAAIAAAJIAAAAIgHgDQgCAAgJAAIgQAAQgJAAgCAAQgFABgCACIgBAAIAAgJg");
	this.shape_20.setTransform(163.05,-107.2628);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAaAdIgGgDIgMAAIgPAAIgMAAQgEABgCACIgBAAIAAgIIAFAAIAUgxIABAAIAAAAIACAAIACAAIATAxIAEAAIAAAIgAgPAVIAdAAQgEgOgKgYIgBAAg");
	this.shape_21.setTransform(163.05,-107.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgMASQAEAHAIAAQAJAAAEgJQAEgIAAgIQAAgGgBgFQgDgGgDgDQgDgEgGAAQgGAAgDAEQgFADgBAGQgCAGAAAGQAAAKAEAHgAAUgUQAHAIAAAMQAAAHgDAHQgEAHgGADQgFAEgJAAQgIAAgFgDQgFgDgFgHQgDgHABgIQAAgIADgGQADgGAHgEQAGgDAHAAQAMAAAHAHg");
	this.shape_22.setTransform(157.6964,-107.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNAZQgFgDgFgHQgDgHABgIQAAgIADgGQADgGAHgEQAGgDAHAAQAMAAAHAHQAHAIAAAMQAAAHgDAHQgEAHgGADQgFAEgJAAQgIAAgFgDgAgIgUQgFADgBAGQgCAGAAAGQAAAKAEAHQAEAHAIAAQAJAAAEgJQAEgIAAgIQAAgGgBgFQgDgGgDgDQgDgEgGAAQgGAAgDAEg");
	this.shape_23.setTransform(157.6964,-107.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgIAbIgJAAIAAg1IAjAAIAAAGIgKgBIgQAAg");
	this.shape_24.setTransform(153.15,-107.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAiAAIAAAGIgJgBIgQAAIAAAwg");
	this.shape_25.setTransform(153.15,-107.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgMASQAEAHAIAAQAJAAAEgJQAEgIAAgIQAAgEgCgHQgBgGgEgDQgDgEgGAAQgGAAgEAEQgEAEgBAFQgCAGAAAGQAAALAEAGgAAUgUQAHAIAAAMQAAAFgDAJQgEAHgGADQgFAEgJAAQgIAAgFgDQgGgDgEgHQgDgHAAgIQABgIADgGQAEgHAGgDQAGgDAHAAQALAAAIAHg");
	this.shape_26.setTransform(147.825,-107.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgNAZQgGgDgEgHQgDgHAAgIQABgIADgGQAEgHAGgDQAGgDAHAAQALAAAIAHQAHAIAAAMQAAAFgDAJQgEAHgGADQgFAEgJAAQgIAAgFgDgAgJgUQgEAEgBAFQgCAGAAAGQAAALAEAGQAEAHAIAAQAJAAAEgJQAEgIAAgIQAAgEgCgHQgBgGgEgDQgDgEgGAAQgGAAgEAEg");
	this.shape_27.setTransform(147.825,-107.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgTgaIAFAAIAEAAIAAAXIAMAAQAHAAAGADQAFADAAAJQAAAEgDAEQgDAEgEABQgFADgEAAIgUAAgAgGAXIAEAAQAFAAADgDQAEgCAAgGQAAgGgDgDQgDgDgFAAIgJAAIAAAXg");
	this.shape_28.setTransform(142.675,-107.3832);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgTAcIAAg2IAFAAIAEAAIAAAWIAMAAQAHAAAGAEQAFADAAAIQAAAFgDAEQgDADgEACQgFACgEABgAgKAWIAEABIAEAAQAFAAADgDQAEgDAAgGQAAgFgDgDQgDgDgFAAIgJAAg");
	this.shape_29.setTransform(142.675,-107.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(0.2,2).p("AATgPQgCgDgBgBQgCgDgDAAQgDgCgDAAQgIAAgFAHQgFAHAAAKQAAALAGAGQAFAIAIAAQADAAAFgCIAHgGIABAAIgBAGQgHAFgJAAQgNAAgHgIQgIgIAAgMQAAgIAEgGQAEgHAGgDQAHgDAHAAQAKAAAHAEIgCAIg");
	this.shape_30.setTransform(137.6506,-107.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgOAUQgIgIAAgMQAAgIAEgGQADgHAHgDQAHgDAGAAQALAAAHAEIgCAIIgBAAIgEgEQgCgDgCAAIgGgCQgJAAgEAHQgFAHAAAKQAAALAGAGQAFAIAIAAIAIgCIAHgGIABAAIgBAGQgHAFgKAAQgMAAgHgIg");
	this.shape_31.setTransform(137.6,-107.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.2,2).p("AACgWQgDAAgDADQgEADAAAFQAAALASAAIAFAAIAAgWgAAYAbIgJAAIAAgXIgIAAIgPAXIgCAAIgIAAIARgXQgHgCgEgCQgFgEAAgIQAAgHAFgEQAFgEAFAAIAaAAg");
	this.shape_32.setTransform(129.438,-107.2645);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgMAbIgIAAIAQgXQgHgCgDgCQgFgEAAgIQAAgGAEgEQAFgFAGAAIAZAAIAAA2IgIAAIAAgXIgJAAIgOAXgAgHgTQgDAEAAAEQAAALASAAIAFAAIAAgWIgNAAQgEAAgDADg");
	this.shape_33.setTransform(129.675,-107.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgYgcIAEABIAFgBIAAAxIANAAQAEAAADAAIAFAAIAAgxIAFABIAEgBIAAAxIAGAAIgBAEIABAEIgBAAQgEgCgDAAQgDgBgIAAIgeAAg");
	this.shape_34.setTransform(124.5832,-107.2332);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAYAdQgDgDgEAAIgLAAIgeAAIAAg2IAEAAIAFAAIAAAxIANAAIAHAAIAGAAIAAgxIAEAAIAEAAIAAAxIAGAAIgBAEIABAEg");
	this.shape_35.setTransform(124.55,-107.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.2,2).p("AANgbIACAAIADAAIAEAAIAAA2IgCAAIgHAAIAAgbIgTAAIgGAAIAAAbIgCAAIgHAAIAAg2IAEAAIAFAAIAAAXIAMABIANgBg");
	this.shape_36.setTransform(118.525,-107.2841);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAUAbIgHAAIAAgaIgTgBIgGABIAAAbIgCgBIgHAAIAAg2IAEABIAFgBIAAAYIAMAAIANAAIAAgYIACAAIADABIAEgBIAAA3g");
	this.shape_37.setTransform(118.525,-107.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(0.2,2).p("AABgYQgGAAgEAGQgEAGAAAIIAcAAQAAgTgOgBgAACAdQgKAAgHgIQgIgIAAgNQAAgMAHgHQAGgIALAAQAHAAAFADQAFACADAHQADAFAAAKIglAAQgBAJAFAIQAGAHAIAAQAHAAAJgIIAAAGQgKAHgJAAg");
	this.shape_38.setTransform(113.025,-107.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgPAVQgIgIAAgNQAAgMAHgHQAGgJALAAQAHAAAFADQAFADADAHQADAFAAAKIglAAQgBAJAFAHQAGAIAIAAQAHAAAJgJIAAAHQgKAGgJAAQgKAAgHgHgAgJgSQgEAGAAAIIAcAAQAAgUgOgBQgGAAgEAHg");
	this.shape_39.setTransform(113.025,-107.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgTAaIgDAAIgBABQAQghAGgWIABAAIACABIABAAIACgBIAWA3IgCAAIgCgBIgGAAIgRgrIgQAsg");
	this.shape_40.setTransform(107.9388,-107.2137);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAYAcIgCgBIgGAAIgQgrIgSAsIgCgBIgDAAIgCABQAQghAHgWIACAAIAAABIACAAIABgBIAXA3g");
	this.shape_41.setTransform(108.05,-107.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.2,2).p("AAUgIQAHAIAAALQAAAIgDAGQgEAIgGADQgFAEgJAAQgIAAgFgEQgFgCgFgIQgDgGAAgJQABgSABgHQACgJAHgHQAFgFAKgCQAJgCAOAAIAAAHQgJgBgHAAQgHAAgGADQgFADgDAFQgDAGAAAGQAHgFALAAQAMAAAHAHgAgMAdQAEAHAIAAQAJAAAEgIQAEgIAAgJQAAgGgBgFQgDgFgDgEQgDgDgGAAQgGAAgDADQgFAEgBAFQgCAGAAAHQAAAKAEAGg");
	this.shape_42.setTransform(102.825,-108.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgNAkQgFgCgFgHQgDgHAAgJIACgZQACgJAHgGQAFgGAKgBQAJgDAOAAIAAAHIgQgBQgHAAgGADQgFADgDAFQgDAGAAAHQAHgHALAAQAMABAHAHQAHAIAAALQAAAIgDAHQgEAGgGAEQgFAEgJAAQgIAAgFgEgAgIgIQgFADgBAFQgCAGAAAHQAAAKAEAGQAEAIAIgBQAJAAAEgIQAEgIAAgJQAAgGgBgFQgDgGgDgCQgDgEgGAAQgGAAgDAEg");
	this.shape_43.setTransform(102.825,-108.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgEARQAEAHAIAAQAJAAAEgIQAEgIAAgIQAAgKgEgHQgEgHgIAAQgHAAgDADQgEAEgBAGQgCAIAAAEQAAAKAEAGgAgZAAIAAAbIgCAAIgGAAIAAg2IACAAIACAAIACAAIACAAIAAAXIAHAAQABgGAEgHQAEgFAGgDQAGgDAGAAQAMAAAGAIQAIAHAAANQAAAHgEAGQgDAHgGAEQgGAEgJAAQgKAAgHgIQgIgHAAgNg");
	this.shape_44.setTransform(96.1,-107.295);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgLAVQgHgIAAgMIgHAAIAAAbIgDgBIgGAAIAAg2IADAAIACABIACgBIACAAIAAAYIAHAAQABgGAEgHQAEgGAGgDQAFgCAHAAQALAAAHAHQAHAIAAAMQAAAHgDAHQgDAHgGADQgGAEgJAAQgKAAgIgHgAgBgUQgEAEgCAFQgCAIAAAEQABAKAEAHQAEAHAIAAQAIAAAFgJQADgHAAgJQAAgKgDgHQgEgHgJAAQgGAAgDAEg");
	this.shape_45.setTransform(96.1,-107.325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgUAaIgCAAIgBABQAPghAHgWIABAAIACABIABAAIACgBIAVA3IgBAAIgCgBIgGAAIgRgrQAAABgDAJIgNAig");
	this.shape_46.setTransform(89.3293,-107.2204);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAYAcIgCgBIgGAAIgQgrQgBABgDAJIgNAiIgEgBIgCAAIgBABQAPghAHgWIACAAIABABIABAAIACgBIAVA3g");
	this.shape_47.setTransform(89.425,-107.325);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgWgqIADABIACgBIADAAIAPAqQAGgMALgeIADABIAEgBIgjBUIgEAAIgDAAIAOgeIgWg2g");
	this.shape_48.setTransform(84.906,-105.8458);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgNAqIgEAAIAPgdIgWg2IACAAIADAAIADAAIACAAIAPApQAHgMAKgdIAEAAIADAAIgiBTg");
	this.shape_49.setTransform(84.875,-105.85);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgMASQAEAHAIAAQAJAAAEgJQAEgHAAgJQAAgGgCgFQgBgGgEgDQgDgEgGAAQgGAAgEAEQgEAEgBAFQgCAGAAAGQAAAKAEAHgAATgUQAHAHAAANQAAAHgDAHQgDAHgGADQgGAEgIAAQgHAAgHgDQgFgDgEgHQgDgGAAgJQAAgIAEgGQAEgHAGgDQAFgDAIAAQAMAAAGAHg");
	this.shape_50.setTransform(76.75,-107.325);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgNAZQgGgDgDgHQgEgGAAgJQAAgIAEgGQAEgHAGgDQAGgDAHAAQAMAAAGAHQAIAHgBANQAAAHgCAHQgDAHgHADQgFAEgJAAQgHAAgGgDgAgJgUQgEAEgBAFQgCAGAAAGQAAAKAFAHQADAHAIAAQAJAAAEgJQAEgHAAgJQAAgGgCgFQgBgGgEgDQgDgEgGAAQgFAAgFAEg");
	this.shape_51.setTransform(76.75,-107.325);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgIAbIgIAAIAAg1IAhAAIAAAGIgJgBIgQAAg");
	this.shape_52.setTransform(72.225,-107.325);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAGIgJgBIgQAAIAAAwg");
	this.shape_53.setTransform(72.225,-107.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgMASQAEAHAIAAQAJAAAEgJQAEgJAAgHQAAgGgBgFQgBgFgEgEQgEgEgGAAQgGAAgDAEQgEADgCAGQgCAGAAAGQAAAKAEAHgAAUgUQAHAIAAAMQAAAHgDAHQgDAHgHADQgFAEgJAAQgHAAgGgDQgGgDgDgHQgEgHABgIQAAgIADgGQADgHAHgDQAGgDAHAAQAMAAAHAHg");
	this.shape_54.setTransform(66.8969,-107.325);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgNAZQgGgDgDgHQgEgHABgIQAAgIADgGQADgHAHgDQAGgDAHAAQAMAAAHAHQAHAIAAAMQAAAHgDAHQgDAHgHADQgFAEgJAAQgHAAgGgDgAgIgUQgEADgCAGQgCAGAAAGQAAAKAEAHQAEAHAIAAQAJAAAEgJQAEgJAAgHQAAgGgBgFQgBgFgEgEQgEgEgGAAQgGAAgDAEg");
	this.shape_55.setTransform(66.8969,-107.325);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgDgXIADABIAFgBIAAAxIADAAIAPAAIAAgxQAAABAEAAIAEgBIAAA2Ig9AAIAAg2IAEABIAEgBIAAAxIAEAAIAPAAg");
	this.shape_56.setTransform(60.15,-107.7035);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgeAcIAAg2IAEAAIAEAAIAAAwIAEAAIAOAAIAAgwIAEAAIAEAAIAAAwIAEAAIAOAAIAAgwIAFAAIAEAAIAAA2g");
	this.shape_57.setTransform(60.15,-107.35);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(0.2,2).p("AASAWQAAABABAAQACABACgBIAAADIgDABQgKACgBgJIgBABQgHAHgIAAQgHAAgEgDQgEgFAAgGQAAgFADgEQACgDAFgCIAKgBQAHgCACgBQACgBAAgEQAAgGgDgEQgFgEgEAAQgFAAgEADQgDACgBADIgBAAIAAgGQAJgGAIAAQARAAAAATIAAAagAAFAAQgKACgDACQgFACAAAHQAAAKALAAQACAAABgBIAFgDIACgCIAAgBIAAgQg");
	this.shape_58.setTransform(53.875,-107.325);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgSAZQgEgFAAgGQAAgFADgEQACgDAFgCIAKgBIAJgDQACgBAAgEQAAgGgDgEQgFgEgEAAQgFAAgEADQgDACgBADIgBAAIAAgGQAJgGAIAAQARAAAAATIAAAaIABAEQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAEAAIAAADIgDABQgKACgBgJIgBABQgHAHgIAAQgHAAgEgDgAAFAAIgNAEQgFACAAAHQAAAKALAAIADgBIAFgDIACgCIAAgBIAAgQg");
	this.shape_59.setTransform(53.875,-107.325);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(0.2,2).p("AAHgDQAKAAAAgKQAAgJgKAAIgKAAIAAATgAgLgaIAUAAQASAAAAANQAAAFgDADQgDADgGABQAGAAAFADQAEADAAAHQAAAIgGADQgFAEgIAAIgWAAgAAIAXQAFAAAEgDQADgEAAgEQAAgGgDgDQgDgDgGAAIgLAAIAAAXg");
	this.shape_60.setTransform(47.9499,-107.325);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IAUAAQASAAAAANQAAAFgDADQgDADgGABQAGAAAFADQAEADAAAHQAAAIgGADQgFAEgIAAgAgMAXIAMAAQAEAAAEgDQADgEAAgEQAAgGgDgDQgDgDgFAAIgMAAgAgMgDIALAAQAJAAAAgKQAAgJgJAAIgLAAg");
	this.shape_61.setTransform(48.825,-107.325);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(0.2,2).p("AACgWQgDAAgDADQgEADAAAFQAAALASAAIAFAAIAAgWgAAYAbIgJAAIAAgXIgIAAIgPAXIgCAAIgIAAIARgXQgHgCgEgCQgFgEAAgIQAAgHAFgEQAFgEAFAAIAaAAg");
	this.shape_62.setTransform(40.338,-107.2645);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgMAbIgIAAIAQgXQgHgCgDgCQgFgEAAgIQAAgGAEgEQAFgFAFAAIAaAAIAAA2IgJAAIAAgXIgIAAIgOAXgAgHgTQgDADAAAFQAAALASAAIAFAAIAAgWIgNAAQgEAAgDADg");
	this.shape_63.setTransform(40.575,-107.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(0.2,2).p("AAFgQIADABIABADQAAACgCAEIgMAWIgCgBIAHgZQACgGADAAg");
	this.shape_64.setTransform(37.4227,-110.9211);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgIAQIAIgZQACgHACAAIAEABIABAEQAAACgDAEIgMAVg");
	this.shape_65.setTransform(37.475,-111);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgLgaIAUAAQASAAAAANQAAAFgDADQgEADgFABQAHAAAEADQAEADAAAHQAAAHgFAEQgHAEgHAAIgWAAgAAHgDQAKAAAAgKQAAgJgKAAIgJAAIAAATgAAIAXQAFAAAEgDQADgDAAgFQAAgGgDgDQgDgDgGAAIgKAAIAAAXg");
	this.shape_66.setTransform(33.1497,-107.325);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IAUAAQASAAAAANQAAAFgDADQgEADgFABQAHAAAEADQAEADAAAHQAAAHgFAEQgHAEgHAAgAgLAXIALAAQAEAAAEgDQADgDAAgFQAAgGgDgDQgDgDgFAAIgLAAgAgLgDIAKAAQAJAAAAgKQAAgJgJAAIgKAAg");
	this.shape_67.setTransform(34.025,-107.325);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgMASQAEAHAIAAQAJAAAEgJQAEgIAAgIQAAgGgBgFQgBgFgEgEQgEgEgGAAQgGAAgDAEQgEADgCAGQgCAGAAAGQAAAKAEAHgAAUgUQAHAIAAAMQAAAHgDAHQgDAGgHAEQgFAEgJAAQgHAAgGgDQgFgDgFgHQgDgHABgIQAAgIADgGQADgHAHgDQAGgDAHAAQAMAAAHAHg");
	this.shape_68.setTransform(28.2964,-107.325);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgNAZQgFgDgFgHQgDgHABgIQAAgIADgGQADgHAHgDQAGgDAHAAQAMAAAHAHQAHAIAAAMQAAAHgDAHQgDAGgHAEQgFAEgJAAQgHAAgGgDgAgIgUQgEADgCAGQgCAGAAAGQAAAKAEAHQAEAHAIAAQAJAAAEgJQAEgIAAgIQAAgGgBgFQgBgFgEgEQgEgEgGAAQgGAAgDAEg");
	this.shape_69.setTransform(28.2964,-107.325);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(0.2,2).p("AAMACQADgHAAgKQAAgKgDgGQgEgGgIAAQgHAAgEAHQgEAHAAALQAAAKAEAFQAEAGAHAAQAIAAAEgHgAgTAqIgFABIAAhUIACAAIADAAIACAAIACAAIAAALQACgFAFgEQAEgDAHAAQAGAAAFADQAFAEADAGQADAHAAAHQAAAOgHAHQgGAIgLAAQgKAAgGgLIAAAog");
	this.shape_70.setTransform(22.525,-105.8707);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgTArIgFAAIAAhUIACAAIADAAIACAAIACAAIAAALQACgFAFgEQAEgDAHAAQAGAAAFADQAFAEADAHQADAGAAAHQAAAOgHAHQgGAIgLAAQgKAAgGgLIAAAogAgLgeQgEAIAAAKQAAAKAEAFQAEAGAHABQAIAAAEgIQADgHAAgKQAAgKgDgGQgEgGgIAAQgHAAgEAHg");
	this.shape_71.setTransform(22.525,-105.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgMASQAEAHAIAAQAJAAAEgJQAEgHAAgJQAAgGgCgFQgBgGgEgDQgDgEgGAAQgGAAgEAEQgEAEgBAFQgCAIAAAEQAAAKAEAHgAATgUQAIAIAAAMQAAAGgEAIQgDAHgGADQgGAEgIAAQgIAAgFgDQgGgDgEgHQgDgGAAgJQAAgIAEgGQAEgHAGgDQAGgDAHAAQAMAAAGAHg");
	this.shape_72.setTransform(16.525,-107.325);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgNAZQgGgDgEgHQgDgGAAgJQAAgIAEgGQAEgHAGgDQAGgDAHAAQAMAAAGAHQAIAIAAAMQAAAGgEAIQgDAHgGADQgGAEgIAAQgIAAgFgDgAgJgUQgEAEgBAFQgCAIAAAEQAAAKAEAHQAEAHAIAAQAJAAAEgJQAEgHAAgJQAAgGgCgFQgBgGgEgDQgDgEgGAAQgGAAgEAEg");
	this.shape_73.setTransform(16.525,-107.325);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(0.2,2).p("AAAgQIAAAAIgPAlIAdAAQgEgOgKgXgAgWAVIAUgwIACAAIAAAAIACAAIACAAIATAwIAEAAIAAAFIAAAEIgBAAIgGgDQgDAAgJAAIgPAAQgJAAgDAAQgEABgCACIgBAAIAAgEIAAgFg");
	this.shape_74.setTransform(11.075,-107.2628);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAaAdIgGgDIgMAAIgPAAIgMAAIgGADIgBAAIAAgEIAAgEIAEAAIAUgxIACAAIAAAAIACAAIACAAIATAxIAEAAIAAAEIAAAEgAgPAVIAdAAQgEgOgKgYIAAAAg");
	this.shape_75.setTransform(11.075,-107.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgRglQAFgDAJAAQAMAAAHAFQAIAFAAAKQAAAHgFAFQgEAFgJABQAKABAGAFQAGAFAAAJQAAALgJAGQgJAGgOAAQgGAAgFgCQgFgBgGgDIACgHIABgBQADAEAFADQAHADAEAAQAKAAAFgFQAGgFAAgJQAAgIgGgFQgEgFgJAAIgJABIAAgCIAAgCIAIAAQAHAAAFgFQAEgFAAgGQAAgIgFgEQgEgEgHAAQgHAAgEACQgEACgDAEIAAABIgEgGQACgDAGgCg");
	this.shape_76.setTransform(5.2828,-108.55);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgQAnQgFgBgFgDIACgIIAAAAQADAEAGADQAGACAFAAQAKAAAFgEQAFgFAAgKQAAgHgFgFQgFgFgIAAIgKAAIABgBIgBgCIAJAAQAGAAAFgFQAEgFAAgHQAAgGgEgFQgFgFgHAAQgHAAgEADQgDACgDAEIgBABIgEgGQADgDAGgDQAFgCAJAAQALAAAHAFQAIAFAAAJQAAAIgEAEQgFAGgIABQAJABAGAFQAGAFAAAIQAAAMgJAGQgJAGgOAAQgFAAgGgCg");
	this.shape_77.setTransform(5.325,-108.55);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgaAbQgLgLAAgQQAAgPALgLQALgMAPAAQAQAAALAMQALALAAAPQAAAQgLALQgLAMgQAAQgPAAgLgMgAgTgTQgIAIAAALQAAAMAIAIQAJAJAKAAQAMAAAIgJQAJgIgBgMQABgLgJgIQgIgJgMAAQgKAAgJAJgAAAAGIgBAAIAAANIgJAAIAAgmIAKAAQAFAAAFADQAFAEAAAGQAAAGgHAEIAKAMIgIAEgAgBgCIABAAQAFAAAAgEQAAgEgFAAIgBAAg");
	this.shape_78.setTransform(217.4,-196.625);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E60004").s().p("AglAmIAAhLIBLAAIAABLg");
	this.shape_79.setTransform(77.175,-233.375);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E60004").s().p("AglAmIAAhLIBLAAIAABLg");
	this.shape_80.setTransform(62.075,-233.375);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E60004").s().p("AglAmIAAhLIBLAAIAABLg");
	this.shape_81.setTransform(69.625,-225.825);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E60004").s().p("AglAmIAAhLIBLAAIAABLg");
	this.shape_82.setTransform(77.175,-218.275);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E60004").s().p("AglAmIAAhLIBLAAIAABLg");
	this.shape_83.setTransform(62.075,-218.275);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("Ah6B7IAAj1ID1AAIAAD1g");
	this.shape_84.setTransform(69.625,-225.825);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAVBaIAAgJIACAAQAJgBAEgCQACgDAAgCQAAgGgFgLIgJgXIg/AAIgLAZQgEAJAAAFQAAADADACQACADANABIACAAIAAAJIg7AAIAAgJIACAAQAKgCADgDQAGgEAIgUIA+iNIAHAAIA7CPQAGAPAHAHQAFAEAKABIACAAIAAAJgAASASIgYg7IgaA7IAyAAg");
	this.shape_85.setTransform(196.625,-225.975);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("ABABaIhuiGIAABiQAAAQADADQAEAEAJAAIAJAAIAAAKIhBAAIAAgKIAIAAQAKAAAEgFQACgGAAgMIAAh1IgKgKQgDgDgIgCIgKgBIgCAAIAAgKIAyAAIBlB7IAAhaQAAgQgDgDQgEgEgJAAIgIAAIAAgKIBAAAIAAAKIgIAAQgKAAgEAFQgCAEAAAOIAACSg");
	this.shape_86.setTransform(174.425,-225.625);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgmBYIAAgJIAIAAQAKAAAEgFQACgEAAgOIAAhvQAAgNgCgDQAAgCgDgCQgGgDgFAAIgIAAIAAgJIBNAAIAAAJIgJAAQgIAAgFAFQgDAEAAAOIAABvQAAALACAFQAAACAEACQAGADAEAAIAJAAIAAAJg");
	this.shape_87.setTransform(155.1,-225.775);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAmBYIg5hQIgJAAIgFAAIAAAvQAAAQADADQADAFAJAAIAJAAIAAAJIhOAAIAAgJIAJAAQAKAAADgGQACgDAAgPIAAhuQAAgOgCgEQgFgFgIAAIgJAAIAAgJIBBAAQAaAAAOAEQAOAEAJALQAKALAAAQQAAASgLALQgKALgUAFIAiAuQAKAQAKAGQAIAFANACIADAAIAAAJgAghhHIAABDIAEAAQAYAAAKgKQAMgKAAgPQAAgPgJgJQgJgKgPAAQgIAAgJACg");
	this.shape_88.setTransform(137.975,-225.775);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgqBQQgQgKgGgSQgEgLAAggIAAhCQAAgOgEgFQgEgEgIAAIgJAAIAAgJIBPAAIAAAJIgJAAQgJAAgEAGQgDAFAAAMIAABKQAAALACAMQACAMAEAHQAEAGAJAFQAJAEALAAQARAAAMgHQANgHAFgKQAEgLAAgbIAAhFQAAgPgDgDQgDgFgJAAIgJAAIAAgJIBBAAIAAAJIgJAAQgIAAgGAIQgCAEAAANIAABEQAAAagFAPQgFAPgQAKQgRALgZAAQgcAAgPgKg");
	this.shape_89.setTransform(115.475,-225.675);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AhCBYIAAgJIAJAAQAJAAAEgGQACgEAAgNIAAhvQAAgOgDgEQgDgFgJAAIgJAAIAAgJIBAAAQAXAAANAFQAOAEAKAMQAKAMAAARQAAAWgPAOQgOANgaAAIgZgDIAAAvQgBAPADADQAEAFAIAAIAJAAIAAAJgAgMhGIAABDIAJACIAHAAQAMAAAJgJQAIgKAAgPQAAgKgDgKQgFgIgIgFQgHgEgKAAQgFAAgHACg");
	this.shape_90.setTransform(95.75,-225.775);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("Ap9CEIAAkHIT7AAIAAEHg");
	this.shape_91.setTransform(147.525,-225.825);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E60004").s().p("AiDCEIAAkHIEHAAIAAEHg");
	this.shape_92.setTransform(69.625,-225.825);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AiICEIAAkHIERAAIAAEHg");
	this.shape_93.setTransform(70.1,-225.825);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AsPCOIAAkbIYfAAIAAEbg");
	this.shape_94.setTransform(133.825,-225.85);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("Aj8GJQAngbALgeQAHgVAAg1IAAoMQAAgzgHgWQgLgfgngaIGhAAIAABuQgcgwgTgLQgegQhYAAIh9AAIAAEpIDDAAQAhAAAQgGQAPgHAYgWIAABnQgagWgKgEQgPgHgpAAIi/AAIAAEAQAABKASAXQAYAeBPAAQBxAABGgxQAXgRAWgYIAdgfIg4Ccg");
	this.shape_95.setTransform(194.375,-160.85);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AjKj1IAAIPQAAAzAIATQADAJATAXIhlAAQATgWAEgKQAHgTAAgzIAAo8QgaglgdgXQgfgZg4gaICOAAIIuKKIAAojQAAgzgHgUQgEgJgUgXIBmAAQgTAXgEAJQgHAUgBAzIAAK8g");
	this.shape_96.setTransform(122.95,-159.975);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("Ak4FDQhzh/AAi1QAAjFB8iGQB/iIDAAAQCzAAB3CCQByB/AAC2QAADEh8CGQh/CIi+AAQi0AAh3iCgAj8kyQhoBpAAC+QAACxBrB3QBqB1CZgBQCVAABehdQBphpAAi+QAAizhrh2Qhqh1iaAAQiVAAheBfg");
	this.shape_97.setTransform(43.7,-164.95);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("Aj8GJQAngaALgfQAHgVAAg0IAAoNQAAg0gHgVQgLgfgngaIGhAAIAABuQgcgxgTgKQgegQhYAAIh9AAIAAEpIDDAAQAhAAAQgHQAPgFAYgXIAABnQgbgWgJgFQgPgGgpAAIi/AAIAAEAQAABJASAYQAYAeBPAAQBxAABGgxQAXgQAWgZIAdgfIg4Ccg");
	this.shape_98.setTransform(194.525,-159.45);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AjKj0IAAIOQAAAzAHATQAEAKATAXIhlAAQATgXAEgKQAHgTAAgzIAAo8QgaglgdgXQgggZg3gaICOAAIIuKLIAAokQAAgzgHgTQgEgKgTgXIBlAAQgUAXgDAKQgHATAAAzIAAK8g");
	this.shape_99.setTransform(122.025,-158.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("Ak4FDQhzh/AAi1QAAjFB8iGQB/iIC/AAQC0AAB2CCQBzB/AAC2QAADEh8CFQh/CJi+AAQi1AAh2iCgAj8kyQhoBpAAC+QAACxBrB3QBpB1CaAAQCVAABehfQBohoAAi+QAAiyhrh3Qhph1iaAAQiVAAheBfg");
	this.shape_100.setTransform(42.775,-163.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-240,221.3,139.8);


(lib.Circle_grad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.8)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,127.3).s().p("At6N7QlxlxAAoKQAAoJFxlxQFxlxIJAAQIKAAFxFxQFxFxAAIJQAAIKlxFxQlxFxoKAAQoJAAlxlxg");
	this.shape.setTransform(126,126);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,252);


(lib.Cat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.cat_sm();
	this.instance.parent = this;
	this.instance.setTransform(-5,186);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,0,335,600);


(lib.click = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52D733").s().p("AkzBBIAAiBIJnAAIAACBg");
	this.shape.setTransform(115.55,115.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,255,0,0.6)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDgANQTGIJnAAIAAiCIpnAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Tx_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.T2_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80,63.5,1,1,0,0,0,80,33.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({y:33.5,alpha:1},19,cjs.Ease.quintOut).wait(4).to({startPosition:0},0).to({y:63.5,alpha:0},13,cjs.Ease.quadInOut).wait(21));

	// T2_1
	this.instance_1 = new lib.T2_2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(80,63.5,1,1,0,0,0,80,33.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:33.5,alpha:1},19,cjs.Ease.quintOut).wait(8).to({startPosition:0},0).to({y:63.5,alpha:0},13,cjs.Ease.quadInOut).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,97);


(lib.Pack_sm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{out:6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(6));

	// Layer_2
	this.instance = new lib.Pack_sm_s();
	this.instance.parent = this;
	this.instance.setTransform(57,10,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

	// Layer_4
	this.instance_1 = new lib.Shad_sm_2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.5,97,1,1,0,0,0,51.5,94);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},5).wait(1).to({startPosition:0},0).to({alpha:0},4).wait(1));

	// Layer_3
	this.instance_2 = new lib.Shad_sm();
	this.instance_2.parent = this;
	this.instance_2.setTransform(104.3,190.55,1,1,0,0,0,105.3,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,217.5,211.8);


(lib.Pack_big = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Pack_big_s();
	this.instance.parent = this;
	this.instance.setTransform(34,0,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.Shad_big();
	this.instance_1.parent = this;
	this.instance_1.setTransform(135.3,234.3,1,1,0,0,0,142.3,24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,0,288.5,258.5);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_main_link.on("click", function () {
			window.open(window.clickTag, '_blank')
		});
		this.btn_main_link.on("click", function () {
			window.open(window.clickTag, '_blank')
		});
	}
	this.frame_169 = function() {
		this.pack.gotoAndPlay("out");
	}
	this.frame_200 = function() {
		if(i<=1){i++; 
			this.stop();
			_this=this;
		setTimeout(function(){
			_this.gotoAndPlay(0);
			},0);
		} else {
			_this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(169).call(this.frame_169).wait(31).call(this.frame_200).wait(1));

	// Layer_2
	this.btn_main_link = new lib.click();
	this.btn_main_link.name = "btn_main_link";
	this.btn_main_link.parent = this;
	this.btn_main_link.setTransform(80.15,301.85,0.5332,2.3998,0,0,0,0.4,0.8);
	new cjs.ButtonHelper(this.btn_main_link, 0, 1, 2, false, new lib.click(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main_link).wait(201));

	// Logo
	this.instance = new lib.Logo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(79.7,248.3,0.5559,0.5559,0,0,0,110.8,69.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(201));

	// Tx_2
	this.instance_1 = new lib.Tx_2_1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(79.4,440.35,0.95,0.95,0,0,0,80,33.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(78).to({_off:false},0).wait(23).to({mode:"single",startPosition:23},0).wait(55).to({mode:"synched",loop:false},0).to({_off:true},18).wait(27));

	// Layer_12
	this.instance_2 = new lib.Symbol12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(79.8,532.8,1,1,0,0,0,36.8,9.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(1).to({y:529.75,alpha:0.0526},0).wait(1).to({y:526.95,alpha:0.1053},0).wait(1).to({y:524.35,alpha:0.1579},0).wait(1).to({y:522,alpha:0.2105},0).wait(1).to({y:519.85,alpha:0.2632},0).wait(1).to({y:517.85,alpha:0.3158},0).wait(1).to({y:516.05,alpha:0.3684},0).wait(1).to({y:514.35,alpha:0.4211},0).wait(1).to({y:512.85,alpha:0.4737},0).wait(1).to({y:511.5,alpha:0.5263},0).wait(1).to({y:510.2,alpha:0.5789},0).wait(1).to({y:509.05,alpha:0.6316},0).wait(1).to({y:508,alpha:0.6842},0).wait(1).to({y:507,alpha:0.7368},0).wait(1).to({y:506.05,alpha:0.7895},0).wait(1).to({y:505.2,alpha:0.8421},0).wait(1).to({y:504.35,alpha:0.8947},0).wait(1).to({y:503.55,alpha:0.9474},0).wait(1).to({y:502.8,alpha:1},0).wait(28).to({y:505.8,alpha:0.9474},0).wait(1).to({y:508.6,alpha:0.8947},0).wait(1).to({y:511.2,alpha:0.8421},0).wait(1).to({y:513.55,alpha:0.7895},0).wait(1).to({y:515.7,alpha:0.7368},0).wait(1).to({y:517.7,alpha:0.6842},0).wait(1).to({y:519.5,alpha:0.6316},0).wait(1).to({y:521.2,alpha:0.5789},0).wait(1).to({y:522.7,alpha:0.5263},0).wait(1).to({y:524.1,alpha:0.4737},0).wait(1).to({y:525.35,alpha:0.4211},0).wait(1).to({y:526.5,alpha:0.3684},0).wait(1).to({y:527.55,alpha:0.3158},0).wait(1).to({y:528.55,alpha:0.2632},0).wait(1).to({y:529.5,alpha:0.2105},0).wait(1).to({y:530.35,alpha:0.1579},0).wait(1).to({y:531.2,alpha:0.1053},0).wait(1).to({y:532,alpha:0.0526},0).wait(1).to({y:532.8,alpha:0},0).to({_off:true},1).wait(129));

	// Layer_4
	this.instance_3 = new lib.Symbol9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(81,504.7,0.5,0.5,0,0,0,155,19.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(1).to({regX:153,x:80,y:501.65,alpha:0.0526},0).wait(1).to({y:498.85,alpha:0.1053},0).wait(1).to({y:496.25,alpha:0.1579},0).wait(1).to({y:493.9,alpha:0.2105},0).wait(1).to({y:491.75,alpha:0.2632},0).wait(1).to({y:489.75,alpha:0.3158},0).wait(1).to({y:487.95,alpha:0.3684},0).wait(1).to({y:486.25,alpha:0.4211},0).wait(1).to({y:484.75,alpha:0.4737},0).wait(1).to({y:483.4,alpha:0.5263},0).wait(1).to({y:482.1,alpha:0.5789},0).wait(1).to({y:480.95,alpha:0.6316},0).wait(1).to({y:479.9,alpha:0.6842},0).wait(1).to({y:478.9,alpha:0.7368},0).wait(1).to({y:477.95,alpha:0.7895},0).wait(1).to({y:477.1,alpha:0.8421},0).wait(1).to({y:476.25,alpha:0.8947},0).wait(1).to({y:475.45,alpha:0.9474},0).wait(1).to({y:474.7,alpha:1},0).wait(1).to({regX:155,x:81},0).wait(31).to({regX:153,x:80,y:477.7,alpha:0.9474},0).wait(1).to({y:480.5,alpha:0.8947},0).wait(1).to({y:483.1,alpha:0.8421},0).wait(1).to({y:485.45,alpha:0.7895},0).wait(1).to({y:487.6,alpha:0.7368},0).wait(1).to({y:489.6,alpha:0.6842},0).wait(1).to({y:491.4,alpha:0.6316},0).wait(1).to({y:493.1,alpha:0.5789},0).wait(1).to({y:494.6,alpha:0.5263},0).wait(1).to({y:496,alpha:0.4737},0).wait(1).to({y:497.25,alpha:0.4211},0).wait(1).to({y:498.4,alpha:0.3684},0).wait(1).to({y:499.45,alpha:0.3158},0).wait(1).to({y:500.45,alpha:0.2632},0).wait(1).to({y:501.4,alpha:0.2105},0).wait(1).to({y:502.25,alpha:0.1579},0).wait(1).to({y:503.1,alpha:0.1053},0).wait(1).to({y:503.9,alpha:0.0526},0).wait(1).to({y:504.7,alpha:0},0).to({_off:true},1).wait(127));

	// Layer_3
	this.instance_4 = new lib.Symbol8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(80.2,476.5,0.5,0.5,0,0,0,124,19.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).wait(1).to({regX:123.5,regY:22.5,x:79.95,y:474.95,alpha:0.0526},0).wait(1).to({y:472.15,alpha:0.1053},0).wait(1).to({y:469.55,alpha:0.1579},0).wait(1).to({y:467.2,alpha:0.2105},0).wait(1).to({y:465.05,alpha:0.2632},0).wait(1).to({y:463.05,alpha:0.3158},0).wait(1).to({y:461.25,alpha:0.3684},0).wait(1).to({y:459.55,alpha:0.4211},0).wait(1).to({y:458.05,alpha:0.4737},0).wait(1).to({y:456.7,alpha:0.5263},0).wait(1).to({y:455.4,alpha:0.5789},0).wait(1).to({y:454.25,alpha:0.6316},0).wait(1).to({y:453.2,alpha:0.6842},0).wait(1).to({y:452.2,alpha:0.7368},0).wait(1).to({y:451.25,alpha:0.7895},0).wait(1).to({y:450.4,alpha:0.8421},0).wait(1).to({y:449.55,alpha:0.8947},0).wait(1).to({y:448.75,alpha:0.9474},0).wait(1).to({y:448,alpha:1},0).wait(1).to({regX:124,regY:19.5,x:80.2,y:446.5},0).wait(35).to({regX:123.5,regY:22.5,x:79.95,y:451,alpha:0.9474},0).wait(1).to({y:453.8,alpha:0.8947},0).wait(1).to({y:456.4,alpha:0.8421},0).wait(1).to({y:458.75,alpha:0.7895},0).wait(1).to({y:460.9,alpha:0.7368},0).wait(1).to({y:462.9,alpha:0.6842},0).wait(1).to({y:464.7,alpha:0.6316},0).wait(1).to({y:466.4,alpha:0.5789},0).wait(1).to({y:467.9,alpha:0.5263},0).wait(1).to({y:469.3,alpha:0.4737},0).wait(1).to({y:470.55,alpha:0.4211},0).wait(1).to({y:471.7,alpha:0.3684},0).wait(1).to({y:472.75,alpha:0.3158},0).wait(1).to({y:473.75,alpha:0.2632},0).wait(1).to({y:474.7,alpha:0.2105},0).wait(1).to({y:475.55,alpha:0.1579},0).wait(1).to({y:476.4,alpha:0.1053},0).wait(1).to({y:477.2,alpha:0.0526},0).wait(1).to({y:478,alpha:0},0).to({_off:true},1).wait(125));

	// Layer_2
	this.instance_5 = new lib.Symbol7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(81.7,448.2,0.5,0.5,0,0,0,107,19.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:103.5,regY:16,x:79.95,y:443.4,alpha:0.0526},0).wait(1).to({y:440.6,alpha:0.1053},0).wait(1).to({y:438,alpha:0.1579},0).wait(1).to({y:435.65,alpha:0.2105},0).wait(1).to({y:433.5,alpha:0.2632},0).wait(1).to({y:431.5,alpha:0.3158},0).wait(1).to({y:429.7,alpha:0.3684},0).wait(1).to({y:428,alpha:0.4211},0).wait(1).to({y:426.5,alpha:0.4737},0).wait(1).to({y:425.15,alpha:0.5263},0).wait(1).to({y:423.85,alpha:0.5789},0).wait(1).to({y:422.7,alpha:0.6316},0).wait(1).to({y:421.65,alpha:0.6842},0).wait(1).to({y:420.65,alpha:0.7368},0).wait(1).to({y:419.7,alpha:0.7895},0).wait(1).to({y:418.85,alpha:0.8421},0).wait(1).to({y:418,alpha:0.8947},0).wait(1).to({y:417.2,alpha:0.9474},0).wait(1).to({y:416.45,alpha:1},0).wait(1).to({regX:107,regY:19.5,x:81.7,y:418.2},0).wait(39).to({regX:103.5,regY:16,x:79.95,y:419.45,alpha:0.9474},0).wait(1).to({y:422.25,alpha:0.8947},0).wait(1).to({y:424.85,alpha:0.8421},0).wait(1).to({y:427.2,alpha:0.7895},0).wait(1).to({y:429.35,alpha:0.7368},0).wait(1).to({y:431.35,alpha:0.6842},0).wait(1).to({y:433.15,alpha:0.6316},0).wait(1).to({y:434.85,alpha:0.5789},0).wait(1).to({y:436.35,alpha:0.5263},0).wait(1).to({y:437.75,alpha:0.4737},0).wait(1).to({y:439,alpha:0.4211},0).wait(1).to({y:440.15,alpha:0.3684},0).wait(1).to({y:441.2,alpha:0.3158},0).wait(1).to({y:442.2,alpha:0.2632},0).wait(1).to({y:443.15,alpha:0.2105},0).wait(1).to({y:444,alpha:0.1579},0).wait(1).to({y:444.85,alpha:0.1053},0).wait(1).to({y:445.65,alpha:0.0526},0).wait(1).to({y:446.45,alpha:0},0).to({_off:true},1).wait(123));

	// Pack_sm
	this.pack = new lib.Pack_sm();
	this.pack.name = "pack";
	this.pack.parent = this;
	this.pack.setTransform(265.05,346.35,0.5333,0.5333,0,0,0,108.3,105.5);
	this.pack._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pack).wait(83).to({_off:false},0).to({x:110.4},22,cjs.Ease.quartOut).wait(64).to({regX:108.2,x:-60.25},17,cjs.Ease.quadInOut).wait(15));

	// Pack_big
	this.instance_6 = new lib.Pack_big("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(220.25,323,0.5333,0.5333,0,0,0,140.8,126.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(75).to({_off:false},0).to({regX:140.7,x:65.6},22,cjs.Ease.quartOut).wait(70).to({startPosition:0},0).to({x:-105.05},17,cjs.Ease.quadInOut).wait(17));

	// Cat
	this.instance_7 = new lib.Cat("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(80.55,300.55,0.5333,0.5333,0,0,0,165,300.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64).to({startPosition:0},0).to({regX:164.9,x:-84.8},22,cjs.Ease.quadInOut).to({_off:true},1).wait(88).to({_off:false,regX:165,x:261.85},0).to({x:80.55},25,cjs.Ease.cubicOut).wait(1));

	// back
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E84F7E","#EA739E"],[0,1],-0.1,-141.5,-0.1,-5.6).s().p("A6XUKMAAAgoTMA0uAAAMAAAAoTg");
	this.shape.setTransform(80.0087,517.9711,0.5333,1.3566);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(201));

	// Circle_grad
	this.instance_8 = new lib.Circle_grad("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(77.55,332.95,0.8695,0.8695,0,0,0,125.9,126.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(78).to({startPosition:0},0).to({regX:125.8,regY:126.2,scaleX:1.0977,scaleY:1.0977,y:333.05},18,cjs.Ease.quadInOut).wait(83).to({startPosition:0},0).to({regX:125.9,regY:126.1,scaleX:0.8695,scaleY:0.8695,y:332.95},19,cjs.Ease.quadInOut).wait(3));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EF88B0","#F7B6CC"],[0,1],-20.2,-76.3,-20.2,146.1).s().p("EgaWAg/MAAAhB8MA0uAAAMAAABB8g");
	this.shape_1.setTransform(79.9988,192.9953,0.5333,0.9476);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(201));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.8,293,449.40000000000003,400);
// library properties:
lib.properties = {
	id: 'BD10522D48EC93478BD7181F5494F048',
	width: 160,
	height: 600,
	fps: 30,
	color: "#F7BDD1",
	opacity: 1.00,
	manifest: [
		{src:"images/_1.png", id:"_1"},
		{src:"images/_2pngcopy2.png", id:"_2pngcopy2"},
		{src:"images/_3pngcopy2.png", id:"_3pngcopy2"},
		{src:"images/_4.png", id:"_4"},
		{src:"images/cat_sm.png", id:"cat_sm"},
		{src:"images/Pack_big_s.png", id:"Pack_big_s"},
		{src:"images/Pack_sm_s.png", id:"Pack_sm_s"},
		{src:"images/Sahd_sm_2.png", id:"Sahd_sm_2"},
		{src:"images/shadow.png", id:"shadow"},
		{src:"images/shadow_BIG.png", id:"shadow_BIG"},
		{src:"images/Tx_2.png", id:"Tx_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BD10522D48EC93478BD7181F5494F048'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
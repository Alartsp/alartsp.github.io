(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._5 = function() {
	this.initialize(img._5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,466,43);


(lib._6 = function() {
	this.initialize(img._6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,424,30);


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


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._6();
	this.instance.parent = this;
	this.instance.setTransform(-7,0,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-7,0,279.9,19.8), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(-32,-1,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-32,-1,298.3,27.5), null);


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


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.2,2).p("AARAWQAAABACAAQABABADgBIAAADIgDABQgKACgBgJIgBABQgHAHgJAAQgGAAgEgDQgEgFAAgGQAAgFACgEQADgDAFgCIAKgBQAIgCABgBQACgBAAgEQAAgHgEgDQgDgEgFAAQgFAAgEADQgDACgBADIgBAAIAAgGQAJgGAIAAQARAAAAATgAAEAAQgLADgCABQgEACAAAHQAAAKAKAAQADAAABgBQADgCABgBIACgCIABgBIAAgQg");
	this.shape.setTransform(163.8375,137.3875,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAZQgEgFAAgGQAAgFACgEQADgDAFgCIAKgBIAJgDQACgBAAgEQAAgHgEgDQgDgEgFAAQgFAAgEADQgDACgBADIgBAAIAAgGQAJgGAIAAQARAAAAATIAAAeQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAQABgBAAAAIAAADIgDABQgKACgBgJIgBABQgHAHgJAAQgGAAgEgDgAAEAAIgNAEQgEACAAAHQAAAKAKAAIAEgBIAEgDIACgCIABgBIAAgQg");
	this.shape_1.setTransform(163.8375,137.3875,0.5,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgTAqIgFABIAAhUIACAAIADAAIACAAIACAAIAAALIAAAAQACgFAFgEQAEgDAHAAQAGAAAFADQAFAEADAGQADAHAAAHQAAAOgHAHQgGAIgLAAQgKAAgGgLIAAAAIAAAogAAMACQADgHAAgKQAAgKgDgGQgEgGgIAAQgHAAgEAHQgEAIAAAKQAAAJAEAGQAEAGAHAAQAIAAAEgHg");
	this.shape_2.setTransform(161.1375,138.1166,0.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTArIgFAAIAAhUIACAAIADAAIACAAIACAAIAAALIAAAAQACgFAFgEQAEgDAHAAQAGAAAFADQAFAEADAHQADAGAAAHQAAAOgHAHQgGAIgLAAQgKAAgGgLIAAAAIAAAogAgLgeQgEAIAAAKQAAAKAEAFQAEAGAHABQAIAAAEgIQADgHAAgKQAAgKgDgGQgEgGgIAAQgHAAgEAHg");
	this.shape_3.setTransform(161.1375,138.1,0.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.2,2).p("AAEAbIgIAAIAAgwQgKAAgJABIAAgGIAuAAIgBADIABADQgJgBgKAAg");
	this.shape_4.setTransform(158.463,137.3875,0.5,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDAbIAAgwIgTABIAAgGIAtAAIAAADIAAADIgTgBIAAAwg");
	this.shape_5.setTransform(158.4375,137.3875,0.5,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgLgaIAUAAQASAAAAANQAAAFgDADQgEADgFABQAHAAAEADQAEADAAAHQAAAHgFAEQgHAEgHAAIgWAAgAAHgDQAKAAAAgKQAAgJgKAAIgJAAIAAATgAAIAXQAFAAAEgDQADgDAAgFQAAgGgDgDQgDgDgGAAIgKAAIAAAXg");
	this.shape_6.setTransform(155.6499,137.3875,0.5,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IAUAAQASAAAAANQAAAFgDADQgEADgFABQAHAAAEADQAEADAAAHQAAAHgFAEQgHAEgHAAgAgLAXIALAAQAEAAAEgDQADgDAAgFQAAgGgDgDQgDgDgFAAIgLAAgAgLgDIAKAAQAJAAAAgKQAAgJgJAAIgKAAg");
	this.shape_7.setTransform(156.0875,137.3875,0.5,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.2,2).p("AARAWQAAABACAAQABABADgBIAAADIgDABQgKACgBgJIgBABQgHAHgJAAQgGAAgEgDQgEgFAAgGQAAgFACgEQADgDAFgCQAGgBAEAAQAHgCABgBQADgBAAgEQAAgHgEgDQgDgEgFAAQgFAAgEADQgDACgBADIgBAAIAAgGQAJgGAIAAQARAAAAATgAAEAAQgLADgCABQgEACAAAHQAAAKAKAAQADAAABgBIAEgDIACgCIABgBIAAgQg");
	this.shape_8.setTransform(153.4625,137.3875,0.5,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAZQgEgFAAgGQAAgFACgEQADgDAFgCIAKgBIAIgDQADgBAAgEQAAgHgEgDQgDgEgFAAQgFAAgEADQgDACgBADIgBAAIAAgGQAJgGAIAAQARAAAAATIAAAeQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAQAAgBABAAIAAADIgDABQgKACgBgJIgBABQgHAHgJAAQgGAAgEgDgAAEAAIgNAEQgEACAAAHQAAAKAKAAIAEgBIAEgDIACgCIABgBIAAgQg");
	this.shape_9.setTransform(153.4625,137.3875,0.5,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.2,2).p("AAaACQAEAEAAAGQAAAIgHAEQgGAEgJAAQgKAAgHgDIADgJIABAAQAEAJAJAAQAFAAAEgEQADgDAAgFIgBgHQgCgDgDgBQgDgCgDAAIgIABIAAgEIAIAAQAEAAACgDQADgCAAgFQAAgEgDgEQgDgDgEAAQgHAAgDAIIgBAAIgDgIQAFgDAKAAQAIAAAFADQAGAEAAAHQAAAFgEADQgDADgFABQAGAAAFADg");
	this.shape_10.setTransform(150.4686,137.3875,0.5,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTAZIADgJIABAAQAEAJAKAAQAEAAAEgEQADgDAAgFIgBgHQgCgDgDgBQgDgCgCAAIgIABIAAgEIAIAAQADAAACgDQADgCAAgFQAAgEgDgEQgDgDgDAAQgIAAgDAIIgBAAIgDgIQAFgDALAAQAHAAAFADQAGAEAAAHQAAAFgEADQgDADgFABQAGAAAFADQAEAEAAAGQAAAIgHAEQgGAEgIAAQgLAAgHgDg");
	this.shape_11.setTransform(150.9625,137.3875,0.5,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.2,2).p("AARAWQAAABACAAQABABADgBIAAADIgDABQgKACgCgJIAAABQgHAHgJAAQgGAAgEgDQgEgFAAgGQAAgFACgEQADgDAFgCQAEgBAGAAQAHgCABgBQADgBAAgEQAAgHgEgDQgDgEgFAAQgGAAgDADQgDACgBADIgBAAIAAgGQAJgGAIAAQARAAAAATIAAAagAAEAAQgLADgCABQgEACAAAHQAAAKAKAAQADAAABgBIAEgDIACgCIABgBIAAgQg");
	this.shape_12.setTransform(147.2875,137.3875,0.5,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAZQgEgFAAgGQAAgFACgEQADgDAFgCQAEgBAGAAIAIgDQADgBAAgEQAAgHgEgDQgDgEgFAAQgGAAgDADQgDACgBADIgBAAIAAgGQAJgGAIAAQARAAAAATIAAAaIAAAEQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAQABgBAAAAIAAADIgDABQgKACgCgJIAAABQgHAHgJAAQgGAAgEgDgAAEAAIgNAEQgEACAAAHQAAAKAKAAIAEgBIAEgDIACgCIABgBIAAgQg");
	this.shape_13.setTransform(147.2875,137.3875,0.5,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(0.2,2).p("AAEAbIgIAAIAAgwQgKAAgJABIAAgGIAuAAIgBADIABADQgJgBgKAAg");
	this.shape_14.setTransform(144.863,137.3875,0.5,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDAbIAAgwIgTABIAAgGIAtAAIAAADIAAADIgTgBIAAAwg");
	this.shape_15.setTransform(144.8375,137.3875,0.5,0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgDgdQgCgCAAgCQAAgDACgCQABgBACAAQACAAACABQABABABAEQAAACgCACQgCABgCAAQgBAAgCgBgAAEAoIgIAAIAAg2IADAAIABABIACgBIACAAg");
	this.shape_16.setTransform(141.7125,136.7375,0.5,0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAoIAAg2IADAAIABABIACgBIACAAIAAA2gAgDgdQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIACAFQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgDgBg");
	this.shape_17.setTransform(141.7125,136.7375,0.5,0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(0.2,2).p("AANgbIACAAIADAAIAEAAIAAA2IgCAAIgHAAIAAgbIgUAAIgGAAIAAAbIgCAAIgGAAIAAg2IAEAAIAEAAIAAAXIANABIANgBg");
	this.shape_18.setTransform(139.65,137.406,0.5,0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAUAbIgHAAIAAgaIgUgBIgGABIAAAbIgCgBIgGAAIAAg2IAFABIADgBIAAAYIANAAIANAAIAAgYIACAAIADABIAEgBIAAA3g");
	this.shape_19.setTransform(139.65,137.3875,0.5,0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.2,2).p("AAAgQIAAAAIgPAlIAdAAQgEgOgKgXgAgWAVIAUgwIACAAIABAAIACAAIABAAIATAwIAEAAIAAAJIAAAAIgHgDQgCAAgJAAIgQAAQgJAAgCAAQgFABgCACIgBAAIAAgJg");
	this.shape_20.setTransform(136.875,137.4186,0.5,0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAaAdIgGgDIgMAAIgPAAIgMAAQgEABgCACIgBAAIAAgIIAFAAIAUgxIABAAIAAAAIACAAIACAAIATAxIAEAAIAAAIgAgPAVIAdAAQgEgOgKgYIgBAAg");
	this.shape_21.setTransform(136.875,137.45,0.5,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgMASQAEAHAIAAQAJAAAEgJQAEgIAAgIQAAgGgBgFQgDgGgDgDQgDgEgGAAQgGAAgDAEQgFADgBAGQgCAGAAAGQAAAKAEAHgAAUgUQAHAIAAAMQAAAHgDAHQgEAHgGADQgFAEgJAAQgIAAgFgDQgFgDgFgHQgDgHABgIQAAgIADgGQADgGAHgEQAGgDAHAAQAMAAAHAHg");
	this.shape_22.setTransform(134.1982,137.3875,0.5,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNAZQgFgDgFgHQgDgHABgIQAAgIADgGQADgGAHgEQAGgDAHAAQAMAAAHAHQAHAIAAAMQAAAHgDAHQgEAHgGADQgFAEgJAAQgIAAgFgDgAgIgUQgFADgBAGQgCAGAAAGQAAAKAEAHQAEAHAIAAQAJAAAEgJQAEgIAAgIQAAgGgBgFQgDgGgDgDQgDgEgGAAQgGAAgDAEg");
	this.shape_23.setTransform(134.1982,137.3875,0.5,0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgIAbIgJAAIAAg1IAjAAIAAAGIgKgBIgQAAg");
	this.shape_24.setTransform(131.925,137.3875,0.5,0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAiAAIAAAGIgJgBIgQAAIAAAwg");
	this.shape_25.setTransform(131.925,137.3875,0.5,0.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgMASQAEAHAIAAQAJAAAEgJQAEgIAAgIQAAgEgCgHQgBgGgEgDQgDgEgGAAQgGAAgEAEQgEAEgBAFQgCAGAAAGQAAALAEAGgAAUgUQAHAIAAAMQAAAFgDAJQgEAHgGADQgFAEgJAAQgIAAgFgDQgGgDgEgHQgDgHAAgIQABgIADgGQAEgHAGgDQAGgDAHAAQALAAAIAHg");
	this.shape_26.setTransform(129.2625,137.3875,0.5,0.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgNAZQgGgDgEgHQgDgHAAgIQABgIADgGQAEgHAGgDQAGgDAHAAQALAAAIAHQAHAIAAAMQAAAFgDAJQgEAHgGADQgFAEgJAAQgIAAgFgDgAgJgUQgEAEgBAFQgCAGAAAGQAAALAEAGQAEAHAIAAQAJAAAEgJQAEgIAAgIQAAgEgCgHQgBgGgEgDQgDgEgGAAQgGAAgEAEg");
	this.shape_27.setTransform(129.2625,137.3875,0.5,0.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgTgaIAFAAIAEAAIAAAXIAMAAQAHAAAGADQAFADAAAJQAAAEgDAEQgDAEgEABQgFADgEAAIgUAAgAgGAXIAEAAQAFAAADgDQAEgCAAgGQAAgGgDgDQgDgDgFAAIgJAAIAAAXg");
	this.shape_28.setTransform(126.6875,137.3584,0.5,0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgTAcIAAg2IAFAAIAEAAIAAAWIAMAAQAHAAAGAEQAFADAAAIQAAAFgDAEQgDADgEACQgFACgEABgAgKAWIAEABIAEAAQAFAAADgDQAEgDAAgGQAAgFgDgDQgDgDgFAAIgJAAg");
	this.shape_29.setTransform(126.6875,137.375,0.5,0.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(0.2,2).p("AATgPQgCgDgBgBQgCgDgDAAQgDgCgDAAQgIAAgFAHQgFAHAAAKQAAALAGAGQAFAIAIAAQADAAAFgCIAHgGIABAAIgBAGQgHAFgJAAQgNAAgHgIQgIgIAAgMQAAgIAEgGQAEgHAGgDQAHgDAHAAQAKAAAHAEIgCAIg");
	this.shape_30.setTransform(124.1753,137.3875,0.5,0.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgOAUQgIgIAAgMQAAgIAEgGQADgHAHgDQAHgDAGAAQALAAAHAEIgCAIIgBAAIgEgEQgCgDgCAAIgGgCQgJAAgEAHQgFAHAAAKQAAALAGAGQAFAIAIAAIAIgCIAHgGIABAAIgBAGQgHAFgKAAQgMAAgHgIg");
	this.shape_31.setTransform(124.15,137.3875,0.5,0.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.2,2).p("AACgWQgDAAgDADQgEADAAAFQAAALASAAIAFAAIAAgWgAAYAbIgJAAIAAgXIgIAAIgPAXIgCAAIgIAAIARgXQgHgCgEgCQgFgEAAgIQAAgHAFgEQAFgEAFAAIAaAAg");
	this.shape_32.setTransform(120.069,137.4177,0.5,0.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgMAbIgIAAIAQgXQgHgCgDgCQgFgEAAgIQAAgGAEgEQAFgFAGAAIAZAAIAAA2IgIAAIAAgXIgJAAIgOAXgAgHgTQgDAEAAAEQAAALASAAIAFAAIAAgWIgNAAQgEAAgDADg");
	this.shape_33.setTransform(120.1875,137.4,0.5,0.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgYgcIAEABIAFgBIAAAxIANAAQAEAAADAAIAFAAIAAgxIAFABIAEgBIAAAxIAGAAIgBAEIABAEIgBAAQgEgCgDAAQgDgBgIAAIgeAAg");
	this.shape_34.setTransform(117.6416,137.4334,0.5,0.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAYAdQgDgDgEAAIgLAAIgeAAIAAg2IAEAAIAFAAIAAAxIANAAIAHAAIAGAAIAAgxIAEAAIAEAAIAAAxIAGAAIgBAEIABAEg");
	this.shape_35.setTransform(117.625,137.45,0.5,0.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.2,2).p("AANgbIACAAIADAAIAEAAIAAA2IgCAAIgHAAIAAgbIgTAAIgGAAIAAAbIgCAAIgHAAIAAg2IAEAAIAFAAIAAAXIAMABIANgBg");
	this.shape_36.setTransform(114.6125,137.4079,0.5,0.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAUAbIgHAAIAAgaIgTgBIgGABIAAAbIgCgBIgHAAIAAg2IAEABIAFgBIAAAYIAMAAIANAAIAAgYIACAAIADABIAEgBIAAA3g");
	this.shape_37.setTransform(114.6125,137.3875,0.5,0.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(0.2,2).p("AABgYQgGAAgEAGQgEAGAAAIIAcAAQAAgTgOgBgAACAdQgKAAgHgIQgIgIAAgNQAAgMAHgHQAGgIALAAQAHAAAFADQAFACADAHQADAFAAAKIglAAQgBAJAFAIQAGAHAIAAQAHAAAJgIIAAAGQgKAHgJAAg");
	this.shape_38.setTransform(111.8625,137.4,0.5,0.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgPAVQgIgIAAgNQAAgMAHgHQAGgJALAAQAHAAAFADQAFADADAHQADAFAAAKIglAAQgBAJAFAHQAGAIAIAAQAHAAAJgJIAAAHQgKAGgJAAQgKAAgHgHgAgJgSQgEAGAAAIIAcAAQAAgUgOgBQgGAAgEAHg");
	this.shape_39.setTransform(111.8625,137.4,0.5,0.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgTAaIgDAAIgBABQAQghAGgWIABAAIACABIABAAIACgBIAWA3IgCAAIgCgBIgGAAIgRgrIgQAsg");
	this.shape_40.setTransform(109.3194,137.4432,0.5,0.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAYAcIgCgBIgGAAIgQgrIgSAsIgCgBIgDAAIgCABQAQghAHgWIACAAIAAABIACAAIABgBIAXA3g");
	this.shape_41.setTransform(109.375,137.3875,0.5,0.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.2,2).p("AAUgIQAHAIAAALQAAAIgDAGQgEAIgGADQgFAEgJAAQgIAAgFgEQgFgCgFgIQgDgGAAgJQABgSABgHQACgJAHgHQAFgFAKgCQAJgCAOAAIAAAHQgJgBgHAAQgHAAgGADQgFADgDAFQgDAGAAAGQAHgFALAAQAMAAAHAHgAgMAdQAEAHAIAAQAJAAAEgIQAEgIAAgJQAAgGgBgFQgDgFgDgEQgDgDgGAAQgGAAgDADQgFAEgBAFQgCAGAAAHQAAAKAEAGg");
	this.shape_42.setTransform(106.7625,136.8,0.5,0.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgNAkQgFgCgFgHQgDgHAAgJIACgZQACgJAHgGQAFgGAKgBQAJgDAOAAIAAAHIgQgBQgHAAgGADQgFADgDAFQgDAGAAAHQAHgHALAAQAMABAHAHQAHAIAAALQAAAIgDAHQgEAGgGAEQgFAEgJAAQgIAAgFgEgAgIgIQgFADgBAFQgCAGAAAHQAAAKAEAGQAEAIAIgBQAJAAAEgIQAEgIAAgJQAAgGgBgFQgDgGgDgCQgDgEgGAAQgGAAgDAEg");
	this.shape_43.setTransform(106.7625,136.8,0.5,0.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgEARQAEAHAIAAQAJAAAEgIQAEgIAAgIQAAgKgEgHQgEgHgIAAQgHAAgDADQgEAEgBAGQgCAIAAAEQAAAKAEAGgAgZAAIAAAbIgCAAIgGAAIAAg2IACAAIACAAIACAAIACAAIAAAXIAHAAQABgGAEgHQAEgFAGgDQAGgDAGAAQAMAAAGAIQAIAHAAANQAAAHgEAGQgDAHgGAEQgGAEgJAAQgKAAgHgIQgIgHAAgNg");
	this.shape_44.setTransform(103.4,137.4025,0.5,0.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgLAVQgHgIAAgMIgHAAIAAAbIgDgBIgGAAIAAg2IADAAIACABIACgBIACAAIAAAYIAHAAQABgGAEgHQAEgGAGgDQAFgCAHAAQALAAAHAHQAHAIAAAMQAAAHgDAHQgDAHgGADQgGAEgJAAQgKAAgIgHgAgBgUQgEAEgCAFQgCAIAAAEQABAKAEAHQAEAHAIAAQAIAAAFgJQADgHAAgJQAAgKgDgHQgEgHgJAAQgGAAgDAEg");
	this.shape_45.setTransform(103.4,137.3875,0.5,0.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgUAaIgCAAIgBABQAPghAHgWIABAAIACABIABAAIACgBIAVA3IgBAAIgCgBIgGAAIgRgrQAAABgDAJIgNAig");
	this.shape_46.setTransform(100.0146,137.4398,0.5,0.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAYAcIgCgBIgGAAIgQgrQgBABgDAJIgNAiIgEgBIgCAAIgBABQAPghAHgWIACAAIABABIABAAIACgBIAVA3g");
	this.shape_47.setTransform(100.0625,137.3875,0.5,0.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgWgqIADABIACgBIADAAIAPAqQAGgMALgeIADABIAEgBIgjBUIgEAAIgDAAIAOgeIgWg2g");
	this.shape_48.setTransform(97.803,138.1271,0.5,0.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgNAqIgEAAIAPgdIgWg2IACAAIADAAIADAAIACAAIAPApQAHgMAKgdIAEAAIADAAIgiBTg");
	this.shape_49.setTransform(97.7875,138.125,0.5,0.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgMASQAEAHAIAAQAJAAAEgJQAEgHAAgJQAAgGgCgFQgBgGgEgDQgDgEgGAAQgGAAgEAEQgEAEgBAFQgCAGAAAGQAAAKAEAHgAATgUQAHAHAAANQAAAHgDAHQgDAHgGADQgGAEgIAAQgHAAgHgDQgFgDgEgHQgDgGAAgJQAAgIAEgGQAEgHAGgDQAFgDAIAAQAMAAAGAHg");
	this.shape_50.setTransform(93.725,137.3875,0.5,0.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgNAZQgGgDgDgHQgEgGAAgJQAAgIAEgGQAEgHAGgDQAGgDAHAAQAMAAAGAHQAIAHgBANQAAAHgCAHQgDAHgHADQgFAEgJAAQgHAAgGgDgAgJgUQgEAEgBAFQgCAGAAAGQAAAKAFAHQADAHAIAAQAJAAAEgJQAEgHAAgJQAAgGgCgFQgBgGgEgDQgDgEgGAAQgFAAgFAEg");
	this.shape_51.setTransform(93.725,137.3875,0.5,0.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgIAbIgIAAIAAg1IAhAAIAAAGIgJgBIgQAAg");
	this.shape_52.setTransform(91.4625,137.3875,0.5,0.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAhAAIAAAGIgJgBIgQAAIAAAwg");
	this.shape_53.setTransform(91.4625,137.3875,0.5,0.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgMASQAEAHAIAAQAJAAAEgJQAEgJAAgHQAAgGgBgFQgBgFgEgEQgEgEgGAAQgGAAgDAEQgEADgCAGQgCAGAAAGQAAAKAEAHgAAUgUQAHAIAAAMQAAAHgDAHQgDAHgHADQgFAEgJAAQgHAAgGgDQgGgDgDgHQgEgHABgIQAAgIADgGQADgHAHgDQAGgDAHAAQAMAAAHAHg");
	this.shape_54.setTransform(88.7984,137.3875,0.5,0.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgNAZQgGgDgDgHQgEgHABgIQAAgIADgGQADgHAHgDQAGgDAHAAQAMAAAHAHQAHAIAAAMQAAAHgDAHQgDAHgHADQgFAEgJAAQgHAAgGgDgAgIgUQgEADgCAGQgCAGAAAGQAAAKAEAHQAEAHAIAAQAJAAAEgJQAEgJAAgHQAAgGgBgFQgBgFgEgEQgEgEgGAAQgGAAgDAEg");
	this.shape_55.setTransform(88.7984,137.3875,0.5,0.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgDgXIADABIAFgBIAAAxIADAAIAPAAIAAgxQAAABAEAAIAEgBIAAA2Ig9AAIAAg2IAEABIAEgBIAAAxIAEAAIAPAAg");
	this.shape_56.setTransform(85.425,137.1982,0.5,0.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgeAcIAAg2IAEAAIAEAAIAAAwIAEAAIAOAAIAAgwIAEAAIAEAAIAAAwIAEAAIAOAAIAAgwIAFAAIAEAAIAAA2g");
	this.shape_57.setTransform(85.425,137.375,0.5,0.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(0.2,2).p("AASAWQAAABABAAQACABACgBIAAADIgDABQgKACgBgJIgBABQgHAHgIAAQgHAAgEgDQgEgFAAgGQAAgFADgEQACgDAFgCIAKgBQAHgCACgBQACgBAAgEQAAgGgDgEQgFgEgEAAQgFAAgEADQgDACgBADIgBAAIAAgGQAJgGAIAAQARAAAAATIAAAagAAFAAQgKACgDACQgFACAAAHQAAAKALAAQACAAABgBIAFgDIACgCIAAgBIAAgQg");
	this.shape_58.setTransform(82.2875,137.3875,0.5,0.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgSAZQgEgFAAgGQAAgFADgEQACgDAFgCIAKgBIAJgDQACgBAAgEQAAgGgDgEQgFgEgEAAQgFAAgEADQgDACgBADIgBAAIAAgGQAJgGAIAAQARAAAAATIAAAaIABAEQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAEAAIAAADIgDABQgKACgBgJIgBABQgHAHgIAAQgHAAgEgDgAAFAAIgNAEQgFACAAAHQAAAKALAAIADgBIAFgDIACgCIAAgBIAAgQg");
	this.shape_59.setTransform(82.2875,137.3875,0.5,0.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(0.2,2).p("AAHgDQAKAAAAgKQAAgJgKAAIgKAAIAAATgAgLgaIAUAAQASAAAAANQAAAFgDADQgDADgGABQAGAAAFADQAEADAAAHQAAAIgGADQgFAEgIAAIgWAAgAAIAXQAFAAAEgDQADgEAAgEQAAgGgDgDQgDgDgGAAIgLAAIAAAXg");
	this.shape_60.setTransform(79.3249,137.3875,0.5,0.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IAUAAQASAAAAANQAAAFgDADQgDADgGABQAGAAAFADQAEADAAAHQAAAIgGADQgFAEgIAAgAgMAXIAMAAQAEAAAEgDQADgEAAgEQAAgGgDgDQgDgDgFAAIgMAAgAgMgDIALAAQAJAAAAgKQAAgJgJAAIgLAAg");
	this.shape_61.setTransform(79.7625,137.3875,0.5,0.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(0.2,2).p("AACgWQgDAAgDADQgEADAAAFQAAALASAAIAFAAIAAgWgAAYAbIgJAAIAAgXIgIAAIgPAXIgCAAIgIAAIARgXQgHgCgEgCQgFgEAAgIQAAgHAFgEQAFgEAFAAIAaAAg");
	this.shape_62.setTransform(75.519,137.4177,0.5,0.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgMAbIgIAAIAQgXQgHgCgDgCQgFgEAAgIQAAgGAEgEQAFgFAFAAIAaAAIAAA2IgJAAIAAgXIgIAAIgOAXgAgHgTQgDADAAAFQAAALASAAIAFAAIAAgWIgNAAQgEAAgDADg");
	this.shape_63.setTransform(75.6375,137.4,0.5,0.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(0.2,2).p("AAFgQIADABIABADQAAACgCAEIgMAWIgCgBIAHgZQACgGADAAg");
	this.shape_64.setTransform(74.0614,135.5894,0.5,0.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgIAQIAIgZQACgHACAAIAEABIABAEQAAACgDAEIgMAVg");
	this.shape_65.setTransform(74.0875,135.55,0.5,0.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgLgaIAUAAQASAAAAANQAAAFgDADQgEADgFABQAHAAAEADQAEADAAAHQAAAHgFAEQgHAEgHAAIgWAAgAAHgDQAKAAAAgKQAAgJgKAAIgJAAIAAATgAAIAXQAFAAAEgDQADgDAAgFQAAgGgDgDQgDgDgGAAIgKAAIAAAXg");
	this.shape_66.setTransform(71.9249,137.3875,0.5,0.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IAUAAQASAAAAANQAAAFgDADQgEADgFABQAHAAAEADQAEADAAAHQAAAHgFAEQgHAEgHAAgAgLAXIALAAQAEAAAEgDQADgDAAgFQAAgGgDgDQgDgDgFAAIgLAAgAgLgDIAKAAQAJAAAAgKQAAgJgJAAIgKAAg");
	this.shape_67.setTransform(72.3625,137.3875,0.5,0.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgMASQAEAHAIAAQAJAAAEgJQAEgIAAgIQAAgGgBgFQgBgFgEgEQgEgEgGAAQgGAAgDAEQgEADgCAGQgCAGAAAGQAAAKAEAHgAAUgUQAHAIAAAMQAAAHgDAHQgDAGgHAEQgFAEgJAAQgHAAgGgDQgFgDgFgHQgDgHABgIQAAgIADgGQADgHAHgDQAGgDAHAAQAMAAAHAHg");
	this.shape_68.setTransform(69.4982,137.3875,0.5,0.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgNAZQgFgDgFgHQgDgHABgIQAAgIADgGQADgHAHgDQAGgDAHAAQAMAAAHAHQAHAIAAAMQAAAHgDAHQgDAGgHAEQgFAEgJAAQgHAAgGgDgAgIgUQgEADgCAGQgCAGAAAGQAAAKAEAHQAEAHAIAAQAJAAAEgJQAEgIAAgIQAAgGgBgFQgBgFgEgEQgEgEgGAAQgGAAgDAEg");
	this.shape_69.setTransform(69.4982,137.3875,0.5,0.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(0.2,2).p("AAMACQADgHAAgKQAAgKgDgGQgEgGgIAAQgHAAgEAHQgEAHAAALQAAAKAEAFQAEAGAHAAQAIAAAEgHgAgTAqIgFABIAAhUIACAAIADAAIACAAIACAAIAAALQACgFAFgEQAEgDAHAAQAGAAAFADQAFAEADAGQADAHAAAHQAAAOgHAHQgGAIgLAAQgKAAgGgLIAAAog");
	this.shape_70.setTransform(66.6125,138.1147,0.5,0.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgTArIgFAAIAAhUIACAAIADAAIACAAIACAAIAAALQACgFAFgEQAEgDAHAAQAGAAAFADQAFAEADAHQADAGAAAHQAAAOgHAHQgGAIgLAAQgKAAgGgLIAAAogAgLgeQgEAIAAAKQAAAKAEAFQAEAGAHABQAIAAAEgIQADgHAAgKQAAgKgDgGQgEgGgIAAQgHAAgEAHg");
	this.shape_71.setTransform(66.6125,138.1,0.5,0.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgMASQAEAHAIAAQAJAAAEgJQAEgHAAgJQAAgGgCgFQgBgGgEgDQgDgEgGAAQgGAAgEAEQgEAEgBAFQgCAIAAAEQAAAKAEAHgAATgUQAIAIAAAMQAAAGgEAIQgDAHgGADQgGAEgIAAQgIAAgFgDQgGgDgEgHQgDgGAAgJQAAgIAEgGQAEgHAGgDQAGgDAHAAQAMAAAGAHg");
	this.shape_72.setTransform(63.6125,137.3875,0.5,0.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgNAZQgGgDgEgHQgDgGAAgJQAAgIAEgGQAEgHAGgDQAGgDAHAAQAMAAAGAHQAIAIAAAMQAAAGgEAIQgDAHgGADQgGAEgIAAQgIAAgFgDgAgJgUQgEAEgBAFQgCAIAAAEQAAAKAEAHQAEAHAIAAQAJAAAEgJQAEgHAAgJQAAgGgCgFQgBgGgEgDQgDgEgGAAQgGAAgEAEg");
	this.shape_73.setTransform(63.6125,137.3875,0.5,0.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(0.2,2).p("AAAgQIAAAAIgPAlIAdAAQgEgOgKgXgAgWAVIAUgwIACAAIAAAAIACAAIACAAIATAwIAEAAIAAAFIAAAEIgBAAIgGgDQgDAAgJAAIgPAAQgJAAgDAAQgEABgCACIgBAAIAAgEIAAgFg");
	this.shape_74.setTransform(60.8875,137.4186,0.5,0.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAaAdIgGgDIgMAAIgPAAIgMAAIgGADIgBAAIAAgEIAAgEIAEAAIAUgxIACAAIAAAAIACAAIACAAIATAxIAEAAIAAAEIAAAEgAgPAVIAdAAQgEgOgKgYIAAAAg");
	this.shape_75.setTransform(60.8875,137.45,0.5,0.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(0.2,2).p("AgRglQAFgDAJAAQAMAAAHAFQAIAFAAAKQAAAHgFAFQgEAFgJABQAKABAGAFQAGAFAAAJQAAALgJAGQgJAGgOAAQgGAAgFgCQgFgBgGgDIACgHIABgBQADAEAFADQAHADAEAAQAKAAAFgFQAGgFAAgJQAAgIgGgFQgEgFgJAAIgJABIAAgCIAAgCIAIAAQAHAAAFgFQAEgFAAgGQAAgIgFgEQgEgEgHAAQgHAAgEACQgEACgDAEIAAABIgEgGQACgDAGgCg");
	this.shape_76.setTransform(57.9914,136.775,0.5,0.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgQAnQgFgBgFgDIACgIIAAAAQADAEAGADQAGACAFAAQAKAAAFgEQAFgFAAgKQAAgHgFgFQgFgFgIAAIgKAAIABgBIgBgCIAJAAQAGAAAFgFQAEgFAAgHQAAgGgEgFQgFgFgHAAQgHAAgEADQgDACgDAEIgBABIgEgGQADgDAGgDQAFgCAJAAQALAAAHAFQAIAFAAAJQAAAIgEAEQgFAGgIABQAJABAGAFQAGAFAAAIQAAAMgJAGQgJAGgOAAQgFAAgGgCg");
	this.shape_77.setTransform(58.0125,136.775,0.5,0.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgaAbQgLgLAAgQQAAgPALgLQALgMAPAAQAQAAALAMQALALAAAPQAAAQgLALQgLAMgQAAQgPAAgLgMgAgTgTQgIAIAAALQAAAMAIAIQAJAJAKAAQAMAAAIgJQAJgIgBgMQABgLgJgIQgIgJgMAAQgKAAgJAJgAAAAGIgBAAIAAANIgJAAIAAgmIAKAAQAFAAAFADQAFAEAAAGQAAAGgHAEIAKAMIgIAEgAgBgCIABAAQAFAAAAgEQAAgEgFAAIgBAAg");
	this.shape_78.setTransform(164.05,92.7375,0.5,0.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E60004").s().p("AglAmIAAhLIBLAAIAABLg");
	this.shape_79.setTransform(93.9375,74.3625,0.5,0.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E60004").s().p("AglAmIAAhLIBLAAIAABLg");
	this.shape_80.setTransform(86.3875,74.3625,0.5,0.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E60004").s().p("AglAmIAAhLIBLAAIAABLg");
	this.shape_81.setTransform(90.1625,78.1375,0.5,0.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E60004").s().p("AglAmIAAhLIBLAAIAABLg");
	this.shape_82.setTransform(93.9375,81.9125,0.5,0.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E60004").s().p("AglAmIAAhLIBLAAIAABLg");
	this.shape_83.setTransform(86.3875,81.9125,0.5,0.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("Ah6B7IAAj1ID1AAIAAD1g");
	this.shape_84.setTransform(90.1625,78.1375,0.5,0.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAVBaIAAgJIACAAQAJgBAEgCQACgDAAgCQAAgGgFgLIgJgXIg/AAIgLAZQgEAJAAAFQAAADADACQACADANABIACAAIAAAJIg7AAIAAgJIACAAQAKgCADgDQAGgEAIgUIA+iNIAHAAIA7CPQAGAPAHAHQAFAEAKABIACAAIAAAJgAASASIgYg7IgaA7IAyAAg");
	this.shape_85.setTransform(153.6625,78.0625,0.5,0.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("ABABaIhuiGIAABiQAAAQADADQAEAEAJAAIAJAAIAAAKIhBAAIAAgKIAIAAQAKAAAEgFQACgGAAgMIAAh1IgKgKQgDgDgIgCIgKgBIgCAAIAAgKIAyAAIBlB7IAAhaQAAgQgDgDQgEgEgJAAIgIAAIAAgKIBAAAIAAAKIgIAAQgKAAgEAFQgCAEAAAOIAACSg");
	this.shape_86.setTransform(142.5625,78.2375,0.5,0.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgmBYIAAgJIAIAAQAKAAAEgFQACgEAAgOIAAhvQAAgNgCgDQAAgCgDgCQgGgDgFAAIgIAAIAAgJIBNAAIAAAJIgJAAQgIAAgFAFQgDAEAAAOIAABvQAAALACAFQAAACAEACQAGADAEAAIAJAAIAAAJg");
	this.shape_87.setTransform(132.9,78.1625,0.5,0.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAmBYIg5hQIgJAAIgFAAIAAAvQAAAQADADQADAFAJAAIAJAAIAAAJIhOAAIAAgJIAJAAQAKAAADgGQACgDAAgPIAAhuQAAgOgCgEQgFgFgIAAIgJAAIAAgJIBBAAQAaAAAOAEQAOAEAJALQAKALAAAQQAAASgLALQgKALgUAFIAiAuQAKAQAKAGQAIAFANACIADAAIAAAJgAghhHIAABDIAEAAQAYAAAKgKQAMgKAAgPQAAgPgJgJQgJgKgPAAQgIAAgJACg");
	this.shape_88.setTransform(124.3375,78.1625,0.5,0.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgqBQQgQgKgGgSQgEgLAAggIAAhCQAAgOgEgFQgEgEgIAAIgJAAIAAgJIBPAAIAAAJIgJAAQgJAAgEAGQgDAFAAAMIAABKQAAALACAMQACAMAEAHQAEAGAJAFQAJAEALAAQARAAAMgHQANgHAFgKQAEgLAAgbIAAhFQAAgPgDgDQgDgFgJAAIgJAAIAAgJIBBAAIAAAJIgJAAQgIAAgGAIQgCAEAAANIAABEQAAAagFAPQgFAPgQAKQgRALgZAAQgcAAgPgKg");
	this.shape_89.setTransform(113.0875,78.2125,0.5,0.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AhCBYIAAgJIAJAAQAJAAAEgGQACgEAAgNIAAhvQAAgOgDgEQgDgFgJAAIgJAAIAAgJIBAAAQAXAAANAFQAOAEAKAMQAKAMAAARQAAAWgPAOQgOANgaAAIgZgDIAAAvQgBAPADADQAEAFAIAAIAJAAIAAAJgAgMhGIAABDIAJACIAHAAQAMAAAJgJQAIgKAAgPQAAgKgDgKQgFgIgIgFQgHgEgKAAQgFAAgHACg");
	this.shape_90.setTransform(103.225,78.1625,0.5,0.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("Ap9CEIAAkHIT7AAIAAEHg");
	this.shape_91.setTransform(129.1125,78.1375,0.5,0.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E60004").s().p("AiDCEIAAkHIEHAAIAAEHg");
	this.shape_92.setTransform(90.1625,78.1375,0.5,0.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AiICEIAAkHIERAAIAAEHg");
	this.shape_93.setTransform(90.4,78.1375,0.5,0.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AsPCOIAAkbIYfAAIAAEbg");
	this.shape_94.setTransform(122.2625,78.125,0.5,0.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("Aj8GJQAngbALgeQAHgVAAg1IAAoMQAAgzgHgWQgLgfgngaIGhAAIAABuQgcgwgTgLQgegQhYAAIh9AAIAAEpIDDAAQAhAAAQgGQAPgHAYgWIAABnQgagWgKgEQgPgHgpAAIi/AAIAAEAQAABKASAXQAYAeBPAAQBxAABGgxQAXgRAWgYIAdgfIg4Ccg");
	this.shape_95.setTransform(152.5375,110.625,0.5,0.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AjKj1IAAIPQAAAzAIATQADAJATAXIhlAAQATgWAEgKQAHgTAAgzIAAo8QgaglgdgXQgfgZg4gaICOAAIIuKKIAAojQAAgzgHgUQgEgJgUgXIBmAAQgTAXgEAJQgHAUgBAzIAAK8g");
	this.shape_96.setTransform(116.825,111.0625,0.5,0.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("Ak4FDQhzh/AAi1QAAjFB8iGQB/iIDAAAQCzAAB3CCQByB/AAC2QAADEh8CGQh/CIi+AAQi0AAh3iCgAj8kyQhoBpAAC+QAACxBrB3QBqB1CZgBQCVAABehdQBphpAAi+QAAizhrh2Qhqh1iaAAQiVAAheBfg");
	this.shape_97.setTransform(77.2,108.575,0.5,0.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("Aj8GJQAngaALgfQAHgVAAg0IAAoNQAAg0gHgVQgLgfgngaIGhAAIAABuQgcgxgTgKQgegQhYAAIh9AAIAAEpIDDAAQAhAAAQgHQAPgFAYgXIAABnQgbgWgJgFQgPgGgpAAIi/AAIAAEAQAABJASAYQAYAeBPAAQBxAABGgxQAXgQAWgZIAdgfIg4Ccg");
	this.shape_98.setTransform(152.6125,111.325,0.5,0.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AjKj0IAAIOQAAAzAHATQAEAKATAXIhlAAQATgXAEgKQAHgTAAgzIAAo8QgaglgdgXQgggZg3gaICOAAIIuKLIAAokQAAgzgHgTQgEgKgTgXIBlAAQgUAXgDAKQgHATAAAzIAAK8g");
	this.shape_99.setTransform(116.3625,111.75,0.5,0.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("Ak4FDQhzh/AAi1QAAjFB8iGQB/iIC/AAQC0AAB2CCQBzB/AAC2QAADEh8CFQh/CJi+AAQi1AAh2iCgAj8kyQhoBpAAC+QAACxBrB3QBpB1CaAAQCVAABehfQBohoAAi+QAAiyhrh3Qhph1iaAAQiVAAheBfg");
	this.shape_100.setTransform(76.7375,109.275,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(55.3,71.1,111.00000000000001,70.5);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({y:29.5,alpha:1},19,cjs.Ease.quintOut).wait(4).to({startPosition:0},0).to({y:63.5,alpha:0},13,cjs.Ease.quadInOut).wait(21));

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
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_main_link.on("click", function () {
			window.open(window.clickTag, '_blank')
		});
		this.btn_main_link.on("click", function () {
			window.open(window.clickTag, '_blank')
		});
		var border = new createjs.Shape();
		border.graphics.beginStroke("#999999").setStrokeStyle(2).drawRect(0, 0, lib.properties.width, lib.properties.height);
		stage.addChild(border);
		
		
		var cta = this.cta.cta;
		var baseS = cta.scaleX;
		var hoverForce = 1.05;
		this.over = function() {
			createjs.Tween.get(cta, {override: true}).to({scaleX:baseS*hoverForce, scaleY:baseS*hoverForce}, 1000, createjs.Ease.elasticOut);
		}
		this.out = function() {
			createjs.Tween.get(cta, {override: true}).to({scaleX:baseS, scaleY:baseS}, 1000, createjs.Ease.elasticOut);
		}
		if (this.eventsAdded == undefined) {
			this.eventsAdded = true;
			canvas.addEventListener("mouseover", this.over.bind(this));
			canvas.addEventListener("mouseout", this.out.bind(this));
		}
	}
	this.frame_91 = function() {
		this.pack.gotoAndPlay(1);
	}
	this.frame_131 = function() {
		this.loopTotal = 4;
		if (this.loopIndex == undefined) this.loopIndex = 0;
		this.loopIndex++;
		if (this.loopIndex >= this.loopTotal) this.stop();
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(91).call(this.frame_91).wait(40).call(this.frame_131).wait(38).call(this.frame_169).wait(31).call(this.frame_200).wait(1));

	// Layer_2
	this.btn_main_link = new lib.click();
	this.btn_main_link.name = "btn_main_link";
	this.btn_main_link.parent = this;
	this.btn_main_link.setTransform(150.15,84.35,0.5554,1.3331,0,0,0,0.4,0.8);
	new cjs.ButtonHelper(this.btn_main_link, 0, 1, 2, false, new lib.click(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main_link).wait(201));

	// Logo
	this.instance = new lib.Logo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43.7,6.05,0.7,0.7,0,0,0,110.7,69.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(201));

	// Tx_2
	this.instance_1 = new lib.Tx_2_1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.45,215.75,0.95,0.95,0,0,0,80.3,33.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:false},0).wait(23).to({regX:80.2,regY:33.6,y:215.8,mode:"single",startPosition:23},0).wait(55).to({regX:80,regY:33.5,x:149.25,y:215.7,mode:"synched",loop:false},0).to({_off:true},18).wait(16));

	// Layer_11
	this.instance_2 = new lib.Symbol10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.2,257.1,1,1,0,0,0,133.2,12.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({regX:132.9,regY:9.9,x:149.9,y:251.85,alpha:0.0526},0).wait(1).to({y:249.05,alpha:0.1053},0).wait(1).to({y:246.45,alpha:0.1579},0).wait(1).to({y:244.1,alpha:0.2105},0).wait(1).to({y:241.95,alpha:0.2632},0).wait(1).to({y:239.95,alpha:0.3158},0).wait(1).to({y:238.15,alpha:0.3684},0).wait(1).to({y:236.45,alpha:0.4211},0).wait(1).to({y:234.95,alpha:0.4737},0).wait(1).to({y:233.6,alpha:0.5263},0).wait(1).to({y:232.3,alpha:0.5789},0).wait(1).to({y:231.15,alpha:0.6316},0).wait(1).to({y:230.1,alpha:0.6842},0).wait(1).to({y:229.1,alpha:0.7368},0).wait(1).to({y:228.15,alpha:0.7895},0).wait(1).to({y:227.3,alpha:0.8421},0).wait(1).to({y:226.45,alpha:0.8947},0).wait(1).to({y:225.65,alpha:0.9474},0).wait(1).to({y:224.9,alpha:1},0).wait(1).to({regX:133.2,regY:12.1,x:150.2,y:227.1},0).wait(35).to({regX:132.9,regY:9.9,x:149.9,y:227.9,alpha:0.9474},0).wait(1).to({y:230.7,alpha:0.8947},0).wait(1).to({y:233.3,alpha:0.8421},0).wait(1).to({y:235.65,alpha:0.7895},0).wait(1).to({y:237.8,alpha:0.7368},0).wait(1).to({y:239.8,alpha:0.6842},0).wait(1).to({y:241.6,alpha:0.6316},0).wait(1).to({y:243.3,alpha:0.5789},0).wait(1).to({y:244.8,alpha:0.5263},0).wait(1).to({y:246.2,alpha:0.4737},0).wait(1).to({y:247.45,alpha:0.4211},0).wait(1).to({y:248.6,alpha:0.3684},0).wait(1).to({y:249.65,alpha:0.3158},0).wait(1).to({y:250.65,alpha:0.2632},0).wait(1).to({y:251.6,alpha:0.2105},0).wait(1).to({y:252.45,alpha:0.1579},0).wait(1).to({y:253.3,alpha:0.1053},0).wait(1).to({y:254.1,alpha:0.0526},0).wait(1).to({y:254.9,alpha:0},0).to({_off:true},1).wait(125));

	// Layer_10
	this.instance_3 = new lib.Symbol9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.3,224.3,1,1,0,0,0,117.3,10.3);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:117.1,regY:12.8,x:150.1,y:223.75,alpha:0.0526},0).wait(1).to({y:220.95,alpha:0.1053},0).wait(1).to({y:218.35,alpha:0.1579},0).wait(1).to({y:216,alpha:0.2105},0).wait(1).to({y:213.85,alpha:0.2632},0).wait(1).to({y:211.85,alpha:0.3158},0).wait(1).to({y:210.05,alpha:0.3684},0).wait(1).to({y:208.35,alpha:0.4211},0).wait(1).to({y:206.85,alpha:0.4737},0).wait(1).to({y:205.5,alpha:0.5263},0).wait(1).to({y:204.2,alpha:0.5789},0).wait(1).to({y:203.05,alpha:0.6316},0).wait(1).to({y:202,alpha:0.6842},0).wait(1).to({y:201,alpha:0.7368},0).wait(1).to({y:200.05,alpha:0.7895},0).wait(1).to({y:199.2,alpha:0.8421},0).wait(1).to({y:198.35,alpha:0.8947},0).wait(1).to({y:197.55,alpha:0.9474},0).wait(1).to({y:196.8,alpha:1},0).wait(1).to({regX:117.3,regY:10.3,x:150.3,y:194.3},0).wait(39).to({regX:117.1,regY:12.8,x:150.1,y:199.8,alpha:0.9474},0).wait(1).to({y:202.6,alpha:0.8947},0).wait(1).to({y:205.2,alpha:0.8421},0).wait(1).to({y:207.55,alpha:0.7895},0).wait(1).to({y:209.7,alpha:0.7368},0).wait(1).to({y:211.7,alpha:0.6842},0).wait(1).to({y:213.5,alpha:0.6316},0).wait(1).to({y:215.2,alpha:0.5789},0).wait(1).to({y:216.7,alpha:0.5263},0).wait(1).to({y:218.1,alpha:0.4737},0).wait(1).to({y:219.35,alpha:0.4211},0).wait(1).to({y:220.5,alpha:0.3684},0).wait(1).to({y:221.55,alpha:0.3158},0).wait(1).to({y:222.55,alpha:0.2632},0).wait(1).to({y:223.5,alpha:0.2105},0).wait(1).to({y:224.35,alpha:0.1579},0).wait(1).to({y:225.2,alpha:0.1053},0).wait(1).to({y:226,alpha:0.0526},0).wait(1).to({y:226.8,alpha:0},0).to({_off:true},1).wait(123));

	// Pack_sm
	this.pack = new lib.Pack_sm();
	this.pack.name = "pack";
	this.pack.parent = this;
	this.pack.setTransform(342.75,131.65,0.5,0.5,0,0,0,108.4,105.6);
	this.pack._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pack).wait(83).to({_off:false},0).to({regX:108.3,x:181.65},22,cjs.Ease.quartOut).wait(64).to({regX:105.7,regY:105,scaleX:0.5556,scaleY:0.5556,x:-46.1,y:131.7},17,cjs.Ease.quadInOut).wait(15));

	// Pack_big
	this.instance_4 = new lib.Pack_big("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(296.05,107.2,0.5,0.5,0,0,0,140.8,126.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75).to({_off:false},0).to({x:135},22,cjs.Ease.quartOut).wait(70).to({startPosition:0},0).to({regX:140.6,x:-92.8},17,cjs.Ease.quadInOut).wait(17));

	// Cat
	this.instance_5 = new lib.Cat("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.55,95.9,0.5555,0.5555,0,0,0,165,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(64).to({startPosition:0},0).to({x:-91.65},22,cjs.Ease.quadInOut).to({_off:true},1).wait(88).to({_off:false,regX:165.1,x:339.4},0).to({regX:165,x:150.55},25,cjs.Ease.cubicOut).wait(1));

	// back
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E84F7E","#EA739E"],[0,1],-0.2,-141.6,-0.2,-5.7).s().p("A6XUKMAAAgoTMA0uAAAMAAAAoTg");
	this.shape.setTransform(150.0013,211.4253,0.8888,0.5555);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(201));

	// Circle_grad
	this.instance_6 = new lib.Circle_grad("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(147.45,117.7,0.9056,0.9056,0,0,0,125.9,126.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(78).to({startPosition:0},0).to({regX:125.8,scaleX:1.1433,scaleY:1.1433,x:147.4,y:117.75},18,cjs.Ease.quadInOut).wait(83).to({startPosition:0},0).to({regX:125.9,scaleX:0.9056,scaleY:0.9056,x:147.45,y:117.7},19,cjs.Ease.quadInOut).wait(3));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EF88B0","#F7B6CC"],[0,1],-20.3,-76.5,-20.3,145.8).s().p("EgaWAg/MAAAhB8MA0uAAAMAAABB8g");
	this.shape_1.setTransform(149.9305,65.1066,0.8889,0.7107);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(201));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,40.1,462.70000000000005,243.00000000000003);
// library properties:
lib.properties = {
	id: 'BD10522D48EC93478BD7181F5494F048',
	width: 300,
	height: 250,
	fps: 30,
	color: "#F7BDD1",
	opacity: 1.00,
	manifest: [
		{src:"images/_5.png", id:"_5"},
		{src:"images/_6.png", id:"_6"},
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
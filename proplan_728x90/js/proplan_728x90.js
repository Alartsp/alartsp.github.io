(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg_best = function() {
	this.initialize(img.bg_best);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,450);


(lib.rectangle = function() {
	this.initialize(img.rectangle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,159);


(lib.txt1 = function() {
	this.initialize(img.txt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,305,105);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,129);


(lib.txt3 = function() {
	this.initialize(img.txt3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,99);// helper functions:

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


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aq7CWIAAkrIV3AAIAAErg");
	mask.setTransform(0,14);

	// Layer_1
	this.instance = new lib.txt3();
	this.instance.parent = this;
	this.instance.setTransform(-67,-24.85,0.5018,0.5018);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-1,134,25.9);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aq7CWIAAkrIV3AAIAAErg");
	mask.setTransform(0,-16);

	// Layer_1
	this.instance = new lib.txt3();
	this.instance.parent = this;
	this.instance.setTransform(-67,-24.85,0.5018,0.5018);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-24.8,134,23.8);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AroB4IAAjvIXRAAIAADvg");
	mask.setTransform(-1.5,-28);

	// Layer_1
	this.instance = new lib.txt2();
	this.instance.parent = this;
	this.instance.setTransform(-69.5,-35.55,0.5516,0.5516);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-35.5,139,19.5);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoCBaIAAizIQFAAIAACzg");
	mask.setTransform(21.5,-6);

	// Layer_1
	this.instance = new lib.txt2();
	this.instance.parent = this;
	this.instance.setTransform(-69.5,-35.55,0.5516,0.5516);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-15,99.5,18);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArFBaIAAizIWLAAIAACzg");
	mask.setTransform(1,12);

	// Layer_1
	this.instance = new lib.txt2();
	this.instance.parent = this;
	this.instance.setTransform(-69.5,-35.55,0.5516,0.5516);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,3,139,18);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C09F60").s().p("AAAACIAAAAIgEALIgEgDIAHgJIgLABIAAgDIALABIgHgJIAFgCIADAKIAFgLIAEADIgHAJIAAAAIALgBIAAADIgLgBIAHAJIgFADg");
	this.shape.setTransform(72.375,23.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak6BQIAAifIJ1AAIAACfg");
	mask.setTransform(39.5,30);

	// Layer_1
	this.instance = new lib.txt2();
	this.instance.parent = this;
	this.instance.setTransform(-69.5,-35.55,0.5516,0.5516);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,18.1,71.1,17.5);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhyHlIAAvJIDlAAIAAPJg");
	mask.setTransform(-37.5,0.5);

	// rectangle.png
	this.instance = new lib.rectangle();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-46.8,0.5886,0.5886);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-46.8,20.5,93.6);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhyHlIAAvJIDlAAIAAPJg");
	mask.setTransform(37.5,0.5);

	// Layer_1
	this.instance = new lib.rectangle();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-46.8,0.5886,0.5886);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,-46.8,20.5,93.6);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAEiIAAhaIA8gdIAAleIg8ggIAAhOICBAAIAAJDg");
	mask.setTransform(74.5,0);

	// Layer_1
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(-79.5,-27.4,0.5213,0.5213);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68,-27.4,11.5,54.8);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AheFoIAArPIC9AAIgFBaIheAoIAEG3IBfAoIAABug");
	mask.setTransform(-75.5,2);

	// Layer_1
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(-79.5,-27.4,0.5213,0.5213);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.5,-27.4,13.5,54.8);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C09F60").s().p("AAAACIAAAAIgEALIgEgDIAHgJIgLABIAAgDIALABIgHgJIAFgCIADAKIAFgLIAEADIgHAJIAAAAIALgBIAAADIgLgBIAHAJIgFADg");
	this.shape.setTransform(68.375,2.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArjBuIAAjbIXHAAIAADbg");
	mask.setTransform(1,11);

	// Layer_1
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(-79.5,-27.4,0.5213,0.5213);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-2.9,148.1,24.9);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AreBpIAAjRIW9AAIAADRg");
	mask.setTransform(0.5,-11.5);

	// Layer_1
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(-79.5,-27.4,0.5213,0.5213);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-22,147,21);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(0,0,2.5333,0.48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-380,-60,760,120);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAXIgGgCIACgFIAFACIAFABQADAAADgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAIAAgEQAAgDgCgCQgBgDgDgBIgFAAIgDAAIAAgEIADAAIAEgBIAEgDQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgBgEIgCgCIgDgBIgGABIgEACIgCgFIAGgCIAGgBQAEAAADABQADACABACQACADAAADQAAADgCADQgCADgFACIAGABIADAEIABAGQAAAEgBADQgCADgEACIgJACIgGgBg");
	this.shape.setTransform(116.3,0.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLAXIATgoIgWAAIAAgGIAdAAIAAAFIgTApg");
	this.shape_1.setTransform(112.725,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIACIAAgDIARAAIAAADg");
	this.shape_2.setTransform(109.75,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIAWQgDgBgCgDQgCgDAAgEQAAgEADgDQACgDAEgBQgEgCgBgDQgCgDAAgDQAAgEACgCQACgDADgCQADgBADAAQAFAAADABIAFAFQABACAAADIgBAGQgDADgDACQAEABACADQACADABAEQgBAFgBADQgCADgEABIgIACIgIgCgAgGAFQgCACgBADIABAFIAEADIAEABQAEAAADgCQADgCgBgEQAAgEgCgCQgDgDgEgBQgEABgCADgAgDgSIgDADIgBAEQAAADADACQACACADABIAFgDQACgCAAgDIgBgEQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBIgFgBIgDABg");
	this.shape_3.setTransform(106.8,0.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAWQgEgDgCgEQgCgFAAgGQAAgGACgFQACgFAEgEIAHgFIAHgCIACAAIACAAIAAAFIgCAAIgCAAQgFABgCADIgGAFQgCAEAAAEIAEgEIAGgCQAEAAADACQADACACADQACADAAAFQAAAEgCAEQgBADgEADQgEACgFAAQgDAAgEgCgAgFAAIgDADIAAABIgBACIABAHQACADACABQACACACAAQAEAAADgDQADgDgBgFQABgFgDgDQgDgCgEAAQgCAAgDACg");
	this.shape_4.setTransform(103.1,0.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAQIgCgDIACgEIACgBIADABIABAEIgBADIgDABIgCgBgAgCgJIgCgDIACgDIACgBIADABIABADQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_5.setTransform(100.55,0.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAdQAEgFACgHQACgHAAgKQAAgJgCgHQgCgHgEgFIAFAAIADAHIAEAJQABAGAAAGQAAAHgBAGIgEAJIgDAHg");
	this.shape_6.setTransform(98.575,0.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOAYIAAgEIAFgFIAJgKQAEgEACgCQACgEAAgDIgBgFIgDgDQgCgCgCAAIgHACIgDACIgDgEIAGgDQAEgCADAAQAEAAAEACQADACABADQACADAAAEQAAAEgCAEIgFAHIgIAJIgEADIAUAAIAAAGg");
	this.shape_7.setTransform(95.8,0.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AACAdIgDgHIgEgJQgBgGAAgHQAAgGABgFIAEgKIADgHIAFAAQgEAFgCAHQgCAHAAAJQAAAKACAHQACAHAEAFg");
	this.shape_8.setTransform(93.125,0.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAXIATgoIgWAAIAAgGIAdAAIAAAFIgTApg");
	this.shape_9.setTransform(90.125,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDAQIACgGIABgGIAGgBIgDAHIgCAGIgBAFIgFAAIACgFgAAAgNIgBgDIABgDIABgBIADABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape_10.setTransform(85.9,1.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLAYIAAgFIACAAIADAAIAGgCIADgDIAEgFIACgHIgFADQgCACgDAAQgEAAgDgCIgFgFQgCgDAAgEQAAgEACgEQACgEAEgCQADgCAEAAQAFAAADACQAEADACAEQACAEAAAGQAAAHgDAGQgCAFgDADIgHAFIgGACIgDAAIgCAAIgBAAgAgEgRIgDAEIgCAGQAAAEADADQACACAEAAQADAAACgCIAEgCIAAgBIAAgBIgBgIIgDgFQgCgBgDAAIgEABg");
	this.shape_11.setTransform(83.375,0.2125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AACAXIAAgnIgIAEIgBgFIAJgGIAGAAIAAAug");
	this.shape_12.setTransform(79.325,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIAVQgDgDgCgFQgCgFAAgIQAAgHACgFQADgGADgDQADgCAEAAQAIAAAEAGQAEAGAAALQAAALgEAHQgFAGgHAAQgEAAgEgDgAgGgNQgDAEAAAJQAAAJADAFQADAFADAAQADAAADgCQABgDABgEIABgKIgBgJQgBgFgBgCQgDgCgDAAQgDAAgDAFg");
	this.shape_13.setTransform(75.95,0.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOAYIAAgEIAFgFIAJgKQAEgEABgCQACgEABgDIgBgFIgDgDQgCgCgCAAIgGACIgFACIgCgEIAGgDQAEgCADAAQAFAAADACQADACABADQACADAAAEQAAAEgCAEIgGAHIgHAJIgEADIAUAAIAAAGg");
	this.shape_14.setTransform(72.2,0.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgCADIgCgDIACgCQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgDACIgCgCg");
	this.shape_15.setTransform(68.15,2.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNAYIAAgvIAZAAIAAAFIgTAAIAAAPIASAAIAAAFIgSAAIAAARIAVAAIAAAFg");
	this.shape_16.setTransform(65.725,0.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGAZIgEgCIgEgBIACgFIAFACIAGABQAEAAADgCQACgCAAgEQAAgEgCgCIgGgEQgGgCgDgCQgEgDAAgGQAAgDACgDQACgEAEgBQADgCAEAAIAGABIAFABIgCAGIgEgCIgFgBIgFACQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABIgBACQAAAEACACIAGAEQAGACAEADQADADAAAFQAAAEgCADQgCADgEACQgEACgEAAIgFAAg");
	this.shape_17.setTransform(62.025,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AANAYIgFgPIgQAAIgFAPIgGAAIAQgvIAHAAIAQAvgAAHAEIgFgNIgBgEIgBgFIgBAFIgBAEIgFANIAOAAg");
	this.shape_18.setTransform(58.075,0.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNAYIAAgvIAZAAIAAAFIgTAAIAAAPIASAAIAAAFIgSAAIAAARIAVAAIAAAFg");
	this.shape_19.setTransform(54.225,0.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAZIgEgCIgEgBIACgFIAFACIAGABQAEAAADgCQACgCAAgEQAAgEgCgCIgGgEQgGgCgDgCQgEgDAAgGQAAgDACgDQACgEAEgBQADgCAEAAIAGABIAFABIgCAGIgEgCIgFgBIgFACQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABIgBACQAAAEACACIAGAEQAGACAEADQADADAAAFQAAAEgCADQgCADgEACQgEACgEAAIgFAAg");
	this.shape_20.setTransform(50.525,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgCAYIAAgvIAFAAIAAAvg");
	this.shape_21.setTransform(47.9,0.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOAZIgFgBIAAgvIAGAAIAIgBQAFAAAFACQAFABADADQADADACAFIACAKQAAAFgCAFIgFAIQgDADgGACQgEACgIAAIgGAAgAgNATIADABIADAAQAJAAAGgGQAFgFAAgJQAAgGgCgEQgCgEgEgCQgFgDgFAAIgFABIgDAAg");
	this.shape_22.setTransform(44.8,0.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOAZIgFgBIAAgvIAGAAIAHgBQAGAAAFACQAFABADADQADADACAFIACAKQAAAFgCAFIgFAIQgEADgFACQgFACgGAAIgHAAgAgNATIADABIAEAAQAJAAAFgGQAFgFAAgJQABgGgDgEQgCgEgFgCQgEgDgGAAIgDABIgEAAg");
	this.shape_23.setTransform(38.45,0.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAMAYIgPgYIgEgIIgFgIIAAABIABAJIAAAKIAAAUIgGAAIAAgvIAHAAIAOAXIAFAIIAEAIIAAAAIgBgKIAAgJIAAgUIAGAAIAAAvg");
	this.shape_24.setTransform(33.525,0.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AANAYIgFgPIgQAAIgFAPIgGAAIAQgvIAHAAIAQAvgAAHAEIgFgNIgBgEIgBgFIgBAFIgBAEIgFANIAOAAg");
	this.shape_25.setTransform(28.975,0.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAMAYIgPgYIgEgIIgFgIIAAABIABAJIAAAKIAAAUIgGAAIAAgvIAHAAIAOAXIAFAIIAEAIIAAAAIgBgKIAAgJIAAgUIAGAAIAAAvg");
	this.shape_26.setTransform(22.825,0.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgLAWQgFgDgCgGQgDgFAAgIQAAgGADgGQADgGAFgDQAFgDAFAAQAHAAAFADQAFADACAGQADAFAAAHQAAAIgDAGQgDAFgFADQgFADgGAAQgGAAgFgDgAgIgQQgDADgCAEQgBAFAAAEQAAAGABAEQACAEAEADQADADAEAAQAFAAADgDQAEgDACgEQACgFAAgFIgBgGIgDgHQgCgDgDgBQgDgCgEAAQgEAAgEADg");
	this.shape_27.setTransform(17.975,0.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgCAYIAAgvIAFAAIAAAvg");
	this.shape_28.setTransform(14.65,0.125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDAYIAAgqIgOAAIAAgFIAjAAIAAAFIgPAAIAAAqg");
	this.shape_29.setTransform(12,0.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AANAYIgFgPIgQAAIgFAPIgGAAIAQgvIAHAAIAQAvgAAHAEIgFgNIgBgEIgBgFIgBAFIgBAEIgFANIAOAAg");
	this.shape_30.setTransform(8.025,0.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AATAYIgBgVIgBgGIAAgHIAAgHIgDAJIgDAIIgJAYIgEAAIgIgXIgDgJIgCgJIgBAHIAAAHIAAAGIgCAVIgGAAIAEgvIAIAAIAIAXIADAIIABAIIAAAAIACgIIADgIIAJgXIAIAAIADAvg");
	this.shape_31.setTransform(2.875,0.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AATAYIgBgVIgBgGIAAgHIAAgHIgDAJIgDAIIgJAYIgEAAIgIgXIgDgJIgCgJIgBAHIAAAHIAAAGIgCAVIgGAAIAEgvIAIAAIAIAXIADAIIABAIIAAAAIACgIIADgIIAJgXIAIAAIADAvg");
	this.shape_32.setTransform(-2.925,0.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AANAYIgFgPIgQAAIgFAPIgGAAIAQgvIAHAAIAQAvgAAHAEIgFgNIgBgEIgBgFIgBAFIgBAEIgFANIAOAAg");
	this.shape_33.setTransform(-7.975,0.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNAYIAAgvIAHAAIAAAqIATAAIAAAFg");
	this.shape_34.setTransform(-11.7,0.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgMAYIAAgvIAZAAIAAAFIgTAAIAAAQIARAAIAAAEIgRAAIAAAWg");
	this.shape_35.setTransform(-15.25,0.125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAMAYIgPgYIgEgIIgFgIIAAABIABAJIAAAKIAAAUIgGAAIAAgvIAHAAIAOAXIAFAIIAEAIIAAAAIgBgKIAAgJIAAgUIAGAAIAAAvg");
	this.shape_36.setTransform(-19.475,0.125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgCAYIAAgvIAFAAIAAAvg");
	this.shape_37.setTransform(-22.7,0.125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgDAYIAAgUIgPgbIAHAAIAHANIACAFIACAFIAAAAIACgFIADgFIAHgNIAHAAIgQAbIAAAUg");
	this.shape_38.setTransform(-27,0.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgCAYIAAgqIgPAAIAAgFIAjAAIAAAFIgPAAIAAAqg");
	this.shape_39.setTransform(-30.8,0.125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgCAYIAAgvIAFAAIAAAvg");
	this.shape_40.setTransform(-33.45,0.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAMAYIgPgYIgEgIIgFgIIAAABIABAJIAAAKIAAAUIgGAAIAAgvIAHAAIAOAXIAFAIIAEAIIAAAAIgBgKIAAgJIAAgUIAGAAIAAAvg");
	this.shape_41.setTransform(-36.675,0.125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgIAWQgEgCgDgEQgCgFAAgHIAAgcIAGAAIAAAcIACAJQABADADACIAFABQAFAAADgDQAEgEAAgIIAAgcIAGAAIAAAcQAAAHgDAFQgCAEgEACQgEADgFAAQgEAAgEgDg");
	this.shape_42.setTransform(-41.375,0.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AATAYIgBgVIgBgGIAAgHIAAgHIgDAJIgDAIIgJAYIgEAAIgIgXIgDgJIgCgJIgBAHIAAAHIAAAGIgCAVIgGAAIAEgvIAIAAIAIAXIADAIIABAIIAAAAIACgIIADgIIAJgXIAIAAIADAvg");
	this.shape_43.setTransform(-46.625,0.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AATAYIgBgVIgBgGIAAgHIAAgHIgDAJIgDAIIgJAYIgEAAIgIgXIgDgJIgCgJIgBAHIAAAHIAAAGIgCAVIgGAAIAEgvIAIAAIAIAXIADAIIABAIIAAAAIACgIIADgIIAJgXIAIAAIADAvg");
	this.shape_44.setTransform(-52.425,0.125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgCAYIAAgvIAFAAIAAAvg");
	this.shape_45.setTransform(-56.15,0.125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgDADIACgEIABgGIAGgBIgCAHIgDAEIgBAGIgFAAIACgGg");
	this.shape_46.setTransform(-59.375,2.55);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgNAYIAAgvIAHAAIAAAqIATAAIAAAFg");
	this.shape_47.setTransform(-61.55,0.125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AANAYIgFgPIgQAAIgFAPIgGAAIAQgvIAHAAIAQAvgAAHAEIgFgNIgBgEIgBgFIgBAFIgBAEIgFANIAOAAg");
	this.shape_48.setTransform(-65.625,0.125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgDAYIAAgqIgOAAIAAgFIAjAAIAAAFIgPAAIAAAqg");
	this.shape_49.setTransform(-71.2,0.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgNAYIAAgvIAZAAIAAAFIgTAAIAAAPIASAAIAAAFIgSAAIAAARIAVAAIAAAFg");
	this.shape_50.setTransform(-74.625,0.125);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgCADIgCgDIACgCQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgDACIgCgCg");
	this.shape_51.setTransform(-78.8,2.175);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgNAYIAAgvIAZAAIAAAFIgTAAIAAAPIASAAIAAAFIgSAAIAAARIAVAAIAAAFg");
	this.shape_52.setTransform(-81.225,0.125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgHAYIgDgBIABgFIACABIAEAAIADgBQABAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAIABgIIAAgfIAFAAIAAAgQAAAGgCAEQgBADgDACQgEACgDAAIgEgBg");
	this.shape_53.setTransform(-86.25,0.175);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AANAYIgFgPIgQAAIgFAPIgGAAIAQgvIAHAAIAQAvgAAHAEIgFgNIgBgEIgBgFIgBAFIgBAEIgFANIAOAAg");
	this.shape_54.setTransform(-89.525,0.125);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAJAYIgBgDIgCgIQgBgFgCgCQgCgCgEgBIgGAAIAAAVIgGAAIAAgvIAGAAIAGAAIAIAAQADABACACIADAFIABAFQAAADgBACIgDAEQgCACgDAAIAAABQADAAABADIADAGIACAJIACAEgAgJgSIAAARIAHAAQAEAAADgCQADgDAAgEQAAgEgDgCQgDgCgEgBIgEAAIgDABg");
	this.shape_55.setTransform(-93.475,0.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AANAYIgFgPIgQAAIgFAPIgGAAIAQgvIAHAAIAQAvgAAHAEIgFgNIgBgEIgBgFIgBAFIgBAEIgFANIAOAAg");
	this.shape_56.setTransform(-97.775,0.125);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgCAYIAAgUIgQgbIAHAAIAHANIACAFIACAFIAAAAIACgFIADgFIAHgNIAHAAIgQAbIAAAUg");
	this.shape_57.setTransform(-101.9,0.125);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgCAYIAAgqIgPAAIAAgFIAjAAIAAAFIgPAAIAAAqg");
	this.shape_58.setTransform(-105.7,0.125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AANAYIgFgPIgQAAIgFAPIgGAAIAQgvIAHAAIAQAvgAAHAEIgFgNIgBgEIgBgFIgBAFIgBAEIgFANIAOAAg");
	this.shape_59.setTransform(-109.675,0.125);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgGAZIgEgCIgEgBIACgFIAFACIAGABQAEAAADgCQACgCAAgEQAAgEgCgCIgGgEQgGgCgDgCQgEgDAAgGQAAgDACgDQACgEAEgBQADgCAEAAIAGABIAFABIgCAGIgEgCIgFgBIgFACQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABIgBACQAAAEACACIAGAEQAGACAEADQADADAAAFQAAAEgCADQgCADgEACQgEACgEAAIgFAAg");
	this.shape_60.setTransform(-113.675,0.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAAACIAAAAIgEALIgEgDIAHgJIgLABIAAgDIALABIgHgJIAFgCIADAKIAFgLIAEADIgHAJIAAAAIALgBIAAADIgLgBIAHAJIgFADg");
	this.shape_61.setTransform(-116.975,-1.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.4,-6.3,240.9,12.7);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.bg_best();
	this.instance.parent = this;
	this.instance.setTransform(-159,-128,0.5644,0.5644);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-128,254,254);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvKG8IAAt3IeVAAIAAN3g");
	mask.setTransform(97.05,44.425);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD78A").s().p("AAEAKQgcgLgOAAQgZAAgTARIgGgDQAXgiAmAAQANAAAhANQAiAMAOAAQALAAAIgEQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAABQgOARgZAAQgQAAgegMg");
	this.shape.setTransform(142.6375,80.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD78A").s().p("AAXByIAAgHIAQAAQAQgBAFgDQAHgEgEgJQg9iUgMgdIhICtQgFALAHAFQAFAFARAAIANAAIAAAHIhbAAIAAgHIADAAQAPAAAIgKQAHgHAJgXIBKisQABgEgCgFIAjAAIAYA2QAVAxAoBhQAFALAFAEQAIAGAOAAIAGAAIAAAHg");
	this.shape_1.setTransform(147.175,77.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD78A").s().p("AhcBXQgmghAAgxQAAg1AmgjQAmgkA5ABQA2AAAlAgQAlAhAAAwQAAA1glAjQgmAlg3gBQg3ABgmghgAhJhJQgTAdAAAmQAAAyAdAhQAdAhAqAAQApAAAYghQAUgdABgqQAAgzgcggQgdghgqABQgsAAgYAkg");
	this.shape_2.setTransform(65.5,76.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD78A").s().p("AhtB0IAAgHIAHAAQAUAAAHgIQAHgHAAgUIAAiQQAAgUgJgJQgHgFgOAAIgLAAIAAgIQBBgDAlAAQA3gBAfAVQAfATAAAkQAAApgpAWQghASguAAIgXgBIAAAlQAAATAJAHQAHAFARABIAKAAIAAAHgAghhpIAACIIAXABQBQAAAAhGQAAgjgTgRQgUgQgoAAg");
	this.shape_3.setTransform(98.025,76.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFD78A").s().p("AhtB0IAAgHIAHAAQAUAAAHgIQAHgHAAgUIAAiQQAAgUgJgJQgHgFgOAAIgLAAIAAgIQBBgDAlAAQA3gBAfAVQAfATAAAkQAAApgpAWQghASguAAIgXgBIAAAlQAAATAJAHQAHAFARABIAKAAIAAAHgAghhpIAACIIAXABQBQAAAAhGQAAgjgTgRQgUgQgoAAg");
	this.shape_4.setTransform(10.975,76.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD78A").s().p("ABDBsQgNgGgbgYIgsgoIgdACIgWgBIAAAlQAAATAJAGQAHAGASAAIAJAAIAAAIIh3AAIAAgIIAHAAQAUAAAHgHQAHgIAAgUIAAiPQAAgVgJgIQgHgFgOAAIgLAAIAAgIQBBgEAlAAQA3AAAfAUQAfAUAAAkQAAAYgQARQgPASgaAIIAuApQAVATALAHQAXAPAaACIAAAHIgQABQgpAAgVgKgAhEhrIAACJIAXABQBQAAAAhGQAAgjgTgRQgTgRgqAAg");
	this.shape_5.setTransform(38.825,77.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD78A").s().p("AhoByIAAgHIAOAAQALgBAEgFQAGgFAAgNIAAiiQAAgbgXAAIgLAAIAAgIIBuAAIAAAIIgWAAQgNAAgEAJQgCAEAAAOIAAClQAAAJACAEQAEADAIAAIA+AAQAfAAAagkIAGADIgXAtg");
	this.shape_6.setTransform(122.5,77.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFD78A").s().p("ABXByQgagbhJhVIhIhSIAACgQAAAQAJAGQAGAFAOAAIAIAAIAAAHIhVAAIAAgHIAHAAQAYAAAAgaIAAioQAAgHgGgFQgHgHgMAAIgFAAIAAgIIA/AAICXCuIAAiKQAAgOgEgEQgFgKgTAAIgIAAIAAgIIBWAAIAAAIIgHAAQgPAAgFAEQgHAEAAAOIAADGg");
	this.shape_7.setTransform(175.825,77.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E11019").s().p("AgZAbIAAg0IA0AAIAAA0g");
	this.shape_8.setTransform(54.3,42.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E11019").s().p("AgZAbIAAg0IAzAAIAAA0g");
	this.shape_9.setTransform(43.65,42.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E11019").s().p("AgaAbIAAg1IA1AAIAAA1g");
	this.shape_10.setTransform(48.975,48.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E11019").s().p("AgZAbIAAg1IA0AAIAAA1g");
	this.shape_11.setTransform(54.3,53.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E11019").s().p("AgZAbIAAg1IAzAAIAAA1g");
	this.shape_12.setTransform(43.65,53.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhVBWIAAirICrAAIAACrg");
	this.shape_13.setTransform(48.975,48.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAPBAIAAgHIABAAQAHAAACgCQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgDgDgIIgHgRIgsAAIgIASQgDAHAAADQAAABAAAAQABABAAAAQAAABAAAAQABAAAAABQAEACAHAAIABAAIAAAHIgpAAIAAgHIABAAQAIgCABgBQAFgEAFgNIAshkIAFAAIApBlQAGANADACQADADAIABIABAAIAAAHgAANANIgRgqIgTAqIAkAAg");
	this.shape_14.setTransform(138.775,48.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAtA/IhNhdIAABEQAAAKACAEQADADAGAAIAGAAIAAAHIguAAIAAgHIAGAAQAHAAADgEQACgEAAgJIAAhSIgIgIQgDgCgEgBIgJAAIAAgIIAjAAIBIBYIAAhAQAAgLgDgDQgCgCgHAAIgGAAIAAgIIAuAAIAAAIIgGAAQgHAAgDADQgBACAAALIAABmg");
	this.shape_15.setTransform(123.075,48.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbA/IAAgHIAGAAQAHAAADgEQACgEAAgJIAAhNQAAgJgBgDQAAAAgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgEgBgEAAIgGAAIAAgIIA3AAIAAAIIgGAAQgHAAgDADQgCACAAALIAABNIABAMIADADIAIACIAGAAIAAAHg");
	this.shape_16.setTransform(109.375,48.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAbA/Igog5IgKAAIAAAhQAAAKACAEQADADAGAAIAGAAIAAAHIg3AAIAAgHIAGAAQAIAAACgEQABgDAAgKIAAhNQAAgMgCgCQgDgCgGAAIgGAAIAAgIIAuAAQASAAAKADQAKAEAGAIQAHAHAAAMQAAAMgIAIQgHAIgNACIAXAhQAJANAFADQAFADALACIABAAIAAAHgAgXgyIAAAwIADAAQAQgBAIgGQAIgHAAgLQAAgLgGgHQgGgGgLAAg");
	this.shape_17.setTransform(97.25,48.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeA5QgLgIgEgMQgDgIAAgWIAAgvQAAgJgCgEQgCgDgHAAIgGAAIAAgHIA3AAIAAAHIgGAAQgGAAgEAEQgBAEAAAIIAAA0IABAQQACAJADAFQACAEAHADQAFADAJAAQAMAAAIgEQAJgFADgIQADgIABgTIAAgwQgBgLgCgCQgCgDgHAAIgFAAIAAgHIAtAAIAAAHIgGAAQgHAAgCAFQgCADAAAJIAAAwQAAASgEALQgDALgLAHQgLAIgUAAQgSAAgMgHg");
	this.shape_18.setTransform(81.35,48.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgvA/IAAgHIAHAAQAGAAADgEQACgDAAgKIAAhNQAAgJgCgFQgDgCgGAAIgHAAIAAgIIAuAAQAOABAMADQAKAEAGAIQAHAIAAAMQAAAPgKALQgLAJgSgBIgJAAIgJgCIAAAhQAAAKACAEQAEADAEAAIAHAAIAAAHgAgJgyIAAAxIAMABQAIAAAHgHQAGgGAAgMQAAgHgDgGQgDgGgFgDQgHgEgGAAg");
	this.shape_19.setTransform(67.375,48.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#13110C").s().p("AnCBcIAAi4IOFAAIAAC5g");
	this.shape_20.setTransform(104.025,48.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E11019").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape_21.setTransform(48.95,48.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AopBkIAAjHIRTAAIAADHg");
	this.shape_22.setTransform(94.4,48.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgFAFgFQAEgEAFAAQAGAAAEAEQAFAFAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFgAgIgIQgEAEABAEQgBAFAEAEQADAEAFAAQAGAAACgEQAEgEAAgFQAAgFgEgDQgDgEgFAAQgEAAgEAEgAAFAJIgFgIIgCAAIAAAIIgDAAIAAgRIAGAAQAGAAAAAFQAAAEgFAAIAGAIgAgCAAIACAAQAEAAAAgDQAAAAAAgBQAAgBgBAAQAAAAgBgBQgBAAgBAAIgCAAg");
	this.shape_23.setTransform(153.5,39.525);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,38.1,189.1,50.800000000000004), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAhAIuwDQIOwkfIOxEfg");
	mask.setTransform(94.525,14.35);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C2A060","#FCD487","#FAD286","#F2CB81","#E5C078","#D2B06C","#B99B5D","#9B824A","#907843","#FCD487","#C2A060","#C2A060"],[0,0.235,0.302,0.333,0.357,0.38,0.4,0.416,0.424,0.627,0.816,1],-94.5,0,94.6,0).s().p("AuwCQIAAkfIdhAAIAAEfg");
	this.shape.setTransform(94.525,14.35);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,189.1,28.7), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvKG8IAAt3IeVAAIAAN3g");
	mask.setTransform(97.05,44.425);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEgAgIgIQgDAEgBAEQABAGADADQAEADAEABQAFgBADgDQAEgEAAgFQAAgEgEgEQgDgDgFgBQgEABgEADgAAFAJIgFgIIgDAAIAAAIIgCAAIAAgRIAGAAQAGAAAAAFQAAADgEABIAEAIgAgDAAIADAAQAEAAAAgDQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgEAAg");
	this.shape.setTransform(192.6,67.15);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(191.1,65.7,3,3), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eh8sAIcIAAw3MD5ZAAAIAAQ3g");
	mask_1.setTransform(798.075,54.025);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAaQgKgLAAgPQAAgOAKgLQAKgKAOAAQAQAAAJAKQAKALAAAOQAAAPgKALQgJAKgQAAQgPAAgJgKg");
	this.shape_1.setTransform(1456.2,64.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAgQgOgNAAgTQAAgSAOgNQANgOATAAQAUAAAOAOQANANAAASQAAATgOANQgNAOgUAAQgTAAgNgOgAgYgZQgLALAAAOQAAAPALALQAKALAOAAQAPAAAKgLQAKgLAAgPQAAgOgKgLQgKgLgPAAQgOAAgKALgAALAXIgEgKQAAgIgIAAIgFAAIAAASIgLAAIAAgtIARAAQALAAAFADQAEADAAAHQAAAIgJACIAAABQAFABADAKIADAKgAgGgOIAAANIAFAAQAKAAAAgHQAAgHgJAAg");
	this.shape_2.setTransform(1455.225,35.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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");
	this.shape_3.setTransform(1049.6,54.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E50004").s().p("AhbBcIAAi3IC3AAIAAC3g");
	this.shape_4.setTransform(282.825,35.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E50004").s().p("AhbBcIAAi3IC3AAIAAC3g");
	this.shape_5.setTransform(246.125,35.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E50004").s().p("AhbBcIAAi3IC3AAIAAC3g");
	this.shape_6.setTransform(264.475,53.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E50004").s().p("AhbBcIAAi3IC3AAIAAC3g");
	this.shape_7.setTransform(282.825,72.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E50004").s().p("AhbBcIAAi3IC3AAIAAC3g");
	this.shape_8.setTransform(246.125,72.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E50004").s().p("AlAFBIAAqBIKBAAIAAKBgAkpEqIJTAAIAApUIpTAAg");
	this.shape_9.setTransform(264.475,53.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAzDdIAAgYIAFAAQAXgBAIgGQAGgGAAgHQAAgMgMgcIgXg5IiaAAIgbA+QgKAXAAALQAAAHAHAFQAHAHAdACIAFAAIAAAYIiPAAIAAgXIAEgBQAbgFAEgGQAQgNASgtICYlbIATAAICQFfQASApANALQANAMAYABIAFAAIAAAYgAAsAsIg8iSIhACSIB8AAg");
	this.shape_10.setTransform(574.6,53.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ACcDbIkNlHIAADxQAAAmAHAHQAKALAWAAIAUAAIAAAYIidAAIAAgYIAUAAQAYAAAJgNQAGgKAAghIAAkfQgQgTgJgHQgIgGgSgGQgKgDgPAAIgGAAIAAgXIB6AAID5EvIAAjgQAAgkgHgIQgKgMgWAAIgVAAIAAgXICeAAIAAAXIgVAAQgXAAgKAOQgFAJAAAhIAAFmg");
	this.shape_11.setTransform(520.375,54.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhfDYIAAgYIAVAAQAYAAAJgNQAGgHAAgkIAAkPQAAgdgEgLQgCgFgIgFQgMgHgNAAIgVAAIAAgXIC+AAIAAAXIgUAAQgXAAgKANQgGAJAAAjIAAEPQAAAgADAHQADAHAHAEQANAGANAAIAUAAIAAAYg");
	this.shape_12.setTransform(473.15,53.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABdDYIiNjFIgfABIgDgBIAAB0QAAAnAHAHQAKALAUAAIAXAAIAAAYIjAAAIAAgYIAWAAQAXAAAJgOQAGgIAAgjIAAkOQAAgkgHgJQgJgMgWAAIgWAAIAAgXICfAAQBEAAAfAKQAhAKAYAcQAYAcgBAmQAAApgbAeQgYAbgwAMIBRBxQAfAqATAMQAVANAgADIAFABIAAAXgAhSiuIAACjIALAAQA6AAAbgZQAcgXAAgmQAAgkgXgYQgWgWglAAQgNAAgdAFg");
	this.shape_13.setTransform(431.35,53.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhpDDQgmgYgOgqQgLgdAAhNIAAiiQAAglgJgKQgIgJgVAAIgVAAIAAgZIC+AAIAAAZIgVAAQgXAAgJANQgGAJgBAiIAAC1QAAATAFAkQAFAeALARQAKAQAVALQAVALAeAAQAogBAfgQQAfgRAKgbQAMgaAAhCIAAioQAAglgHgJQgKgLgVABIgWAAIAAgZICfAAIAAAZIgWAAQgWgBgKATQgGAGAAAjIAACoQAABAgNAkQgNAmgmAYQgnAahBAAQhFAAglgZg");
	this.shape_14.setTransform(376.45,54.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AikDYIAAgYIAWAAQAXAAAKgOQAFgIAAgiIAAkPQAAglgHgIQgKgMgVAAIgWAAIAAgXICfAAQA4AAAhAMQAhAMAYAdQAYAdAAAoQAAA2gkAiQgjAhhAAAQgRAAgPgCIgfgFIAABzQAAAlAIAIQAKALATAAIAWAAIAAAYgAghitIAAClIArAFQAdAAAWgXQAVgXAAgmQAAgagLgWQgKgWgSgKQgUgLgXAAQgNAAgUAFg");
	this.shape_15.setTransform(328.275,53.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1B1C20").s().p("A4UFBIAAqBMAwpAAAIAAKBg");
	this.shape_16.setTransform(454.65,53.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("A95FYIAAqvMA7zAAAIAAKvg");
	this.shape_17.setTransform(421.325,53.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbAbQgLgLAAgQQAAgPALgLQAMgLAPAAQAQAAAMALQALALAAAPQAAAQgLALQgMALgQAAQgPAAgMgLgAgUgVQgJAJAAAMQAAANAJAIQAJAJALAAQANAAAIgJQAIgIAAgNQAAgMgIgJQgJgJgMAAQgMAAgIAJgAAJAUIgDgKQgBgGgGAAIgEAAIAAAQIgJAAIAAgmIAOgBQAJAAAEADQAEADAAAFQAAAHgIABIAAABQAEACADAHIACAKgAgFgMIAAALIAEAAQAIAAAAgGQAAgFgHAAg");
	this.shape_18.setTransform(623.875,23.075);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(229.9,19.3,1230.1,68.9), null);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.instance = new lib.Symbol60("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,20);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0,alpha:1},12,cjs.Ease.cubicOut).wait(42));

	// Layer_1
	this.instance_1 = new lib.Symbol61("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({y:0,alpha:1},12,cjs.Ease.cubicOut).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-24.8,134,69.7);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 2
	this.instance = new lib.Symbol58("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-55,20);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0,alpha:1},12,cjs.Ease.cubicOut).wait(35));

	// Layer_1 copy 3
	this.instance_1 = new lib.Symbol57("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.35,2.8,1.0526,1.0526);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({y:-18.2,alpha:1},12,cjs.Ease.cubicOut).wait(32));

	// Layer_1 copy
	this.instance_2 = new lib.Symbol56("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-33,2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({y:-18,alpha:1},12,cjs.Ease.cubicOut).wait(29));

	// Layer_1
	this.instance_3 = new lib.Symbol55("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(37.35,-14.95,0.9594,0.9594);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({y:-34.1,alpha:1},12,cjs.Ease.cubicOut).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.5,-35.5,250,58.5);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlJAFIAAgJIDcAAIAAAJg");
	var mask_graphics_1 = new cjs.Graphics().p("AlJAGIAAgLIDcAAIAAALg");
	var mask_graphics_2 = new cjs.Graphics().p("AlJAKIAAgTIDcAAIAAATg");
	var mask_graphics_3 = new cjs.Graphics().p("AlJAXIAAgtIDcAAIAAAtg");
	var mask_graphics_4 = new cjs.Graphics().p("AlJAvIAAhdIDcAAIAABdg");
	var mask_graphics_5 = new cjs.Graphics().p("AlJBXIAAitIDcAAIAACtg");
	var mask_graphics_6 = new cjs.Graphics().p("AlJCTIAAklIDcAAIAAElg");
	var mask_graphics_7 = new cjs.Graphics().p("AlJDnIAAnNIDcAAIAAHNg");
	var mask_graphics_8 = new cjs.Graphics().p("AlJFWIAAqrIDcAAIAAKrg");
	var mask_graphics_9 = new cjs.Graphics().p("AlJHlIAAvJIDcAAIAAPJg");
	var mask_graphics_10 = new cjs.Graphics().p("AkyHlIAAvJIDcAAIAAPJg");
	var mask_graphics_11 = new cjs.Graphics().p("AkgHlIAAvJIDcAAIAAPJg");
	var mask_graphics_12 = new cjs.Graphics().p("AkRHlIAAvJIDcAAIAAPJg");
	var mask_graphics_13 = new cjs.Graphics().p("AkGHlIAAvJIDcAAIAAPJg");
	var mask_graphics_14 = new cjs.Graphics().p("Aj/HlIAAvJIDcAAIAAPJg");
	var mask_graphics_15 = new cjs.Graphics().p("Aj5HlIAAvJIDcAAIAAPJg");
	var mask_graphics_16 = new cjs.Graphics().p("Aj2HlIAAvJIDcAAIAAPJg");
	var mask_graphics_17 = new cjs.Graphics().p("Aj1HlIAAvJIDcAAIAAPJg");
	var mask_graphics_18 = new cjs.Graphics().p("Aj0HlIAAvJIDcAAIAAPJg");
	var mask_graphics_19 = new cjs.Graphics().p("Aj0HlIAAvJIDcAAIAAPJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-33,y:0.5}).wait(1).to({graphics:mask_graphics_1,x:-33,y:0.5}).wait(1).to({graphics:mask_graphics_2,x:-33,y:0.5}).wait(1).to({graphics:mask_graphics_3,x:-33,y:0.5}).wait(1).to({graphics:mask_graphics_4,x:-33,y:0.5}).wait(1).to({graphics:mask_graphics_5,x:-33,y:0.5}).wait(1).to({graphics:mask_graphics_6,x:-33,y:0.5}).wait(1).to({graphics:mask_graphics_7,x:-33,y:0.5}).wait(1).to({graphics:mask_graphics_8,x:-33,y:0.5}).wait(1).to({graphics:mask_graphics_9,x:-33,y:0.5}).wait(1).to({graphics:mask_graphics_10,x:-30.6965,y:0.5}).wait(1).to({graphics:mask_graphics_11,x:-28.852,y:0.5}).wait(1).to({graphics:mask_graphics_12,x:-27.4155,y:0.5}).wait(1).to({graphics:mask_graphics_13,x:-26.336,y:0.5}).wait(1).to({graphics:mask_graphics_14,x:-25.5625,y:0.5}).wait(1).to({graphics:mask_graphics_15,x:-25.044,y:0.5}).wait(1).to({graphics:mask_graphics_16,x:-24.7295,y:0.5}).wait(1).to({graphics:mask_graphics_17,x:-24.568,y:0.5}).wait(1).to({graphics:mask_graphics_18,x:-24.5085,y:0.5}).wait(1).to({graphics:mask_graphics_19,x:-24.5,y:0.5}).wait(41));

	// Layer_1 copy
	this.instance = new lib.Symbol44("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Layer_2 copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("ABuAFIAAgJIDcAAIAAAJg");
	var mask_1_graphics_1 = new cjs.Graphics().p("ABuAGIAAgLIDcAAIAAALg");
	var mask_1_graphics_2 = new cjs.Graphics().p("ABuAKIAAgTIDcAAIAAATg");
	var mask_1_graphics_3 = new cjs.Graphics().p("ABuAXIAAgtIDcAAIAAAtg");
	var mask_1_graphics_4 = new cjs.Graphics().p("ABuAvIAAhdIDcAAIAABdg");
	var mask_1_graphics_5 = new cjs.Graphics().p("ABuBXIAAitIDcAAIAACtg");
	var mask_1_graphics_6 = new cjs.Graphics().p("ABuCTIAAklIDcAAIAAElg");
	var mask_1_graphics_7 = new cjs.Graphics().p("ABuDnIAAnNIDcAAIAAHNg");
	var mask_1_graphics_8 = new cjs.Graphics().p("ABuFWIAAqrIDcAAIAAKrg");
	var mask_1_graphics_9 = new cjs.Graphics().p("ABuHlIAAvJIDcAAIAAPJg");
	var mask_1_graphics_10 = new cjs.Graphics().p("ABWHlIAAvJIDcAAIAAPJg");
	var mask_1_graphics_11 = new cjs.Graphics().p("ABCHlIAAvJIDcAAIAAPJg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AAzHlIAAvJIDcAAIAAPJg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AAnHlIAAvJIDcAAIAAPJg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AAfHlIAAvJIDcAAIAAPJg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AAaHlIAAvJIDcAAIAAPJg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AAWHlIAAvJIDcAAIAAPJg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AAVHlIAAvJIDcAAIAAPJg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AAUHlIAAvJIDcAAIAAPJg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AAUHlIAAvJIDcAAIAAPJg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:33,y:0.5}).wait(1).to({graphics:mask_1_graphics_1,x:33,y:0.5}).wait(1).to({graphics:mask_1_graphics_2,x:33,y:0.5}).wait(1).to({graphics:mask_1_graphics_3,x:33,y:0.5}).wait(1).to({graphics:mask_1_graphics_4,x:33,y:0.5}).wait(1).to({graphics:mask_1_graphics_5,x:33,y:0.5}).wait(1).to({graphics:mask_1_graphics_6,x:33,y:0.5}).wait(1).to({graphics:mask_1_graphics_7,x:33,y:0.5}).wait(1).to({graphics:mask_1_graphics_8,x:33,y:0.5}).wait(1).to({graphics:mask_1_graphics_9,x:33,y:0.5}).wait(1).to({graphics:mask_1_graphics_10,x:30.561,y:0.5}).wait(1).to({graphics:mask_1_graphics_11,x:28.608,y:0.5}).wait(1).to({graphics:mask_1_graphics_12,x:27.087,y:0.5}).wait(1).to({graphics:mask_1_graphics_13,x:25.944,y:0.5}).wait(1).to({graphics:mask_1_graphics_14,x:25.125,y:0.5}).wait(1).to({graphics:mask_1_graphics_15,x:24.576,y:0.5}).wait(1).to({graphics:mask_1_graphics_16,x:24.243,y:0.5}).wait(1).to({graphics:mask_1_graphics_17,x:24.072,y:0.5}).wait(1).to({graphics:mask_1_graphics_18,x:24.009,y:0.5}).wait(1).to({graphics:mask_1_graphics_19,x:24,y:0.5}).wait(41));

	// Layer_1
	this.instance_1 = new lib.Symbol37("synched",0);
	this.instance_1.parent = this;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-46.8,93,93.6);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_19 = new cjs.Graphics().p("ArPB9IAAj5IWfAAIAAD5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_graphics_19,x:1,y:-12.5}).wait(56));

	// text_1
	this.instance = new lib.Symbol31("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,20);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({y:0},14,cjs.Ease.cubicOut).wait(42));

	// Layer_3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_24 = new cjs.Graphics().p("ArKBpIAAjRIWVAAIAADRg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_1_graphics_24,x:0.5,y:10.5}).wait(51));

	// text_2
	this.instance_1 = new lib.Symbol32("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,20);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({y:0},14,cjs.Ease.cubicOut).wait(37));

	// Layer_4 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AEsAFIAAgJIC0AAIAAAJg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AEsAFIAAgJIC0AAIAAAJg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AEsAIIAAgPIC0AAIAAAPg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AEsAPIAAgdIC0AAIAAAdg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AEsAdIAAg5IC0AAIAAA5g");
	var mask_2_graphics_5 = new cjs.Graphics().p("AEsA0IAAhnIC0AAIAABng");
	var mask_2_graphics_6 = new cjs.Graphics().p("AEtBXIAAitIC0AAIAACtg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AEtCHIAAkNIC0AAIAAENg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AEtDGIAAmLIC0AAIAAGLg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AEtEYIAAovIC0AAIAAIvg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AEdEeIAAo7IC0AAIAAI7g");
	var mask_2_graphics_11 = new cjs.Graphics().p("AEPEiIAApDIC0AAIAAJDg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AEFElIAApJIC0AAIAAJJg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AD9EoIAApPIC0AAIAAJPg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AD3EqIAApTIC0AAIAAJTg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AD0ErIAApVIC0AAIAAJVg");
	var mask_2_graphics_16 = new cjs.Graphics().p("ADxErIAApVIC0AAIAAJVg");
	var mask_2_graphics_17 = new cjs.Graphics().p("ADwEsIAApXIC0AAIAAJXg");
	var mask_2_graphics_18 = new cjs.Graphics().p("ADwEsIAApXIC0AAIAAJXg");
	var mask_2_graphics_19 = new cjs.Graphics().p("ADwEsIAApXIC0AAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:48,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:48.0002,y:0.0001}).wait(1).to({graphics:mask_2_graphics_2,x:48.0019,y:0.0005}).wait(1).to({graphics:mask_2_graphics_3,x:48.0065,y:0.0019}).wait(1).to({graphics:mask_2_graphics_4,x:48.0154,y:0.0044}).wait(1).to({graphics:mask_2_graphics_5,x:48.03,y:0.0086}).wait(1).to({graphics:mask_2_graphics_6,x:48.0519,y:0.0148}).wait(1).to({graphics:mask_2_graphics_7,x:48.0823,y:0.0235}).wait(1).to({graphics:mask_2_graphics_8,x:48.1229,y:0.0351}).wait(1).to({graphics:mask_2_graphics_9,x:48.15,y:0.05}).wait(1).to({graphics:mask_2_graphics_10,x:46.4766,y:0.3075}).wait(1).to({graphics:mask_2_graphics_11,x:45.1366,y:0.5136}).wait(1).to({graphics:mask_2_graphics_12,x:44.093,y:0.6742}).wait(1).to({graphics:mask_2_graphics_13,x:43.3088,y:0.7948}).wait(1).to({graphics:mask_2_graphics_14,x:42.7469,y:0.8813}).wait(1).to({graphics:mask_2_graphics_15,x:42.3702,y:0.9392}).wait(1).to({graphics:mask_2_graphics_16,x:42.1417,y:0.9744}).wait(1).to({graphics:mask_2_graphics_17,x:42.0244,y:0.9924}).wait(1).to({graphics:mask_2_graphics_18,x:41.9812,y:0.9991}).wait(1).to({graphics:mask_2_graphics_19,x:42,y:1}).wait(56));

	// line2
	this.instance_2 = new lib.Symbol34("synched",0);
	this.instance_2.parent = this;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75));

	// Layer_4 copy (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AndAFIAAgJIC0AAIAAAJg");
	var mask_3_graphics_1 = new cjs.Graphics().p("AneAFIAAgJIC0AAIAAAJg");
	var mask_3_graphics_2 = new cjs.Graphics().p("AneAIIAAgPIC0AAIAAAPg");
	var mask_3_graphics_3 = new cjs.Graphics().p("AneAPIAAgdIC0AAIAAAdg");
	var mask_3_graphics_4 = new cjs.Graphics().p("AneAdIAAg5IC0AAIAAA5g");
	var mask_3_graphics_5 = new cjs.Graphics().p("AneA0IAAhnIC0AAIAABng");
	var mask_3_graphics_6 = new cjs.Graphics().p("AneBXIAAitIC0AAIAACtg");
	var mask_3_graphics_7 = new cjs.Graphics().p("AneCHIAAkNIC0AAIAAENg");
	var mask_3_graphics_8 = new cjs.Graphics().p("AnfDGIAAmLIC0AAIAAGLg");
	var mask_3_graphics_9 = new cjs.Graphics().p("AnfEYIAAovIC0AAIAAIvg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AnKEeIAAo7IC0AAIAAI7g");
	var mask_3_graphics_11 = new cjs.Graphics().p("Am6EiIAApDIC0AAIAAJDg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AmtElIAApJIC0AAIAAJJg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AmjEoIAApPIC0AAIAAJPg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AmcEqIAApTIC0AAIAAJTg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AmXErIAApVIC0AAIAAJVg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AmUErIAApVIC0AAIAAJVg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AmTEsIAApXIC0AAIAAJXg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AmSEsIAApXIC0AAIAAJXg");
	var mask_3_graphics_19 = new cjs.Graphics().p("AmTEsIAApXIC0AAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:-47.85,y:0}).wait(1).to({graphics:mask_3_graphics_1,x:-47.8502,y:0.0001}).wait(1).to({graphics:mask_3_graphics_2,x:-47.8519,y:0.0005}).wait(1).to({graphics:mask_3_graphics_3,x:-47.8565,y:0.0019}).wait(1).to({graphics:mask_3_graphics_4,x:-47.8654,y:0.0044}).wait(1).to({graphics:mask_3_graphics_5,x:-47.88,y:0.0086}).wait(1).to({graphics:mask_3_graphics_6,x:-47.9019,y:0.0148}).wait(1).to({graphics:mask_3_graphics_7,x:-47.9323,y:0.0235}).wait(1).to({graphics:mask_3_graphics_8,x:-47.9729,y:0.0351}).wait(1).to({graphics:mask_3_graphics_9,x:-48,y:0.05}).wait(1).to({graphics:mask_3_graphics_10,x:-45.9201,y:0.3075}).wait(1).to({graphics:mask_3_graphics_11,x:-44.2546,y:0.5136}).wait(1).to({graphics:mask_3_graphics_12,x:-42.9575,y:0.6742}).wait(1).to({graphics:mask_3_graphics_13,x:-41.9828,y:0.7948}).wait(1).to({graphics:mask_3_graphics_14,x:-41.2844,y:0.8813}).wait(1).to({graphics:mask_3_graphics_15,x:-40.8162,y:0.9392}).wait(1).to({graphics:mask_3_graphics_16,x:-40.5322,y:0.9744}).wait(1).to({graphics:mask_3_graphics_17,x:-40.3864,y:0.9924}).wait(1).to({graphics:mask_3_graphics_18,x:-40.3327,y:0.9991}).wait(1).to({graphics:mask_3_graphics_19,x:-40.35,y:1}).wait(56));

	// line1
	this.instance_3 = new lib.Symbol33("synched",0);
	this.instance_3.parent = this;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.5,-27.4,159,54.8);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(-0.05,0,1,1,0,0,0,97,44.4);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.55,-30.1,1,1,0,0,0,94.5,14.3);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.05,0,1,1,0,0,0,97,44.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-44.4,194.1,88.9);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.05,1,1,0,0,0,798.1,54);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E50004").s().p("Eh5yAIcIAAw3MDzlAAAIAAQ3g");
	this.shape.setTransform(-0.025,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E50004").s().p("Eh8sAIcIAAw3MD5ZAAAIAAQ3g");
	this.shape_1.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-798.1,-54,1596.2,108);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_198 = function() {
		if (!this.alreadyExecuted) {
			this.alreadyExecuted = true;
			this.loopNum = 1;
		} else {
			this.loopNum++;
			if (this.loopNum == 2) {
				this.stop();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(198).call(this.frame_198).wait(27));

	// Layer 1
	this.instance = new lib.Symbol25("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-292,0,0.4738,0.4738);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(225));

	// Layer_1
	this.instance_1 = new lib.Symbol4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,106,0.1879,0.1879,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(225));

	// Layer_11
	this.instance_2 = new lib.Symbol27("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(14,37.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(225));

	// Layer_2
	this.instance_3 = new lib.Symbol28("synched",0);
	this.instance_3.parent = this;
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(207).to({_off:false},0).to({alpha:1},17).wait(1));

	// txt3.png
	this.instance_4 = new lib.Symbol59("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(12,-4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(148).to({_off:false},0).wait(77));

	// Layer_12
	this.instance_5 = new lib.Symbol28("synched",0);
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:0},16).wait(119).to({startPosition:0},0).to({alpha:1},13).wait(77));

	// txt2.png
	this.instance_6 = new lib.Symbol54("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(10.5,15.55,1.3426,1.3426);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90).to({_off:false},0).wait(135));

	// rectangle.png
	this.instance_7 = new lib.Symbol36("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(303.9,0,0.8832,0.8832);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(78).to({_off:false},0).wait(147));

	// txt1.png
	this.instance_8 = new lib.Symbol29("synched",9,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(13.55,-4.1,0.8947,0.8947,0,0,0,0.1,-0.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:13.5,y:-4,alpha:1,startPosition:19},10,cjs.Ease.cubicOut).wait(51).to({startPosition:70},0).to({alpha:0,startPosition:74},11).to({_off:true},1).wait(143));

	// Layer_9
	this.instance_9 = new lib.Symbol26("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(245.9,-6.75,0.7677,0.7677,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:0.8531,scaleY:0.8531,x:233,y:-17.5},148).to({_off:true},1).wait(76));

	// Layer_13
	this.instance_10 = new lib.Symbol28("synched",0);
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(225));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-380,-126.6,760,242.8);


// stage content:
(lib.proplan_728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(348,-15,396,176.2);
// library properties:
lib.properties = {
	id: 'AB51C46B42470E4EA95EA177C7271832',
	width: 728,
	height: 90,
	fps: 27,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg_best.jpg", id:"bg_best"},
		{src:"images/rectangle.png", id:"rectangle"},
		{src:"images/txt1.png", id:"txt1"},
		{src:"images/txt2.png", id:"txt2"},
		{src:"images/txt3.png", id:"txt3"}
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
an.compositions['AB51C46B42470E4EA95EA177C7271832'] = {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
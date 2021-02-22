(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._1_1 = function() {
	this.initialize(img._1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,255);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,199);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,199);


(lib._4 = function() {
	this.initialize(img._4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,339,197);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.PACK = function() {
	this.initialize(img.PACK);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,170);


(lib.up = function() {
	this.initialize(img.up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);// helper functions:

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


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.PACK();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,245,170), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(-75,-112.5,1,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-75,-112.5,150,225), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-169.5,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-169.5,-98.5,339,197), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,300,199), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-150,-91.5,300,199), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,163,255), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	mask.setTransform(300,250);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C11F0D").ss(12,2,2).p("Ac6AAQAAl4iSlXQiMlMkAkAQkAkAlMiNQlXiRl5AAQl3AAlYCRQlMCNkAEAQkAEAiMFMQiSFXAAF4QAAF4CSFYQCMFMEAEBQEAEAFMCMQFYCRF3AAQF5AAFXiRQFMiMEAkAQEAkACMlNQCSlYAAl4g");
	this.shape.setTransform(301.975,256);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(111,65,382,382), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	mask_1.setTransform(300,250);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMgAgUgUQgJAJAAALQAAANAJAIQAJAJALAAQANAAAIgJQAJgIAAgNQAAgLgJgJQgIgJgNAAQgLAAgJAJgAAAAGIgBAAIAAAOIgKAAIAAgoIALAAQAGAAAFAEQAFAEAAAGQgBAHgGADIALANIgJAEgAgBgCIABAAQAGAAAAgEQAAgFgGAAIgBAAg");
	this.shape_1.setTransform(561.325,91.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF2A0C").s().p("AgnAoIAAhPIBPAAIAABPg");
	this.shape_2.setTransform(413.2,52.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF2A0C").s().p("AgnAoIAAhPIBPAAIAABPg");
	this.shape_3.setTransform(397.25,52.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF2A0C").s().p("AgnAoIAAhPIBPAAIAABPg");
	this.shape_4.setTransform(405.225,60.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF2A0C").s().p("AgnAoIAAhPIBPAAIAABPg");
	this.shape_5.setTransform(413.2,68.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF2A0C").s().p("AgnAoIAAhPIBPAAIAABPg");
	this.shape_6.setTransform(397.25,68.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_7.setTransform(405.225,60.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVBfIAAgKIADAAQAKAAADgDQADgCAAgDQAAgGgFgMIgKgYIhCAAIgLAbQgFAJAAAGQAAADADACQADADAMAAIADAAIAAAKIg+AAIAAgJIACgBQAJgBAFgDQAGgHAIgTIBBiVIAIAAIA+CXQAJATAFAEQAFAEALABIACAAIAAAKgAATAUIgag/IgbA/IA1AAg");
	this.shape_8.setTransform(539.4,60.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABDBfIhziNIAABoQAAAPADAEQAEAFAJAAIAJAAIAAAKIhEAAIAAgKIAJAAQALAAADgGQADgDAAgPIAAh8QgHgIgEgDQgDgDgIgCQgEgCgHAAIgDAAIAAgKIA1AAIBrCDIAAhgQAAgPgDgFQgFgFgJAAIgIAAIAAgKIBEAAIAAAKIgJAAQgKAAgEAGQgDAEAAAPIAACag");
	this.shape_9.setTransform(515.925,60.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoBdIAAgKIAJAAQAKAAAEgFQADgDAAgQIAAh0QAAgMgCgGQAAgCgEgCQgFgDgGAAIgJAAIAAgKIBRAAIAAAKIgJAAQgJAAgFAGQgCACAAARIAAB0QAAALABAGQABADAEACQAGACAEAAIAJAAIAAAKg");
	this.shape_10.setTransform(495.475,60.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAoBdIg9hUIgOAAIAAAyQAAAQADADQAEAFAJAAIAKAAIAAAKIhTAAIAAgKIAJAAQAKAAAFgGQACgEAAgOIAAh1QAAgPgDgEQgFgFgJAAIgJAAIAAgKIBFAAQAcAAAOAEQAOAFALALQAKANAAAQQAAASgMANQgLAMgUAEIAjAxQALAQAKAHQAKAGANABIADABIAAAJgAgjhLIAABHIAFAAQAZAAALgLQAMgKAAgQQAAgQgKgKQgJgKgQAAIgSACg");
	this.shape_11.setTransform(477.425,60.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgtBVQgQgLgHgSQgEgNAAghIAAhGQAAgQgEgEQgEgEgJAAIgJAAIAAgKIBTAAIAAAKIgKAAQgJAAgEAGQgDAEAAAOIAABOQAAAMACAMQABANAFAHQAFAHAJAFQAJAFAMAAQASAAANgIQAOgIAEgKQAFgOAAgaIAAhJQAAgPgDgEQgEgFgJAAIgKAAIAAgKIBFAAIAAAKIgKAAQgJAAgFAIQgCAEAAAOIAABIQAAAdgGAOQgFAQgRALQgQALgcAAQgeAAgQgKg");
	this.shape_12.setTransform(453.675,60.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhGBdIAAgKIAJAAQAKAAAEgGQACgDAAgPIAAh1QAAgPgCgEQgFgFgJAAIgJAAIAAgKIBEAAQAXAAAPAFQAOAFALANQAKANAAARQAAAYgPAOQgPAOgcAAIgbgEIAAAyQAAARAEACQADAFAJAAIAJAAIAAAKgAgOhKIAABHIALACIAHAAQANAAAJgKQAJgJAAgRQAAgLgEgKQgFgIgHgGQgIgEgLAAQgGAAgIACg");
	this.shape_13.setTransform(432.825,60.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AqhCMIAAkXIVCAAIAAEXg");
	this.shape_14.setTransform(487.5,60.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF2A0C").s().p("AiLCMIAAkXIEXAAIAAEXg");
	this.shape_15.setTransform(405.225,60.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiQCMIAAkXIEhAAIAAEXg");
	this.shape_16.setTransform(405.725,60.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("As7CWIAAkrIZ4AAIAAErg");
	this.shape_17.setTransform(473.05,60.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AkKGfQApgcAMghQAHgVAAg4IAAopQAAg4gHgVQgMgigpgbIG5AAIAAB0QgfgzgUgLQgfgRhdAAIiEAAIAAE5IDOAAQAjAAARgGQAQgGAagYIAABuQgegZgIgEQgRgIgrABIjKAAIAAEPQAABMAUAZQAYAgBUABQB3AABKg1QApgcAlgwIg7Clg");
	this.shape_18.setTransform(537,129.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AjWkCIAAIsQAAA2AIAUQAEAKAUAYIhrAAQAVgYAEgKQAHgUAAg2IAApcQgbgngfgZQghgag7gbICWAAIJOKuIAApCQAAg2gIgUQgEgKgUgYIBrAAQgVAYgEAKQgHAUAAA2IAALjg");
	this.shape_19.setTransform(461.575,130.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AlKFVQh5iGAAi/QAAjQCDiOQCGiQDLABQC9AAB9CJQB5CFAADCQAADOiDCNQiGCRjJAAQi/gBh9iJgAkLlDQhtBuAADJQAAC7BxB+QBvB7CjAAQCdABBkhkQBuhvAAjIQAAi9hyh9Qhvh7ijAAQieAAhjBkg");
	this.shape_20.setTransform(377.85,124.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#888888").s().p("AkKGfQApgcAMggQAHgWAAg4IAAoqQAAg2gHgWQgMgigpgbIG4AAIAABzQgegzgUgKQgfgRhdAAIiEAAIAAE5IDOAAQAjABARgIQAQgFAZgZIAABuQgcgYgKgFQgRgHgqAAIjKAAIAAEPQAABNATAZQAZAgBUAAQB3AABKg1QAogcAmgvIg7Clg");
	this.shape_21.setTransform(537.175,130.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#888888").s().p("AjWkCIAAIsQAAA1AIAVQAEAJAUAZIhrAAQAVgYAEgKQAHgUAAg2IAApcQgbgngfgZQghgag7gbICWAAIJOKuIAApCQAAg2gIgUQgEgKgUgYIBrAAQgVAYgDAKQgIAUAAA2IAALjg");
	this.shape_22.setTransform(460.575,131.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#888888").s().p("AlKFUQh5iFAAjAQAAjPCDiOQCGiQDLAAQC+AAB8CKQB5CFAADCQAADOiDCOQiFCPjKABQi+AAh+iLgAkKlEQhuBvAADJQgBC8ByB9QBvB7CjAAQCdAABjhjQBvhvAAjIQgBi9hxh+Qhvh7iiAAQieAAhjBkg");
	this.shape_23.setTransform(376.85,126.45);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(331.7,45.7,233.7,128.60000000000002), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	mask_2.setTransform(300,250);

	// Layer_3
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_24.setTransform(565.025,485.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgEQAFgGAHAAQAIAAAFAGQAGAEgBAHQABAIgGAFQgFAFgIAAQgHAAgFgFgAgJgJQgEAEAAAFQAAAGAEAEQAEAEAFAAQAGAAAEgEQADgEABgGQgBgFgDgEQgEgFgGAAQgFAAgEAFgAAFAJIgCgEQAAgBgBgBQAAAAgBAAQAAgBgBAAQAAAAAAAAIgCAAIAAAHIgEAAIAAgRIAGgBQAEABACABQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAADgEAAIAAAAQADABAAAEIABAEgAgCgFIAAAFIACAAQADAAABgCQAAgEgEAAg");
	this.shape_25.setTransform(564.65,474.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("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");
	this.shape_26.setTransform(407.225,481.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF2A0C").s().p("AgqArIAAhVIBVAAIAABVg");
	this.shape_27.setTransform(71.95,471.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF2A0C").s().p("AgqArIAAhVIBVAAIAABVg");
	this.shape_28.setTransform(54.7,471.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF2A0C").s().p("AgqArIAAhVIBVAAIAABVg");
	this.shape_29.setTransform(63.325,479.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF2A0C").s().p("AgqArIAAhVIBVAAIAABVg");
	this.shape_30.setTransform(71.95,488.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF2A0C").s().p("AgqArIAAhVIBVAAIAABVg");
	this.shape_31.setTransform(54.7,488.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AiLCMIAAkXIEXAAIAAEXg");
	this.shape_32.setTransform(63.325,479.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF2A0C").s().p("AiWCXIAAktIEtAAIAAEtg");
	this.shape_33.setTransform(63.325,479.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAYBoIAAgLIACAAQAMgBADgDQADgCAAgEQAAgFgGgOIgLgaIhIAAIgMAdQgFALAAAFQAAACADAEQAFADAMABIADAAIAAALIhEAAIAAgLIADAAQAKgCAEgDQAIgHAIgVIBHijIAJAAIBDClQAIASAHAHQAHAFAKABIADAAIAAALgAAUAVIgbhEIgeBEIA5AAg");
	this.shape_34.setTransform(209.075,479.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("ABJBnIh+iZIAABwQAAASAEAEQAEAFALAAIAJAAIAAALIhKAAIAAgLIAKAAQALAAAFgGQACgEAAgRIAAiGQgIgJgEgDQgEgEgIgCQgDgBgJAAIgDAAIAAgLIA6AAIB0COIAAhpQAAgSgDgCQgEgGgLAAIgKAAIAAgLIBLAAIAAALIgKAAQgLAAgFAHQgCADAAAQIAACog");
	this.shape_35.setTransform(183.575,480.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgsBlIAAgKIAKAAQALAAAEgHQADgEAAgQIAAh/QAAgNgBgFQgCgEgDgCQgFgCgHAAIgKAAIAAgMIBZAAIAAAMIgKAAQgKAAgFAFQgDAFAAAQIAAB/QAAAPACAEQABACADACQAGAEAGAAIAKAAIAAAKg");
	this.shape_36.setTransform(161.375,479.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAsBlIhChcIgKABIgEgBIgCAAIAAA3QAAAQADAFQAFAFAKABIAKAAIAAAKIhaAAIAAgKIALAAQAKAAAFgHQACgEAAgQIAAh/QAAgRgDgEQgFgGgJABIgLAAIAAgMIBLAAQAfAAAPAFQAQAFALANQALAOAAARQAAASgNAPQgLAOgXAEIAmA1QAOATAKAHQAIAFAQADIADAAIAAAKgAgmhRIAABMIAFAAQAbAAAMgLQAOgMAAgRQAAgRgLgLQgJgLgSAAQgJAAgLADg");
	this.shape_37.setTransform(141.725,479.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgxBbQgRgLgHgTQgGgOAAgkIAAhMQAAgRgDgFQgFgFgKABIgJAAIAAgMIBaAAIAAAMIgLAAQgLgBgEAHQgCAEAAAQIAABUQAAAOABANQACAOAGAHQAGAJAIAEQAKAFANAAQAUAAAOgIQAPgIAEgMQAGgLAAghIAAhOQAAgSgDgDQgFgGgJABIgLAAIAAgMIBLAAIAAAMIgLAAQgKgBgFAJQgCAEAAAQIAABOQgBAegGARQgGARgSAMQgSAMgeAAQggAAgSgMg");
	this.shape_38.setTransform(115.95,480);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhMBlIAAgKIAKAAQALAAAEgHQADgGAAgOIAAh/QAAgQgEgFQgEgFgKAAIgKAAIAAgLIBLAAQAZAAAQAFQARAHAKANQAKANABATQAAAagRAQQgRAPgdAAIgPgBIgPgDIAAA2QABARADAEQAFAGAIAAIALAAIAAAKgAgPhRIAABOIAMACIAIAAQAOAAAJgLQAKgLAAgRQAAgNgEgKQgFgJgJgGQgIgFgMAAQgGAAgJACg");
	this.shape_39.setTransform(93.3,479.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("ArbCXIAAktIW3AAIAAEtg");
	this.shape_40.setTransform(152.675,479.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMANQgFgGgBgHQABgHAFgEQAFgGAHAAQAHAAAGAGQAGAEgBAHQABAHgGAGQgGAFgHAAQgHAAgFgFgAgJgJQgEAEAAAFQAAAGAEAEQAEAFAFAAQAGAAAEgFQADgEABgGQgBgFgDgEQgEgEgGAAQgFAAgEAEgAAEAJIgBgEQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgCAAIAAAHIgEAAIAAgRIAGAAQAEAAACABQAAABABAAQAAAAABABQAAAAAAABQAAAAAAABQAAADgEAAQACABABAEIABAEgAgCAAIACAAQAEAAAAgCQAAgBgBgBQAAAAAAAAQgBgBgBAAQAAAAgBAAIgCAAg");
	this.shape_41.setTransform(229.75,466.35);

	var maskedShapeInstanceList = [this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(48.3,464.6,518.2,30.399999999999977), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	mask_3.setTransform(300,250);

	// Layer_3
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgJAAQAAgEADgDQADgEAEAAQAJAAAAALQAAAMgKAAQgJAAAAgMg");
	this.shape_42.setTransform(581.05,63.025);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AghA0QAIgDAFgFQAIgGAFgMIABgEIgBgEIgehTIAQAAIAWBHIAWhHIAPAAIgWBBQgPArgMAMQgKAKgIABg");
	this.shape_43.setTransform(574.875,61.525);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgHAtIAAhNIgZAAIAAgMIBBAAIAAAMIgaAAIAABNg");
	this.shape_44.setTransform(565.525,59.475);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AASAtQgDgEgEgOQgJgWgRAAIgDAAIAAAoIgPAAIAAhZIAPAAIAAAnIADAAIAegnIASAAIgiAoQAQADAKAYIAJAWg");
	this.shape_45.setTransform(556.675,59.475);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AghA0QAJgDAEgFQAHgFAFgNIACgEIgfhXIAQAAIAWBHIAAAAIAVhHIAQAAIgWBBQgPAsgMALQgKAKgIABg");
	this.shape_46.setTransform(546.7,61.525);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAdA8IgBgdIg3AAIgBAdIgMAAIAAgpIAHgBQAEgGAEgMQAEgQAAgTIAAgXIA2AAIAABMIAIABIgBApgAgIgfQAAAUgEAMIgGARIAkAAIAAhAIgaAAg");
	this.shape_47.setTransform(536.575,60.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgbAjQgMgNAAgVQAAgVAMgOQALgMAQAAQASAAALANQALANAAAUQAAAXgNANQgLALgQAAQgRAAgKgMgAgSgXQgGAKAAANQAAAPAHAKQAHAKAKAAQAKAAAIgKQAHgKAAgPQAAgNgGgJQgHgMgMAAQgLAAgHALg");
	this.shape_48.setTransform(526.425,59.475);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgmBBIAAh/IANAAIABAQIABAAQAJgSASAAQAPAAALANQAJANAAAUQAAAWgLAOQgLAMgPAAQgRAAgHgOIAAAAIAAAxgAgNgtQgHAGgCAJIAAAGIAAAXQADAHAFAFQAGAGAIAAQALAAAHgKQAGgIAAgQQAAgOgGgKQgHgKgLAAQgHAAgGAGg");
	this.shape_49.setTransform(515.8,61.225);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AATAtIAAhNIglAAIAABNIgPAAIAAhZIBDAAIAABZg");
	this.shape_50.setTransform(504.875,59.475);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AghA0QAIgDAFgFQAHgGAGgMIABgEIgghXIARAAIAWBHIABAAIAUhHIAQAAIgWBBQgPArgMAMQgKAKgIABg");
	this.shape_51.setTransform(489.8,61.525);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAdA8IgBgdIg3AAIgBAdIgMAAIAAgpIAHgBQAEgGAEgMQAEgQAAgTIAAgXIA2AAIAABMIAIABIgBApgAgIgfQAAARgEAPIgGARIAkAAIAAhAIgaAAg");
	this.shape_52.setTransform(479.675,60.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAUAuIAAgmIgLAAQgIAAgEAFQgEAEgDAHIgFAPIgDAHIgQAAQADgDACgIIAFgNQADgJAFgFQAEgEAFgBIAAAAQgIgBgHgFQgGgGAAgKQAAgMALgIQAJgGARAAQAMAAAOACIAABZgAgNgSQAAAIAHAFQAGADAIAAIAMAAIAAgfIgMgBQgVAAAAAQg");
	this.shape_53.setTransform(469.3,59.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgkAhQAFgBADgDQAGgEACgKIABgYIAAgkIA4AAIAABZIgPAAIAAhNIgbAAIAAAYQAAAUgDALQgCANgIAFQgHAGgJAAg");
	this.shape_54.setTransform(459.325,59.55);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgYAtIAAhZIAxAAIAAANIgiAAIAABMg");
	this.shape_55.setTransform(451.75,59.475);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAUAtIABhKIgmBKIgRAAIAAhZIAOAAIAAAmIgBAjIAAAAIAnhJIARAAIAABZg");
	this.shape_56.setTransform(442.1,59.475);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AggAtIAAhYQAMgCAOAAQAkAAAAAWQgBARgQAEIAAAAQAUADAAATQAAAagqAAIgXgBgAgSAjIAMAAQAYAAAAgQQAAgQgZAAIgLAAgAgRghIAAAbIALAAQAUAAAAgPQABgNgVAAIgLABg");
	this.shape_57.setTransform(432.1,59.475);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgbAjQgMgNAAgVQAAgVAMgOQALgMARAAQARAAALANQALANAAAUQAAAXgNANQgLALgQAAQgRAAgKgMgAgSgXQgGAKAAANQAAAPAHAKQAHAKAKAAQALAAAHgKQAHgKAAgPQAAgNgGgJQgHgMgMAAQgLAAgHALg");
	this.shape_58.setTransform(416.425,59.475);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgYAtIAAhZIAxAAIAAANIgjAAIAABMg");
	this.shape_59.setTransform(407.8,59.475);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgbAjQgMgNAAgVQAAgVAMgOQALgMARAAQARAAALANQALANAAAUQAAAXgNANQgMALgPAAQgRAAgKgMgAgRgXQgHAKAAANQAAAPAIAKQAHAKAJAAQAKAAAIgKQAGgKABgPQAAgNgGgJQgGgMgNAAQgLAAgGALg");
	this.shape_60.setTransform(398.1,59.475);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AggAsIAAhZIAPAAIAAAfIANgBQAlAAAAAdQAAANgJAIQgKALgYAAgAgRgCIAAAjIALABQAYAAAAgTQAAgTgZAAIgKACg");
	this.shape_61.setTransform(388.125,59.525);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AATAtIAAgpIglAAIAAApIgPAAIAAhZIAPAAIAAAkIAlAAIAAgkIAPAAIAABZg");
	this.shape_62.setTransform(377.725,59.475);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgyAtIAAhZIAQAAIAABMIAcAAIAAhMIAOAAIAABMIAcAAIAAhMIAOAAIAABZg");
	this.shape_63.setTransform(365.6,59.475);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgGA/IAAhZIAOAAIAABZgAgIg0QAAgKAIAAQAJAAAAAKQAAAKgJAAQgIAAAAgKg");
	this.shape_64.setTransform(356.125,57.675);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AATAtIAAgpIglAAIAAApIgPAAIAAhZIAPAAIAAAkIAlAAIAAgkIAPAAIAABZg");
	this.shape_65.setTransform(348.275,59.475);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AggAtIAAhYQAMgCAOAAQAjAAAAAWQAAARgRAEIAAAAQAVADAAATQAAAagqAAIgXgBgAgSAjIAMAAQAYAAAAgQQAAgQgZAAIgLAAgAgSghIAAAbIALAAQAWAAAAgPQAAgNgVAAg");
	this.shape_66.setTransform(338.375,59.475);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgbAjQgMgNAAgVQAAgVAMgOQALgMARAAQARAAALANQALANAAAUQAAAXgNANQgMALgPAAQgRAAgKgMgAgRgXQgHAKAAANQAAAPAIAKQAHAKAJAAQAKAAAIgKQAGgKABgPQAAgNgGgJQgGgMgNAAQgLAAgGALg");
	this.shape_67.setTransform(327.9,59.475);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgeAoIAEgLQAKAGAMAAQAIAAAFgFQAGgEAAgHQAAgPgXAAIgHAAIgBgKIAIAAQAIAAAGgFQAFgEAAgGQAAgGgEgEQgEgEgGAAQgKAAgKAHIgEgKQAMgIAPAAQAKAAAIAFQAJAGAAAMQAAAIgGAGQgFAGgHABQAJABAGAFQAHAHAAAJQAAAOgLAHQgKAGgNAAQgPAAgMgHg");
	this.shape_68.setTransform(318.175,59.475);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAdA8IgBgdIg3AAIgBAdIgMAAIAAgpIAHgBQAEgGAEgMQAEgQAAgTIAAgXIA2AAIAABMIAIABIgBApgAgIgfQAAAUgEAMIgGARIAkAAIAAhAIgaAAg");
	this.shape_69.setTransform(303.375,60.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgGA/IAAhZIANAAIAABZgAgIg0QAAgKAIAAQAJAAAAAKQAAAKgJAAQgIAAAAgKg");
	this.shape_70.setTransform(295.75,57.675);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AggAtIAAhYQAMgCAOAAQAjAAAAAWQAAARgRAEIAAAAQAVADAAATQAAAagqAAIgXgBgAgSAjIAMAAQAYAAAAgQQAAgQgZAAIgLAAgAgSghIAAAbIALAAQAWAAAAgPQAAgNgVAAg");
	this.shape_71.setTransform(288.525,59.475);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAUAuIAAgmIgKAAQgJAAgEAFQgEAEgDAHIgFAPIgDAHIgQAAQACgDADgIIAFgNQAEgJAEgFQAEgEAFgBIAAAAQgIgBgHgFQgGgGgBgKQAAgMAMgIQAJgGARAAQAMAAAOACIAABZgAgNgSQAAAIAIAFQAFADAHAAIANAAIAAgfIgMgBQgVAAAAAQg");
	this.shape_72.setTransform(272.8,59.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgUAjQgLgNAAgVQAAgUAMgNQAMgOATAAQAMAAAIAFIgDAMQgIgEgJAAQgNAAgIAKQgHAJAAAOQAAAQAIAJQAIAJALAAQAKAAAIgEIADAMQgJAFgOAAQgSAAgLgMg");
	this.shape_73.setTransform(263.675,59.475);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAVAtIABhKIgnBKIgRAAIAAhZIAOAAIAAAmIgBAjIAAAAIAmhJIASAAIAABZg");
	this.shape_74.setTransform(253.8,59.475);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgGAtIAAhNIgaAAIAAgMIBBAAIAAAMIgaAAIAABNg");
	this.shape_75.setTransform(244.25,59.475);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAVAuIAAgmIgMAAQgIAAgEAFQgFAEgGAWIgEAHIgQAAQACgDADgIIAGgNQADgJAEgFQAEgEAFgBIAAAAQgIgBgGgFQgIgGABgKQgBgMALgIQAKgGARAAQAMAAAOACIAABZgAgNgSQAAAIAIAFQAFADAIAAIANAAIAAgfIgNgBQgVAAAAAQg");
	this.shape_76.setTransform(234.7,59.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAUAtIAAgpIgnAAIAAApIgOAAIAAhZIAOAAIAAAkIAnAAIAAgkIAOAAIAABZg");
	this.shape_77.setTransform(225,59.475);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgeAoIAEgLQAKAGAMAAQAIAAAFgFQAGgEAAgHQAAgPgXAAIgHAAIAAgKIAHAAQAIAAAGgFQAGgEAAgGQAAgGgFgEQgEgEgGAAQgKAAgKAHIgEgKQAMgIAPAAQAKAAAIAFQAJAGAAAMQAAAIgGAGQgFAGgHABQAJABAGAFQAHAHAAAJQAAAOgLAHQgKAGgNAAQgPAAgMgHg");
	this.shape_78.setTransform(215.325,59.475);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgGA/IAAhZIAOAAIAABZgAgIg0QAAgKAIAAQAJAAAAAKQAAAKgJAAQgIAAAAgKg");
	this.shape_79.setTransform(208.575,57.675);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AglBBIgBh/IANAAIABAQIAAAAQAKgSATAAQAPAAAJANQAKANAAAUQAAAWgMAOQgKAMgPAAQgRAAgHgOIgBAAIAAAxgAgNgtQgGAGgCAJIgCAGIABAXQACAHAGAFQAGAGAIAAQALAAAHgKQAGgIAAgQQAAgOgGgKQgHgKgLAAQgHAAgGAGg");
	this.shape_80.setTransform(200.75,61.225);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAdA8IgBgdIg3AAIgBAdIgLAAIgBgpIAHgBQAEgGAEgMQAFgOAAgVIAAgXIA1AAIAABMIAIABIAAApgAgHgfQAAASgFAOQgCAJgEAIIAlAAIAAhAIgaAAg");
	this.shape_81.setTransform(189.625,60.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgGA/IAAhZIANAAIAABZgAgIg0QAAgKAIAAQAJAAAAAKQAAAKgJAAQgIAAAAgKg");
	this.shape_82.setTransform(182.025,57.675);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AggAtIAAhYQAMgCAOAAQAkAAgBAWQAAARgRAEIAAAAQAVADAAATQAAAagqAAIgXgBgAgSAjIAMAAQAYAAAAgQQAAgQgZAAIgLAAgAgSghIAAAbIAMAAQAVAAgBgPQABgNgVAAg");
	this.shape_83.setTransform(174.8,59.475);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgZAjQgKgNAAgVQAAgUAKgNQALgOAQAAQASAAAJAPQAHALAAAQIgBAHIg4AAQAAAfAbAAQANAAAJgEIADALQgKAGgRAAQgRAAgMgMgAgVgIIArAAQAAgKgFgHQgFgKgLAAQgSAAgEAbg");
	this.shape_84.setTransform(159.55,59.475);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAoAtIgHgVQgHgTgRAAIgCAAIAAAoIgNAAIAAgoIgDAAQgRAAgGAUIgIAUIgOAAIAJgZQAHgVARgCIgggpIARAAIAbAnIADAAIAAgnIANAAIAAAnIADAAIAbgnIARAAIggApQARACAHAVQAFARAEAIg");
	this.shape_85.setTransform(148.425,59.475);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgcAjQgLgNAAgVQAAgVAMgOQALgMARAAQARAAALANQALANAAAUQAAAXgNANQgLALgQAAQgRAAgLgMgAgRgXQgHAKABANQgBAPAIAKQAGAKAKAAQAKAAAIgKQAGgKAAgPQABgNgGgJQgGgMgMAAQgMAAgGALg");
	this.shape_86.setTransform(136.9,59.475);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAhAtIgEhKIAAAAIgZBKIgJAAIgPgtQgEgLgEgSIgBAAIgDBKIgOAAIAGhZIATAAIAVBFIAXhFIASAAIAGBZg");
	this.shape_87.setTransform(125.475,59.475);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAVAuIAAgmIgMAAQgIAAgEAFQgFAEgGAWIgEAHIgQAAIAFgLIAGgNQADgJAEgFQAEgEAGgBIAAAAQgKgBgFgFQgHgGAAgKQAAgMAKgIQALgGAQAAQAMAAAOACIAABZgAgNgSQAAAIAIAFQAFADAIAAIANAAIAAgfIgNgBQgVAAAAAQg");
	this.shape_88.setTransform(108.8,59.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAUAtIAAgpIgnAAIAAApIgOAAIAAhZIAOAAIAAAkIAnAAIAAgkIAOAAIAABZg");
	this.shape_89.setTransform(99.1,59.475);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AATAtIAAgpIglAAIAAApIgPAAIAAhZIAPAAIAAAkIAlAAIAAgkIAPAAIAABZg");
	this.shape_90.setTransform(88.6,59.475);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgYAjQgLgNAAgVQAAgUALgNQAKgOARAAQASAAAIAPQAHALAAAQIAAAHIg5AAQAAAQAJAIQAHAHALAAQANAAAKgEIACALQgKAGgRAAQgRAAgLgMgAgOgaQgFAIgCAKIArAAQAAgKgEgHQgFgKgMAAQgJAAgGAJg");
	this.shape_91.setTransform(78.4,59.475);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AApAtQgEgHgEgOQgGgTgRAAIgDAAIAAAoIgNAAIAAgoIgCAAQgJAAgGAEQgFAFgEALIgIAUIgOAAIAJgZQAIgVAQgCIgggpIARAAIAbAnIADAAIAAgnIANAAIAAAnIADAAIAbgnIARAAIggApQARACAHAVIAJAZg");
	this.shape_92.setTransform(67.275,59.475);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgZAnQgGgHAAgLQAAgQAMgIQANgJAXABIAAgCQAAgVgSAAQgNAAgIAHIgEgLQALgIAPAAQAfAAAAAlIABA2IgNAAIgBgLIgBAAQgIANgQAAQgLAAgHgIgAgRATQAAAQAOAAQAOAAAFgPIABgFIAAgPQgiAAAAATg");
	this.shape_93.setTransform(55.875,59.475);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgmBBIAAh/IANAAIABAQIAAAAQAKgSASAAQAQAAAJANQAKANAAAUQAAAWgLAOQgKAMgQAAQgQAAgJgOIAAAxgAgNgtQgHAGgCAJIgBAGIABAXQACAHAGAFQAGAGAIAAQALAAAHgKQAGgIAAgQQAAgOgGgKQgHgKgLAAQgHAAgGAGg");
	this.shape_94.setTransform(46.1,61.225);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgdAxQgIgPAAgaQAAgfANgTQAKgQAYgEIAUgGIgBAOQgFACgMACQgTAEgJANQgHAMgCASIABAAQAIgUATAAQAQAAAJALQAKAMAAAUQAAAXgKANQgKAMgSAAQgTABgKgUgAgRABQgFAIAAALQABANAFALQAHANAKgBQALABAGgLQAFgKAAgPQAAgNgFgIQgGgLgMAAQgMAAgFAMg");
	this.shape_95.setTransform(35.3,57.35);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgbAjQgMgNAAgVQAAgVAMgOQALgMARAAQARAAALANQALANAAAUQAAAXgNANQgLALgQAAQgRAAgKgMgAgSgXQgGAKAAANQAAAPAHAKQAHAKAKAAQALAAAHgKQAHgKAAgPQAAgNgGgJQgHgMgMAAQgLAAgHALg");
	this.shape_96.setTransform(24.775,59.475);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgiA5IADgNQAMAIAOAAQALAAAHgHQAHgGAAgLQAAgNgKgGQgIgFgMAAIgGAAIAAgMIAGAAQAKAAAIgHQAIgGAAgKQAAgJgFgGQgHgFgIAAQgLAAgNAIIgEgMQAOgJAQAAQAOAAAKAIQAJAIAAAPQAAALgHAJQgGAIgLADQANABAIAIQAHAIABAOQAAASgOAKQgKAIgRAAQgQAAgNgIg");
	this.shape_97.setTransform(14.5,57.675);

	var maskedShapeInstanceList = [this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(11,50.5,571.1,17.599999999999994), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	mask.setTransform(300,250);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag2EqQgJAAAAgJIAAnTQgBgEgFAAIiXAAQgJAAAAgJIAAhiQAAgJAJAAIG5AAQAIAAAAAJIAABiQAAAJgIAAIiXAAQgFAAAAAEIAAHTQAAAJgJAAg");
	this.shape.setTransform(546.5,340.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACWEqQgJAAgCgJIgjhoIjQAAIghBoQgDAJgIAAIhzAAQgKAAAEgJIDNpCQADgJAIAAIBuAAQAJAAACAJIDKJCQAEAJgKAAgAhEBMICJAAIhDjRIgCAAg");
	this.shape_1.setTransform(500.875,340.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag3EqQgJAAAAgJIAAnTQAAgEgFAAIiXAAQgJAAAAgJIAAhiQAAgJAJAAIG5AAQAJAAAAAJIAABiQAAAJgJAAIiXAAQgFAAAAAEIAAHTQAAAJgJAAg");
	this.shape_2.setTransform(455.375,340.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjYEqQgJAAAAgJIAApCQAAgJAJAAIBvAAQAJAAAAAJIAADIQAAAGAFAAIBqAAQBkgBA4A2QA3AyAABWQAABXg3A0Qg4A1hkAAgAhgAgIAACVQAAAGAFAAIBjAAQAqAAAXgWQAYgWAAgmQAAgmgYgVQgXgTgqgBIhjAAQgFAAAAAGg");
	this.shape_3.setTransform(413.5,340.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Aj9EsQgKAAABgJIAAhiQgBgIAKAAIALAAQAtAAAYglQAdgwAAh2IAAkRQAAgIAJAAIGHAAQAHAAAAAIIAAJDQAAAJgGAAIhzAAQgDAAgCgDQgCgDgBgDIAAnTQAAgFgEAAIiOAAQgFAAgBAFIAACpQABCpgyBJQguBEhiAAg");
	this.shape_4.setTransform(354.3,341.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AimEsQgJAAAAgJIAAhiQAAgIAJAAIAjAAQAbAAARgKQAOgKAIgSIAMgbIjBmZQgDgFADgDQABgCAEAAIB2AAQAKAAADAIIB1EIIACAAIBokIIADgGQADgCAGAAIB2AAQAIAAgEAJIjQHmQgsBohnAAg");
	this.shape_5.setTransform(305.5765,341.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjbDsQgGgEAGgJIA3hNQABgCADgBQAEAAACACQBHA0BPAAQAnAAAbgUQAdgUAAggQAAglgZgUQgYgTgoAAIg/AAQgIAAAAgIIAAhaQAAgJAIAAIA/AAQAlAAAWgTQAVgTAAgjQAAgfgYgSQgYgQgoAAQhGAAg8AsQgJAGgEgGIg0hNQgDgFAAgCQAAgDAEgCQBZhCByAAQBiAAA4AtQA4AuAABOQAAAqgTAiQgUAjgjARIAAACQAmAMAXAkQAXAlAAAyQAABRg+AzQg8AxhfAAQiVAAhMhIg");
	this.shape_6.setTransform(255.725,340.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ai+EqQgJAAAAgJIAApCQAAgJAJAAIF+AAQAIAAAAAJIAABeQAAAJgIAAIkBAAQgFAAAAAFIAAB2QAAAGAFAAIDVAAQAJAAAAAJIAABcQAAAIgJAAIjVAAQgFABAAAFIAAB7QAAAGAFAAIEBAAQAIAAAAAJIAABdQAAAJgIAAg");
	this.shape_7.setTransform(207.475,340.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjXEqQgIAAAAgJIAApCQAAgJAIAAIDnAAQBhABA4A1QA3A0AABWQAABWg3A0Qg5A1hgAAIhpAAQgFAAAAAFIAADHQAAAJgJAAgAhei1IAACXQAAAEAFAAIBhAAQApABAXgWQAXgWAAglQAAgkgXgWQgXgWgpAAIhhAAQgFAAAAAFg");
	this.shape_8.setTransform(157.975,340.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(135.6,310.1,433.9,61.599999999999966), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	mask_4.setTransform(300,250);

	// Layer_3
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#C11F0D").s().p("AiXBAQgLABAAgLIAAhrQAAgLALAAIEvAAQAFAAADADQADADAAAFIAABrQAAAEgDADQgDADgFAAg");
	this.shape_98.setTransform(40.925,243.25);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C11F0D").s().p("ACLHQQgEAAgDgEQgDgDAAgEIAAm6IgDAAIkFG8QgEAGgEACIgHABIh8AAQgEAAgDgEQgCgDAAgEIAAq5QAAgEADgDQADgDADAAICJAAQAEAAACADQADADAAAEIAAG4IADAAIEFm5QAGgJAJAAIB8AAQAJAAAAAKIAAK5QAAAEgDADQgDAEgDAAgAigm2QgDgOAJgBIBHgKQAKgBACAJQAQAwA3AAQA2AAASgwQACgJALABIBFAKQAJABgDAOQgZB+iHAAQiHAAgZh+g");
	this.shape_99.setTransform(531.625,228.8643);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#C11F0D").s().p("ACMFnQgFAAgDgDQgDgDAAgEIAAm6IgEAAIkEG8QgEAGgEABIgHABIh7AAQgKAAAAgKIAAq6QAAgEACgCQAEgDAEAAICHAAQAFAAADADQACACAAAEIAAG5IADAAIEGm6QAEgIAKAAIB8AAQAJAAAAAJIAAK6QAAAEgCADQgEADgDAAg");
	this.shape_100.setTransform(462.5,239.325);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#C11F0D").s().p("ADMFnQgKAAAAgKIAAmUIgEAAIiGEuQgFAOgPAAIhIAAQgNAAgHgOIiFkuIgEAAIAAGUQAAAEgDADQgDADgEAAIh4AAQgKAAAAgKIAAq5QAAgKAKAAIB+AAQAMAAAFAKIC0GZIAFAAICymZQAFgKAMAAIB8AAQAEAAADADQADADAAAEIAAK5QAAAEgDADQgDADgEAAg");
	this.shape_101.setTransform(388.375,239.325);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#C11F0D").s().p("ACLFnQgEAAgDgDQgDgDAAgEIAAm6IgDAAIkFG8QgEAGgEABIgHABIh8AAQgEAAgDgDQgCgDAAgEIAAq6QAAgDADgDQADgDADAAICJAAQAEAAACADQADADAAADIAAG5IADAAIEFm6QAGgIAJAAIB8AAQAJAAAAAJIAAK6QAAAEgDADQgDADgDAAg");
	this.shape_102.setTransform(314.225,239.325);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#C11F0D").s().p("ADcGtQgDAAgCgDQgDgDAAgEIAAh8QAAgGgGAAImaAAQgHAAAAAGIAAB8QAAAEgCADQgEADgEAAIh8AAQgDAAgDgDQgDgDAAgEIAAkDQAAgEAEgDQACgDAEAAIApAAQAOABACgJQAqhVARhaQAThsAAi3IAAhfQAAgKALAAIHTAAQAEABADADQADADAAAEIAAIyQAAAHAFgBIA8AAQAEAAADADQADADAAAEIAAEDQAAAEgCADQgDADgEAAgAg6kcIAAALQABCLgUBuQgRBmgiBBQgEAIALgBIDuAAQAGABAAgHIAAmsQAAgGgGAAIioAAQgHAAAAAGg");
	this.shape_103.setTransform(242.75,246.35);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C11F0D").s().p("ACLFnQgEAAgDgDQgDgDAAgEIAAm6IgDAAIkFG8QgDAGgEABIgIABIh8AAQgJAAAAgKIAAq6QAAgEACgCQAEgDADAAICIAAQAFAAACADQADACAAAEIAAG5IAEAAIEFm6QAEgIAKAAIB7AAQAKAAAAAJIAAK6QAAAEgCADQgEADgEAAg");
	this.shape_104.setTransform(171.55,239.325);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#C11F0D").s().p("Aj/FnQgKAAAAgKIAAq5QAAgKAKAAIEXAAQByAAA7A1QA4AyAABYQAABqhTAuIAAAEQAnAOAbApQAeAuAAA8QAABohCA2QhAAzh3AAgAhuA8IAACnQAAAGAGAAIB2AAQAvAAAZgXQAZgYAAgqQAAgqgZgYQgagYguAAIh2AAQgGAAAAAGgAhujiIAACbQAAAHAGAAIBtAAQAsAAAZgXQAZgWAAgoQAAgngZgWQgYgWgtAAIhtAAQgGAAAAAGg");
	this.shape_105.setTransform(106.875,239.325);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("Ag3ErQgJAAAAgJIAApDQAAgJAJAAIBvAAQAIAAAAAJIAAJDQAAAJgIAAg");
	this.shape_106.setTransform(553.2,138.275);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("ABwErQgKAAABgJIAAjmQAAgGgGAAIjBAAQgGAAAAAGIAADmQAAAJgIAAIhwAAQgJAAAAgJIAApDQAAgJAJAAIBwAAQAIAAAAAJIAADgQAAAFAGAAIDBAAQAGAAAAgFIAAjgQgBgJAKAAIBvAAQAJAAAAAJIAAJDQAAAJgJAAg");
	this.shape_107.setTransform(513.35,138.275);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AFbEvQg0gBghgWQghgXgUg0IglhiQgNgggVgNQgRgKgcAAIgYAAQgEAAAAAFIAADoQAAAJgJAAIhvAAQgJAAABgJIAAjoQAAgFgGAAIgYAAQgcAAgRAKQgWANgLAgIgnBiQgUA0ggAXQggAWg2ABIgqAAQgIAAAAgJIAAhiQAAgJAIABIAIAAQAXgBAMgIQAOgJAJgYIAihfQATgzApgKIAAgDQgegLgWg0IgdhKQgJgWgLgJQgMgJgYAAIgJAAQgJAAAAgIIAAheQAAgJAJAAIAlAAQAzgBAgAWQAhAXAUAzIAmBeQAWA0AxAAIAZAAQAGAAAAgFIAAjgQgBgJAJAAIBvAAQAJAAAAAJIAADgQAAAFAEAAIAYAAQAyAAAVg0IAmheQAVgzAhgXQAggWAzABIAlAAQAJAAAAAJIAABeQAAAIgJAAIgIAAQgZAAgMAJQgLAJgKAWIgdBKQgUA0gfALIAAADQAqAKASAzIAjBfQAIAYANAJQANAIAWABIAJAAQAJgBAAAJIAABiQAAAJgJAAg");
	this.shape_108.setTransform(443,138.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AB0ErQgEAAgCgDQgDgDAAgDIAAlvIgCAAIjZFxQgFAHgHAAIhnAAQgIAAAAgJIAApEQAAgIAIAAIBxAAQAIAAAAAIIAAFuIADAAIDYlvQAFgHAIAAIBmAAQAIAAAAAIIAAJEQAAADgCADQgCADgEAAg");
	this.shape_109.setTransform(372.275,138.275);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("Ag3ErQgIAAAAgJIAAnTQAAgFgGAAIiXAAQgJAAAAgJIAAhiQAAgJAJAAIG5AAQAJAAAAAJIAABiQAAAJgJAAIiXAAQgFAAAAAFIAAHTQAAAJgJAAg");
	this.shape_110.setTransform(319.175,138.275);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AiAEQQg1glgMhAQgBgIAIgDIBhgTQAHAAADAHQAJAaASAPQAVAQAeAAQAhAAAUgWQAUgVAAgjQAAgngXgXQgWgWglAAIgaAAQgJAAAAgJIAAhUQAAgJAJAAIAYAAQAhAAAUgUQAUgUAAgiQAAgggSgTQgTgUgeAAQg1AAgPA4QgCAHgIgBIhggTQgIgBABgIQALg9AwglQAzgnBNAAQBVAAAyAuQAwAtAABKQAAAmgRAgQgRAgggAVIAAACQAfAPAVAhQAaApAAA2QAABRg4AzQg2AyhVAAQhMAAg0gkg");
	this.shape_111.setTransform(248.6444,138.275);

	var maskedShapeInstanceList = [this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(24.7,107.5,535.4,181.8), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	mask_5.setTransform(300,250);

	// Layer_3
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgHAJQgCgEAAgFQAAgFACgDQADgEAEABQAKAAAAALQAAANgKAAQgEAAgDgEg");
	this.shape_112.setTransform(547.6,111.75);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgHBCIAAheIAPAAIAABegAgJg3QAAgKAJAAQAJAAAAAKQAAALgJAAQgIAAgBgLg");
	this.shape_113.setTransform(543.85,106.125);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AglAjQAFgBADgDQAFgFADgKQABgIAAgRIAAgmIA6AAIAABeIgPAAIAAhRIgdAAIAAAZQAAAVgCALQgDAOgIAFQgGAGgLAAg");
	this.shape_114.setTransform(536.9,108.075);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AghAwIAAheQAMgCAPAAQAlAAAAAYQAAARgSAFIAAAAQAVADAAAUQABAcgtAAIgXgBgAgTAkIANABQAZAAAAgRQAAgQgaAAIgMAAgAgTgjIAAAcIAMAAQAXAAgBgPQAAgOgVAAg");
	this.shape_115.setTransform(528.75,108.025);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgHBCIAAheIAPAAIAABegAgJg3QAAgEADgDQADgDADAAQAKAAAAAKQAAAFgDADQgDADgEAAQgJAAAAgLg");
	this.shape_116.setTransform(522.225,106.125);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AAeA/IAAgfIg7AAIgBAfIgMAAIAAgrIAHAAQAFgIADgMQAFgQAAgVIAAgZIA5AAIAABSIAIAAIAAArgAgIghQAAATgEAQIgHARIAmAAIAAhEIgbAAg");
	this.shape_117.setTransform(515.425,109.525);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgdAlQgMgOAAgWQAAgXAMgNQAMgOASAAQASAAALAOQAMAOAAAVQAAAYgOAOQgMAMgQAAQgRAAgMgNgAgTgYQgGAKAAAOQAAAQAHAKQAIALAKAAQALAAAIgLQAHgKAAgQQAAgNgGgKQgHgNgNAAQgLAAgIAMg");
	this.shape_118.setTransform(506.35,108.025);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgaAwIAAhfIA0AAIAAAPIgkAAIAABQg");
	this.shape_119.setTransform(498.85,108);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgdAlQgMgOAAgWQAAgXAMgNQANgOAQAAQATAAAMAOQALAOAAAVQAAAYgOAOQgMAMgQAAQgSAAgLgNgAgTgYQgGAKAAAOQAAAQAHAKQAHALALAAQALAAAHgLQAIgKAAgQQAAgNgGgKQgHgNgNAAQgLAAgIAMg");
	this.shape_120.setTransform(486.35,108.025);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAfA/IgBgfIg6AAIgBAfIgMAAIgCgrIAIAAQAGgLACgJQAGgQAAgVIAAgZIA3AAIAABSIAJAAIgBArgAgIghQAAATgEAQQgCAGgFALIAmAAIAAhEIgbAAg");
	this.shape_121.setTransform(476.8,109.525);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgdAlQgMgOAAgWQAAgXANgNQAMgOAQAAQATAAAMAOQALANAAAWQAAAYgOAOQgMAMgQAAQgRAAgMgNgAgSgYQgHAKAAAOQAAAQAHAKQAIALAKAAQAMAAAGgLQAIgKAAgQQAAgNgGgKQgHgNgNAAQgLAAgHAMg");
	this.shape_122.setTransform(467.7,108.025);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AAsA/IAAgfIhkAAIAAheIAPAAIAABRIAeAAIAAhRIAOAAIAABRIAeAAIAAhRIAPAAIAABSIAJAAIgBArg");
	this.shape_123.setTransform(456.775,109.525);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAWBDIABhPIgoBPIgTAAIAAheIAPAAIgBBNIABAAIAOgdIAagwIASAAIAABegAgWhCIALAAQABAPAKAAQAKAAACgPIALAAQgBAZgWgBQgVABgBgZg");
	this.shape_124.setTransform(441.125,106.05);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgHBCIAAheIAPAAIAABegAgJg3QAAgEADgDQADgDADAAQAKAAAAAKQAAAFgDADQgDADgEAAQgJAAAAgLg");
	this.shape_125.setTransform(434.525,106.125);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AAaA/IAAgfIhAAAIAAheIAPAAIAABRIAnAAIAAhRIAPAAIAABSIAJAAIgBArg");
	this.shape_126.setTransform(428.1,109.525);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgbApQgGgHAAgMQAAgiAyAAIAAgCQAAgWgSAAQgNAAgKAHIgDgLQAMgJAPAAQAhAAAAAnIAAAjQAAANABAJIgOAAIgBgMIgBAAQgJAPgQAAQgMAAgIgJgAgSAUQAAARAPAAQAHAAAGgFQAFgFACgGIABgGIAAgPIgDAAQghAAAAAUg");
	this.shape_127.setTransform(418.625,108.025);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAeA/IAAgfIg7AAIgBAfIgMAAIgBgrIAHAAQAHgKACgKQAFgRAAgUIAAgZIA4AAIAABSIAJAAIAAArgAgIghQAAATgEAQIgIARIAnAAIAAhEIgbAAg");
	this.shape_128.setTransform(409.75,109.525);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAVAwIAAgsIgoAAIAAAsIgQAAIAAhfIAQAAIAAAnIAoAAIAAgnIAPAAIAABfg");
	this.shape_129.setTransform(400.5,108);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgZAkQgMgNAAgWQAAgVALgOQALgPASAAQATAAAJAQQAHAMAAARIgBAHIg7AAQABARAIAIQAIAIAMAAQAMAAALgFIADANQgNAGgPAAQgTAAgLgOgAgPgbQgFAIgCALIAtAAQAAgLgEgHQgGgKgMAAQgKAAgGAJg");
	this.shape_130.setTransform(391.375,108.025);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AAiAwIgDhPIAAAAIgbBOIgKAAIgYhOIAAAAIgEBPIgOAAIAGhfIAUAAIAWBJIAAAAIAYhJIATAAIAGBfg");
	this.shape_131.setTransform(381.325,108);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgdAlQgMgOAAgWQAAgXAMgNQAMgOASAAQASAAALAOQAMANAAAWQAAAYgNAOQgNAMgQAAQgRAAgMgNgAgTgYQgGAKAAAOQAAAQAHAKQAIALAKAAQALAAAIgLQAHgKAAgQQAAgNgGgKQgHgNgMAAQgMAAgIAMg");
	this.shape_132.setTransform(370.9,108.025);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAUAwQgEgGgEgNQgJgXgTAAIgDAAIAAAqIgPAAIAAhfIAPAAIAAAqIAEAAIAfgqIATAAIglArQASACAKAaIAJAYg");
	this.shape_133.setTransform(362.7,108);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgaAkQgLgNAAgWQAAgVALgOQALgPARAAQATAAAKAQQAHAMAAARIgBAHIg7AAQAAARAJAIQAIAIALAAQAMAAAMgFIADANQgNAGgQAAQgSAAgMgOgAgPgbQgGAIgBALIAtAAQAAgLgEgHQgGgKgMAAQgKAAgGAJg");
	this.shape_134.setTransform(353.625,108.025);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgnBEIgBiFIAOAAIABARQAKgTATAAQAQAAAKAOQALANAAAVQAAAXgMAOQgLAOgQAAQgRAAgJgPIAAAAIAAAzgAgOgvQgHAFgCAKIgBAHIAAARIABAHQADAHAFAGQAHAGAIAAQALAAAIgKQAGgJABgRQAAgPgHgKQgHgKgMAAQgHAAgHAGg");
	this.shape_135.setTransform(344.45,109.85);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgiAvIAAheIAQAAIAAAgIAOgBQAnAAAAAgQAAANgJAIQgMALgZAAIgXgBgAgSgCIAAAlIALABQAKAAAHgEQAJgFAAgLQAAgTgaAAg");
	this.shape_136.setTransform(331.275,108.05);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgVAkQgMgNAAgWQAAgVANgOQANgPATAAQANAAAJAFIgEAOQgGgFgMAAQgNAAgIALQgIAKAAAOQAAAQAJAKQAIAKAMAAQAJAAAKgFIADANQgMAGgNAAQgSAAgMgOg");
	this.shape_137.setTransform(322.95,108.025);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgZAkQgMgNAAgWQAAgVALgOQALgPARAAQATAAAKAQQAHAMAAARIgBAHIg7AAQAAARAJAIQAIAIAMAAQAMAAALgFIADANQgNAGgQAAQgSAAgLgOgAgPgbQgFAIgCALIAtAAQAAgLgEgHQgGgKgMAAQgKAAgGAJg");
	this.shape_138.setTransform(314.525,108.025);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgGAwIAAhRIgbAAIAAgOIBEAAIAAAOIgbAAIAABRg");
	this.shape_139.setTransform(306.65,108);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAWBDIABhPIgpBPIgSAAIAAheIAPAAIgBBNIABAAIAOgdIAZgwIATAAIAABegAgWhCIALAAQABAPAKAAQAKAAACgPIALAAQgCAZgVgBQgUABgCgZg");
	this.shape_140.setTransform(298.225,106.05);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgiA3QAGgCAHgHQAIgGAFgNIACgEIghhbIARAAIASA4QADAHACAMIABAAIAFgTIARg4IAQAAIgXBEQgQAtgMANQgLAKgIABg");
	this.shape_141.setTransform(289.225,110.175);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AAiAwIgBgtIgCgiIAAAAIgaBOIgLAAIgYhOIAAAAIgEBPIgOAAIAGhfIAUAAIAWBJIAAAAIAYhJIATAAIAGBfg");
	this.shape_142.setTransform(279.525,108);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AAVAwIAAgpIACgmIgBAAIgnBPIgSAAIAAhfIAOAAIAAApIgBAlIAAAAIAohOIASAAIAABfg");
	this.shape_143.setTransform(269.05,108);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgoBEIAAiFIAOAAIABARIAAAAQAKgTATAAQARAAAJAOQALANAAAVQAAAXgMAOQgLAOgQAAQgSAAgIgPIAAAAIAAAzgAgOgvQgHAFgCAKIgBAHIAAARIABAHQACAHAGAGQAHAGAIAAQALAAAHgKQAHgJAAgRQAAgPgGgKQgIgKgLAAQgIAAgGAGg");
	this.shape_144.setTransform(259.5,109.85);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgHAwIAAhRIgaAAIAAgOIBDAAIAAAOIgbAAIAABRg");
	this.shape_145.setTransform(250.65,108);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgdAlQgMgOAAgWQAAgXANgNQAMgOARAAQASAAALAOQAMANAAAWQAAAYgOAOQgMAMgQAAQgRAAgMgNgAgSgYQgHAKAAAOQAAAQAHAKQAIALAKAAQALAAAIgLQAHgKAAgQQAAgNgGgKQgHgNgNAAQgLAAgHAMg");
	this.shape_146.setTransform(242.325,108.025);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AAnBSIgBgfIhLAAIgBAfIgMAAIgBgtIAJAAQAJgTADgLQAGgTAAgkIAAghIBBAAIAAB2IALAAIgBAtgAgKgqQAAAigGATQgEAOgGALIA0AAIAAhnIgkAAg");
	this.shape_147.setTransform(232.025,107.725);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgHAJQgCgDAAgGQAAgEACgEQADgDAEAAQAKAAAAALQAAAMgKAAQgEABgDgEg");
	this.shape_148.setTransform(547.6,89.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgHBCIAAheIAPAAIAABegAgJg3QAAgKAJAAQAJAAAAAKQAAALgJAAQgIAAgBgLg");
	this.shape_149.setTransform(543.85,83.875);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAbA/IgBgfIhBAAIAAheIAQAAIAABRIAnAAIAAhRIAPAAIAABSIAJAAIgBArg");
	this.shape_150.setTransform(537.425,87.275);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgdAlQgMgOAAgWQAAgXAMgNQANgOARAAQATAAAKAOQAMANAAAWQAAAYgNAOQgMAMgRAAQgRAAgMgNgAgTgYQgGAKAAAOQAAAQAIAKQAHALAKAAQALAAAIgLQAHgKAAgQQAAgNgGgKQgHgNgMAAQgMAAgIAMg");
	this.shape_151.setTransform(527.5,85.775);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgoBEIAAiFIAOAAIABAQIAAAAQAKgSATAAQAQAAALAOQAKANAAAVQAAAYgMAOQgLAMgQAAQgSAAgHgOIgBAAIAAAzgAgOgwQgHAHgCAJIgBAHIAAARIABAHQACAHAHAGQAGAGAIAAQALAAAIgKQAGgKAAgQQABgPgHgJQgHgLgMAAQgIAAgGAFg");
	this.shape_152.setTransform(517.95,87.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgbA4QgLgKAAgOQAAgYAXgKIAAAAQgTgKAAgTQAAgPALgKQAKgJAOAAQAQAAAJAKQAJAIAAANQAAAVgTAJIAAABQAXAJAAAXQAAAQgLALQgLAKgRAAQgRAAgKgKgAgWAdQAAAKAGAHQAGAIAKAAQALAAAGgHQAGgGAAgKQAAgUgYgIQgVAHAAATgAgOgvQgFAGAAAJQAAARAVAGQASgGAAgRQAAgJgFgFQgFgHgKAAQgIAAgGAGg");
	this.shape_153.setTransform(504.325,84.125);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAEBAIAAhvIgTAMIgDgNIAYgPIANAAIAAB/g");
	this.shape_154.setTransform(495.575,84.15);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgbAxQgKgRgBggQAAgeALgSQALgRARAAQASAAAKARQAKARAAAfQAAAfgKASQgLARgSAAQgRAAgKgRgAgQgmQgGAOAAAZQAAAYAGAOQAHAOAJAAQAYAAgBg1QABg0gYAAQgJAAgHAOg");
	this.shape_155.setTransform(488.25,84.125);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgkBBIAAgKIAMgOQAYgZAIgNQAKgOAAgOQAAgZgVAAQgNABgMAKIgFgMQAPgNASAAQAQAAAJAMQAJAKAAAQQAAAQgLAQQgIANgUAWIgJAJIAAABIAzAAIAAAOg");
	this.shape_156.setTransform(479.475,84);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgiA3QAGgCAHgHQAIgGAFgNIACgEIghhbIARAAIASA4QADAHACAMIABAAIAFgTIARg4IAQAAIgXBEQgQAtgMANQgLAKgIABg");
	this.shape_157.setTransform(467.075,87.925);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AAWAwIAAgpIABgmIAAAAIgoBPIgTAAIAAhfIAPAAIAAAoIgBAmIABAAIAOgeIAagwIASAAIAABfg");
	this.shape_158.setTransform(454.225,85.75);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AAjAwIgEhPIgBAAIgZBOIgLAAIgPgvQgEgNgEgRIgBAAIgEBOIgOAAIAGhfIATAAIAXBJIAAAAQAGgTAEgMIAOgqIATAAIAGBfg");
	this.shape_159.setTransform(443.75,85.75);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AAWAwIAAgpIABgmIgBAAIgOAeIgaAxIgSAAIAAhfIAPAAIgBBOIABAAQAIgTAGgLIAZgwIATAAIAABfg");
	this.shape_160.setTransform(433.275,85.75);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AAUAwIAAgrIgnAAIAAArIgQAAIAAhfIAQAAIAAAnIAnAAIAAgnIAQAAIAABfg");
	this.shape_161.setTransform(423.725,85.75);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgaAkQgLgNAAgWQAAgVALgOQALgPARAAQATAAAKAQQAHAMAAARIgBAHIg7AAQAAARAJAIQAIAIALAAQAMAAAMgFIADANQgNAGgQAAQgSAAgMgOgAgPgbQgGAIgBALIAtAAQAAgLgEgHQgGgKgMAAQgKAAgGAJg");
	this.shape_162.setTransform(414.625,85.775);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AAeA/IAAgfIg7AAIgBAfIgMAAIAAgrIAHAAQAFgIADgMQAFgQAAgVIAAgZIA5AAIAABSIAIAAIAAArgAgIghQAAATgEAQIgHARIAmAAIAAhEIgbAAg");
	this.shape_163.setTransform(405.475,87.275);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgaAkQgLgNAAgWQAAgVALgOQALgPARAAQATAAAKAQQAHAMAAARIgBAHIg7AAQAAARAJAIQAIAIAMAAQAMAAALgFIADANQgNAGgPAAQgTAAgMgOgAgQgbQgEAIgBALIAsAAQAAgLgFgHQgFgKgMAAQgKAAgHAJg");
	this.shape_164.setTransform(396.6,85.775);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgiAwIAAheQAMgCAQAAQAlAAAAAYQAAARgSAFIAAAAQAWADAAAUQAAAcgsAAIgZgBgAgTAkIANABQAZAAAAgRQAAgQgbAAIgLAAgAgTgjIAAAcIAMAAQAWAAAAgPQAAgOgWAAg");
	this.shape_165.setTransform(388.125,85.775);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgdAlQgMgOAAgWQAAgXANgNQAMgOAQAAQATAAAMAOQALAOAAAVQAAAYgOAOQgMAMgQAAQgSAAgLgNgAgTgYQgGAKAAAOQAAAQAHAKQAHALALAAQALAAAHgLQAIgKAAgQQAAgNgGgKQgHgNgNAAQgLAAgIAMg");
	this.shape_166.setTransform(378.7,85.775);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgnBEIgBiFIANAAIABAQIABAAQAJgSAVAAQAQAAAKAOQAKANAAAVQAAAYgMAOQgLAMgRAAQgQAAgJgOIAAAAIAAAzgAgOgwQgHAHgCAJIgBAHIAAAYQADAHAGAGQAHAGAIAAQALAAAHgKQAHgJAAgRQAAgPgHgJQgGgLgMAAQgHAAgHAFg");
	this.shape_167.setTransform(369.15,87.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AAUAwIAAhRIgnAAIAABRIgQAAIAAhfIBGAAIAABfg");
	this.shape_168.setTransform(359.25,85.75);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgCgVIAQgDQgHAcgJAUIgLABQAIgYADgWg");
	this.shape_169.setTransform(348.7,90.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgaApQgHgHAAgMQAAgiAzAAIAAgCQgBgWgSAAQgNAAgKAHIgDgLQAMgJAQAAQAgAAAAAnIABA5IgOAAIgBgMIAAAAQgKAPgQAAQgMAAgHgJgAgRAUQAAARAOAAQAPAAAFgQIABgGIAAgPIgDAAQggAAAAAUg");
	this.shape_170.setTransform(342.65,85.775);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAVAwIAAgrIgoAAIAAArIgQAAIAAhfIAQAAIAAAnIAoAAIAAgnIAPAAIAABfg");
	this.shape_171.setTransform(334,85.75);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgGBCIAAheIAOAAIAABegAgIg3QAAgKAIAAQAEAAADADQACADABAEQgBALgJAAQgIAAAAgLg");
	this.shape_172.setTransform(327.35,83.875);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgnBEIgBiFIAOAAIABAQIAAAAQAKgSAUAAQAPAAALAOQAKANAAAVQAAAYgMAOQgLAMgQAAQgRAAgJgOIAAAzgAgOgwQgHAHgCAJIgBAHIABAYQACAHAHAGQAGAGAIAAQALAAAHgKQAHgJAAgRQAAgPgGgJQgHgLgMAAQgHAAgHAFg");
	this.shape_173.setTransform(320.725,87.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgjA3QAHgCAHgHQAIgGAFgNIABgEIgBgEIgfhXIARAAIAXBLIAAAAIAXhLIAQAAIgXBEQgQAtgNANQgKAKgJABg");
	this.shape_174.setTransform(311.325,87.925);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AAcBCIAAh1Ig2AAIAAB1IgQAAIAAiEIBVAAIAACEg");
	this.shape_175.setTransform(301.6,83.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgiAvIAAheIAQAAIAAAgIAOgBQAnAAAAAfQAAAOgJAIQgMALgZAAIgXgBgAgSgDIAAAmIAMABQAJAAAHgEQAJgGAAgKQAAgUgaAAg");
	this.shape_176.setTransform(544.175,63.55);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AAVAwIAAgsIgpAAIAAAsIgPAAIAAhfIAPAAIAAAnIApAAIAAgnIAPAAIAABfg");
	this.shape_177.setTransform(534.85,63.525);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgZAkQgMgNAAgWQAAgVALgOQALgPASAAQATAAAJAQQAHAMAAARIgBAHIg7AAQABARAIAIQAIAIAMAAQAMAAALgFIADANQgNAGgQAAQgSAAgLgOgAgPgbQgFAIgCALIAtAAQAAgLgEgHQgGgKgMAAQgKAAgGAJg");
	this.shape_178.setTransform(525.725,63.525);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AAqAwIgHgWQgIgVgRAAIgCAAIAAArIgPAAIAAgrIgCAAQgJAAgGAFQgGAEgEAMIgIAWIgPAAIAKgbQAHgWASgCIgigsIASAAIAdAqIACAAIAAgqIAPAAIAAAqIACAAIAcgqIASAAIgiAsQATACAHAWIAKAbg");
	this.shape_179.setTransform(515.65,63.525);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AAfA/IgBgeIg7AAIgBAeIgLAAIgBgrIAHAAQAGgLADgJQAEgTAAgSIAAgZIA4AAIAABSIAJAAIgBArgAgIghQAAATgFAQQgCAIgEAJIAnAAIAAhEIgcAAg");
	this.shape_180.setTransform(504.55,65.025);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgHBDIAAhfIAPAAIAABfgAgJg3QAAgEADgEQADgDADAAQAKAAAAALQAAAEgDAEQgDADgEAAQgJAAAAgLg");
	this.shape_181.setTransform(498.125,61.65);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AglAjQAEgBAEgDQAGgFACgKIABgZIAAgmIA7AAIAABeIgQAAIAAhRIgcAAIAAAZQAAApgOAKQgHAGgKAAg");
	this.shape_182.setTransform(491.2,63.575);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgVAkQgMgNAAgWQAAgVANgOQANgPATAAQAOAAAIAFIgEAOQgGgFgMAAQgNAAgIALQgIAKAAAOQAAAQAIAKQAJAKAMAAQAJAAAKgFIACANQgLAGgNAAQgTAAgLgOg");
	this.shape_183.setTransform(483.125,63.525);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgdAlQgMgOAAgWQAAgXANgNQALgOASAAQASAAALAOQAMANAAAWQAAAYgOAOQgMAMgQAAQgRAAgMgNgAgTgYQgGAKAAAOQAAAQAHAKQAIALAKAAQALAAAHgLQAIgKAAgQQAAgNgGgKQgHgNgNAAQgMAAgHAMg");
	this.shape_184.setTransform(474.275,63.525);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AAeA/IAAgeIg7AAIgBAeIgMAAIAAgrIAHAAQAFgIADgMQAFgQAAgVIAAgZIA5AAIAABSIAIAAIAAArgAgIghQAAATgEAQQgEAMgDAFIAmAAIAAhEIgbAAg");
	this.shape_185.setTransform(464.725,65.025);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AAWAwIABhPIgoBPIgTAAIAAhfIAPAAIgBBOIABAAIAOgeIAagwIASAAIAABfg");
	this.shape_186.setTransform(451.575,63.525);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AAjAwIgEhPIAAAAIgaBOIgLAAIgPgvQgEgNgEgSIgBAAIgEBPIgOAAIAHhfIATAAIAWBJIAAAAIAYhJIATAAIAGBfg");
	this.shape_187.setTransform(441.075,63.525);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgaApQgHgHAAgMQAAgiAzAAIAAgCQAAgWgTAAQgNAAgKAHIgDgLQAMgJAPAAQAhAAAAAnIAAAjIABAXIgOAAIgBgNIgBAAQgIAPgRAAQgNAAgGgJgAgRAUQAAARAOAAQAPAAAFgQIABgGIAAgPIgDAAQghAAABAUg");
	this.shape_188.setTransform(431.05,63.525);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgHAwIAAhRIgbAAIAAgOIBFAAIAAAOIgbAAIAABRg");
	this.shape_189.setTransform(423.475,63.525);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgbApQgGgHAAgMQAAgiAyAAIAAgCQAAgWgSAAQgNAAgJAHIgEgLQAMgJAPAAQAhAAAAAnIAAAjIABAXIgOAAIgBgNIgBAAQgJAPgQAAQgMAAgIgJgAgSAUQAAARAPAAQAQAAAEgQIAAgGIAAgPIgCAAQggAAgBAUg");
	this.shape_190.setTransform(415.6,63.525);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgHAwIAAhRIgbAAIAAgOIBFAAIAAAOIgbAAIAABRg");
	this.shape_191.setTransform(408.025,63.525);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgiAvIAAheIAQAAIAAAgIAOgBQAQAAAKAGQANAJAAAQQAAAOgJAIQgMALgZAAIgXgBgAgSgDIAAAmIALABQAKAAAHgEQAJgGAAgKQAAgUgaAAg");
	this.shape_192.setTransform(401.375,63.55);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AglAjQAEgBAEgDQAFgFACgKIABgZIAAgmIA7AAIAABeIgQAAIAAhRIgcAAIAAAZQAAApgNAKQgGAGgLAAg");
	this.shape_193.setTransform(391.8,63.575);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgiA3QAHgCAGgHQAJgHAEgMIACgEIghhbIARAAIASA4QADAHACAMIAXhLIAQAAIgXBEQgQAtgMANQgLAKgJABg");
	this.shape_194.setTransform(384.075,65.675);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AggAqIAFgMQALAHALAAQAJAAAGgEQAFgFABgIQAAgPgZAAIgHAAIgBgMIAIAAQAJABAGgFQAGgEAAgHQAAgGgEgEQgGgEgFAAQgMAAgJAHIgEgLQANgJAPABQALgBAIAGQAJAHAAAMQAAAJgFAGQgGAGgIABIAAABQAKABAHAFQAGAHABAJQAAAPgMAHQgKAHgOAAQgRAAgMgIg");
	this.shape_195.setTransform(376.25,63.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgZAkQgMgNAAgWQAAgVALgOQALgPARAAQATAAAKAQQAHAMAAARIAAAHIg8AAQABARAIAIQAHAIAMAAQANAAALgFIADANQgNAGgQAAQgSAAgLgOgAgPgbQgGAIgBALIAtAAQAAgLgEgHQgGgKgMAAQgKAAgGAJg");
	this.shape_196.setTransform(368.3,63.525);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgnBEIgBiFIAOAAIAAAQIABAAQAKgSAUAAQAQAAAJAOQALANAAAVQAAAXgMAPQgLAMgQAAQgSABgIgQIAAAAIAAA0gAgOgwQgHAHgCAJIgBAHIAAARIABAGQACAJAGAFQAHAGAIAAQAMAAAGgKQAIgKAAgQQAAgPgIgJQgGgLgMAAQgIAAgGAFg");
	this.shape_197.setTransform(359.15,65.35);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgaApQgHgHAAgMQAAgiAzAAIAAgCQAAgWgTAAQgNAAgKAHIgDgLQAMgJAQAAQAgAAAAAnIABA6IgOAAIgBgNIgBAAQgJAPgQAAQgMAAgHgJgAgRAUQAAARAOAAQAHAAAGgFQAFgEACgHIABgGIAAgPIgDAAQggAAAAAUg");
	this.shape_198.setTransform(345.55,63.525);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgkA8IAEgNQANAIAOAAQAMAAAHgHQAHgHAAgLQAAgOgLgHQgIgFgMAAIgIAAIAAgMIAHAAQALAAAJgHQAIgHAAgKQAAgKgGgGQgGgGgJAAQgMAAgNAJIgEgMQAOgLASAAQAOAAAKAJQAKAJAAAPQAAAMgHAJQgHAJgLACIAAABQANABAIAIQAIAJAAAOQAAAUgNAKQgMAJgRAAQgSAAgNgJg");
	this.shape_199.setTransform(337.175,61.625);

	var maskedShapeInstanceList = [this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(226.9,54.8,321.80000000000007,62.3), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	mask_6.setTransform(300,250);

	// Layer_3
	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag9BUIAAinQAAgCADAAIAeAAQADAAAAACIAAA6QAAACABAAIAcAAQAcAAAPAPQAPAOAAAZQAAAZgPAPQgPAPgcAAIg+AAQgDAAAAgCgAACA2QAMAAAGgGQAHgHAAgLQAAgWgZAAIgaAAQgBAAAAABIAAAsQAAABABAAg");
	this.shape_200.setTransform(534.8,436.675);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("Ag7BWQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAinQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAfAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAAA6QAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIAcAAQAbAAAQAPQAPAOAAAZQAAAZgPAPQgQAPgbAAgAgZAJIAAAsQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIAaAAQAMAAAGgGQAHgHAAgLQAAgWgZAAIgaAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_201.setTransform(534.8,436.675);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AgRBUIAAiGQAAgCgBAAIgqAAQgCAAAAgDIAAgcQAAgCACAAIB5AAQACAAAAACIAAAcQAAADgCAAIgqAAQgBAAAAACIAACGQAAACgDAAIgdAAQgDAAAAgCg");
	this.shape_202.setTransform(520.3,436.675);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgOBWQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAiGQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgpAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAgcQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIB4AAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAAcQAAABAAABQAAAAgBAAQAAABAAAAQgBAAgBAAIgpAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABIAACGQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_203.setTransform(520.3,436.675);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag3AuQgEgOAAggQAAgfAEgPQAOgqAsAAQAUAAAPAKQAPAKAHASQABACgCABIgbAMQgCACgBgDQgIgUgSAAQgSAAgGAUQgCAHAAAdQAAAdACAIQAGATASAAQASAAAIgUQABgCACABIAbAMQACABgBACQgHASgPALQgPAKgUAAQgsAAgOgrg");
	this.shape_204.setTransform(506.3667,436.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("Ag3AvQgEgOAAghQAAgfAEgPQAOgqAsAAQAUAAAPAKQAPAKAHASQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgbANQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgIgVgSAAQgSABgGATQgCAIAAAcQAAAdACAIQAGATASAAQASAAAIgTQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAbAMQAAABABAAQAAAAAAAAQAAABAAAAQAAABAAAAQgHATgPAKQgPAKgUAAQgsAAgOgqg");
	this.shape_205.setTransform(506.3667,436.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AACgHQALAAAHgGQAGgGAAgLQAAgKgGgGQgHgHgLAAIgaAAQgBAAAAACIAAArQAAABABAAgAg9BUIAAinQAAgCADAAIA+AAQAbAAAQAPQAPAPAAAZQAAAZgQAOQgPAQgbAAIgcAAQgBAAAAABIAAA6QAAACgDAAIgeAAQgDAAAAgCg");
	this.shape_206.setTransform(492.275,436.675);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("Ag6BWQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAinQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIA+AAQAbAAAQAPQAPAPAAAZQAAAZgQAOQgPAQgbAAIgcAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIAAA6QAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAgAgZgzIAAArQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAaAAQALAAAHgGQAGgGAAgLQAAgKgGgGQgHgHgLAAIgaAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABg");
	this.shape_207.setTransform(492.275,436.675);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag2BUIAAinQAAgCACAAIBpAAQACAAAAACIAAAbQAAADgCAAIhGAAQgCAAAAACIAAAiQAAABACAAIA5AAQADAAAAADIAAAaQAAACgDAAIg5AAQgCAAAAACIAAAkQAAABACAAIBGAAQACAAAAADIAAAbQAAACgCAAIhpAAQgCAAAAgCg");
	this.shape_208.setTransform(478.1,436.675);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgzBWQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAinQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAABAAIBoAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAAbQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhGAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAAiQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIA5AAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAaQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIg5AAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAAkQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIBGAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAbQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_209.setTransform(478.1,436.675);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AhiBUIAAinQAAgCACAAIAfAAQACAAAAACIAACHQAAABABAAIAsAAQABAAAAgBIAAiHQAAgCACAAIAeAAQADAAAAACIAACHQAAABABAAIArAAQACAAAAgBIAAiHQAAgCACAAIAfAAQACAAAAACIAACnQAAACgCAAIjBAAQgCAAAAgCg");
	this.shape_210.setTransform(459.65,436.675);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AhgBWQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAinQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIAfAAQABAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAIAACHQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIArAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAiHQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIAeAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAACHQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIArAAQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAAAIAAiHQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAfAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAACnQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAg");
	this.shape_211.setTransform(459.65,436.675);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AAaAZIgahNIAAAAIgZBNgAhCBTIA5imQABgCACAAIAOAAQACAAABACIA4CmQABADgCAAIgRAAQgCAAgBgDIgNglIhBAAIgNAlQAAADgDAAIgRAAQgCAAABgDg");
	this.shape_212.setTransform(534.4343,405.825);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AAxBWQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBIgNglIhBAAIgNAlQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgRAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAgBIA5imQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAOAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIA4CmQAAABAAABQAAAAAAABQAAAAAAAAQgBAAAAAAgAgZAZIAzAAIgahNIAAAAg");
	this.shape_213.setTransform(534.4343,405.825);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AAiBTIAAhBQAAgCgCABQgYAHgRAAQgtAAAAgrIAAhAQAAgCACAAIAQAAQADAAAAACIAAA7QAAAbAdAAQATAAAQgGQADgBAAgCIAAhNQAAgCACAAIARAAQACAAAAACIAACmQAAADgCAAIgRAAQgCAAAAgDg");
	this.shape_214.setTransform(519.525,405.825);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AAkBWQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBIAAhBQAAgBAAAAQgBAAAAAAQAAgBAAAAQgBABAAAAQgYAHgRAAQgtAAAAgrIAAhAQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAQAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAAA7QAAAbAdAAQATAAAQgGQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIAAhNQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIARAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABIAACmQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_215.setTransform(519.525,405.825);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AgtBUIAAgQQAAgDADAAIAJAAQAOAAAGgPIAGgOIg2h3QgBgDADAAIASAAQACAAABACIAoBcIAAAAIAlhcQABgCADAAIARAAQACAAAAADIg6CNQgLAcgVAAIgOAAQgDAAAAgCg");
	this.shape_216.setTransform(505.3657,405.85);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgqBXQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgQQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIAJAAQAOAAAGgPIAGgOIg2h3QAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIASAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABIAoBcIAAAAIAlhcQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAIARAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIg6CNQgLAdgVAAg");
	this.shape_217.setTransform(505.3657,405.85);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag9BTIAAimQAAgCACAAIARAAQACAAAAACIAABHQAAABACAAIAUAAQAPAAAGgTIANggQAFgNAHgGQAHgFALAAIAHAAQADAAAAADIAAAQQAAACgDAAIgCAAQgIAAgDADQgEACgCAJIgJAYQgIAVgMADIAAABQAOACAHASIANAhQADAKADACQADADAIAAIAEAAQACAAAAACIAAAQQAAADgCAAIgKAAQgLAAgIgGQgHgGgFgNIgPglQgEgQgPAAIgXAAQgCAAAAACIAABIQAAADgCAAIgRAAQgCAAAAgDg");
	this.shape_218.setTransform(491.475,405.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AAyBXQgLAAgIgGQgHgGgFgNIgPglQgEgPgPgBIgXAAQgBAAAAABQAAAAAAAAQgBAAAAAAQAAABAAAAIAABJQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAIgRAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAinQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIARAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAABHQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAIAUAAQAPABAGgUIANggQAFgNAHgGQAHgFALAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABIAAAQQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgCAAQgIAAgDADQgEACgCAJIgJAYQgIAVgMADIAAABQAOACAHASIANAhQADAJADADQADADAIAAIAEAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAAARQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_219.setTransform(491.475,405.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AgyAxQgFgPAAgiQAAggAFgPQAMgpApAAQAmAAAPAjQABACgCABIgPAIQgCABgBgDQgLgXgXAAQgZAAgIAaQgDAIAAAhQAAAiADAJQAIAZAZAAQAXAAALgXQABgCACABIAPAHQABACAAACQgPAigmAAQgpAAgMgog");
	this.shape_220.setTransform(476.8417,405.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgyAxQgFgQAAghQAAghAFgPQAMgoApAAQAmAAAPAjQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgPAIQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgLgXgXAAQgZAAgIAaQgDAIAAAhQAAAiADAIQAIAaAZAAQAXAAALgXQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAPAIQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQgPAjgmAAQgpAAgMgog");
	this.shape_221.setTransform(476.8417,405.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag8BTIAAimQAAgCADAAIARAAQACAAAAACIAACBIABAAIBMiCQABgBACAAIAQAAQADAAAAACIAACmQAAADgDAAIgQAAQgDAAAAgDIAAiBIgBAAIhMCDIgCABIgRAAQgDAAAAgDg");
	this.shape_222.setTransform(461.95,405.825);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AAqBWQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAiBIgBAAIhMCDIgCABIgRAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBIAAimQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIARAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAACBIABAAIBMiCIADgBIAQAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAABABIAACmQgBABAAABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_223.setTransform(461.95,405.825);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AhDBUIAAgQQAAgDACAAIADAAQAQAAAHgOQAKgSAAguIAAhHQAAgCACAAIBdAAQADAAAAACIAACnQAAADgCAAIgSAAQgCAAAAgDIAAiSQAAgCgBAAIg1AAQgBAAAAACIAAA3QAAAzgNAWQgLAVgZAAIgIAAQgCAAAAgCg");
	this.shape_224.setTransform(445.3,405.85);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AhBBXQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgQQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIACAAQARAAAHgOQAKgSAAguIAAhGQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIBdAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABIAACmQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAIgSAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAiSQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAIg0AAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBABAAAAIAAA3QAAAzgMAWQgMAWgYAAg");
	this.shape_225.setTransform(445.3,405.85);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag4BTIAAimQAAgCADAAIBiAAQADAAAAACIAAAQQAAADgDAAIhOAAQgBAAAAABIAAAwQAAABABAAIAnAAQAXAAAOAOQANANAAAXQAAAWgNAOQgOAOgXAAIg7AAQgDAAAAgDgAAEBBQAfAAAAgdQAAgegfAAIglAAQgBAAAAACIAAA3QAAACABAAg");
	this.shape_226.setTransform(431.1,405.825);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("Ag1BWQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIAAimQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIBiAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAABIAAAQQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAIhNAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAAAwQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIAmAAQAXAAAOAOQAOANAAAXQAAAWgOAOQgOAOgXAAgAgiAIIAAA3QAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAIAkAAQAfAAAAgdQAAgegfAAIgkAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABg");
	this.shape_227.setTransform(431.1,405.825);

	var maskedShapeInstanceList = [this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(424.5,395.9,117.70000000000005,50.700000000000045), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	mask_1.setTransform(300,250);

	// Layer_3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ApkWrQkbh4jZjZQjajah4kbQh8klAAlAQAAk/B8klQB4kbDajaQDajaEah3QElh8E/AAQFBAAEkB8QEbB3DaDaQDZDaB4EbQB8ElAAE/QAAFAh8ElQh4EbjZDaQjaDZkbB4QkkB8lBAAQk/AAklh8g");
	this.shape_9.setTransform(301.975,256);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E49D87").s().p("Ap+XpQknh9jjjjQjjjjh9knQiBkxAAlOQAAlNCBkxQB9kmDjjkQDjjjEnh9QExiBFNAAQFOAAExCBQEnB9DjDjQDjDkB9EmQCBExAAFNQAAFOiBExQh9EnjjDjQjjDjknB9QkxCBlOAAQlNAAkxiBg");
	this.shape_10.setTransform(301.975,256);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C11F0D").s().p("ArPaoQlMiMkAkAQkAkAiMlMQiSlYAAl4QAAl3CSlYQCMlMEAkAQEAkAFMiMQFYiSF3AAQF5AAFXCSQFMCMEAEAQEAEACMFMQCSFYAAF3QAAF4iSFYQiMFMkAEAQkAEAlMCMQlXCSl5AAQl3AAlYiSg");
	this.shape_11.setTransform(301.975,256);

	var maskedShapeInstanceList = [this.shape_9,this.shape_10,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(117,71,370,370), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AhFNIQgdgdAAgqQAAgpAdgeQAdgdApAAQApAAAdAdQAeAeAAApQAAAqgeAdQgdAdgpAAQgpAAgdgdgAmWMrQgngMgUgkQgUgkALgoQAKghAbgUQAbgTAgAAQAOAAAPAEQAnALAUAlQAUAkgMAoQgLAoglATQgXANgYAAQgOAAgPgEgAFMMiQgkgUgMgnQgMgoAUgkQAUglAogMQAPgEANAAQAhAAAaAUQAbAUAKAgQAMAogUAkQgUAlgoALQgPAFgOAAQgYAAgXgNgAsMKAQgjgXgJgoQgJgoAXgjQAOgWAXgMQAVgMAaAAQAdAAAZAQQAjAWAIAoQAJApgWAjQgXAjgoAIQgMADgLAAQgbAAgZgQgALDKNQgogJgXgjQgWgjAJgoQAJgpAigWQAZgQAdAAQAaAAAWAMQAXAMAOAWQAWAjgJAoQgIApgjAWQgZAQgcAAQgLAAgMgCgAv/GVQgpgDgcggQgbgfADgpQADgqAfgbQAcgYAmAAQAtAAAeAiQAcAggDApQgDApggAbQgcAZgkAAIgIAAgAO5F8QgggcgDgpQgDgpAbgfQAfgjAtAAQAlAAAdAYQAfAcADApQADApgbAgQgcAfgpADIgIAAQgkAAgcgYgAzqBMQgngOgRgmQgRglAOgmQAOgnAmgRQATgJAXAAQAcAAAZAPQAZAQANAbQARAmgPAmQgOAmgmASQgUAJgVAAQgSAAgRgHgASgBJQgmgRgPgnQgOgmARgmQAMgbAagQQAYgQAdAAQAWAAAUAKQAlARAPAnQAOAmgRAlQgRAmgnAOQgSAHgRAAQgVAAgUgJgA1vkwQgigZgGgpQgFgpAZghQAYghApgGIAPgBQAlAAAcAYQAcAYAFAmQAGApgZAhQgYAhgpAGIgQABQggAAgagUgAUnkeQgpgGgZghQgZghAGgpQAFgmAdgYQAcgYAlAAIAOABQApAGAZAhQAZAhgGApQgGApghAZQgbAUggAAIgPgBgA1CqcQgpgGgZghQgZgiAGgpQAFglAdgYQAcgYAlAAIAPABQApAGAYAhQAZAhgGApQgGApghAZQgaAUggAAIgQgBgAT5qwQghgZgGgpQgGgpAZghQAZgiApgFIAOgBQAlAAAcAYQAdAYAFAlQAGApgZAhQgZAigpAGIgPABQggAAgbgUg");
	mask_7.setTransform(143.975,86.925);

	// Layer_3
	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.lf(["#EAB5A2","#C11F0D"],[0,1],-143.2,0,143.4,0).s().p("A2fNlIAA7JMAs/AAAIAAbJg");
	this.shape_228.setTransform(143.975,86.925);

	var maskedShapeInstanceList = [this.shape_228];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_228).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0.7,0,286.6,173.9), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(141.8,140.4622);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D86E56","#C11F0D"],[0,1],0,143.1,0,-143.6).s().p("A2JV/MAAAgr9MAsTAAAMAAAAr9g");
	this.shape.setTransform(141.8,140.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0,0,283.6,280.9), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4mYnMAAAgxNMAxNAAAMAAAAxNg");
	mask.setTransform(157.5,157.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApkWrQkbh4jZjaQjajZh4kbQh8klAAlAQAAk/B8klQB4kbDajZQDZjaEbh4QElh8E/AAQFAAAElB8QEbB4DZDaQDaDZB4EbQB8ElAAE/QAAFAh8ElQh4EbjaDZQjZDakbB4QklB8lAAAQk/AAklh8g");
	this.shape.setTransform(157.5,157.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,315,315), null);


(lib.ClipGroup_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("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");
	mask_1.setTransform(141.8,140.4622);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D86E56","#C11F0D"],[0,1],0,143.1,0,-143.6).s().p("A2JV/MAAAgr9MAsTAAAMAAAAr9g");
	this.shape_1.setTransform(141.8,140.7);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_2, new cjs.Rectangle(0,0,283.6,280.9), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A4mYnMAAAgxNMAxNAAAMAAAAxNg");
	mask_1.setTransform(157.5,157.5);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApkWrQkbh4jZjaQjajZh4kbQh8klAAlAQAAk/B8klQB4kbDajZQDZjaEbh4QElh8E/AAQFAAAElB8QEbB4DZDaQDaDZB4EbQB8ElAAE/QAAFAh8ElQh4EbjaDZQjZDakbB4QklB8lAAAQk/AAklh8g");
	this.shape_1.setTransform(157.5,157.5);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0,315,315), null);


(lib.ClipGroup_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("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");
	mask_2.setTransform(141.8,140.4622);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D86E56","#C11F0D"],[0,1],0,143.1,0,-143.6).s().p("A2JV/MAAAgr9MAsTAAAMAAAAr9g");
	this.shape_2.setTransform(141.8,140.7);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_3, new cjs.Rectangle(0,0,283.6,280.9), null);


(lib.ClipGroup_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A4mYnMAAAgxNMAxNAAAMAAAAxNg");
	mask_2.setTransform(157.5,157.5);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApkWrQkbh4jZjaQjajZh4kbQh8klAAlAQAAk/B8klQB4kbDajZQDZjaEbh4QElh8E/AAQFAAAElB8QEbB4DZDaQDaDZB4EbQB8ElAAE/QAAFAh8ElQh4EbjaDZQjZDakbB4QklB8lAAAQk/AAklh8g");
	this.shape_2.setTransform(157.5,157.5);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_2, new cjs.Rectangle(0,0,315,315), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	mask_8.setTransform(300,250);

	// Layer_3
	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag/BUIAAgcQAAgCACAAIADAAQALAAAEgKIAHgRQADgKAIgFIAAgBQgPgDgIgKQgLgMAAgUQAAgWAPgPQAOgPAZAAIBDAAQACAAAAADIAACmQAAADgCAAIgfAAQgCAAAAgDIAAg8QAAgBgCAAIgMAAQgHAAgEACQgEADgDAIIgJAYQgGAPgJAHQgJAGgOAAIgLAAQgCAAAAgDgAAbgJQACAAAAgCIAAgpQAAgBgCAAIgcAAQgWAAAAAWQAAAWAWAAg");
	this.shape_229.setTransform(533.775,436.725);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("Ag9BXQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgcQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIADAAQALAAAEgKIAHgRQADgKAIgFIAAgBQgPgDgIgKQgLgMAAgUQAAgWAPgPQAOgPAZAAIBDAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAACmQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgfAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgMAAQgHAAgEACQgEADgDAIIgJAYQgGAPgJAHQgJAGgOAAgAgXgfQAAAWAWAAIAcAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAgpQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgcAAQgWAAAAAWg");
	this.shape_230.setTransform(533.775,436.725);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag/BUIAAinQAAgCADAAIAeAAQADAAAAACIAABBQAAACABAAIA1AAQABAAAAgCIAAhBQAAgCADAAIAeAAQADAAAAACIAACnQAAACgDAAIgeAAQgDAAAAgCIAAhDQAAgBgBAAIg1AAQgBAAAAABIAABDQAAACgDAAIgeAAQgDAAAAgCg");
	this.shape_231.setTransform(518.775,436.675);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AAfBWQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAhDQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIg1AAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIAABDQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgeAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAinQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAeAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIAABBQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIA1AAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAAhBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAeAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIAACnQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_232.setTransform(518.775,436.675);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag/BUIAAinQAAgCADAAIAeAAQADAAAAACIAABBQAAACABAAIA1AAQABAAAAgCIAAhBQAAgCADAAIAeAAQADAAAAACIAACnQAAACgDAAIgeAAQgDAAAAgCIAAhDQAAgBgBAAIg1AAQgBAAAAABIAABDQAAACgDAAIgeAAQgDAAAAgCg");
	this.shape_233.setTransform(503.025,436.675);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AAfBWQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAhDQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIg1AAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIAABDQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgeAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAinQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAeAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIAABBQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIA1AAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAAhBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAeAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIAACnQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_234.setTransform(503.025,436.675);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag2BUIAAinQAAgCACAAIBpAAQACAAAAACIAAAbQAAADgCAAIhGAAQgBAAAAACIAAAiQAAABABAAIA6AAQACAAAAADIAAAaQAAACgCAAIg6AAQgBAAAAACIAAAkQAAABABAAIBGAAQACAAAAADIAAAbQAAACgCAAIhpAAQgCAAAAgCg");
	this.shape_235.setTransform(488.65,436.675);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("Ag0BWQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAinQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIBpAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAAbQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhGAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAAiQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIA5AAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAaQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIg5AAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAAkQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIBGAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAbQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_236.setTransform(488.65,436.675);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AhHBUIAAgcQAAgCACAAIADAAQANAAAGgLQAIgOAAghIAAhPQAAgDADAAIBqAAQACAAAAADIAACmQAAADgCAAIgfAAQgCAAAAgDIAAiGQAAgBgBAAIgnAAQgBAAAAABIAAAxQAAAwgOAVQgMAUgbAAIgMAAQgCAAAAgDg");
	this.shape_237.setTransform(472.875,436.725);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AhFBXQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgcQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIADAAQANAAAGgLQAIgOAAghIAAhPQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAIBqAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAACmQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgfAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAiGQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgnAAQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIAAAxQAAAwgOAVQgMAUgbAAg");
	this.shape_238.setTransform(472.875,436.725);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AABgPQAWAAAAgUQAAgUgWAAIgYAAQgBAAAAACIAAAlQAAABABAAgAg8BUIAAinQAAgCADAAIA+AAQAaAAAOAMQANAMAAAWQAAAZgTALIAAABQAJADAGAKQAHALAAAOQAAAyg5AAIg9AAQgDAAAAgCgAADA4QAWAAAAgVQAAgWgWAAIgaAAQgBAAAAABIAAApQAAABABAAg");
	this.shape_239.setTransform(458.025,436.675);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("Ag5BWQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAinQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIA+AAQAaAAAOAMQANAMAAAWQAAAZgTALIAAABQAJADAGAKQAHALAAAOQAAAyg5AAgAgYAOIAAApQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAaAAQAWAAAAgVQAAgWgWAAIgaAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAgAgYg1IAAAlQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAYAAQAWAAAAgUQAAgUgWAAIgYAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABg");
	this.shape_240.setTransform(458.025,436.675);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AgRhTQABgCACAAIAeAAQACAAABACIA3CnQABACgDAAIgfAAQgCAAgBgCIgJgeIg5AAIgJAeQgBACgCAAIggAAQgCAAABgCgAATAWIgTg8IAAAAIgSA8g");
	this.shape_241.setTransform(442.5232,436.675);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AApBWQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgJgeIg5AAIgJAeQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIggAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQABgBAAAAIA4inQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAeAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAIA3CnQABAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAgAgSAWIAlAAIgTg8IAAAAg");
	this.shape_242.setTransform(442.5232,436.675);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag9BUIAAinQAAgCACAAIA/AAQAbAAAPAPQAPAPAAAZQAAAZgPAOQgQAQgaAAIgcAAQgCAAAAABIAAA6QAAACgCAAIgfAAQgCAAAAgCgAACgHQALAAAGgGQAHgGAAgLQAAgKgHgGQgGgHgLAAIgaAAQgCAAAAACIAAArQAAABACAAg");
	this.shape_243.setTransform(429.1,436.675);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("Ag6BWQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAinQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIA/AAQAaAAAPAPQAQAPgBAZQAAAZgPAOQgPAQgaAAIgdAAQAAAAgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAIAAA6QAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAgAgagzIAAArQAAAAABAAQAAABAAAAQAAAAAAAAQABAAAAAAIAaAAQALAAAGgGQAHgGAAgLQAAgKgHgGQgGgHgLAAIgaAAQAAAAgBAAQAAAAAAABQAAAAAAAAQgBAAAAABg");
	this.shape_244.setTransform(429.1,436.675);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AgRBUIAAiGQAAgCgBAAIgqAAQgCAAAAgDIAAgcQAAgCACAAIB4AAQADAAAAACIAAAcQAAADgDAAIgpAAQgBAAAAACIAACGQAAACgDAAIgdAAQgDAAAAgCg");
	this.shape_245.setTransform(414.6,436.675);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgOBWQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAiGQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgqAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAgcQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIB5AAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAAcQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgqAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABIAACGQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_246.setTransform(414.6,436.675);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AAngFQABAAAAgCIAAg4QAAgCgBAAIgmAAQgNAAgIAIQgJAHAAAPQAAAPAJAHQAIAIANAAgAg8BUIAAgQQAAgDACAAIADAAQAIAAAEgCQADgDADgJIALgZQAEgKAHgGIAAgBQgRgDgJgLQgKgMAAgUQAAgWAOgNQAOgOAWAAIA8AAQACAAAAACIAACnQAAADgCAAIgRAAQgCAAAAgDIAAhDQAAgBgBAAIgXAAQgHAAgFADQgEADgEAIIgNAgQgFAOgHAFQgIAGgMAAIgJAAQgCAAAAgCg");
	this.shape_247.setTransform(533.575,405.85);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("Ag6BXQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgQQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIADAAQAIAAAEgCQADgDADgJIALgZQAEgKAHgGIAAgBQgRgDgJgLQgKgMAAgTQAAgXAOgNQAOgOAWAAIA8AAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIAACmQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgRAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhCQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgXAAQgHAAgFADQgEADgEAIIgNAhQgFANgHAGQgIAFgMABgAgUg5QgJAIAAAOQAAAPAJAHQAIAIANAAIAmAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIAAg4QAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgmAAQgNgBgIAIg");
	this.shape_248.setTransform(533.575,405.85);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag6BTIAAimQAAgCADAAIAQAAQADAAAAACIAABHQAAABABAAIBGAAQACAAAAgBIAAhHQAAgCACAAIARAAQACAAAAACIAACmQAAADgCAAIgRAAQgCAAAAgDIAAhIQAAgCgCAAIhGAAQgBAAAAACIAABIQAAADgDAAIgQAAQgDAAAAgDg");
	this.shape_249.setTransform(518.95,405.825);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AAnBWQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAhIQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIhGAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABIAABIQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIgQAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIAAimQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIAQAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAABHQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIBGAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAhHQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIARAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAACmQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_250.setTransform(518.95,405.825);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag6BTIAAimQAAgCADAAIARAAQACAAAAACIAABHQAAABABAAIBHAAQABAAAAgBIAAhHQAAgCACAAIARAAQADAAAAACIAACmQAAADgDAAIgRAAQgCAAAAgDIAAhIQAAgCgBAAIhHAAQgBAAAAACIAABIQAAADgCAAIgRAAQgDAAAAgDg");
	this.shape_251.setTransform(503.5,405.825);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AAnBWQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAhIQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIhHAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABIAABIQAAABAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgRAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIAAimQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIARAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAABHQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIBHAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAhHQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIARAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAACmQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_252.setTransform(503.5,405.825);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AgyBTIAAimQAAgCACAAIBhAAQADAAAAACIAAAQQAAADgDAAIhNAAQgBAAAAABIAAAzQAAABABAAIBCAAQACAAAAADIAAAPQAAACgCAAIhCAAQgBAAAAACIAAA0QAAACABAAIBNAAQADAAAAADIAAAPQAAADgDAAIhhAAQgCAAAAgDg");
	this.shape_253.setTransform(489.55,405.825);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgxBWQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIAAimQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAAAIBiAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAAAQQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAIhNAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAAzQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIBBAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAPQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIhBAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAA0QAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIBNAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAABIAAAPQAAABgBABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_254.setTransform(489.55,405.825);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("ABTBnIAAgjQAAgBgCAAIi0AAQgDAAAAgDIAAimQAAgDADAAIARAAQACAAAAADIAACSQAAABACAAIA6AAQACAAAAgBIAAiSQAAgDABAAIARAAQACAAAAADIAACSQAAABABAAIA7AAQABAAAAgBIAAiSQAAgDACAAIARAAQACAAAAADIAACSQAAABACAAIAOAAQADAAAAADIAAA3QAAADgCAAIgRAAQgBAAAAgDg");
	this.shape_255.setTransform(471.45,407.775);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("ABUBqQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBIAAgjQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIi0AAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBIAAimQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAIARAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAACSQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIA6AAQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAAAIAAiSQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIARAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABIAACSQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIA7AAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAiSQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIARAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAACSQAAAAABAAQAAABAAAAQAAAAAAAAQABAAAAAAIAOAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAA3QAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAg");
	this.shape_256.setTransform(471.45,407.775);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AAaAZIgahNIAAAAIgZBNgAhCBTIA5imQABgCABAAIAPAAQACAAABACIA4CmQABADgCAAIgRAAQgCAAgBgDIgNglIhBAAIgNAlQAAADgDAAIgRAAQgCAAABgDg");
	this.shape_257.setTransform(451.8343,405.825);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AAxBWQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBIgNglIhBAAIgNAlQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgRAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAgBIA5imQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAPAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIA4CmQAAABAAABQAAAAAAABQAAAAAAAAQgBAAAAAAgAgZAZIAzAAIgahNIAAAAg");
	this.shape_258.setTransform(451.8343,405.825);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AADgEQAPAAAJgIQAIgIAAgOQAAgOgIgIQgJgIgPAAIgjAAQgCAAAAABIAAA6QAAABACAAgAg3BTIAAimQAAgCACAAIA5AAQAYAAAOAOQAOAOAAAXQAAAYgOANQgOAOgYAAIgkAAQgCAAAAABIAABBQAAADgCAAIgRAAQgCAAAAgDg");
	this.shape_259.setTransform(439.125,405.825);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("Ag1BWQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAimQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIA5AAQAYAAAOAOQAOAOAAAXQAAAYgOANQgOAOgYAAIgkAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIAABBQAAABAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAgig/IAAA6QAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAIAjAAQAPAAAJgIQAIgIAAgOQAAgOgIgIQgJgIgPAAIgjAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAg");
	this.shape_260.setTransform(439.125,405.825);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag9BTIAAimQAAgCACAAIARAAQACAAAAACIAABHQAAABACAAIATAAQAQAAAGgTIAMggQAGgNAHgGQAHgFALAAIAHAAQADAAAAADIAAAQQAAACgDAAIgCAAQgIAAgDADQgEACgDAJIgIAYQgJAVgLADIAAABQANACAIASIANAhQADAKADACQADADAIAAIAEAAQACAAAAACIAAAQQAAADgCAAIgKAAQgLAAgIgGQgHgGgFgNIgPglQgFgQgOAAIgXAAQgCAAAAACIAABIQAAADgCAAIgRAAQgCAAAAgDg");
	this.shape_261.setTransform(424.725,405.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AAyBXQgLAAgIgGQgHgGgFgNIgPglQgFgPgOgBIgXAAQgBAAAAABQAAAAAAAAQgBAAAAAAQAAABAAAAIAABJQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAIgRAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAinQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIARAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAABHQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAIATAAQAQABAGgUIAMggQAGgNAHgGQAHgFALAAIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABIAAAQQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgCAAQgIAAgDADQgEACgDAJIgIAYQgJAVgLADIAAABQANACAIASIANAhQADAJADADQADADAIAAIAEAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAAARQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_262.setTransform(424.725,405.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AAiArQAFgNAAgeQAAgcgFgNQgHgagbAAQgbAAgHAaQgEALAAAeQAAAfAEAMQAHAZAbAAQAbAAAHgZgAg3AxQgEgNAAgkQAAgjAEgMQANgpAqAAQAsAAAMApQAEAMAAAjQAAAlgEAMQgMAogsAAQgqAAgNgog");
	this.shape_263.setTransform(409.25,405.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("Ag3AxQgEgNAAgkQAAgjAEgNQANgoAqAAQArAAANAoQAEAMAAAkQAAAlgEAMQgNAogrAAQgqAAgNgogAgigpQgEALAAAeQAAAfAEALQAIAaAaAAQAbAAAIgaQADgNABgdQgBgcgDgNQgIgagbAAQgaAAgIAag");
	this.shape_264.setTransform(409.25,405.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag5BTIAAimQAAgCADAAIBuAAQACAAAAACIAACmQAAADgCAAIgRAAQgCAAAAgDIAAiSQAAgBgCAAIhFAAQgBAAAAABIAACSQAAADgCAAIgRAAQgDAAAAgDg");
	this.shape_265.setTransform(394.175,405.825);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AAnBWQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAiSQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIhFAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIAACSQAAABAAABQgBAAAAABQAAAAAAAAQgBAAAAAAIgRAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBIAAimQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAIBuAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAACmQAAABAAABQAAAAgBABQAAAAAAAAQAAAAgBAAg");
	this.shape_266.setTransform(394.175,405.825);

	var maskedShapeInstanceList = [this.shape_229,this.shape_230,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251,this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257,this.shape_258,this.shape_259,this.shape_260,this.shape_261,this.shape_262,this.shape_263,this.shape_264,this.shape_265,this.shape_266];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(387.4,395.9,153.80000000000007,50.5), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	mask_9.setTransform(300,250);

	// Layer_3
	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AANhQQgCAAAAgDIAAgZQAAgCACAAIAWAAQADAAAAACIAAAZQAAADgDAAgAgihQQgDAAAAgDIAAgZQAAgCADAAIAVAAQADAAAAACIAAAZQAAADgDAAgAgRg6QAAgCADAAIAdAAQADAAAAACIAACnQAAACgDAAIgdAAQgDAAAAgCg");
	this.shape_267.setTransform(538.425,434.175);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgOBvQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAinQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAdAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIAACnQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAgAANhQQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgZQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAWAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIAAAZQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAgAgihQQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBIAAgZQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAVAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIAAAZQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_268.setTransform(538.425,434.175);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AgRhTQAAgCADAAIAdAAQADAAAAACIAACnQAAACgDAAIgdAAQgDAAAAgCg");
	this.shape_269.setTransform(531.875,436.675);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgOBWQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAinQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAdAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIAACnQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_270.setTransform(531.875,436.675);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AgyBUIAAinQAAgCADAAIBgAAQACAAAAACIAAAdQAAACgCAAIg+AAQgBAAAAACIAACGQAAACgDAAIgeAAQgDAAAAgCg");
	this.shape_271.setTransform(523.05,436.675);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgvBWQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAinQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAABAAIBgAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAAdQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIg+AAQAAAAgBAAQAAAAAAABQAAAAAAAAQgBAAAAABIAACGQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_272.setTransform(523.05,436.675);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag9BUIAAinQAAgCADAAIA+AAQAbAAAPAPQAPAPAAAZQAAAZgPAOQgPAQgbAAIgcAAQgBAAAAABIAAA6QAAACgDAAIgeAAQgDAAAAgCgAADgHQAKAAAHgGQAGgGAAgLQAAgKgGgGQgHgHgKAAIgbAAQgBAAAAACIAAArQAAABABAAg");
	this.shape_273.setTransform(509.6,436.675);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("Ag6BWQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAinQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIA+AAQAbAAAQAPQAPAPAAAZQAAAZgPAOQgQAQgbAAIgcAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAAA6QAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAgAgZgzIAAArQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIAbAAQALAAAGgGQAHgGAAgLQAAgKgHgGQgGgHgLAAIgbAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABg");
	this.shape_274.setTransform(509.6,436.675);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag2BUIAAinQAAgCADAAIBoAAQACAAAAACIAAAbQAAADgCAAIhGAAQgBAAAAACIAAAiQAAABABAAIA6AAQACAAAAADIAAAaQAAACgCAAIg6AAQgBAAAAACIAAAkQAAABABAAIBGAAQACAAAAADIAAAbQAAACgCAAIhoAAQgDAAAAgCg");
	this.shape_275.setTransform(495.425,436.675);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgzBWQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAinQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIBoAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAAbQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhGAAQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAAiQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAIA6AAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAAAaQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAIg6AAQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAAkQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAIBGAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAbQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_276.setTransform(495.425,436.675);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag+BUIAAinQAAgCACAAIAfAAQACAAAAACIAABBQAAACABAAIA1AAQABAAAAgCIAAhBQAAgCADAAIAeAAQADAAAAACIAACnQAAACgDAAIgeAAQgDAAAAgCIAAhDQAAgBgBAAIg1AAQgBAAAAABIAABDQAAACgCAAIgfAAQgCAAAAgCg");
	this.shape_277.setTransform(480.55,436.675);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AAeBWQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAhDQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIg1AAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAABDQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAAAIggAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAinQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAgAAQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAABBQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIA1AAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIAAhBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAfAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAACnQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_278.setTransform(480.55,436.675);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag2BUIAAinQAAgCACAAIBpAAQACAAAAACIAAAbQAAADgCAAIhGAAQgBAAAAACIAAAiQAAABABAAIA6AAQACAAAAADIAAAaQAAACgCAAIg6AAQgBAAAAACIAAAkQAAABABAAIBGAAQACAAAAADIAAAbQAAACgCAAIhpAAQgCAAAAgCg");
	this.shape_279.setTransform(466.15,436.675);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("Ag0BWQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAinQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIBpAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAAbQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhGAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAAiQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIA5AAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAaQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIg5AAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAAkQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIBGAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAbQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_280.setTransform(466.15,436.675);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AACA2QAZAAAAgYQAAgWgZAAIgaAAQgBAAAAABIAAAsQAAABABAAgAg9BUIAAinQAAgCADAAIAeAAQADAAAAACIAAA6QAAACABAAIAcAAQAcAAAPAPQAPAOAAAZQAAAZgPAPQgPAPgcAAIg+AAQgDAAAAgCg");
	this.shape_281.setTransform(446.45,436.675);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("Ag7BWQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAinQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAfAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAA6QAAABABAAQAAAAAAAAQAAABAAAAQABAAAAAAIAcAAQAcAAAPAPQAPAOAAAZQAAAZgPAPQgPAPgcAAgAgaAJIAAAsQAAAAABAAQAAABAAAAQAAAAAAAAQABAAAAAAIAaAAQAZAAAAgYQAAgWgZAAIgaAAQAAAAgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAg");
	this.shape_282.setTransform(446.45,436.675);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag/BUIAAinQAAgCADAAIAeAAQADAAAAACIAABBQAAACABAAIA1AAQABAAAAgCIAAhBQAAgCACAAIAfAAQACAAAAACIAACnQAAACgCAAIgfAAQgCAAAAgCIAAhDQAAgBgBAAIg1AAQgBAAAAABIAABDQAAACgDAAIgeAAQgDAAAAgCg");
	this.shape_283.setTransform(430.85,436.675);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AAeBWQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAhDQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIg0AAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAABDQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIgeAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAinQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAeAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAABBQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAIA0AAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAAhBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAfAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAACnQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_284.setTransform(430.85,436.675);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag2BUIAAinQAAgCACAAIBpAAQACAAAAACIAAAbQAAADgCAAIhGAAQgBAAAAACIAAAiQAAABABAAIA6AAQADAAAAADIAAAaQAAACgDAAIg6AAQgBAAAAACIAAAkQAAABABAAIBGAAQACAAAAADIAAAbQAAACgCAAIhpAAQgCAAAAgCg");
	this.shape_285.setTransform(416.45,436.675);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgzBWQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAinQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAABAAIBoAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAAbQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhGAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAAiQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIA6AAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABIAAAaQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIg6AAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAAkQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIBGAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAbQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_286.setTransform(416.45,436.675);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag8BUIAAinQAAgCADAAIA+AAQAaAAAOAMQANAMAAAWQAAAZgTALIAAABQAJADAGAKQAHALAAAOQAAAyg5AAIg9AAQgDAAAAgCgAABgPQAWAAAAgUQAAgUgWAAIgYAAQgBAAAAACIAAAlQAAABABAAgAADA4QAWAAAAgVQAAgWgWAAIgaAAQgBAAAAABIAAApQAAABABAAg");
	this.shape_287.setTransform(402.475,436.675);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("Ag5BWQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAinQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIA+AAQAaAAAOAMQANAMAAAWQAAAZgTALIAAABQAJADAGAKQAHALAAAOQAAAyg5AAgAgYAOIAAApQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAaAAQAWAAAAgVQAAgWgWAAIgaAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAgAgYg1IAAAlQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAYAAQAWAAAAgUQAAgUgWAAIgYAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABg");
	this.shape_288.setTransform(402.475,436.675);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AgRhTQAAgCADAAIAdAAQADAAAAACIAACnQAAACgDAAIgdAAQgDAAAAgCg");
	this.shape_289.setTransform(391.625,436.675);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgOBWQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAinQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAdAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIAACnQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_290.setTransform(391.625,436.675);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AACgHQALAAAHgGQAGgGAAgLQAAgKgGgGQgHgHgLAAIgaAAQgBAAAAACIAAArQAAABABAAgAg9BUIAAinQAAgCADAAIA+AAQAbAAAQAPQAPAPAAAZQAAAZgQAOQgPAQgbAAIgcAAQgBAAAAABIAAA6QAAACgDAAIgeAAQgDAAAAgCg");
	this.shape_291.setTransform(381.525,436.675);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("Ag6BWQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAinQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIA+AAQAbAAAQAPQAPAPAAAZQAAAZgQAOQgPAQgbAAIgcAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIAAA6QAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAgAgZgzIAAArQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAaAAQALAAAHgGQAGgGAAgLQAAgKgGgGQgHgHgLAAIgaAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABg");
	this.shape_292.setTransform(381.525,436.675);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AghhpQgBgEACgBIAJgBQADAAAAABQAFAPAPAAQAMAAAGgPQABgBACAAIAJABQACABgBAEQgGAagZAAQgcAAgFgagAg7BtIAAinQAAgCACAAIARAAQACAAAAACIAACCIABAAIBMiCQABgCACAAIAQAAQACAAAAACIAACnQAAADgCAAIgRAAQgCAAAAgDIAAiBIgBAAIhMCDQgCABgBAAIgQAAQgCAAAAgDg");
	this.shape_293.setTransform(533.675,403.25);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AApBwQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAiBIgBAAIhMCCIgDACIgQAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAimQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIARAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAABIAACBIABAAIBMiDIADgBIAQAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIAACmQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAgAghhqQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAIAJgCQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAFAOAPAAQAMAAAGgOQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAJACQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQgGAbgZAAQgcAAgFgbg");
	this.shape_294.setTransform(533.675,403.25);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag7BTIAAimQAAgCACAAIARAAQACAAAAACIAACBIABAAIBMiCQABgBACAAIAQAAQACAAAAACIAACmQAAADgCAAIgRAAQgCAAAAgDIAAiBIgBAAIhMCDIgDABIgQAAQgCAAAAgDg");
	this.shape_295.setTransform(517.825,405.825);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AApBWQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAiBIgBAAIhMCDIgDABIgQAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAimQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIARAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAABIAACBIABAAIBMiCIADgBIAQAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIAACmQAAABAAABQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_296.setTransform(517.825,405.825);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag9BTIAAimQAAgCADAAIAQAAQACAAAAACIAABHQAAABACAAIAUAAQAPAAAHgTIAMggQAFgNAHgGQAGgFAMAAIAIAAQACAAAAADIAAAQQAAACgCAAIgDAAQgHAAgEADQgEACgCAJIgKAYQgIAVgKADIAAABQANACAHASIANAhQADAKADACQAEADAHAAIAEAAQACAAAAACIAAAQQAAADgCAAIgJAAQgMAAgIgGQgHgGgFgNIgPglQgEgQgPAAIgXAAQgCAAAAACIAABIQAAADgCAAIgQAAQgDAAAAgDg");
	this.shape_297.setTransform(503,405.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AAyBXQgLAAgHgGQgIgGgFgNIgOglQgGgPgOgBIgXAAQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAIAABJQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgQAAQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAinQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAIAQAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAABHQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAIATAAQAQABAHgUIALggQAFgNAHgGQAIgFAMAAIAGAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIAAAQQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgCAAQgHAAgEADQgEACgDAJIgJAYQgIAVgLADIAAABQAOACAGASIAOAhQADAJADADQAEADAHAAIAEAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAARQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAg");
	this.shape_298.setTransform(503,405.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AAjArQADgMAAgfQAAgegDgLQgIgagbAAQgaAAgIAaQgDALAAAeQAAAfADAMQAIAZAaAAQAbAAAIgZgAg3AxQgEgOAAgjQAAghAEgOQANgpAqAAQArAAANApQAEAOAAAhQAAAjgEAOQgNAogrAAQgqAAgNgog");
	this.shape_299.setTransform(487.525,405.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("Ag3AxQgEgPAAgiQAAghAEgPQANgoAqAAQArAAANAoQAEAPAAAhQAAAigEAPQgNAogrAAQgqAAgNgogAgigpQgDALAAAeQAAAfADALQAIAaAaAAQAbAAAIgaQADgLAAgfQAAgegDgLQgIgagbAAQgaAAgIAag");
	this.shape_300.setTransform(487.525,405.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AgzAxQgEgOAAgjQAAgiAEgNQANgpApAAQAlAAAPAjQABADgCAAIgOAIQgCABgBgDQgLgXgXAAQgZAAgIAaQgDAKAAAfQAAAgADALQAIAZAZAAQAXAAALgXQABgCACABIAOAHQACABgBADQgPAiglAAQgpAAgNgog");
	this.shape_301.setTransform(473.5667,405.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgzAxQgEgOAAgjQAAgiAEgOQANgoApAAQAlAAAPAjQABABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgOAIQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgLgXgXAAQgZAAgIAaQgDAKAAAfQAAAgADAKQAIAaAZAAQAXAAALgXQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAOAIQABAAAAABQAAAAABAAQAAABAAAAQAAABgBAAQgPAjglAAQgpAAgNgog");
	this.shape_302.setTransform(473.5667,405.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag7BTIAAimQAAgCACAAIARAAQACAAAAACIAACBIABAAIBNiCQAAgBACAAIAQAAQADAAAAACIAACmQAAADgDAAIgQAAQgDAAAAgDIAAiBIAAAAIhNCDQgBABgBAAIgRAAQgCAAAAgDg");
	this.shape_303.setTransform(458.65,405.825);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AApBWQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAiBIAAAAIhOCDQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIgRAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBIAAimQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIARAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIAACBIABAAIBNiCIACgBIAQAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAACmQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_304.setTransform(458.65,405.825);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AAEgLQANAAAIgHQAHgIAAgMQAAgMgHgHQgIgIgNAAIgkAAQgCAAAAACIAAAzQAAABACAAgAg3BTIAAimQAAgCACAAIA5AAQAZAAAMAMQANAMAAAVQAAAcgWAJIAAABQAJACAHAKQAJALAAAQQAAAYgOANQgOAMgaAAIg4AAQgCAAAAgDgAAFBBQAOAAAIgHQAIgIAAgNQAAgNgIgHQgIgIgOAAIglAAQgCAAAAABIAAA2QAAABACAAg");
	this.shape_305.setTransform(443.9,405.825);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("Ag1BWQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIAAimQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIA5AAQAYAAANAMQANAMAAAVQAAAcgXAJIAAABQAKACAHAKQAIALAAAQQAAAYgOANQgOAMgZAAgAgiAKIAAA2QAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIAlAAQAPAAAIgHQAIgIAAgNQAAgNgIgHQgIgIgPAAIglAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAgAgig/IAAAzQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIAkAAQAOAAAHgHQAIgIAAgMQAAgMgIgHQgHgIgOAAIgkAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABg");
	this.shape_306.setTransform(443.9,405.825);

	var maskedShapeInstanceList = [this.shape_267,this.shape_268,this.shape_269,this.shape_270,this.shape_271,this.shape_272,this.shape_273,this.shape_274,this.shape_275,this.shape_276,this.shape_277,this.shape_278,this.shape_279,this.shape_280,this.shape_281,this.shape_282,this.shape_283,this.shape_284,this.shape_285,this.shape_286,this.shape_287,this.shape_288,this.shape_289,this.shape_290,this.shape_291,this.shape_292,this.shape_293,this.shape_294,this.shape_295,this.shape_296,this.shape_297,this.shape_298,this.shape_299,this.shape_300,this.shape_301,this.shape_302,this.shape_303,this.shape_304,this.shape_305,this.shape_306];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(374.4,391.1,168.80000000000007,55.19999999999999), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AhQBkIAAg+QAAgCACAAIAKAAQADAAABgCQAJgUADgVQAFgaAAgsIAAgXQAAgCADAAIBpAAQADAAAAACIAACHQAAABABAAIAOAAQACAAAAACIAAA+QAAADgCAAIgdAAQgBAAAAgDIAAgdQAAgCgCAAIhdAAQgCAAAAACIAAAdQAAADgBAAIgdAAQgCAAAAgDgAAaAkQACAAAAgBIAAhmQAAgCgCAAIglAAQgCAAAAACIAAACQAABCgPAhQgBACACAAg");
	this.shape_307.setTransform(533.4,438.35);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AAyBnQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAgBIAAgdQAAAAgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAIhdAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAdQAAABgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIgdAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAg+QAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAJAAQABAAABAAQABAAAAAAQABAAAAgBQAAAAABAAQAJgVADgVQAFgaAAgsIAAgWQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIBqAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIAACGQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAAAIAOAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIAAA+QAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgAgMhDIAAADQAABBgQAiQgBAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIA1AAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIAAhmQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAgBgBAAIglAAQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAg");
	this.shape_308.setTransform(533.4,438.35);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AgRhTQAAgCACAAIAeAAQADAAAAACIAACnQAAACgDAAIgeAAQgCAAAAgCg");
	this.shape_309.setTransform(521.7,436.675);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AgPBWQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAinQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAfAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAACnQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAg");
	this.shape_310.setTransform(521.7,436.675);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag9BUIAAinQAAgCADAAIA+AAQAbAAAPAPQAPAPAAAZQAAAZgPAOQgPAQgbAAIgcAAQgBAAAAABIAAA6QAAACgDAAIgeAAQgDAAAAgCgAADgHQALAAAGgGQAGgGAAgLQAAgKgGgGQgGgHgLAAIgbAAQgBAAAAACIAAArQAAABABAAg");
	this.shape_311.setTransform(511.6,436.675);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("Ag6BWQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAinQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIA+AAQAbAAAPAPQAPAPABAZQgBAZgPAOQgPAQgbAAIgcAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAAA6QAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAgAgZgzIAAArQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIAaAAQALAAAHgGQAGgGAAgLQAAgKgGgGQgHgHgLAAIgaAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABg");
	this.shape_312.setTransform(511.6,436.675);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag7AvQgEgQAAgfQAAgfAEgQQANgpAuAAQAvAAANApQAEAQAAAfQAAAfgEAQQgGAUgQALQgQALgWAAQgVAAgPgLQgQgLgHgUgAAaAlQADgKAAgbQAAgbgDgJQgGgUgUAAQgTAAgGAUQgCAHAAAdQAAAdACAIQAGATATAAQAUAAAGgTg");
	this.shape_313.setTransform(496.425,436.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgkBOQgQgKgHgVQgEgPAAggQAAgfAEgQQANgpAuAAQAvAAANApQAEAQAAAfQAAAggEAPQgGAVgQAKQgQALgWAAQgVAAgPgLgAgZgkQgCAIAAAcQAAAdACAIQAGATATAAQAUAAAGgTQADgJAAgcQAAgbgDgJQgGgTgUgBQgTABgGATg");
	this.shape_314.setTransform(496.425,436.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag+BUIAAinQAAgCACAAIB4AAQADAAAAACIAACnQAAACgDAAIgfAAQgCAAAAgCIAAiGQAAgCgBAAIgzAAQgBAAAAACIAACGQAAACgCAAIggAAQgCAAAAgCg");
	this.shape_315.setTransform(481.125,436.675);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AAdBWQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAiGQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgzAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAACGQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIggAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAinQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIB4AAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIAACnQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_316.setTransform(481.125,436.675);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AhDBTIAwhVIgthQQgBgDACAAIAiAAQACAAACACIAZAvIAAAAIAbgvQABgCACAAIAiAAQADAAgCADIgtBQIAxBVQABADgDAAIghAAQgDAAgBgCIgeg1IAAAAIgdA1QgBACgDAAIghAAQgDAAACgDg");
	this.shape_317.setTransform(460.4279,436.675);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AAiBWQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBgBAAAAIgeg1IAAAAIgdA1QAAAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAIghAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBABgBIAwhVIgthQQgBgBAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAiAAQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAIAZAvIAAAAIAbgvQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAIAiAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABgBABIgtBQIAxBVQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_318.setTransform(460.4279,436.675);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AhABUIAAinQAAgCACAAIAfAAQACAAAAACIAABpIABAAIA7hpQACgCABAAIAdAAQACAAAAACIAACnQAAACgCAAIgfAAQgDAAAAgCIAAhqIgBAAIg6BqQgCACgCAAIgcAAQgCAAAAgCg");
	this.shape_319.setTransform(445.1,436.675);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AAgBWQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAhqIgBAAIg6BqQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgcAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAinQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAgAAQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAABpIABAAIA6hpQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIAcAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAACnQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_320.setTransform(445.1,436.675);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AhIBUIAAgcQAAgCADAAIADAAQANAAAGgLQAIgOAAghIAAhPQAAgDACAAIBrAAQADAAAAADIAACmQAAADgDAAIgfAAQgCAAAAgDIAAiGQAAgBgCAAIgmAAQgBAAAAABIAAAxQAAAwgOAVQgMAUgcAAIgLAAQgDAAAAgDg");
	this.shape_321.setTransform(428.35,436.725);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AhFBXQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgcQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAEAAQAMAAAHgLQAHgOABghIAAhPQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIBqAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABIAACmQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAIggAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAiGQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgmAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAAAxQAAAwgNAVQgNAUgcAAg");
	this.shape_322.setTransform(428.35,436.725);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AgRhTQABgCACAAIAdAAQADAAABACIA3CnQABACgCAAIggAAQgCAAgBgCIgKgeIg4AAIgJAeQgBACgCAAIggAAQgCAAABgCgAATAWIgTg8IAAAAIgSA8g");
	this.shape_323.setTransform(412.35,436.675);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AApBWQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIgKgeIg4AAIgJAeQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAIggAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIA4inQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABAAIAdAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAIA3CnQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAgBAAgAgSAWIAlAAIgTg8IAAAAg");
	this.shape_324.setTransform(412.35,436.675);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AhLBUIAAinQAAgCACAAIAdAAQACAAABACIApBiIABAAIAphiQABgCACAAIAdAAQACAAAAACIAACnQAAACgCAAIgcAAQgCAAAAgCIAAhgIgBAAIgeBHQgCAEgDAAIgQAAQgDAAgBgEIgehHIgBAAIAABgQAAACgDAAIgbAAQgCAAAAgCg");
	this.shape_325.setTransform(395.325,436.675);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AAuBWQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAhgIgBAAIgeBHQgCAEgDAAIgQAAQgDAAgBgEIgehHIgBAAIAABgQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgbAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAinQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIAdAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAIApBiIABAAIAphiQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAIAdAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAACnQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_326.setTransform(395.325,436.675);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag9BTIAAimQAAgCACAAIARAAQACAAAAACIAABHQAAABABAAIAUAAQAPAAAHgTIAMggQAFgNAHgGQAHgFAMAAIAHAAQACAAAAADIAAAQQAAACgCAAIgCAAQgIAAgEADQgDACgDAJIgJAYQgIAVgLADIAAABQANACAHASIANAhQAEAKADACQADADAIAAIADAAQADAAAAACIAAAQQAAADgDAAIgJAAQgMAAgHgGQgHgGgFgNIgPglQgFgQgPAAIgXAAQgBAAAAACIAABIQAAADgCAAIgRAAQgCAAAAgDg");
	this.shape_327.setTransform(535.15,405.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AAyBXQgMAAgHgGQgHgGgFgNIgPglQgEgPgPgBIgYAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABAAAAIAABJQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgRAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAinQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIARAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAABHQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIAUAAQAPABAHgUIAMggQAGgNAHgGQAGgFAMAAIAHAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIAAAQQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgCAAQgIAAgEADQgCACgEAJIgJAYQgHAVgMADIAAABQAOACAGASIAOAhQADAJADADQADADAIAAIADAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAARQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBAAg");
	this.shape_328.setTransform(535.15,405.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AhDBTIA5imQABgCACAAIAPAAQACAAABACIA4CmQABADgDAAIgQAAQgDAAgBgDIgMglIhBAAIgNAlQgBADgCAAIgRAAQgCAAAAgDgAAaAZIgahNIAAAAIgZBNg");
	this.shape_329.setTransform(519.5583,405.825);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AAxBWQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBgBIgMglIhBAAIgNAlQAAABAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIgRAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIA5imQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAPAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAIA4CmQABABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAgAgZAZIAzAAIgahNIAAAAg");
	this.shape_330.setTransform(519.5583,405.825);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag4BTIAAimQAAgCADAAIBiAAQACAAAAACIAAAQQAAADgCAAIhOAAQgBAAAAABIAAAwQAAABABAAIAnAAQAXAAAOAOQANANAAAXQAAAWgNAOQgOAOgXAAIg7AAQgDAAAAgDgAAEBBQAfAAAAgdQAAgegfAAIglAAQgBAAAAACIAAA3QAAACABAAg");
	this.shape_331.setTransform(505.45,405.825);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("Ag1BWQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIAAimQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIBiAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAABIAAAQQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAIhNAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAAAwQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIAmAAQAXAAAOAOQAOANAAAXQAAAWgOAOQgOAOgXAAgAgiAIIAAA3QAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAIAkAAQAfAAAAgdQAAgegfAAIgkAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABg");
	this.shape_332.setTransform(505.45,405.825);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag3AxQgEgNAAgkQAAgjAEgMQANgpAqAAQArAAANApQAEAMAAAjQAAAlgEAMQgNAogrAAQgqAAgNgogAAiArQAEgNAAgeQAAgcgEgNQgHgagbAAQgbAAgHAaQgEALAAAeQAAAfAEAMQAHAZAbAAQAbAAAHgZg");
	this.shape_333.setTransform(490.55,405.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("Ag3AxQgEgNAAgkQAAgjAEgNQANgoAqAAQArAAAMAoQAFAMAAAkQAAAlgFAMQgMAogrAAQgqAAgNgogAgigpQgEALABAeQgBAfAEALQAIAaAaAAQAbAAAIgaQADgNAAgdQAAgcgDgNQgIgagbAAQgaAAgIAag");
	this.shape_334.setTransform(490.55,405.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AgyAxQgFgNAAgkQAAgiAFgNQAMgpApAAQAmAAAOAjQABACgBABIgPAIQgCABgBgDQgLgXgXAAQgZAAgIAaQgDAKAAAfQAAAgADALQAIAZAZAAQAXAAALgXQABgCACABIAPAHQABACgBACQgOAigmAAQgpAAgMgog");
	this.shape_335.setTransform(476.57,405.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AgyAxQgFgOAAgjQAAgjAFgNQAMgoApAAQAmAAAOAjQABABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgPAIQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgLgXgXAAQgZAAgIAaQgDAKAAAfQAAAgADAKQAIAaAZAAQAXAAALgXQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAPAIQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBAAQgOAjgmAAQgpAAgMgog");
	this.shape_336.setTransform(476.57,405.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("Ag8BUIAAgQQAAgDACAAIADAAQAIAAAEgCQACgDAEgJIAKgZQAFgLAHgFIAAgBQgkgGAAgoQAAgWAOgNQAOgOAWAAIA8AAQACAAAAACIAACnQAAADgCAAIgRAAQgCAAAAgDIAAhDQAAgBgCAAIgWAAQgIAAgEADQgFADgDAIIgNAgQgGAOgHAFQgHAGgMAAIgJAAQgCAAAAgCgAAmgFQACAAAAgCIAAg4QAAgCgCAAIgmAAQgNAAgIAIQgIAHAAAPQAAAeAdAAg");
	this.shape_337.setTransform(455.625,405.85);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("Ag6BXQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgQQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIADAAQAIAAAEgCQACgDAEgJIAKgZQAFgKAHgGIAAgBQgkgFAAgoQAAgXAOgNQAOgOAWAAIA8AAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABIAACmQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgRAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhCQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgWAAQgIAAgEADQgFADgDAIIgNAhQgGANgHAGQgHAFgMABgAgVg5QgIAIAAAOQAAAeAdAAIAmAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAg4QAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAIgmAAQgNgBgIAIg");
	this.shape_338.setTransform(455.625,405.85);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AhEBUIAAgQQAAgDADAAIACAAQARAAAHgOQAKgSAAguIAAhHQAAgCACAAIBdAAQACAAAAACIAACnQAAADgCAAIgRAAQgCAAAAgDIAAiSQAAgCgCAAIg0AAQgCAAAAACIAAA3QAAAzgMAWQgMAVgYAAIgIAAQgDAAAAgCg");
	this.shape_339.setTransform(439.95,405.85);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AhBBXQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgQQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBABAAIADAAQAQAAAHgOQAKgSAAguIAAhGQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIBdAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIAACmQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgRAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAiSQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAIg1AAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAA3QAAAzgNAWQgMAWgYAAg");
	this.shape_340.setTransform(439.95,405.85);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#FFFFFF").ss(0.3,1,1).p("AAjAtQABAAAAgBIAAh+QAAgCgBAAIg1AAQgBAAAAACIAAABQAAA0gEAdQgFAagJASQgBABACAAgAhLBnIAAg3QAAgDACAAIAKAAQADAAAAgCQAMgUADgZQAFgeAAg9IAAgKQAAgCACAAIBeAAQACAAAAADIAACSQAAABABAAIAPAAQACAAAAADIAAA3QAAADgCAAIgQAAQgCAAAAgDIAAgjQAAgBgCAAIhrAAQgCAAAAABIAAAjQAAADgDAAIgPAAQgCAAAAgDg");
	this.shape_341.setTransform(423.75,407.775);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AA6BqQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgjQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIhsAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAAAjQAAABAAAAQAAABgBAAQAAAAAAABQgBAAgBAAIgPAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBIAAg3QAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAIAKAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQALgUAFgZQAEgeAAg9IAAgKQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAIBcAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAACSQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIAPAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAA3QAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAgAgThSIAAABQAAA0gFAdQgDAagKASQAAAAgBAAQAAABAAAAQABAAAAAAQAAAAABAAIBHAAQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAAAIAAh+QAAgBgBAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIg0AAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABg");
	this.shape_342.setTransform(423.75,407.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(386.7,395.9,155.8,53.80000000000001), null);


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


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(1.8,95.45,0.5,0.5,0,0,0,300,250.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-148.2,-29.6,300,250), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(0,-114.9,0.5,0.5,0,0,0,300,250);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("At/CeIAAk7Ib/AAIAAE7g");
	this.shape.setTransform(-81.525,0.0125,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF2A0C").s().p("Egu3ADKIAAmSMBdvAAAIAAGSg");
	this.shape_1.setTransform(0,0.025,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-150,-239.9,300,250), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C11F0D").s().p("AABAHIgBAAIAAAAIAAAAIAAgFIgEACIgBABIAAgBIgBgBIABgBIADgCIgDgBIgBAAIAAgBIABgBIABAAIAEACIAAgFIAAAAIABAAIAAAAIAAAFIAEgCIABAAIAAABIABABIgBAAIgEABIAEACIABABIgBAAIAAABIgBABIAAgBIgEgCIAAAFIAAAAg");
	this.shape.setTransform(65.525,61.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C11F0D").s().p("AgGAnIgBAAIAAgBIAAhLIAAgBIABAAIANAAIABAAIAAABIAABLIAAABIgBAAg");
	this.shape_1.setTransform(63.425,65.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C11F0D").s().p("AAOAnIAAAAIgBgBIAAgeIAAgBIgZAAIgBABIAAAeIAAABIgBAAIgOAAIgBAAIAAgBIAAhLIAAgBIABAAIAOAAIABAAIAAABIAAAdIABABIAZAAIAAgBIAAgdIABgBIAAAAIAPAAIABAAIAAABIAABLIAAABIgBAAg");
	this.shape_2.setTransform(58.475,65.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C11F0D").s().p("AAzAoIgGAAQgGAAgEgEQgFgDgDgGIgEgNQgCgEgDgCQgDgBgDAAIgDAAIgBAAIAAAfIAAABIAAAAIgOAAIgBAAIAAgBIAAgfIgBAAIgDAAQgDAAgDABQgDACgBAEIgFANQgDAGgEADQgFAEgGAAIgGAAIgBAAIAAgBIAAgOIAAAAIABgBIACAAIAEgBIADgEIAFgNIACgEIAFgDIAAAAQgCAAgCgDIgDgFIgDgKIgDgDQgCgCgDABIgBAAIAAgBIgBAAIAAgNIABgBIAAAAIAFAAQAGAAAEACQAFAEACAGIAGANQAAACADACQACACAEAAIADAAIABgBIAAgdIAAgBIABAAIAOAAIAAAAIAAABIAAAdIABABIADAAQAEAAACgCIADgEIAGgNQACgGAFgEQAEgCAHAAIAEAAIABAAIABABIAAANIgBAAIgBABIgBAAQgBgBAAAAQgBAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAABQAAABAAAAIgEAKIgDAFQgCADgCAAIAAAAIAFADIADAEIAFANQABADABABIAFABIABAAIABABIAAAAIAAAOIAAABIgBAAg");
	this.shape_3.setTransform(49.55,65.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C11F0D").s().p("AAPAnIgBAAIAAgBIAAgvIgcAvIgBABIAAAAIgOAAIgBAAIAAgBIAAhLIAAgBIABAAIAPAAIABAAIAAABIAAAvIAAAAIAcgvIABgBIAAAAIAOAAIAAAAIABABIAABLIgBABIAAAAg");
	this.shape_4.setTransform(40.575,65.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C11F0D").s().p("AgHAnIAAAAIgBgBIAAg8IAAgBIgUAAIAAAAIgBgBIAAgNIABgBIAAAAIA4AAIABAAIABABIAAANIgBABIgBAAIgTAAIgBABIAAA8IAAABIgBAAg");
	this.shape_5.setTransform(33.9,65.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C11F0D").s().p("AhBCKQgagSgHghQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIADgBIAxgKQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABIACACQAEANAKAIQAKAIAQAAQARAAAKgLQAKgKAAgSQAAgVgMgLQgLgLgTAAIgNAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgrQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAIAMAAQARAAAKgKQAKgKAAgSQAAgQgJgKQgJgJgQgBQgOABgIAHQgJAIgDANIgCADQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgxgJQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAEgUAMgQQANgQAUgJQAUgJAaAAQAdAAAVAKQAVALALAUQALASABAZQAAATgJARQgJAQgQALIAAABQAJAEAJAIQAJALAGAOQAGAPAAAVQAAAbgNAVQgMAVgXALQgWAMgdAAQgmAAgbgTg");
	this.shape_6.setTransform(48.0417,40.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C11F0D").s().p("AgZAXIAAAAIgEgJIAAgBIAAgBIAmgRIABAAIgGgNIAAAAIAAAAIAJgEIAAAAIABAAIAQAkIAAABIAAABIgJADIAAAAIAAgBIgGgMIgBAAIgmARIAAAAIgBAAg");
	this.shape_7.setTransform(80.875,32.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C11F0D").s().p("AgEAbIgGgJIAAgBIAAAAIAHgIIgKgPIgKADIgBAAIAAgBIgGgJIAAAAIAAgBIA2gMIABgBIABABIAFAJIAAAAIAAABIgiArIgBAAgAgDgJIAGAKIANgOIgBAAg");
	this.shape_8.setTransform(77.6875,29.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C11F0D").s().p("AgVAbIgHgHIAAgBIAAgBIAggbIAAAAIgIgLIAAAAIAAgBIAGgGIAAAAIABAAIAaAeIAAABIAAAAIgHAGIAAABIgBgBIgJgKIAAAAIggAbIgBABg");
	this.shape_9.setTransform(75.7375,24.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C11F0D").s().p("AACAeQgEgBgEgEIgQgPIgBAAIABgBIAigmIABgBIAAAAIAIAHIAAABIAAABIgMANIAAABIAHAHQAFADABAEQACAFgBAEQAAAFgEAEQgDAEgFABIgFABIgEgBgAABAAIgIAKIAAAAIAHAHQACACADAAQADAAACgDQADgCgBgDQAAgDgDgCIgHgGIgBAAg");
	this.shape_10.setTransform(70.9667,21.32);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C11F0D").s().p("AAFAhIgIgGIAAAAIAAgBIAWgjIABgBIgLgHIgBABIgIANQgGAIgFADQgFAFgEAAQgFAAgFgDIgDgCIgBgBIAAgBIAFgGIABgBIAAABIABAAQACABADAAIAFgCIAIgJIANgVIAAgBIABAAIAeAUIAAABIAAAAIgdAsIgBAAg");
	this.shape_11.setTransform(67.3875,18.4875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C11F0D").s().p("AgWAbIgGgCIAAgBIAAgBIAEgIIABAAIADABIADABIAEgBIACgCIAAgpIAAAAIAAgBIAKAFIABABIgBAAIAAAaIABAAIARgRIABAAIABgBIAJAFIABABIgBAAIgjAgIgEADIgFABIgBABIgFgCg");
	this.shape_12.setTransform(63.25,15.105);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C11F0D").s().p("AgFAbQgGgBgFgDQgFgEgCgEIAAgBIAAAAIAHgGIABABIAFAEQACADAFABIADABIAEgCQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQABgDgCgDQgBgCgEgBIgEgBIgBgBIAAAAIADgHIAAgBIABAAIAEACQAEABACgBQACgBABgEQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQgCgCgEgBIgGgBQgCAAgDABIgCAAIgCgJIAAAAIAAgBIAJgCQAFAAAFACQAIADAEAFQAEAFgCAHQgBAEgDACIgGADIAAAAQADACABAEQABAEgBAEQgCAFgDADQgEADgFAAIgDABIgGgCg");
	this.shape_13.setTransform(58.1481,13.9667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C11F0D").s().p("AANAeIghgGIgBAAIAAgBIAIgzIABgBIAAAAIAiAGIAAAAIABAAIgCAJIAAABIgBAAIgWgEIAAAAIgCALIAAABIATADIAAAAIAAABIgBAHIAAABIgBAAIgSgDIgBAAIgCALIAAABIAXAEIAAAAIAAAAIgBAJIAAABg");
	this.shape_14.setTransform(53.8,12.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C11F0D").s().p("AgJAcIgKgBIgBAAIAAgBIABg0IAAAAIABgBIAUABQAGAAAEADQAFACACAEQACAEAAAFQAAAFgDADQgCAEgEACQgEACgGAAIgJAAIgBABIAAASIAAABIgBAAgAgHgPIgBANIABABIAIAAQAEAAACgCQACgCAAgDQAAgDgCgDQgCgCgEAAIgIAAIAAABg");
	this.shape_15.setTransform(48.975,12.375);

	this.text = new cjs.Text(" ", "bold 31px 'DIN Next CYR'", "#C11F0D");
	this.text.lineHeight = 43;
	this.text.parent = this;
	this.text.setTransform(44.15,8.55,0.26,0.26,-4.3151);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C11F0D").s().p("AgPAmIAAgBIgKgzIAAgBIABAAIAJgCIABAAIAAABIAHAfIAMgkIABgBIAAAAIAJgBIABAAIABAAIAKA0IgBABIAAAAIgLABIAAABIgBgBIgFggIgNAkIgBABIAAAAIgKACgAgNgYQgEgCgBgFIAAgBIAAAAIAEgBIABgBIABABIADACIADAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIACgCIgBgBIACAAIAEAAIAAAAIAAABQABAFgDADQgCADgFAAIgDABIgFgBg");
	this.shape_16.setTransform(41.6,12.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C11F0D").s().p("AgKAhIgBgBIgRgxIAAgBIAKgDIABAAIAAAAIALAfIAAAAIAHgmIAAAAIAAgBIAJgDIABAAIABABIARAxIAAABIAAAAIgKADIAAAAIgBgBIgLgeIAAAAIgHAmIAAAAIgBABIgJADg");
	this.shape_17.setTransform(36.1875,14.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C11F0D").s().p("AgIAkIgaguIAAAAIABgBIAIgFIABAAIAAABIAbATIgDghIAAgBIAAgBIAJgEIAAAAIAAAAIAaAuIABAAIgBABIgIAEIAAAAIgCAAIgOgaIACAYIAAABIAAABIgGADIgBAAIgBgBIgTgPIAOAbIAAABIAAAAIgHAFIAAAAIgBAAg");
	this.shape_18.setTransform(30.7,16.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C11F0D").s().p("AAAAjIAAgBIghgoIAAgBIAJgHIAAAAIABABIAVAZIAAgBIgGglIAAgBIABAAIAHgGIAAgBIAAABIAiAoIAAABIAAAAIgIAHIgBAAIgBAAIgVgaIAGAmIAAABIgBABIgHAGg");
	this.shape_19.setTransform(25.725,20.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C11F0D").s().p("AACAnIgOgNIAAAAIAAgBIACgCIAAAAIAAgBIgCgGIgFgHIgGgHIgJgIIgGgFIAAgBIAZgaIAAAAIABAAIAeAdIABAAIADgEIABAAIAPANIABAAIgBAAIgGAHIAAABIgBgBIgHgGIgBAAIgVAYIAAAAIAAAAIAHAGIAAABIAAAAIgGAHIAAABIgBgBgAgBANIAAAAIAMgNIAAgBIgYgWIAAABIgJAJIAAABIABAAQAIAIAEAFIAIAMg");
	this.shape_20.setTransform(22.4,24.7375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C11F0D").s().p("AALAhIgsgdIgBAAIAAgBIAGgIIABAAIAcARIgRgiIAAgBIAAAAIAFgIIABAAIAAgBIAsAdIABABIgBAAIgFAIIgBAAIAAAAIgcgSIAAABIARAiIAAABIAAAAIgGAJIAAAAg");
	this.shape_21.setTransform(18.175,28.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C11F0D").s().p("AASAbIgvgWIgBgBIAJgSQAEgIAGgDQAFgCAGADQADABACAEIACAFIAAABQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAIAEgBIAGACQAIAEABAGQACAFgEAIIgJATIAAAAIgBAAgAAKgFQgCABgBAEIgEAHIAAAAIAMAGIAAgBIAEgIQABgDgBgBQAAgDgDgCIgDAAIgDAAgAgJgNQgCABgCADIgDAIIAAAAIALAEIAAAAIAEgHQABgDAAgCQgBgDgDgBIgDgBIgCABg");
	this.shape_22.setTransform(15.3705,33.5432);

	this.instance = new lib.ClipGroup_7();
	this.instance.parent = this;
	this.instance.setTransform(48.1,63.1,0.26,0.26,0,0,0,143.8,86.9);

	this.instance_1 = new lib.ClipGroup_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.55,46.5,0.26,0.26,0,0,0,299.8,249.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.text},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-30.4,-18.4,156,130), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAbIARgYIAAAAIgbAEIAAgNIAaAEIAAAAIgQgYIALgHIAKAbIALgcIALAHIgRAZIAAAAIAagEIAAANIgagEIAAABIARAXIgLAHIgLgbIAAAAIgLAcg");
	this.shape.setTransform(-28.8958,-12.717,0.46,0.46);

	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(-40.35,75.5,0.46,0.46,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-178.3,-39.5,276,230), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(-1.6,3.85,0.3525,0.3525,0,0,0,300.4,250.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBARIgBgBIAAgBIAAgKIgJAFIAAAAIgBAAIgCgDIAAgBIAAgBIAJgFIgJgEIAAgBIAAgBIACgDIABgBIAAABIAJAFIAAgKIAAgBIABgBIACAAIACABIAAABIAAAKIAJgFIABgBIABABIABADIABABIgBABIgJAEIAJAFIABABIgBABIgBADIgBAAIgBAAIgJgFIAAAKIAAABIgCABg");
	this.shape.setTransform(96.1,25.825);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.6,3.85,0.3525,0.3525,0,0,0,300.4,250.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-107.5,-84.4,211.5,176.3), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_6();
	this.instance.parent = this;
	this.instance.setTransform(-117.3,-109.6,0.64,0.64,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-309.3,-269.6,384,320), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(-105.2,-109.55,0.64,0.64,0,0,0,299.9,249.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-297.1,-269.5,384,320), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_9();
	this.instance.parent = this;
	this.instance.setTransform(-101.7,-107.95,0.64,0.64,0,0,0,299.9,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-293.6,-267.9,384,320), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(-69.8,65.75,0.47,0.47,0,0,0,299.9,249.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-210.7,-51.6,282,235), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C11F0D").s().p("AgCAcIgBgBIgBgBIAAgSIgPAJIgBABIgBgBIgDgGIgBgBIABgCIAPgIIgPgHIgBgBIABgCIADgFIABgBIABAAIAPAJIAAgSIABgBIABgBIAFAAIABABIABABIAAASIAPgJIABAAIABABIADAFIABACIgCABIgOAHIAOAIIACACIgBABIgDAGIgBABIgBgBIgPgJIAAASIgBABIgBABg");
	this.shape.setTransform(67.425,57.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C11F0D").s().p("AgbCWQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAkhQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAAAIA3AAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIABADIAAEhIgBADQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(59.275,70.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C11F0D").s().p("AA4CWQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAhzQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAAAIhhAAQAAAAgBAAQgBAAAAAAQAAABgBAAQAAABAAAAIAABzIgBADQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIg4AAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAkhQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAAAIA4AAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIABADIAABwQAAABAAAAQABABAAAAQAAAAABABQABAAAAAAIBhAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAAhwQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAIA4AAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAEhQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_2.setTransform(40.225,70.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C11F0D").s().p("ACDCMQgRgMgJgZIgTgyQgHgRgKgFQgKgGgMABIgMAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIAAB1QAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIg3AAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgBgDIAAh1QAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgMAAQgMgBgKAGQgLAFgGARIgTAyQgKAZgQAMQgRAMgbgBIgUAAIgEgBQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgxQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAEgBIADAAQALAAAHgEQAHgFAEgMIASgwQAEgMAIgIQAGgHALgDIAAgCQgKgDgFgJQgHgJgDgKIgPglQgEgLgHgEQgFgFgNAAIgEAAIgDgBIgCgDIAAgvIACgEIADgBIATAAQAZAAAQALQARALAKAaIATAvQAFALAIAHQAJAIANAAIANAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAgBIAAhxIABgDQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA3AAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAIAABxQAAABABAAQAAABAAAAQAAAAABAAQAAAAABAAIAMAAQAOAAAJgIQAIgHAFgLIATgvQAKgaARgLQAQgLAZAAIASAAIAEABQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAAvQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAIgEABIgEAAQgMAAgGAFQgGAEgEALIgPAlQgEAKgGAJQgGAJgKADIAAACQALADAHAHQAIAIAEAMIASAwQAEAMAHAFQAGAEALAAIAEAAIAEABQAAAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIAAAxQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAIgEABIgVAAIgCABQgZAAgQgMg");
	this.shape_3.setTransform(5.85,70.051);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C11F0D").s().p("AA6CWQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgBgDIAAi3IgCAAIhsC4IgDADIgDABIgzAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBIgCgDIAAkiIACgCIADgCIA4AAQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIABACIAAC3IACAAIBsi3IADgDIADgBIAzAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABACIAAEiIgBADIgEACg");
	this.shape_4.setTransform(-28.7,70.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C11F0D").s().p("AgbCWQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIAAjpQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIhLAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgxQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIDbAAQABAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABADIAAAxIgBADQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIhLAAQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAADpQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAg");
	this.shape_5.setTransform(-54.4,70.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C11F0D").s().p("Aj9IVQhlhGgaiAQgBgHADgGQAEgGAIgDIC9gkQAHgBAGADQAFAEADAIQAPAwAmAeQAmAfA+ABQBDgBAlgqQAmgpABhDQgBhQgrgrQgrgrhMAAIgxAAQgJAAgEgFQgFgEAAgIIAAimQAAgIAFgEQAEgFAJAAIAuAAQBBgBAngnQAngmAAhEQAAg/gjglQgiglg+gBQg3ABghAcQggAegMAxQgDAIgFADQgGADgHgCIi7gkQgIgBgEgFQgEgFACgIQAOhOAvg8QAvg9BOgiQBNgjBnAAQBxAABRAqQBRAqArBIQAqBJAABeQAABLghA/QgiA+g/ApIAAADQAkASAjAkQAjAmAXA5QAXA5ABBOQgBBrgxBQQgxBQhWAsQhWAshuABQiXgBhmhGg");
	this.shape_6.setTransform(0.1775,-24.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C11F0D").s().p("AhhBZIgCgBIgQgkIAAgDIACgCICWhCQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAgBAAIgVgxIAAgCIABgCIAfgOIADAAIACABIA/COIAAACIgCACIgfAOIgCAAIgCgCIgWgwQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBABIiWBDIgCAAIAAAAg");
	this.shape_7.setTransform(126.675,-54.2167);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C11F0D").s().p("AgTBoIgVgiIgCgDIACgCIAYgeIgmg9IgmAJIgDAAIgCgCIgVgiQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIABgBIDTgvIADAAIABACIAVAhIABADIgBACIiHCoIgBABQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAgQglIAZAoIAzg6IgBgBg");
	this.shape_8.setTransform(114.45,-65.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C11F0D").s().p("AhUBqIgCgBIgZgeIgBgCIABgCIB9hqQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIghgoQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIABgCIAZgWIADgBIACACIBkB2IABACQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgaAWIgCABIgCgBIgigoQgBAAAAAAQAAgBgBABQAAAAAAAAQgBAAAAAAIh9BqIgCABIgBgBg");
	this.shape_9.setTransform(106.85,-86.4917);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C11F0D").s().p("AAIB0QgSgFgSgQIg8g3IgCgCIABgCICIiXIACgBIADAAIAdAbIABACIgBACIgvA1QAAAAgBAAQAAABAAAAQAAAAAAAAQABABAAAAIAcAZQASAQAGARQAHASgEARQgEAQgNAPQgNAPgQAGQgJADgJAAQgJAAgIgCgAAFAAIgiAmQAAAAgBABQAAAAAAAAQAAAAAAABQABAAAAAAIAaAYQAKAKALAAQALgBAKgJQAJgLgCgKQgBgLgLgKIgagXIgBAAIgCABg");
	this.shape_10.setTransform(88.4227,-98.7518);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C11F0D").s().p("AASB+IghgWIgBgCIAAgCIBaiJQABgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBIgqgcQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAIgfAyQgXAhgUAQQgTAQgTABQgTAAgSgNIgNgIIgBgCQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIATgcIACgBIADAAIADACQAHAFAKAAQAKAAAMgKQANgLARgZIA0hRIACgBIACABIB0BMIABACIgBACIhxCqIgBABIgBABIgBgBg");
	this.shape_11.setTransform(74.75,-109.7375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C11F0D").s().p("AhaBnIgTgIIgBgCQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgBAAAAIAOgfIACgBIACAAIAMAFQAJAEAGgBQAGgBAFgEIAIgHIgBifQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIACAAIAmASIADACIAAACIgCBlIABABIBIhFIACgBIADAAIAmASIABACIgBACIiKB8QgIAHgJAFQgKAFgMAAQgLAAgNgGg");
	this.shape_12.setTransform(58.825,-122.5625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C11F0D").s().p("AgYBpQgXgHgSgMQgSgMgJgRQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIACgCIAagVIACAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAIAKALAJQALAJAQAFQAJACAHgBQAIAAAGgEQAGgFADgHQADgNgGgJQgGgJgOgEIgUgGIgCgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAJgeQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIACgBIAUAHQANAEAJgEQAJgEAEgMQADgLgGgIQgGgIgOgFQgLgDgMAAQgMAAgNAFQgBABAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAIgKggQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIACgCQATgHASABQATgBASAGQAiAKAOAVQAOAVgIAaQgEAPgKAJQgKAJgOACIAAABQALAIAEAPQAEAOgFARQgGATgNALQgOALgTACIgLABQgMAAgQgEg");
	this.shape_13.setTransform(39.2108,-127.0903);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C11F0D").s().p("AAyBzIiEgWIgDgBIAAgCIAhjJIAAgCIADgBICEAWIACABIABACIgFAhIgBACIgDAAIhZgOQAAAAgBAAQAAAAAAAAQAAAAAAABQgBAAAAABIgGApQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIBKAMIACABIAAADIgFAfIgBACIgDABIhKgMQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgHAsQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIBZAPIACABQAAAAAAABQABAAAAAAQAAABAAAAQAAAAgBABIgEAgQAAABgBAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgBABIgBAAg");
	this.shape_14.setTransform(22.45,-131.1167);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C11F0D").s().p("AhMBpIgDgBIgBgCIAFjMIABgCIACgBIBRACQAXABAQAIQARAKAIAPQAIAPAAAVQgBATgJAPQgJAPgQAHQgRAJgXgBIglgBQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAIgBBHIgBACIgCABgAgeg+IgCA1QAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAiABQAPgBAIgHQAIgHAAgNQABgNgIgIQgIgJgOABIgigCQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABg");
	this.shape_15.setTransform(3.8764,-133);

	this.text = new cjs.Text(" ", "bold 31px 'DIN Next CYR'", "#C11F0D");
	this.text.lineHeight = 43;
	this.text.parent = this;
	this.text.setTransform(-15,-148,1,1,-4.3168);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C11F0D").s().p("Ag9CPIgBgCIgljIIAAgCIACgCIAngHIACABIABACIAYB+IABAAIAziNIACgDIACAAIAjgHIACABIACABIAlDJIgBACIgCABIgnAIIgCgBIgBgBIgYh/IgBAAIgzCNIgBADIgDABIgjAGIgCgBgAg2hhQgNgHgHgRIgBgDIACgDIAUgFIACgBIABACQAEAGAGADQAGADAIgCQAIgBAEgGQAFgEABgHIABgCQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAABIAUgCIACACQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAUgKAKQgIAMgUADIgMACQgMAAgJgFg");
	this.shape_16.setTransform(-24.5625,-133.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C11F0D").s().p("AgqB+IgBgCIhFi/IAAgDIACgCIAmgNIACAAIABACIAsB5IABAAIAciUIABgCIACgBIAigNQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABACIBFC/IAAADIgCACIglANIgDgBIgBgBIgrh6IgBAAIgcCVIgBACIgCABIgjANIAAAAIgCgBg");
	this.shape_17.setTransform(-45.425,-125.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C11F0D").s().p("AghCKQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIhjiyQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIACgCIAggSIADgBIADACIBoBOIABgBIgLiCIAAgDIABgBIAfgSIADgBIACACIBkCxIAAADQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgeARQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgBgCIg6hmIgBAAIAJBhIgBADIgCADIgTAKIgDABIgEgBIhNg7IgBAAIA5BoIAAACIAAACIgeARIgCABIgBgBg");
	this.shape_18.setTransform(-66.4208,-115.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C11F0D").s().p("AAACEIiBifIAAgCIABgCIAfgZIACAAIACABIBRBkIABgBIgViUIAAgEIABgBIAdgXQAAAAAAAAQABgBAAAAQAAAAAAABQABAAAAAAIAAABICBCeIABADIgBACIgfAZIgCABIgDgCIhRhkIgBAAIAWCVIAAADIgCACIgcAWIgCABIgBgBg");
	this.shape_19.setTransform(-85.4875,-102.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C11F0D").s().p("AAHCYIg3g0IgBgBIABgCIAIgJIABgCIAAgEQgFgMgFgLIgRgYQgKgMgOgPIgjgiIgVgSIgBgCIABgCIBchnIADgBIACACIB5BvQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAIALgNIACgBIADAAIA4AzIABACIgBABIgZAbIgBABIgCgBIgbgZQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAIhRBZQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIAbAYIACADIgCACIgYAbIgBAAIgDAAgAg2haIghAlQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAIACADQAfAcATAXQAUAZAHAUIABABIACgBIAugzQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAgBgBIhchUIgBgBIgCABg");
	this.shape_20.setTransform(-98.55,-85.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C11F0D").s().p("AAoB+IiqhwIgBgCIAAgCIAVghIACgBIADABIBrBGIABgBIhDiHIAAgDIAAgCIAVgeIACgBIABAAICrBwIABACIAAACIgVAgIgCABIgDAAIhshGIAAABIBDCGIAAAEIgBACIgUAeIgCABIgCAAg");
	this.shape_21.setTransform(-114.75,-70.3875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C11F0D").s().p("ABHBnIi5hUIgCgBIAAgDIAihKQAOgfAVgJQAVgJAWALQAPAHAHALQAHALABAMIABAAQAGgFAIgDQAJgDAKAAQAKAAAMAFQAcANAGAYQAGAYgOAeIghBJIgCACIgBAAIgBgBgAApgWQgJADgGANIgOAfQgBAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAIAtAUQAAAAABABQAAAAAAAAQABAAAAgBQAAAAABAAIAOggQAFgNgDgIQgDgKgLgFQgHgDgGAAIgIACgAglg2QgJADgFAMIgNAeQgBAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAIAqASQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABgBIANgcQAFgMgDgJQgDgKgKgEQgGgDgGAAQgEAAgEACg");
	this.shape_22.setTransform(-125.3619,-51.7192);

	this.instance = new lib.ClipGroup_7();
	this.instance.parent = this;
	this.instance.setTransform(0.35,61.85,1,1,0,0,0,144,86.9);

	this.instance_1 = new lib.ClipGroup_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.7,-1.85,1,1,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.text},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-301.7,-251.8,600,500), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(157.5,157.5,1,1,0,0,0,157.5,157.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,315,315), null);


(lib.ClipGroup_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	mask_2.setTransform(300,250);

	// Layer_3
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(302.05,256.1,1,1,0,0,0,157.5,157.5);
	this.instance.alpha = 0.8984;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_3, new cjs.Rectangle(144.6,98.6,315,315), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	mask_10.setTransform(300,250);

	// Layer_3
	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#C11F0D").s().p("AhSByIgDgBIAAgDIAAjbIAAgDIADgBIAqAAIADABIABADIAABMQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIAnAAQAaAAASAJQASAKAKAPQAJAQAAAVQAAAXgJAQQgKAQgSAKQgSAJgaAAgAgkAMIAAA6QAAAAAAAAQAAABAAAAQABAAAAAAQAAABABAAIAlAAQAQAAAJgJQAJgIAAgPQAAgOgJgIQgJgIgQAAIglAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAg");
	this.shape_343.setTransform(367.025,308.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#C11F0D").s().p("AArByIgDgBIgBgDIAAhXQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAIhJAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIAABXIgBADIgDABIgqAAIgDgBIAAgDIAAjbIAAgDIADgBIAqAAIADABIABADIAABVQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIBJAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIAAhVIABgDIADgBIAqAAIACABIABADIAADbIgBADIgCABg");
	this.shape_344.setTransform(346.525,308.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#C11F0D").s().p("AhIByIgDgBIAAgDIAAjbIAAgDIADgBICRAAIACABIABADIAAAjIgBADIgCAAIhhAAQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAIAAAuQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABAAIBQAAIADABIABADIAAAiIgBACIgDABIhQAAQgBAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAIAAAwQAAAAAAAAQAAABAAAAQAAAAABAAQAAABABAAIBhAAIACAAIABADIAAAjIgBADIgCABg");
	this.shape_345.setTransform(327.725,308.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#C11F0D").s().p("ABGCIIgCgBIgBgCIAAgnQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIiCAAIgCAAIAAACIAAAnIgBACIgCABIgoAAIgCgBIAAgCIAAhSIAAgCIACgBIAOAAIACgBIACgCQAHgMAFgOQAEgNADgQQADgRACgWQACgXgBgeIAAgeIABgCIADgBICTAAIACABIABACIAACyQAAAAABABQAAAAAAAAQAAAAABABQAAAAABAAIASAAIADABIABACIAABSIgBACIgCABgAgShZIAAADQAAAugFAhQgHAggKAVIAAABIACABIBLAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBAAAAIAAiHQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIg0AAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABg");
	this.shape_346.setTransform(307.35,310.425);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#C11F0D").s().p("ABkBrQgNgJgHgUIgPglQgFgNgHgEQgIgFgKABIgJAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIAABZIgBADIgDABIgpAAIgCgBIgCgDIAAhZQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIgJAAQgJgBgIAFQgIAEgFANIgOAlQgIAUgMAJQgNAJgUgBIgQAAIgDAAIAAgDIAAgmIAAgCIADAAIADAAQAJAAAEgEQAGgDADgJIAOglQADgJAFgGQAGgFAIgCIAAgCQgIgCgEgHQgFgHgDgIIgLgcQgDgIgFgDQgFgEgIAAIgEAAIgCgBIgBgCIAAgkIABgDIACAAIAOAAQAUgBAMAJQANAIAIAUIAOAkQADAIAGAGQAHAGALAAIAJAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAhWIACgCIACgBIApAAIADABIABACIAABWQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAJAAQALAAAHgGQAGgGADgIIAPgkQAIgUANgIQAMgJAUABIANAAIADAAIABADIAAAkIgBACIgDABIgCAAQgKAAgFAEQgEADgEAIIgLAcQgCAIgGAHQgEAHgHACIAAACQAIACAFAFQAGAGADAJIAOAlQADAJAGADQAFAEAHAAIAEAAIACAAIABACIAAAmIgBADIgCAAIgQAAIgDAAQgSAAgMgIg");
	this.shape_347.setTransform(280.5,308.2249);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#C11F0D").s().p("AAsByIgCgBIgBgDIAAiLIgBAAIhTCMIgCADIgCAAIgnAAIgDgBIAAgDIAAjcIAAgCIADgBIArAAIACABIABACIAACLIABAAIBSiLIACgDIADAAIAnAAIACABIABACIAADcIgBADIgCABg");
	this.shape_348.setTransform(254.5,308.2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#C11F0D").s().p("AgUByIgDgBIgBgDIAAixQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAIg5AAIgDgBIgBgCIAAglIABgDIADgBICnAAIADABIABADIAAAlIgBACIgDABIg5AAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIAACxIgBADIgDABg");
	this.shape_349.setTransform(235.125,308.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#C11F0D").s().p("AjVHBQhVg7gWhrQgBgHADgFQADgEAGgCICggfQAGgBAFACQAEAEADAGQAMAoAgAaQAhAaAzABQA5gBAggjQAfgjABg4QgBhEgkgkQgkgkhAAAIgqAAQgHAAgDgEQgFgEAAgHIAAiLQAAgHAFgDQADgFAHAAIAnAAQA3AAAhghQAgghABg5QAAg1geggQgdgfg0AAQguABgbAXQgbAZgLAqQgCAHgEADQgFACgHgCIiegeQgGgBgEgFQgCgDABgHQALhCApgzQAngzBCgdQBBgdBXAAQBfAABEAjQBEAjAkA9QAkA+AABPQAABAgcA0QgcA0g2AjIAAADQAfAPAdAeQAeAgATAwQAUAwAABCQAABbgqBDQgpBDhIAlQhJAmhdABQh/gChWg7g");
	this.shape_350.setTransform(301.875,227.5);

	this.instance = new lib.ClipGroup_2_1();
	this.instance.parent = this;
	this.instance.setTransform(302.05,256.25,1,1,0,0,0,141.8,140.7);

	this.instance_1 = new lib.ClipGroup_1_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300,250,1,1,0,0,0,300,250);

	var maskedShapeInstanceList = [this.shape_343,this.shape_344,this.shape_345,this.shape_346,this.shape_347,this.shape_348,this.shape_349,this.shape_350,this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343}]}).wait(1));

	// Layer_1
	this.instance_2 = new lib.ClipGroup();
	this.instance_2.parent = this;
	this.instance_2.setTransform(299.95,250.4,0.88,0.88,0,0,0,300.1,250.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(0,0,600,500), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.ClipGroup_0_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(157.5,157.5,1,1,0,0,0,157.5,157.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,315,315), null);


(lib.ClipGroup_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	mask_3.setTransform(300,250);

	// Layer_3
	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(302.05,256.1,1,1,0,0,0,157.5,157.5);
	this.instance_1.alpha = 0.8984;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_4, new cjs.Rectangle(144.6,98.6,315,315), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	mask_11.graphics.p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	mask_11.setTransform(300,250);

	// Layer_3
	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#C11F0D").s().p("AhSByIgDgBIAAgDIAAjbIAAgDIADgBIAqAAIADABIABADIAABMQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIAnAAQAaAAASAJQASAKAKAPQAJAQAAAVQAAAXgJAQQgKAQgSAKQgSAJgaAAgAgkAMIAAA6QAAAAAAAAQAAABAAAAQABAAAAAAQAAABABAAIAlAAQAQAAAJgJQAJgIAAgPQAAgOgJgIQgJgIgQAAIglAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAg");
	this.shape_351.setTransform(367.025,308.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#C11F0D").s().p("AArByIgDgBIgBgDIAAhXQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAIhJAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIAABXIgBADIgDABIgqAAIgDgBIAAgDIAAjbIAAgDIADgBIAqAAIADABIABADIAABVQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIBJAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIAAhVIABgDIADgBIAqAAIACABIABADIAADbIgBADIgCABg");
	this.shape_352.setTransform(346.525,308.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#C11F0D").s().p("AhIByIgDgBIAAgDIAAjbIAAgDIADgBICRAAIACABIABADIAAAjIgBADIgCAAIhhAAQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAIAAAuQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABAAIBQAAIADABIABADIAAAiIgBACIgDABIhQAAQgBAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAIAAAwQAAAAAAAAQAAABAAAAQAAAAABAAQAAABABAAIBhAAIACAAIABADIAAAjIgBADIgCABg");
	this.shape_353.setTransform(327.725,308.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#C11F0D").s().p("ABGCIIgCgBIgBgCIAAgnQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIiCAAIgCAAIAAACIAAAnIgBACIgCABIgoAAIgCgBIAAgCIAAhSIAAgCIACgBIAOAAIACgBIACgCQAHgMAFgOQAEgNADgQQADgRACgWQACgXgBgeIAAgeIABgCIADgBICTAAIACABIABACIAACyQAAAAABABQAAAAAAAAQAAAAABABQAAAAABAAIASAAIADABIABACIAABSIgBACIgCABgAgShZIAAADQAAAugFAhQgHAggKAVIAAABIACABIBLAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBAAAAIAAiHQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIg0AAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABg");
	this.shape_354.setTransform(307.35,310.425);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#C11F0D").s().p("ABkBrQgNgJgHgUIgPglQgFgNgHgEQgIgFgKABIgJAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIAABZIgBADIgDABIgpAAIgCgBIgCgDIAAhZQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIgJAAQgJgBgIAFQgIAEgFANIgOAlQgIAUgMAJQgNAJgUgBIgQAAIgDAAIAAgDIAAgmIAAgCIADAAIADAAQAJAAAEgEQAGgDADgJIAOglQADgJAFgGQAGgFAIgCIAAgCQgIgCgEgHQgFgHgDgIIgLgcQgDgIgFgDQgFgEgIAAIgEAAIgCgBIgBgCIAAgkIABgDIACAAIAOAAQAUgBAMAJQANAIAIAUIAOAkQADAIAGAGQAHAGALAAIAJAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAhWIACgCIACgBIApAAIADABIABACIAABWQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAJAAQALAAAHgGQAGgGADgIIAPgkQAIgUANgIQAMgJAUABIANAAIADAAIABADIAAAkIgBACIgDABIgCAAQgKAAgFAEQgEADgEAIIgLAcQgCAIgGAHQgEAHgHACIAAACQAIACAFAFQAGAGADAJIAOAlQADAJAGADQAFAEAHAAIAEAAIACAAIABACIAAAmIgBADIgCAAIgQAAIgDAAQgSAAgMgIg");
	this.shape_355.setTransform(280.5,308.2249);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#C11F0D").s().p("AAsByIgCgBIgBgDIAAiLIgBAAIhTCMIgCADIgCAAIgnAAIgDgBIAAgDIAAjcIAAgCIADgBIArAAIACABIABACIAACLIABAAIBSiLIACgDIADAAIAnAAIACABIABACIAADcIgBADIgCABg");
	this.shape_356.setTransform(254.5,308.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#C11F0D").s().p("AgUByIgDgBIgBgDIAAixQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAIg5AAIgDgBIgBgCIAAglIABgDIADgBICnAAIADABIABADIAAAlIgBACIgDABIg5AAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIAACxIgBADIgDABg");
	this.shape_357.setTransform(235.125,308.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#C11F0D").s().p("AkkH1QgHAAgEgEQgDgEAAgHIAAiGQgBgHACgEQABgEAFgGIFZmbQAcggAPghQAPghAAgmQAAgygcgfQgcgfgygBQgyAAgeAeQgeAegGA4QAAAHgEACQgFAEgHgCIiggaQgGAAgEgFQgCgFABgHQAFhFAmg5QAlg6BDgjQBEgkBeAAQBeAABEAlQBEAlAkA/QAkBAABBQQgBBHgaA6QgaA6gvA0IkCEyIAAACIFXAAQAHAAAEAFQAEADAAAHIAACPQAAAHgEAEQgEAEgHAAg");
	this.shape_358.setTransform(301.8607,226.675);

	this.instance_3 = new lib.ClipGroup_2_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(302.05,256.25,1,1,0,0,0,141.8,140.7);

	this.instance_4 = new lib.ClipGroup_1_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(300,250,1,1,0,0,0,300,250);

	var maskedShapeInstanceList = [this.shape_351,this.shape_352,this.shape_353,this.shape_354,this.shape_355,this.shape_356,this.shape_357,this.shape_358,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351}]}).wait(1));

	// Layer_1
	this.instance_5 = new lib.ClipGroup();
	this.instance_5.parent = this;
	this.instance_5.setTransform(300.25,250.55,0.88,0.88,0,0,0,300.1,250.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(0,0,600,500), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_2 = new lib.ClipGroup_0_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(157.5,157.5,1,1,0,0,0,157.5,157.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,315,315), null);


(lib.ClipGroup_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	mask_4.setTransform(300,250);

	// Layer_3
	this.instance_2 = new lib.Group_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(302.05,256.1,1,1,0,0,0,157.5,157.5);
	this.instance_2.alpha = 0.8984;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_5, new cjs.Rectangle(144.6,98.6,315,315), null);


(lib.ClipGroup_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	mask_12.graphics.p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	mask_12.setTransform(300,250);

	// Layer_3
	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#C11F0D").s().p("AhSByIgDgBIAAgDIAAjbIAAgDIADgBIAqAAIADABIABADIAABMQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIAnAAQAaAAASAJQASAKAKAPQAJAQAAAVQAAAXgJAQQgKAQgSAKQgSAJgaAAgAgkAMIAAA6QAAAAAAAAQAAABAAAAQABAAAAAAQAAABABAAIAlAAQAQAAAJgJQAJgIAAgPQAAgOgJgIQgJgIgQAAIglAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAg");
	this.shape_359.setTransform(367.025,308.2);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#C11F0D").s().p("AArByIgDgBIgBgDIAAhXQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAIhJAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIAABXIgBADIgDABIgqAAIgDgBIAAgDIAAjbIAAgDIADgBIAqAAIADABIABADIAABVQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIBJAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIAAhVIABgDIADgBIAqAAIACABIABADIAADbIgBADIgCABg");
	this.shape_360.setTransform(346.525,308.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#C11F0D").s().p("AhIByIgDgBIAAgDIAAjbIAAgDIADgBICRAAIACABIABADIAAAjIgBADIgCAAIhhAAQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAIAAAuQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABAAIBQAAIADABIABADIAAAiIgBACIgDABIhQAAQgBAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAIAAAwQAAAAAAAAQAAABAAAAQAAAAABAAQAAABABAAIBhAAIACAAIABADIAAAjIgBADIgCABg");
	this.shape_361.setTransform(327.725,308.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#C11F0D").s().p("ABGCIIgCgBIgBgCIAAgnQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIiCAAIgCAAIAAACIAAAnIgBACIgCABIgoAAIgCgBIAAgCIAAhSIAAgCIACgBIAOAAIACgBIACgCQAHgMAFgOQAEgNADgQQADgRACgWQACgXgBgeIAAgeIABgCIADgBICTAAIACABIABACIAACyQAAAAABABQAAAAAAAAQAAAAABABQAAAAABAAIASAAIADABIABACIAABSIgBACIgCABgAgShZIAAADQAAAugFAhQgHAggKAVIAAABIACABIBLAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBAAAAIAAiHQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIg0AAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABg");
	this.shape_362.setTransform(307.35,310.425);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#C11F0D").s().p("ABkBrQgNgJgHgUIgPglQgFgNgHgEQgIgFgKABIgJAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIAABZIgBADIgDABIgpAAIgCgBIgCgDIAAhZQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIgJAAQgJgBgIAFQgIAEgFANIgOAlQgIAUgMAJQgNAJgUgBIgQAAIgDAAIAAgDIAAgmIAAgCIADAAIADAAQAJAAAEgEQAGgDADgJIAOglQADgJAFgGQAGgFAIgCIAAgCQgIgCgEgHQgFgHgDgIIgLgcQgDgIgFgDQgFgEgIAAIgEAAIgCgBIgBgCIAAgkIABgDIACAAIAOAAQAUgBAMAJQANAIAIAUIAOAkQADAIAGAGQAHAGALAAIAJAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAhWIACgCIACgBIApAAIADABIABACIAABWQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAJAAQALAAAHgGQAGgGADgIIAPgkQAIgUANgIQAMgJAUABIANAAIADAAIABADIAAAkIgBACIgDABIgCAAQgKAAgFAEQgEADgEAIIgLAcQgCAIgGAHQgEAHgHACIAAACQAIACAFAFQAGAGADAJIAOAlQADAJAGADQAFAEAHAAIAEAAIACAAIABACIAAAmIgBADIgCAAIgQAAIgDAAQgSAAgMgIg");
	this.shape_363.setTransform(280.5,308.2249);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#C11F0D").s().p("AAsByIgCgBIgBgDIAAiLIgBAAIhTCMIgCADIgCAAIgnAAIgDgBIAAgDIAAjcIAAgCIADgBIArAAIACABIABACIAACLIABAAIBSiLIACgDIADAAIAnAAIACABIABACIAADcIgBADIgCABg");
	this.shape_364.setTransform(254.5,308.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#C11F0D").s().p("AgUByIgDgBIgBgDIAAixQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAIg5AAIgDgBIgBgCIAAglIABgDIADgBICnAAIADABIABADIAAAlIgBACIgDABIg5AAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIAACxIgBADIgDABg");
	this.shape_365.setTransform(235.125,308.2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#C11F0D").s().p("AABHtQgGAAgEgEQgEgEAAgHIAArlIgDAAIicBrQgHAFgEgDQgFgCAAgIIAAi0QAAgGACgFQADgFAFgFIClh3QAMgIANAAICjAAQAHAAADAEQAEAEAAAHIAAO7QAAAHgEAEQgDAEgHAAg");
	this.shape_366.setTransform(298.075,227.475);

	this.instance_6 = new lib.ClipGroup_2_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(302.05,256.25,1,1,0,0,0,141.8,140.7);

	this.instance_7 = new lib.ClipGroup_1_5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(300,250,1,1,0,0,0,300,250);

	var maskedShapeInstanceList = [this.shape_359,this.shape_360,this.shape_361,this.shape_362,this.shape_363,this.shape_364,this.shape_365,this.shape_366,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359}]}).wait(1));

	// Layer_1
	this.instance_8 = new lib.ClipGroup();
	this.instance_8.parent = this;
	this.instance_8.setTransform(300.05,250.05,0.88,0.88,0,0,0,300.1,250.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(0,0,600,500), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_11();
	this.instance.parent = this;
	this.instance.setTransform(-1.4,-4.5,0.24,0.24,0,0,0,300.1,250.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-73.4,-64.5,144,120), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_12();
	this.instance.parent = this;
	this.instance.setTransform(-1.4,-4.5,0.24,0.24,0,0,0,300.1,250.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-73.4,-64.5,144,120), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_13();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-0.65,0.24,0.24,0,0,0,299.6,250.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-72,-60.7,144,120), null);


// stage content:
(lib._300x250_1 = function(mode,startPosition,loop) {
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
	this.frame_449 = function() {
		if(i<=0){i++; 
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(449).call(this.frame_449).wait(1));

	// Layer_2
	this.btn_main_link = new lib.click();
	this.btn_main_link.name = "btn_main_link";
	this.btn_main_link.parent = this;
	this.btn_main_link.setTransform(150.4,201.9,1.0002,2.3998,0,0,0,0.4,0.8);
	new cjs.ButtonHelper(this.btn_main_link, 0, 1, 2, false, new lib.click(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main_link).wait(450));

	// Layer_1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(150,126,1,1,0,0,0,0,-114.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(361).to({_off:false},0).wait(1).to({regY:0,y:240.9,alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(84));

	// Layer_1
	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151.8,317.95,1,1,0,0,0,1.8,95.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(361).to({_off:false},0).wait(1).to({regX:0,regY:0,x:150,y:222.55,alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(84));

	// Layer_31
	this.instance_2 = new lib.Symbol16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(86.3,124.6,1,1,0,0,0,-140.7,-90.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(272).to({_off:false},0).wait(1).to({regX:0,regY:0,x:225.9429,y:215.2,alpha:0.0714},0).wait(1).to({x:224.8857,alpha:0.1429},0).wait(1).to({x:223.8286,alpha:0.2143},0).wait(1).to({x:222.7714,alpha:0.2857},0).wait(1).to({x:221.7143,alpha:0.3571},0).wait(1).to({x:220.6571,alpha:0.4286},0).wait(1).to({x:219.6,alpha:0.5},0).wait(1).to({x:218.5429,alpha:0.5714},0).wait(1).to({x:217.4857,alpha:0.6429},0).wait(1).to({x:216.4286,alpha:0.7143},0).wait(1).to({x:215.3714,alpha:0.7857},0).wait(1).to({x:214.3143,alpha:0.8571},0).wait(1).to({x:213.2571,alpha:0.9286},0).wait(1).to({x:212.2,alpha:1},0).wait(76).to({x:205.4,alpha:0.8},0).wait(1).to({x:198.6,alpha:0.6},0).wait(1).to({x:191.8,alpha:0.4},0).wait(1).to({x:185,alpha:0.2},0).wait(1).to({x:178.2,alpha:0},0).to({_off:true},1).wait(83));

	// Layer_26 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_296 = new cjs.Graphics().p("AjkQyQiHiHAAi/QAAjACHiIQCIiHC+AAQDAAACHCHQCICIAADAQAAC/iICHQiHCIjAAAQi+AAiIiIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(296).to({graphics:mask_graphics_296,x:56.074,y:121.0194}).wait(154));

	// Layer_27
	this.instance_3 = new lib.Symbol13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-58,143);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(296).to({_off:false},0).wait(1).to({x:-44.5471,y:142.8529},0).wait(1).to({x:-31.0941,y:142.7059},0).wait(1).to({x:-17.6412,y:142.5588},0).wait(1).to({x:-4.1882,y:142.4118},0).wait(1).to({x:9.2647,y:142.2647},0).wait(1).to({x:22.7176,y:142.1176},0).wait(1).to({x:36.1706,y:141.9706},0).wait(1).to({x:49.6235,y:141.8235},0).wait(1).to({x:63.0765,y:141.6765},0).wait(1).to({x:76.5294,y:141.5294},0).wait(1).to({x:89.9824,y:141.3824},0).wait(1).to({x:103.4353,y:141.2353},0).wait(1).to({x:116.8882,y:141.0882},0).wait(1).to({x:130.3412,y:140.9412},0).wait(1).to({x:143.7941,y:140.7941},0).wait(1).to({x:157.2471,y:140.6471},0).wait(1).to({x:170.7,y:140.5},0).wait(44).to({_off:true},1).wait(92));

	// Layer_34
	this.instance_4 = new lib.Symbol19();
	this.instance_4.parent = this;
	this.instance_4.setTransform(147.15,183,1,1,0,0,0,122.5,85);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(366).to({_off:false},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(76));

	// Layer_1
	this.instance_5 = new lib.Symbol17();
	this.instance_5.parent = this;
	this.instance_5.setTransform(232.2,64.35,1,1,0,0,0,47.6,46.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(361).to({_off:false},0).wait(1).to({regX:48.1,regY:48.1,x:232.7,y:65.85,alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(84));

	// Layer_1
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(65.9,202.75,0.2501,0.25);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(277).to({_off:false},0).wait(1).to({regX:0.3,regY:4.2,scaleX:0.2502,x:66,y:203.25,alpha:0.0714},0).wait(1).to({y:202.7,alpha:0.1429},0).wait(1).to({y:202.2,alpha:0.2143},0).wait(1).to({y:201.65,alpha:0.2857},0).wait(1).to({y:201.15,alpha:0.3571},0).wait(1).to({y:200.6,alpha:0.4286},0).wait(1).to({y:200.1,alpha:0.5},0).wait(1).to({y:199.55,alpha:0.5714},0).wait(1).to({y:199,alpha:0.6429},0).wait(1).to({y:198.5,alpha:0.7143},0).wait(1).to({y:197.95,alpha:0.7857},0).wait(1).to({y:197.45,alpha:0.8571},0).wait(1).to({y:196.9,alpha:0.9286},0).wait(1).to({y:196.4,alpha:1},0).wait(71).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(83));

	// Layer_1
	this.instance_7 = new lib.Symbol15();
	this.instance_7.parent = this;
	this.instance_7.setTransform(197.6,107.3,1,1,0,0,0,-1.8,3.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(272).to({_off:false},0).wait(1).to({regX:-0.6,regY:0,x:196.8,y:103.6,alpha:0.2},0).wait(1).to({x:194.8,alpha:0.4},0).wait(1).to({x:192.8,alpha:0.6},0).wait(1).to({x:190.8,alpha:0.8},0).wait(1).to({x:188.8,alpha:1},0).wait(1).to({x:188.75},0).wait(84).to({x:185.75,alpha:0.8},0).wait(1).to({x:182.75,alpha:0.6},0).wait(1).to({x:179.75,alpha:0.4},0).wait(1).to({x:176.75,alpha:0.2},0).wait(1).to({x:173.8,alpha:0},0).wait(8).to({_off:true},1).wait(75));

	// Layer_1
	this.instance_8 = new lib.Symbol14();
	this.instance_8.parent = this;
	this.instance_8.setTransform(193.35,115.25,1,1,0,0,0,-70.4,-98.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(209).to({_off:false},0).wait(1).to({regX:0,regY:0,x:262.6929,y:213.95,alpha:0.0714},0).wait(1).to({x:261.6357,alpha:0.1429},0).wait(1).to({x:260.5786,alpha:0.2143},0).wait(1).to({x:259.5214,alpha:0.2857},0).wait(1).to({x:258.4643,alpha:0.3571},0).wait(1).to({x:257.4071,alpha:0.4286},0).wait(1).to({x:256.35,alpha:0.5},0).wait(1).to({x:255.2929,alpha:0.5714},0).wait(1).to({x:254.2357,alpha:0.6429},0).wait(1).to({x:253.1786,alpha:0.7143},0).wait(1).to({x:252.1214,alpha:0.7857},0).wait(1).to({x:251.0643,alpha:0.8571},0).wait(1).to({x:250.0071,alpha:0.9286},0).wait(1).to({x:248.95,alpha:1},0).wait(50).to({x:245.15,alpha:0.8},0).wait(1).to({x:241.35,alpha:0.6},0).wait(1).to({x:237.55,alpha:0.4},0).wait(1).to({x:233.75,alpha:0.2},0).wait(1).to({x:229.95,alpha:0},0).to({_off:true},1).wait(172));

	// Layer_1
	this.instance_9 = new lib.Symbol12();
	this.instance_9.parent = this;
	this.instance_9.setTransform(65.1,193.85,1,1,0,0,0,-1.8,-5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(209).to({_off:false},0).wait(1).to({regX:-1,regY:-3.2,x:65.9,y:195.65,alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(59).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(172));

	// Layer_1
	this.instance_10 = new lib.Symbol10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(161.95,115.6,1,1,0,0,0,-92.4,-98.3);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(146).to({_off:false},0).wait(1).to({regX:0,regY:0,x:253.15,y:213.9,alpha:0.0714},0).wait(1).to({x:251.95,alpha:0.1429},0).wait(1).to({x:250.75,alpha:0.2143},0).wait(1).to({x:249.55,alpha:0.2857},0).wait(1).to({x:248.35,alpha:0.3571},0).wait(1).to({x:247.15,alpha:0.4286},0).wait(1).to({x:245.95,alpha:0.5},0).wait(1).to({x:244.75,alpha:0.5714},0).wait(1).to({x:243.55,alpha:0.6429},0).wait(1).to({x:242.35,alpha:0.7143},0).wait(1).to({x:241.15,alpha:0.7857},0).wait(1).to({x:239.95,alpha:0.8571},0).wait(1).to({x:238.75,alpha:0.9286},0).wait(1).to({x:237.55,alpha:1},0).wait(50).to({x:235.15,alpha:0.8},0).wait(1).to({x:232.75,alpha:0.6},0).wait(1).to({x:230.35,alpha:0.4},0).wait(1).to({x:227.95,alpha:0.2},0).wait(1).to({x:225.55,alpha:0},0).to({_off:true},1).wait(235));

	// Layer_1
	this.instance_11 = new lib.Symbol8();
	this.instance_11.parent = this;
	this.instance_11.setTransform(65.25,193.9,1,1,0,0,0,-1.8,-5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(146).to({_off:false},0).wait(1).to({regX:-1,regY:-3.1,x:66.05,y:195.8,alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(59).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(235));

	// Layer_1
	this.instance_12 = new lib.Symbol7();
	this.instance_12.parent = this;
	this.instance_12.setTransform(143.15,104.3,1,1,0,0,0,-101.6,-108);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(84).to({_off:false},0).wait(1).to({regX:0,regY:0,x:243.8929,y:212.3,alpha:0.0714},0).wait(1).to({x:243.0357,alpha:0.1429},0).wait(1).to({x:242.1786,alpha:0.2143},0).wait(1).to({x:241.3214,alpha:0.2857},0).wait(1).to({x:240.4643,alpha:0.3571},0).wait(1).to({x:239.6071,alpha:0.4286},0).wait(1).to({x:238.75,alpha:0.5},0).wait(1).to({x:237.8929,alpha:0.5714},0).wait(1).to({x:237.0357,alpha:0.6429},0).wait(1).to({x:236.1786,alpha:0.7143},0).wait(1).to({x:235.3214,alpha:0.7857},0).wait(1).to({x:234.4643,alpha:0.8571},0).wait(1).to({x:233.6071,alpha:0.9286},0).wait(1).to({x:232.75,alpha:1},0).wait(49).to({x:230.35,alpha:0.8},0).wait(1).to({x:227.95,alpha:0.6},0).wait(1).to({x:225.55,alpha:0.4},0).wait(1).to({x:223.15,alpha:0.2},0).wait(1).to({x:220.75,alpha:0},0).to({_off:true},1).wait(298));

	// Layer_1
	this.instance_13 = new lib.Symbol5();
	this.instance_13.parent = this;
	this.instance_13.setTransform(65.25,193.75,1,1,0,0,0,-0.4,-1.4);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(84).to({_off:false},0).wait(1).to({regX:0.4,regY:0.5,x:66.05,y:195.65,alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(58).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(298));

	// Layer_1
	this.instance_14 = new lib.ClipGroup_10();
	this.instance_14.parent = this;
	this.instance_14.setTransform(141.1,104.15,0.64,0.64,0,0,0,296.2,249.7);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:464.6,regY:422.8,x:248.05,y:214.95,alpha:0.0714},0).wait(1).to({x:247.2,alpha:0.1429},0).wait(1).to({x:246.35,alpha:0.2143},0).wait(1).to({x:245.5,alpha:0.2857},0).wait(1).to({x:244.65,alpha:0.3571},0).wait(1).to({x:243.8,alpha:0.4286},0).wait(1).to({x:242.9,alpha:0.5},0).wait(1).to({x:242.05,alpha:0.5714},0).wait(1).to({x:241.2,alpha:0.6429},0).wait(1).to({x:240.35,alpha:0.7143},0).wait(1).to({x:239.5,alpha:0.7857},0).wait(1).to({x:238.65,alpha:0.8571},0).wait(1).to({x:237.8,alpha:0.9286},0).wait(1).to({x:236.9,alpha:1},0).wait(71).to({x:234.5,alpha:0.8},0).wait(1).to({x:232.1,alpha:0.6},0).wait(1).to({x:229.7,alpha:0.4},0).wait(1).to({x:227.3,alpha:0.2},0).wait(1).to({x:224.9,alpha:0},0).to({_off:true},1).wait(360));

	// Layer_26 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_14 = new cjs.Graphics().p("AjkQyQiHiHAAi/QAAjACHiIQCIiHC+AAQDAAACHCHQCICIAADAQAAC/iICHQiHCIjAAAQi+AAiIiIg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_1_graphics_14,x:56.074,y:121.0194}).wait(436));

	// Layer_27
	this.instance_15 = new lib.Symbol13();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-58,143);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(14).to({_off:false},0).wait(1).to({x:-44.5471,y:142.8529},0).wait(1).to({x:-31.0941,y:142.7059},0).wait(1).to({x:-17.6412,y:142.5588},0).wait(1).to({x:-4.1882,y:142.4118},0).wait(1).to({x:9.2647,y:142.2647},0).wait(1).to({x:22.7176,y:142.1176},0).wait(1).to({x:36.1706,y:141.9706},0).wait(1).to({x:49.6235,y:141.8235},0).wait(1).to({x:63.0765,y:141.6765},0).wait(1).to({x:76.5294,y:141.5294},0).wait(1).to({x:89.9824,y:141.3824},0).wait(1).to({x:103.4353,y:141.2353},0).wait(1).to({x:116.8882,y:141.0882},0).wait(1).to({x:130.3412,y:140.9412},0).wait(1).to({x:143.7941,y:140.7941},0).wait(1).to({x:157.2471,y:140.6471},0).wait(1).to({x:170.7,y:140.5},0).wait(44).to({_off:true},1).wait(374));

	// Layer_1
	this.instance_16 = new lib.Symbol1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(65.9,202.75,0.25,0.25);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:0.3,regY:4.2,x:65.95,y:203.2,alpha:0.0714},0).wait(1).to({y:202.65,alpha:0.1429},0).wait(1).to({y:202.05,alpha:0.2143},0).wait(1).to({y:201.5,alpha:0.2857},0).wait(1).to({y:200.9,alpha:0.3571},0).wait(1).to({y:200.35,alpha:0.4286},0).wait(1).to({y:199.8,alpha:0.5},0).wait(1).to({y:199.2,alpha:0.5714},0).wait(1).to({y:198.65,alpha:0.6429},0).wait(1).to({y:198.05,alpha:0.7143},0).wait(1).to({y:197.5,alpha:0.7857},0).wait(1).to({y:196.9,alpha:0.8571},0).wait(1).to({y:196.35,alpha:0.9286},0).wait(1).to({y:195.8,alpha:1},0).wait(71).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(360));

	// Layer_2
	this.instance_17 = new lib.up();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(450));

	// Layer_21
	this.instance_18 = new lib.Symbol11();
	this.instance_18.parent = this;
	this.instance_18.setTransform(151.5,81.5,1,1,0,0,0,0,-8);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(209).to({_off:false},0).wait(1).to({regY:0,y:89.5,alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(59).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(172));

	// Layer_19
	this.instance_19 = new lib.Symbol9();
	this.instance_19.parent = this;
	this.instance_19.setTransform(150,91.5,1,1,0,0,0,150,91.5);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(146).to({_off:false},0).wait(1).to({regY:99.5,y:99.5,alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(63).to({_off:true},1).wait(235));

	// Layer_14
	this.instance_20 = new lib.Symbol6();
	this.instance_20.parent = this;
	this.instance_20.setTransform(150,91.5);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(84).to({_off:false},0).wait(1).to({regY:8,y:99.5,alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(62).to({_off:true},1).wait(298));

	// Layer_1
	this.instance_21 = new lib.Symbol2();
	this.instance_21.parent = this;
	this.instance_21.setTransform(2.1,117.1,1,1,0,0,0,-69.8,65.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(450));

	// Layer_3
	this.instance_22 = new lib.Symbol4();
	this.instance_22.parent = this;
	this.instance_22.setTransform(226.5,129.5,1,1,0,0,0,81.5,127.5);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({x:225.9,y:129.2,alpha:0.0714},0).wait(1).to({x:225.35,y:128.9,alpha:0.1429},0).wait(1).to({x:224.75,y:128.6,alpha:0.2143},0).wait(1).to({x:224.2,y:128.35,alpha:0.2857},0).wait(1).to({x:223.6,y:128.05,alpha:0.3571},0).wait(1).to({x:223.05,y:127.75,alpha:0.4286},0).wait(1).to({x:222.5,y:127.5,alpha:0.5},0).wait(1).to({x:221.9,y:127.25,alpha:0.5714},0).wait(1).to({x:221.35,y:126.95,alpha:0.6429},0).wait(1).to({x:220.75,y:126.65,alpha:0.7143},0).wait(1).to({x:220.2,y:126.4,alpha:0.7857},0).wait(1).to({x:219.6,y:126.1,alpha:0.8571},0).wait(1).to({x:219.05,y:125.8,alpha:0.9286},0).wait(1).to({x:218.5,y:125.5,alpha:1},0).wait(75).to({_off:true},1).wait(360));

	// Layer_1
	this.instance_23 = new lib._1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(450));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.2,25,330,475);
// library properties:
lib.properties = {
	id: '0CCACE23DDD88A4395F367DF34DDC205',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_1.jpg", id:"_1"},
		{src:"images/_1_1.png", id:"_1_1"},
		{src:"images/_2.jpg", id:"_2"},
		{src:"images/_3.jpg", id:"_3"},
		{src:"images/_4.jpg", id:"_4"},
		{src:"images/light.png", id:"light"},
		{src:"images/PACK.png", id:"PACK"},
		{src:"images/up.png", id:"up"}
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
an.compositions['0CCACE23DDD88A4395F367DF34DDC205'] = {
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
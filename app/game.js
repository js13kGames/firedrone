"use strict";
/** Craters.js Demo Game
 *  This module contains the main game including entities
 *  everything was initiated in the craters.js 
 */
 
var craters = require('./craters/craters.js'),
keys = require('./plugins/utils.keysDown.js'),
sound = require('./plugins/utils.sound.js'),
mathHelpers = require('./plugins/utils.math.js'),
virtualJoystick = require('./plugins/utils.virtualJoystick.js'),
tinymusic = require('./plugins/tm.min.js');

class mygame extends cg.game {
	init (){
	super.init();
	// now init my game 
	var that = this;
	var w = this.constants.width,
		h = this.constants.height;
	// comment
	
	that.state.entities.randomforest = {
		update: function(){
	    var mx = (Math.random() * w) - 10;
	    var my = (Math.random() * h) - 10;
			 if((Math.random() < 0.99)) return;
			 // if((Math.random() < 0.95)) return;
		     var id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 25);
		     that.state.entities['mushroom__' + mx + my + id] = new mushroom(that, {name: 'mushroom', pos: {x: mx, y: my}, id: 'mushroom__' + mx + my + id});
	    },
	    
	    render: function (){
			// comment
	    }
	};
	
	var loader = function(){
		// comment
		this.type = 'loader';
		this.state = {
			position: {x:0, y:0}
		}
		// comment
		this.update = function (){
			// comment
			this.state.position.x += (Math.random() - 0.5);
			this.state.position.y += (Math.random() - 0.5);
			
			if( !window.loadtimer || ((Date.now() - window.loadtimer) > 8000)){
			if(!window.loadtimer) return window.loadtimer = Date.now();
				// document.querySelector('html').style.background = '#B06623';
				that.state.entities.drone = new drone(that, {name: 'f-18', pos: {x: (w / 2), y: (h / 2)}});
				/*that.state.entities.fire = new fire(that, {name: 'wild', pos: {x: (w), y: (h / 2)}});
				that.state.entities.mushroom = new mushroom(that, {name: 'f-18', pos: {x: (16), y: (h / 2)}}); */
				that.state.entities.hub = new hub(that);
				that.state.entities.powerups = new powerups(that, {name: 'jackpot', pos: {x: w - 85, y: h - 85}, id: 'powerups'});
				setupjoystick();
				(function () {
				// comment 
				window.gamePad = {};
				var styles   = '<style> .fab {width: 56px;height: 56px;background: #546e7a;border-radius: 50%;box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);color: #fff;display: flex;justify-content: center;align-items: center;cursor: pointer; position: fixed;bottom: 0;right: 0;margin: 25px;-webkit-tap-highlight-color: transparent;-webkit-backface-visibility: hidden;backface-visibility: hidden;overflow: hidden;}.fab.active {background: #faab1a;}.fab__ripple {position: absolute;left: -17px;bottom: -12px;width: 56px;height: 56px;-webkit-transform: scale(0.5);transform: scale(0.5);background: #fff;border-radius: 50%;-webkit-transform-origin: 50%;transform-origin: 50%;transition: -webkit-transform 0.35s cubic-bezier(0, 0, 0.3, 1) 0ms;transition: transform 0.35s cubic-bezier(0, 0, 0.3, 1) 0ms;transition: transform 0.35s cubic-bezier(0, 0, 0.3, 1) 0ms, -webkit-transform 0.35s cubic-bezier(0, 0, 0.3, 1) 0ms;-webkit-backface-visibility: hidden;backface-visibility: hidden;will-change: transform;z-index: 2;opacity: 0;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}.fab:active .fab__ripple {opacity: 0.2;-webkit-transform: scale(1) translate(31%, -22%);transform: scale(1) translate(31%, -22%);}.fab__image {overflow: hidden;z-index: 3;}</style>',
					template =  '<div onClick="window.gamePad.boost=true" style="margin-right:16px; margin-bottom:195px" class="fab button__rain"><div class="fab__ripple"></div>X2</div>' +
								'<div onClick="window.gamePad.explode=true" style="margin-right:16px; margin-bottom:65px" class="fab button__rain"><div class="fab__ripple"></div>💣</div>' +
								'<div onClick="window.gamePad.rain=true" style="margin-right:16px; margin-bottom:130px" class="fab button__rain"><div class="fab__ripple"></div>💧</div>';

				var body = document.querySelector('body');
				var snip = styles + template;
				body.insertAdjacentHTML('beforeend', snip);
				
				})();
				delete that.state.entities['loader'];
			}
		}
		
		// comment
		this.render = function (){
			if(((Date.now() - window.loadtimer) > 3000)){
			// quick introduction
			that.context.save();
			that.context.font = '64px Arial';
			that.context.fillText('🚁', (((w / 4) + 10) + this.state.position.x) , ((h / 2) + this.state.position.y), (w));
			// comment
			that.context.font = '32px Arial';
			that.context.fillText('f-18️', ((w / 4) + 65), (h / 2), (w));
			that.context.font = '16px Arial';
			that.context.fillText('🔥 fire drone 💥', (((w / 4) + 10)) , ((h / 2) + 25), (w));
			that.context.font = '14px Arial';
			that.context.fillText('use touch buttons or direction keys', (((w / 4) + 10)) , ((h / 2) + 50), (w));
			
			// link to repo
			that.context.font = '12px Arial';
			that.context.fillText('https://github.com/swashvirus/firedrone️', 16, (h - 16), (w));
			that.context.restore();
			return;
			}
			// comment
			that.context.save();
			that.context.font = '64px Arial';
			that.context.fillText('☄️', (((w / 4) + 10) + this.state.position.x) , ((h / 2) + this.state.position.y), (w));
			// comment
			that.context.font = '32px Arial';
			that.context.fillText('Craters.js️', ((w / 4) + 65), (h / 2), (w));
			// loading
			that.context.font = '16px Arial';
			that.context.fillText('loading...', (((w / 4) + 10)) , ((h / 2) + 25), (w));
			// link
			that.context.font = '12px Arial';
			that.context.fillText('https://github.com/swashvirus/️', 16, (h - 16), (h));
			that.context.restore();
		}
		
		return this;
	}
	
	that.state.entities.loader = new loader();
	
	}
}

var powerups = function(that, opt){
  this.type = 'bonus';
  this.state = {
	  id: opt.id,
	  type: opt.type,
	  position: opt.pos,
	  radius: 48,
	  life: 0,
	  color: shuffle(['#347E2F', '#5BA459', '#C93F21', '#81C284'])[0]
  }
  
  // comment
  this.update = function (){
		
		function germinate (){
			
			var w = that.constants.width,
				h = that.constants.height;
			
			var mx = (Math.random() * w) - 10;
			var my = (Math.random() * h) - 10;
			
			var id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 25);
			that.state.entities['mushroom__' + mx + my + id] = new mushroom(that, {name: 'mushroom', pos: {x: mx, y: my}, id: 'mushroom__' + mx + my + id});
		}
		
		if(gamePad.rain == true && that.state.entities['drone'].state.inventory >= 50){
			for(var i = 0; i < 10; i++){
				germinate ();
			}
			that.state.entities['drone'].state.inventory -=50;
			// gamePad.rain = false;
		}
		if(gamePad.boost == true && that.state.entities['drone'].state.inventory >= 50){
			for (var entity in that.state.entities) {
                // Fire off each active entities `render` method
                if(that.state.entities[entity].type == 'mushroom' && that.state.entities[entity].state.radius < 50)
                that.state.entities[entity].state.radius *= 1.25;
            }
			that.state.entities['drone'].state.inventory -=50;
		}
		if(gamePad.explode == true && that.state.entities['drone'].state.inventory >= 50){
			for (var entity in that.state.entities) {
		                // Fire off each active entities `render` method
		                if(that.state.entities[entity].type == 'mushroom' && that.state.entities[entity].state.radius < 50){ 
		                that.state.entities['drone'].state.position = that.state.entities[entity].state.position;
		                that.state.entities[entity].update();
		                }
		            }
			that.state.entities['drone'].state.inventory -=50;
		}
		
		gamePad.rain = false;
		gamePad.explode = false;
		gamePad.boost = false;
  }
  
  this.render = function (){
		// waiting
  }
}

// comment
var drone = function(that,opt){
  this.name = opt.name || Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2);
  this.type = 'drone';
  this.state = {
	  inventory: 100,
	  position: opt.pos,
	  radius: 16,
	  color: colorgenerator(),
	  vel: {x:10, y:10}
  }
  
  // comment
  this.update = function (){
	// Make a move ,
	
	if (keys.isPressed.left || window.joyStick.left()) {
	    this.state.position.x -= this.state.vel.x;
	    this.state.orientation = 'left';
	}
	
	if (keys.isPressed.right || window.joyStick.right()) {
	    this.state.position.x += this.state.vel.x;
	    this.state.orientation = 'right';
	}
	
	if (keys.isPressed.up || window.joyStick.up()) {
	    this.state.position.y -= this.state.vel.y;
	    this.state.orientation = 'up';
	}
	
	if (keys.isPressed.down || window.joyStick.down()) {
	    this.state.position.y += this.state.vel.y;
	    this.state.orientation = 'down';
	}
	
	// Bind the player to the boundary
	this.state.position.x = this.state.position.x.boundary((this.state.radius), (that.constants.width) - (this.state.radius));
	this.state.position.y = this.state.position.y.boundary((this.state.radius), (that.constants.height) - (this.state.radius));
		
  };
  // comment
  this.render = function (){
		// propellers
		var propeller = function (opt){
			opt.radius = (opt.radius / 1.5);
			that.context.save();
			that.context.translate(opt.pos.x, opt.pos.y);
			that.context.rotate((Math.random() * 360) * (Math.PI / 180));
			that.context.translate(-opt.pos.x, -opt.pos.y);
			
			that.context.beginPath();
			that.context.arc(opt.pos.x, opt.pos.y, (opt.radius / 8), 0, Math.PI * 2);
			that.context.lineWidth = 1;
			that.context.strokeStyle = '#fff';
			that.context.fillStyle = opt.color;
			that.context.fill();
			that.context.stroke();
			
			that.context.beginPath();
			that.context.arc(opt.pos.x + (opt.radius / 2), opt.pos.y, (opt.radius / 4), 0, Math.PI * 2);
			that.context.lineWidth = 1;
			that.context.strokeStyle = '#fff';
			that.context.fillStyle = opt.color;
			that.context.fill();
			that.context.stroke();
			
			that.context.beginPath();
			that.context.arc(opt.pos.x - (opt.radius / 2), opt.pos.y, (opt.radius / 4), 0, Math.PI * 2);
			that.context.lineWidth = 1;
			that.context.strokeStyle = '#fff';
			that.context.fillStyle = opt.color;
			that.context.fill();
			that.context.stroke();
			
			that.context.restore();
		}
		
		// framework bars
		that.context.beginPath();
		var x = this.state.position.x - (this.state.radius * 1.5),
			y = this.state.position.y - (this.state.radius * 1.5);
		that.context.arc(x, y, this.state.radius, 0, Math.PI * 2);
		that.context.lineWidth = 5;
		that.context.strokeStyle = "#fff";
		that.context.stroke();
		propeller({pos: {x: x, y: y}, radius: this.state.radius, color: this.state.color});
		
		that.context.beginPath();
		var x = this.state.position.x - (this.state.radius * 1.5),
			y = this.state.position.y + (this.state.radius * 1.5);
		that.context.arc(x, y, this.state.radius, 0, Math.PI * 2);
		that.context.lineWidth = 5;
		that.context.strokeStyle = "#fff";
		that.context.stroke();
		propeller({pos: {x: x, y: y}, radius: this.state.radius, color: this.state.color});
		
		that.context.beginPath();
		var x = this.state.position.x + (this.state.radius * 1.5),
			y = this.state.position.y - (this.state.radius * 1.5);
		that.context.arc(x, y, this.state.radius, 0, Math.PI * 2);
		that.context.lineWidth = 5;
		that.context.strokeStyle = "#fff";
		that.context.stroke();
		propeller({pos: {x: x, y: y}, radius: this.state.radius, color: this.state.color});
		
		that.context.beginPath();
		var x = this.state.position.x + (this.state.radius * 1.5),
			y = this.state.position.y + (this.state.radius * 1.5);
		that.context.arc(x, y, this.state.radius, 0, Math.PI * 2);
		that.context.lineWidth = 5;
		that.context.strokeStyle = "#fff";
		that.context.stroke();
		propeller({pos: {x: x, y: y}, radius: this.state.radius, color: this.state.color});
		
		// comment
		that.context.save();
		that.context.beginPath();
		that.context.arc(this.state.position.x, this.state.position.y, this.state.radius, 0, Math.PI * 2);
		that.context.lineWidth = 5;
		that.context.strokeStyle = '#fff';
		that.context.fillStyle = this.state.color;
		that.context.fill();
		that.context.stroke();
		that.context.restore();
  }
};

var fire = function(that,opt){
  this.type = 'fire';
  this.state = {
	  id: opt.id,
	  position: opt.pos,
	  size: 2,
	  color: "#fff",
	  vel: {x:10, y:10}
  }
  
  // comment
  this.update = function (){
	// distribute  ,
	var dir = function(){ if (Math.random() > 0.5) return 1; return -1; }
	for(var lx = 0; lx < this.state.size; lx++) {
		for(var ly = 0; ly < this.state.size; ly++) {
		// massive explosion
		var rnd = Math.random();
		var dir = function(){ if (Math.random() > 0.5) return 1; return -1; }
		that.state.entities['debris__' + this.state.id + lx + ly + rnd] = new debris(that, this.state.position.x + ((lx * Math.random() * 20) * (dir())), this.state.position.y + ((ly * Math.random() * 20) * (dir())), 'debris__' + this.state.id + lx + ly + rnd, this.state.color);
		}
	}
	
    // comment
    this.render = function (){
		// hidden for now
    }
    }
};

var debris = function (that, x, y, id, color, r) {
    // Create the initial state
    this.type = 'debris';
    this.state = {
	    id: id,
	    radius: r || (5 + (Math.random() * 20)),
	    life: (Math.random() * 50),
	    color:color,
        position: {
            x: x,
            y: y
        },
    };
    // comment
    this.render = function () {
	      // comment
	      that.context.beginPath();
	      that.context.arc(this.state.position.x, this.state.position.y, this.state.radius, 0, Math.PI * 2);
	      that.context.fillStyle = this.state.color;
	      that.context.fill();
    };
	// comment
    this.update = function () {
		// comment
		this.state.life-- ;
		this.state.radius -= 0.1;
		this.state.position.x += (Math.random() - .5) * 10;
		this.state.position.y += (Math.random() - .5) * 10;
		
		if(this.state.life < 0 || this.state.radius < 0)
		delete that.state.entities[this.state.id];
		
    };
};

// mushroom 
var mushroom = function(that,opt){
  this.type = 'mushroom';
  this.state = {
	  id: opt.id,
	  position: opt.pos,
	  radius: 3,
	  life: 0,
	  color: shuffle(['#347E2F', '#5BA459', '#C93F21', '#81C284'])[0]
  }
  this.state.maxRad = ( this.state.radius * 10 );
  zzfx.z(926,{frequency:60})
  // comment
  this.update = function (){
		this.state.position.x += Math.random() - .5;
		this.state.position.y += Math.random() - .5;
		
		if (this.state.radius < this.state.maxRad) {
			this.state.radius += 0.025;
		} else {
			
			for(var lx = 0; lx < 2; lx++) {
				  for(var ly = 0; ly < 2; ly++) {
				  // massive explosion
				  var dir = function(){ if (Math.random() > 0.5) return 1; return -1; }
				  that.state.entities['debris__' + this.state.id + lx + ly ] = new debris(that, this.state.position.x + ((lx * Math.random() * 20) * (dir())), this.state.position.y + ((ly * Math.random() * 20) * (dir())), 'debris__' + this.state.id + lx + ly, 'rgba(255,255,255, '+ Math.random() +')', 5);
				  }
			}
			
		function isInCollision(c1, c2)
		{
			var a = that.state.entities[c1].state.position.x - that.state.entities[c2].state.position.x;
			var b = that.state.entities[c1].state.position.y - that.state.entities[c2].state.position.y;
			var c = (a * a) + (b * b);
			var radii = that.state.entities[c1].state.radius + that.state.entities[c2].state.radius;
			return radii * radii >= c;
		}
		// comment
		if(isInCollision (this.state.id, 'drone') === true){
			zzfx.z(56514);
			that.state.entities['drone'].state.inventory += Math.round(this.state.radius / 5);
			delete that.state.entities[this.state.id];
		}
			
		}
	
	}
	
    // comment
    this.render = function (){
		// Draw a circle at the current location
		that.context.beginPath();
		that.context.arc(this.state.position.x, this.state.position.y, this.state.radius, 0, Math.PI * 2);
		that.context.fillStyle = this.state.color;
		that.context.fill();
    }
};

var hub = function (that) {
	this.type = 'hub';
	this.score = 0;
	this.treasure = [];
	this.update = function(){
	    // 
   };
   
   this.render = function (){
		// comment
		that.context.save();
		that.context.font = '14px Arial';
		that.context.fillStyle = '#ff0';
		
		that.context.fillText('inventory: ' + that.state.entities['drone'].state.inventory , (16), (50));
		that.context.fillText('green: __ ' , (35), (75));
		that.context.beginPath();
		that.context.arc(16, 70, 10, 0, Math.PI * 2);
		that.context.fillStyle = '#81C284';
		that.context.fill();
		
		that.context.fillStyle = '#ff0';
		that.context.fillText('red:   __ ' , (35), (100));
		that.context.beginPath();
		that.context.arc(16, 95, 10, 0, Math.PI * 2);
		that.context.fillStyle = '#C93F21';
		that.context.fill();
		that.context.restore();
   };
   
   return this;
};

// comment
var dotcord = function (r){
	// random controlled cords
	ri = r / 2;
	return (ri * ((Math.random() > 0.5) ? -1 : 1));
}
// comment
function colorgenerator() {
    return "rgb("+[
        Math.round(Math.random()*0xFF),
        Math.round(Math.random()*0xFF),
        Math.round(Math.random()*0xFF)
    ].join()+")";
}

function setupjoystick (){
	window.joyStick = new virtualJoystick({
		stationaryBase: true,
		baseX: 65,
		baseY: window.innerHeight - 90,
		limitStickTravel: true,
		stickRadius	: 50,
		strokeStyle	: 'yellow',
		mouseSupport	: true
	});
	window.joyStick.addEventListener('touchStartValidation', function(event){
		// cramp zone
		var touch = event.changedTouches[0];
		if( touch.pageX <= window.innerWidth/2 && touch.pageY >= window.innerHeight/2 )	return true;
		return false
	});
}

// comment
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
	
	// Pick a remaining element...
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;
	
	// And swap it with the current element.
	temporaryValue = array[currentIndex];
	array[currentIndex] = array[randomIndex];
	array[randomIndex] = temporaryValue;
	}
	
	return array;
}

window.promoted = false;
if(document.monetization) document.monetization.addEventListener('monetizationstart', 
function () {
	window.promoted = true;
})

// create the audio context
var ac = typeof AudioContext !== 'undefined' ? new AudioContext : new webkitAudioContext;
  // unlockAudioContext(ac);
  // get the current Web Audio timestamp (this is when playback should begin)
  var when = ac.currentTime,
  // set the tempo
  tempo = 132,
  // initialize some vars
  sequence1,
  sequence2,
  sequence3,
  // create an array of "note strings" that can be passed to a sequence
  harmony = [
  'C2  e',
  'C2  e',
  'C2  e',
  'C2  e',
  'C2  e',
  'C2  e',
  'C2  e',
  'G2  e',
  
  'G2  e',
  'G2  e',
  'G2  e',
  'G2  e',
  'G2  e',
  'G2  e',
  'G2  e',
  'E2  e',
  
  'E2  e',
  'E2  e',
  'E2  e',
  'E2  e',
  'E2  e',
  'E2  e',
  'E2  e',
  'G2  e',
  
  'G2  e',
  'G2  e',
  'G2  e',
  'D2  e',
  'D2  e',
  'D2  e',
  'D2  e',
  'C2  e'
  ],
  
  lead = [
  '_  e',
  'G4 e',
  'G5 e',
  'G4 e',
  'D5 e',
  'C5 e',
  'B4 e',
  'C5 e',
  
  '_  e',
  'G4 e',
  'D5 e',
  'E5 e',
  'D5 e',
  'C5 e',
  'B4 e',
  'A4 e',
  
  '_  e',
  'G4 e',
  'G5 e',
  'G4 e',
  'D5 e',
  'C5 e',
  'B4 e',
  'C5 e',
  
  '_  e',
  'G4 e',
  'D5 e',
  'E5 e',
  'D5 e',
  'B4 e',
  'A4 e',
  'G4 e',
  ],
  
  bass = [
  'E4 3',
  'F#4 e',
  'D4 3.5',
  'B3 e',
  'G4 3.5',
  'E4 e',
  'B4 h',
  'A4 q',
  'G4  e',
  'F#4 e',
  'E4 e'
  ],
  
  tone = [
  'G2 0.01',
  'C2 0.19',
  '-  0.80'
  ],
  
  bass = [
  'G3 3.5',
  'G3 4',
  'G3 4',
  'G3 4',
  'G3 0.5'
  ],
  
  tone__ii = [
  'C4 3.5',
  'B3 4',
  'E4 4',
  'B3 2',
  'D4 2',
  'C4 0.5'
  ],
  
  tone__iii = [
  'G3 s',
  'D4 s',
  'G4 s'
  ],
  
  tone__iv = [
  'G4 s',
  'D4 s',
  'G3 s'
  ];
  
	// create 4 new sequences (one for lead, one for harmony, one for bass)
	sequence1 = new tinymusic.Sequence( ac, tempo, lead );
	sequence2 = new tinymusic.Sequence( ac, tempo, harmony );
	sequence3 = new tinymusic.Sequence( ac, tempo, bass );
	
	// set staccato and smoothing values for maximum coolness
	sequence1.staccato = 0.55;
	sequence2.staccato = 0.55;
	sequence3.staccato = 0.05;
	sequence3.smoothing = 0.4;
	
	// adjust the levels so the bass and harmony aren't too loud
	sequence1.gain.gain.value = 1.0 / 5;
	sequence2.gain.gain.value = 0.8 / 10;
	sequence3.gain.gain.value = 0.65 / 10;
	
	// apply EQ settings
	sequence1.mid.frequency.value = 800;
	sequence1.mid.gain.value = 3;
	sequence2.mid.frequency.value = 1200;
	sequence3.mid.gain.value = 3;
	sequence3.bass.gain.value = 6;
	sequence3.bass.frequency.value = 80;
	sequence3.mid.gain.value = -6;
	sequence3.mid.frequency.value = 500;
	sequence3.treble.gain.value = -2;
	sequence3.treble.frequency.value = 1400;
	
	when = ac.currentTime;
	// find alternatives 
	sequence1.play( when + ( 60 / tempo ) * 20 );
	sequence2.play( when );
	sequence3.play( when + ( 60 / tempo ) * 28 );

window.game = new mygame('#container', window.innerWidth, window.innerHeight, 60, true);
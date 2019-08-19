/*****
	* Fire Drone
	* JOHN SWANA
	* 13kjsGame
*****/
// Load Game Core Modules ,
var gameLoop = require('./app/core/game.loop.js'),
	gameUpdate = require('./app/core/game.update.js'),
	gameRender = require('./app/core/game.render.js'),

	// Load Game Plugins
	canvas = require('./app/plugins/utils.canvas.js'), // require our canvas utils
	virtualJoystick = require('./app/plugins/utils.virtualJoystick.js'),
	keys = require('./app/plugins/utils.keysDown.js'),
	mathHelpers = require('./app/plugins/utils.math.js'),
	system = require('./app/plugins/utils.system.js'),
	sound  = require('./app/plugins/utils.sound.js'),
	touchbuttons  = require('./app/plugins/utils.gamePad.js'),
	$container = document.getElementById('container');
	
// Defined Game function ,
function Game(w, h, targetFps, showFps) {
var that;
// Setup some constants
this.constants = {
    width: w,
    height: h,
    targetFps: targetFps,
    showFps: showFps
};
// Instantiate an empty state object
this.state = {};
// Generate a canvas and store it as our viewport
this.viewport = canvas.generateCanvas(w, h);
this.viewport.id = "gameViewport";

// Get and store the canvas context as a global
this.context = this.viewport.getContext('2d');

// Append viewport into our container within the dom
$container.insertBefore(this.viewport, $container.firstChild);

// Instantiate core modules with the current scope
this.update = gameUpdate( this );
this.render = gameRender( this );
this.loop = gameLoop( this );

that = this;
// water particle 
var water = function (x, y, id) {
    var water = this;
	water.id = id;
    // Create the initial state
    water.state = {
	    radius:10,
        position: {
            x: x,
            y: y
        },
    };

    // Set up any other constants
	water.state.radius = 20 + Math.random() * 5;
	// Set a max time to live for our water
	var life = 25 * Math.random() * 20;
	var remainingLife = life;
    // Draw the water on the canvas
    water.render = function waterRender() {
	      // Draw a circle at the current location
	      that.context.beginPath();
	      that.context.arc(water.state.position.x, water.state.position.y, water.state.radius, 0, Math.PI * 2);
	      that.context.fillStyle = '#fff';
	      that.context.fill();
    };
	
    water.update = function waterUpdate() {
		
		// Update the water's location and life
		remainingLife--;
		water.state.radius -= 0.10;
		water.state.position.x += Math.random() - .5;
		water.state.position.y += Math.random() - .5;
		
		if(remainingLife < 0 || water.state.radius < 0)
		delete window.game.state.entities[water.id];
		
    };

    return water;
};

var particle = function particle( x, y, id) {
    var particle = this;
	particle.id = id;
    // Create the initial state
    particle.state = {
	    radius:25,
        position: {
            x: x,
            y: y
        },
    };

    // Set up any other constants
	particle.state.radius = 20 + Math.random() * 5;
	// Set a max time to live for our particle
	var life = 50 * Math.random() * 20;
	var remainingLife = life;
    // Draw the particle on the canvas
    particle.render = function particleRender() {
	      
	      // Draw a circle at the current location
	      that.context.beginPath();
	      that.context.arc(particle.state.position.x, particle.state.position.y, particle.state.radius, 0, Math.PI * 2);
	      that.context.fillStyle = '#40d870';
	      that.context.fill();
    };
	
	particle.collision = function (){
		// collision detection 
		if(isInCollision (particle.id,'player') === true){
			
			var r = particle.state.radius / 10;
			for(var lx = 0; lx < r; lx++) {
				for(var ly = 0; ly < r; ly++) {
				// massive explosion
				dir = function(){ if (Math.random() > 0.5) return 1; return -1; }
				window.game.state.entities['water__' + particle.id + lx + ly ] = new water(particle.state.position.x + ((lx * Math.random() * 20) * (dir())), particle.state.position.y + ((ly * Math.random() * 20) * (dir())), 'water__' + particle.id + lx + ly );
				}
			}
			
			// if(navigator.vibrate) navigator.vibrate([50,50,50]);
			delete window.game.state.entities[particle.id];
			if(window.game.state.entities['player'].state.radius < 25) 
			window.game.state.entities['player'].state.radius+= 0.1;
			window.game.state.entities['hub'].score+=Math.round(remainingLife);
		}
	};
	
	function isInCollision(c1, c2)
	{
	  var a = window.game.state.entities[c1].state.position.x - window.game.state.entities[c2].state.position.x;
	  var b = window.game.state.entities[c1].state.position.y - window.game.state.entities[c2].state.position.y;
	  var c = (a * a) + (b * b);
	  var radii = window.game.state.entities[c1].state.radius + window.game.state.entities[c2].state.radius;
	  return radii * radii >= c; 
	}
    
    // Fired via the global update method.
    // Mutates state as needed for proper rendering next state
    
    particle.update = function particleUpdate() {
		
		if(remainingLife < 0
		|| particle.state.radius < 0){
		delete window.game.state.entities[particle.id];
		return;
		}
		
		// Update the particle's location and life
		remainingLife--;
		particle.state.radius += 0.10;
		particle.state.position.x += Math.random() - .5;
		particle.state.position.y += Math.random() - .5;
		
		// run collision detection
		particle.collision();
    };

    return particle;
}

var drone = function (x, y) {
    var player = this,
		blipSfx = new sound ('./media/blip.wav', {loop: true});
    // Create the initial state
    player.state = {
	    radius:10,
	    angle:0,
        position: {
            x: x,
            y: y
        },
        moveSpeed: 5
    };

    // Set up any other constants
    // Draw the player on the canvas
    
    player.render = function playerRender() {
	    /**
		    * Draw some drone!
	    **/
	    // propeller one ,
	    that.context.beginPath();
	    that.context.arc(player.state.position.x, player.state.position.y, player.state.radius, 0, Math.PI * 2);
	    that.context.lineWidth = 2.5;
	    that.context.strokeStyle = '#fff';
	    that.context.stroke();
	    
	    // propeller two ,
	    that.context.beginPath();
	    that.context.arc(player.state.position.x - (player.state.radius * 2), player.state.position.y, player.state.radius, 0, Math.PI * 2);
	    that.context.lineWidth = 2.5;
	    that.context.strokeStyle = '#fff';
	    that.context.stroke();
	    /**
		    * new wing, system,
	    **/
	    // propeller one ,
	    that.context.beginPath();
	    that.context.arc(player.state.position.x, player.state.position.y - (player.state.radius * 2), player.state.radius, 0, Math.PI * 2);
	    that.context.lineWidth = 2.5;
	    that.context.strokeStyle = '#fff';
	    that.context.stroke();
	    
	    // propeller two ,
	    that.context.beginPath();
	    that.context.arc(player.state.position.x - (player.state.radius * 2), player.state.position.y - (player.state.radius * 2), player.state.radius, 0, Math.PI * 2);
	    that.context.lineWidth = 2.5;
	    that.context.strokeStyle = '#fff';
	    that.context.stroke();
	    /**
		    * spinning up some blades
	    **/
	    that.context.fillStyle = '#000';
	    // shake it ,
	    function spin(){ player.state.angle = (Math.random() * 360) };
	    
	    that.context.save();
	    that.context.translate(player.state.position.x - (player.state.radius / 2) + 5, (player.state.position.y - (player.state.radius * 2)));
	    that.context.rotate(player.state.angle * Math.PI / 180);
	    that.context.fillRect(0, 0, player.state.radius, 5);
	    that.context.restore();
	    spin();
	    that.context.save();
	    that.context.translate(player.state.position.x - (player.state.radius / 2) + 5, player.state.position.y);
	    that.context.rotate(player.state.angle * Math.PI / 180);
	    that.context.fillRect(0, 0, player.state.radius, 5);
	    that.context.restore();
	    spin();
	    that.context.save();
	    that.context.translate((player.state.position.x - (player.state.radius * 2)) - (player.state.radius / 2) + 5, player.state.position.y - (player.state.radius * 2));
	    that.context.rotate(player.state.angle * Math.PI / 180);
	    that.context.fillRect(0, 0, player.state.radius, 5);
	    that.context.restore();
	    spin();
	    that.context.save();
	    that.context.translate((player.state.position.x - (player.state.radius * 2)) - (player.state.radius / 2) + 5, player.state.position.y);
	    that.context.rotate(player.state.angle * Math.PI / 180);
	    that.context.fillRect(0, 0, player.state.radius, 5);
	    that.context.restore();
		
    };
    /**
	    * update
    **/
    player.update = function playerUpdate() {
        // Check if keys are pressed, if so, update the players position.
        
        if (keys.isPressed.left || window.joyStick.left() || window.gamePad.left) {
            player.state.position.x -= player.state.moveSpeed;
        }

        if (keys.isPressed.right || window.joyStick.right() || window.gamePad.right) {
            player.state.position.x += player.state.moveSpeed;
        }

        if (keys.isPressed.up || window.joyStick.up() || window.gamePad.up) {
            player.state.position.y -= player.state.moveSpeed;
        }

        if (keys.isPressed.down || window.joyStick.down() || window.gamePad.down) {
            player.state.position.y += player.state.moveSpeed;
        }

        // Bind the player to the boundary
        player.state.position.x = player.state.position.x.boundary((player.state.radius * 3), (that.constants.width) - (player.state.radius));
        player.state.position.y = player.state.position.y.boundary((player.state.radius * 3), (that.constants.height) - (player.state.radius));
    };

    return player;
};

window.joyStick = new virtualJoystick({
	
	stationaryBase: true,
	baseX: 65,
	baseY: h - 90,
	limitStickTravel: true,
	stickRadius	: 50,
	strokeStyle	: '#546e7a',
	mouseSupport	: true
});

window.joyStick.addEventListener('touchStartValidation', function(event){
	
	var touch = event.changedTouches[0];
	if( touch.pageX <= window.innerWidth/2 && touch.pageY >= window.innerHeight/2 )	return true;
	return false
});

var createPlayer = function () {
    
    that.state.entities = that.state.entities || {};
    that.state.entities.player = new drone((w / 2), (h / 2));
}();

that.state.entities.fireStorm = {

    update: function(){
    mx = Math.random() * w;
    my = Math.random() * h;
		 if(Math.random() < .99) return;
	     that.state.entities['flame__' + mx + my ] = new particle((mx * (Math.random())), (my * (Math.random())), 'flame__' + mx + my );
    },
    
    render: function (){
	    // no action needed
	    
    }
};

that.state.entities.hub = {

	score: 0,
	lScore:0,
	update: function (){
		// 
	},
	render: function (){
		that.context.fillStyle = '#ff0';
		count = 1; // todo sort
		that.context.fillText('score: ' + this.score , (w-100), 65 );
	}
};
	return this;
}

// Instantiate a new game in the global that at full screen
window.game = new Game(window.innerWidth, window.innerHeight, 60, true);

module.exports = game;
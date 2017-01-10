'use strict';

// game

  let player = {
	  
  		},
      
      session   = true,
      _session_hash = undefined,
      stage     = '_tutorial', 
      gravity   = 3,
      friction  = 0.8,
      keys      = [],
      Mouse     = {},
      isBlock = false, //i get it from db, and i can't show off php-scrips, sorry :(
      usename = 'name',
      platform = [];
    
  
  function Start() {
	  
	if(session) {
		_session_hash = String(Date.now()) + String((Math.random() + 1) * username.split('').length); //don't ask me why
	};
	  
  };
  
  function Update() {
  
	  if(session && _session_hash) {
		  
		  if(stage == '_tutorial') { //load tutorial
			  
		  } else if(stage == '_main') { //load multiplayer stage
			  
		  };
		
	  };
  };
  
//loop

window.onload = Start;

var loop = function()
{
	now = performance.now();
	dt = dt + Math.min(1, (now-last)/1000);

	while(dt > step) {
		dt = dt - step
	}

	last = now;

	Update(dt);

	requestAnimationFrame(loop); //repeat it again
},

last = performance.now(), step = 1/60, dt = 0, now;

requestAnimationFrame(loop);

//engine

function loadMap(config) { //config = [[x, y, w, h, angle, texture, visible, opacity], []]
	for(let i = 0; i<config.length; i++) {
		
	let ln = platform.length;
		 platform[ln] = {};
		
	platform[ln].x = config[i][0]
	platform[ln].y = config[i][1]
	platform[ln].width = config[i][2]
	platform[ln].height = config[i][3]
	platform[ln].angle = config[i][4]
	platform[ln].texture = config[i][5]
	platform[ln].visible = config[i][6]
	platform[ln].opacity = config[i][7]

	};
};

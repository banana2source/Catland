'use strict';
// game

  let player = {
	  		isDestroy: false,
	  
	  		x: undefined, y: undefined,
	  		width: 80, height: 60,
	  		texture: undefined,
	  
	  		angle: 0
  	       },
      
      session   	= true,
      _session_hash 	= undefined,
      stage     	= '_tutorial', 
      gravity   	= 3,
      friction  	= 0.8,
      keys      	= [],
      Mouse    	 	= {},
      isBlock   	= false, //i get it from db, and i can't show off php-scrips, sorry :(
      usename   	= 'name',
      platform  	= [], 
      resources 	= ['sprites/big_grass.png'],
      full      	= 100,
      loadingprogress	= 0,
      canvas            = document.createElement('canvas');

      canvas.width    = 800;
      canvas.height   = 600;

      document.body.appendChild(canvas);

      const ctx = canvas.getContext('2d');
    
  
  function Start() {
	  
	player.texture = new Image(); //init player image!
	  player.texture.src = 'sprites/player.png';
	  
	loadingprogress = loading();
	  
	if(session) {
		_session_hash = String(Date.now()) + String((Math.random() + 1) * username.split('').length); //don't ask me why
	};
	  
  };
  
  function Update() {
  
	  if(session && _session_hash) {
		  
		  if(stage == '_tutorial') { //load tutorial
			  load([ [0, 480, 800, 32, 0, getResource('big_grass'), true, full] ]); //[x, y, w, h, a, t, v, o]
			  
			  drawPlatforms(); 
			  
		  } else if(stage == '_main') { //load multiplayer stage
			  
		  };
		  
		  if(!player.isDestroy) {
			var collision = new PlatformCollision().status;  
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

	requestAnimationFrame(loop); 
},

last = performance.now(), step = 1/60, dt = 0, now;

requestAnimationFrame(loop);

//engine

function load(config) { //config = [[x, y, w, h, angle, texture, visible, opacity], []]
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

function loader() {
	for (let i = 0; i<resources.length; i++) {
		let img   = new Image(),
		    name  = resources[i].split('sprites/')[1].split('.png')[0];
		
		img.src = resources[i];
		
	        resources[i] = [name, img]; //loading :)
		
		loadingprogress = i/resources.length * 100; //loadingprogress
	};
};

function getResource(name) {
	for (let i = 0; i<resources.length; i++) {
		if (resources[i][0] == name) {
			return resources[i][1]; //get img;
		}
	};
};

function drawPlatforms() {
	for (let i = 0; i<platform.length; i++) {
		if (platform[i].visible) {
			if(platform[i].angle) {
				ctx.save();
				
				ctx.translate(platform[i].x + platform[i].width / 2, platform[i].y + platform[i].height / 2);
				ctx.rotate(platform[i].angle);
				ctx.translate(-(platform[i].x + platform[i].width / 2), -(platform[i].y + platform[i].height / 2));
				
				ctx.drawImage(platform[i].texture, platform[i].x, platform[i].y, platform[i].width, platform[i].height);
				
				ctx.restore();
			} else {
			ctx.drawImage(platform[i].texture, platform[i].x, platform[i].y, platform[i].width, platform[i].height);
			};
		};
	};
};

function drawPlayer = function () {
	if (!player.isDestroy) {
		if (player.angle) {
			ctx.save();
				
			ctx.translate(player.x + player.width/2, player.y + player.height/2);
			ctx.rotate();
			ctx.translate(-(player.x + player.width/2), -(player.y + player.height/2));
			
			ctx.drawImage(player.texture, player.x, player.y, player.width, player.height);	
			
			ctx.restore();
		} else {
			ctx.drawImage(player.texture, player.x, player.y, player.width, player.height);	
		};
	};
};

function PlatformCollision() {
	for(let i = 0; i < platforms.length; i++) {
		let RealX, RealY, RealWidth, RealHeight, 
		    status = undefined;
		
		if(platform[i].angle) {
			if() {
			   	status = true;
			   };
		} else {
			if() {
				RealX = platforms[i].x;
				RealY = platforms[i].y;
				RealWidth = platforms[i].width || platforms[i].w;
				RealHeight = platforms[i].height || platforms[i].h;
				status = true;	
			};			
		};
		
		if(i == platforms.length-1 && status == undefined) {
			status = false;	
		};
		
		return {
			x: RealX, y: RealY,
			w: RealWidth, h: RealHeight,
			getCollision: status
			};
	};
};

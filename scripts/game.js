// game
  
  function Start() {
  
  };
  
  function Update() {
  
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

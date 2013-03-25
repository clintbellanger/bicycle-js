// html elements
var can;     // canvas
var ctx;     // context

//---- Main Loop --------------------------------------------------

setInterval(function() {
  logic();
  render();
}, 1000/FPS);

//---- Logic Function ---------------------------------------------

function logic() {
  bicycle_logic();
  title_logic();
}

//---- Render Function ---------------------------------------------

function render() {
  ctx.clearRect(0,0,640,480);
  isomap_render_background();
  isomap_render_object();
  title_render();
}

//---- Init Function -----------------------------------------------

function init() {

  can = document.getElementById("gamecanvas");
  if (can.getContext) {
    ctx = can.getContext("2d");
  }

  if (window.addEventListener) {
    window.addEventListener('keydown', handleKeyDown, true);
    window.addEventListener('keyup', handleKeyUp, true);
  }
  else if (window.attachEvent) {
    window.attachEvent('keydown', handleKeyDown);
    window.attachEvent('keyup', handleKeyUp);
  }
  
  // initialize all game units
  title_init();
  tileset_init();
  bicycle_init();

}



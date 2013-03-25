/**
Basic input handling.
Use these lines in the init() function to enable:
  window.addEventListener('keydown', handleKeyDown, true);
  window.addEventListener('keyup', handleKeyUp, true);

2013 Clint Bellanger
*/

//---- Key States ---------------------------------------------------

var pressing = new Object();
pressing.up = false;
pressing.down = false;
pressing.left = false;
pressing.right = false;

//---- Key Bindings -------------------------------------------------

var KEYCODE_UP    = 38; // arrow up
var KEYCODE_DOWN  = 40; // arrow down
var KEYCODE_LEFT  = 37; // arrow left
var KEYCODE_RIGHT = 39; // arrow right

//---- Input Functions ----------------------------------------------

function handleKeyDown(evt) {
  if (evt.keyCode == KEYCODE_UP) {
    pressing.up = true;
  }
  else if (evt.keyCode == KEYCODE_DOWN) {
    pressing.down = true;
  }
  else if (evt.keyCode == KEYCODE_LEFT) {
    pressing.left = true;
  }
  else if (evt.keyCode == KEYCODE_RIGHT) {
    pressing.right = true;
  }
}

function handleKeyUp(evt) {
  if (evt.keyCode == KEYCODE_UP) {
    pressing.up = false;
  }
  else if (evt.keyCode == KEYCODE_DOWN) {
    pressing.down = false;
  }
  else if (evt.keyCode == KEYCODE_LEFT) {
    pressing.left = false;
  }
  else if (evt.keyCode == KEYCODE_RIGHT) {
    pressing.right = false;
  }
}

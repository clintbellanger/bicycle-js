/**
Bicycle class

2013 Clint Bellanger
*/

var bicycle = new Object();

//---- Fixed Properties ---------------------------------------------

// movement properties
bicycle.max_speed = 0.2;
bicycle.acceleration = 0.0015;
bicycle.dampen = 0.0004;
bicycle.brake = 0.004;
bicycle.turn_speed = 0.05;

// image and animation
bicycle.img = new Image();
bicycle.img_loaded = false;
bicycle.width = 64;
bicycle.height = 64;
bicycle.animation_ratio = 1.5;

//---- Dynamic Properties -------------------------------------------

bicycle.pos_x = 14.0;
bicycle.pos_y = 86.0;
bicycle.direction = 0;

bicycle.animation_counter = 0.0;

// angle and speed are polar coordinates
bicycle.angle = 0.0; // range from -pi to pi
bicycle.speed = 0.0;

//---- Public Functions ---------------------------------------------

function bicycle_init() {
  bicycle.img.src = "images/bicycle.png";
  bicycle.img.onload = function() {
    bicycle.img_loaded = true;
  };
}

function bicycle_logic() {

  bicycle_move();
  bicycle.direction = radians_to_direction(bicycle.angle);
  
  bicycle.animation_counter += Math.abs(bicycle.speed) * bicycle.animation_ratio;
  if (bicycle.animation_counter >= 8.0) bicycle.animation_counter = 0.0;

}

function bicycle_render() {

  if (!bicycle.img_loaded) return;

  var draw_pos_x = CANVAS_WIDTH_HALF - 32;
  var draw_pos_y = CANVAS_HEIGHT_HALF - 64;

  var animation_frame = Math.floor(bicycle.animation_counter) * bicycle.width;

  ctx.drawImage(bicycle.img, animation_frame, bicycle.direction*bicycle.height, bicycle.width, bicycle.height, draw_pos_x, draw_pos_y, bicycle.width, bicycle.height);

}

//---- Private Functions --------------------------------------------

/**
 * Convert button presses, momentum, etc. into bicycle movement
 */
function bicycle_move() {

  // dampening
  if (bicycle.speed > bicycle.dampen) bicycle.speed -= bicycle.dampen;
  else bicycle.speed = 0.0;

  // accelerate
  if (pressing.up) bicycle.speed += bicycle.acceleration;
  if (bicycle.speed > bicycle.max_speed) bicycle.speed = bicycle.max_speed;

  // braking
  if (pressing.down) {
    if (bicycle.speed > bicycle.brake) bicycle.speed -= bicycle.brake;
    else bicycle.speed = 0.0;
  }

  // turning
  if (pressing.left) {
    bicycle.angle -= bicycle.turn_speed;
    if (bicycle.angle < -Math.PI) bicycle.angle += Math.PI + Math.PI;
  }

  if (pressing.right) {
    bicycle.angle += bicycle.turn_speed;
    if (bicycle.angle > Math.PI) bicycle.angle -= Math.PI + Math.PI;
  }

  // half speed on grass (tile 0)
  var check_grass = isomap_get_background(Math.floor(bicycle.pos_x), Math.floor(bicycle.pos_y));
  if (check_grass == 0) {
    if (bicycle.speed > bicycle.max_speed/2) {
      bicycle.speed = bicycle.max_speed/2;
    }
  }

  var prev_x = bicycle.pos_x;
  var prev_y = bicycle.pos_y;

  bicycle.pos_x += bicycle.speed * Math.cos(bicycle.angle);
  bicycle.pos_y += bicycle.speed * Math.sin(bicycle.angle);

  // if there's an object here, we can't move there. Return to previous position
  var check_object = isomap_get_object(Math.floor(bicycle.pos_x), Math.floor(bicycle.pos_y));
  if (check_object > 0) {
    bicycle.pos_x = prev_x;
    bicycle.pos_y = prev_y;
    bicycle.speed = 0.0;
  }

  cam.x = bicycle.pos_x;
  cam.y = bicycle.pos_y;

}


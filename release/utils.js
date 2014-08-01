/**
Various utility functions

2013 Clint Bellanger
*/


/**
 * Converts map grid coordinates to screen pixel position
 */
function map_to_screen(map_x, map_y) {

  // adjust to camera position
  var calc_x = map_x - cam.x;
  var calc_y = map_y - cam.y;

  var screen_x = Math.floor((calc_x - calc_y) * TILE_WIDTH_HALF + CANVAS_WIDTH_HALF);
  var screen_y = Math.floor((calc_x + calc_y) * TILE_HEIGHT_HALF + CANVAS_HEIGHT_HALF);

  return {"x":screen_x, "y":screen_y};
}

/**
 * Converts angle in radians to direction on sprite sheets
 */
function radians_to_direction(angle) {

  if (angle <= (-0.875 * Math.PI) || angle > (0.875 * Math.PI)) {
   return 1;
  }
  else if (angle > (-0.875 * Math.PI) && angle <= (-0.625 * Math.PI)) {
    return 2;
  }
  else if (angle > (-0.625 * Math.PI) && angle <= (-0.375 * Math.PI)) {
    return 3;
  }
  else if (angle > (-0.375 * Math.PI) && angle <= (-0.125 * Math.PI)) {
    return 4;
  }  
  else if (angle > (-0.125 * Math.PI) && angle <= (0.125 * Math.PI)) {
    return 5;
  }
  else if (angle > (0.125 * Math.PI) && angle <= (0.375 * Math.PI)) {
    return 6;
  }
  else if (angle > (0.375 * Math.PI) && angle <= (0.625 * Math.PI)) {
    return 7;
  }
  else if (angle > (0.625 * Math.PI) && angle <= (0.875 * Math.PI)) {
    return 0;
  }

}


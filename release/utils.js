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
function get_direction(radians, directions) {

   // mathematical constant tau == 2PI
   TAU = Math.PI + Math.PI;

   // convert (-PI to PI) radians to (0.0 to 2PI)
   positive_radians = radians;
   if (positive_radians < 0.0) positive_radians = radians + TAU;
   
   // convert (0.0 to 2PI) to (0.0 to 1.0)
   normalized_direction = positive_radians / TAU;   

   // the range of normalized angles that correspond to one facing direction
   direction_range = 1.0 / directions;
   
   // the facing direction is exactly in the middle of this range
   // shift it to the beginning of the range so we can map via floor
   normalized_direction += direction_range / 2.0;
   if (normalized_direction > 1.0) normalized_direction -= 1.0;
   
   // convert (0.0 to 1.0) to (0 to directions)
   return Math.floor(normalized_direction * directions);
   
}

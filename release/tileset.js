/**
TileSet class.

Array of objects with the following properties:
  (width, height) sprite size of this tile
  (pos_x, pos_y)  location of the sprite on this sprite sheet
  (off_x, off_y)  draw offset of this sprite from the tile center
  
2013 Clint Bellanger
*/

var tileset = new Object();

//---- Properties ---------------------------------------------------

// image info
tileset.img = new Image();
tileset.img_loaded = false;

//---- Tiles --------------------------------------------------------

tileset.tiles =
[
  {"width": 0, "height": 0, "pos_x":  0, "pos_y":  0, "off_x": 0, "off_y": 0},

  {"width": 64, "height": 32, "pos_x":  0, "pos_y":  0, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x": 64, "pos_y":  0, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":128, "pos_y":  0, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":192, "pos_y":  0, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":256, "pos_y":  0, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":320, "pos_y":  0, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":384, "pos_y":  0, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":448, "pos_y":  0, "off_x": 32, "off_y": 16},

  {"width": 64, "height": 32, "pos_x":  0, "pos_y": 32, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x": 64, "pos_y": 32, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":128, "pos_y": 32, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":192, "pos_y": 32, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":256, "pos_y": 32, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":320, "pos_y": 32, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":384, "pos_y": 32, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":448, "pos_y": 32, "off_x": 32, "off_y": 16},

  {"width": 64, "height": 32, "pos_x":  0, "pos_y": 64, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x": 64, "pos_y": 64, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":128, "pos_y": 64, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":192, "pos_y": 64, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":256, "pos_y": 64, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":320, "pos_y": 64, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":384, "pos_y": 64, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":448, "pos_y": 64, "off_x": 32, "off_y": 16},

  {"width": 64, "height": 32, "pos_x":  0, "pos_y": 96, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x": 64, "pos_y": 96, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":128, "pos_y": 96, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":192, "pos_y": 96, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":256, "pos_y": 96, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":320, "pos_y": 96, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":384, "pos_y": 96, "off_x": 32, "off_y": 16},
  {"width": 64, "height": 32, "pos_x":448, "pos_y": 96, "off_x": 32, "off_y": 16},

  {"width": 64, "height":128, "pos_x":  0, "pos_y":128, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x": 64, "pos_y":128, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x":128, "pos_y":128, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x":192, "pos_y":128, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x":256, "pos_y":128, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x":320, "pos_y":128, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x":384, "pos_y":128, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x":448, "pos_y":128, "off_x": 32, "off_y":112},

  {"width": 64, "height":128, "pos_x":  0, "pos_y":256, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x": 64, "pos_y":256, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x":128, "pos_y":256, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x":192, "pos_y":256, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x":256, "pos_y":256, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x":320, "pos_y":256, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x":384, "pos_y":256, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x":448, "pos_y":256, "off_x": 32, "off_y":112},

  {"width": 64, "height":128, "pos_x":  0, "pos_y":384, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x": 64, "pos_y":384, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x":128, "pos_y":384, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x":192, "pos_y":384, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x":256, "pos_y":384, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x":320, "pos_y":384, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x":384, "pos_y":384, "off_x": 32, "off_y":112},
  {"width": 64, "height":128, "pos_x":448, "pos_y":384, "off_x": 32, "off_y":112}

];

//---- Public Functions ---------------------------------------------

function tileset_init() {
  tileset.img.src = "images/tileset.png";
  tileset.img.onload = function() {
    tileset.img_loaded = true;
  };
}

function tile_render(tile_id, screen_x, screen_y) {

  if (!tileset.img_loaded) return;

  ctx.drawImage(
    tileset.img,
	tileset.tiles[tile_id].pos_x,
	tileset.tiles[tile_id].pos_y,
	tileset.tiles[tile_id].width,
	tileset.tiles[tile_id].height,
	screen_x - tileset.tiles[tile_id].off_x,
	screen_y - tileset.tiles[tile_id].off_y,
	tileset.tiles[tile_id].width,
	tileset.tiles[tile_id].height
  );

}



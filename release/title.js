/**
Title class

Display the title screen until the player hits a button

2013 Clint Bellanger
*/

var title = new Object();
title.img = new Image();
title.img_loaded = false;
title.dismissed = false;

function title_init() {
  title.img.src = "images/title.png";
  title.img.onload = function() {
    title.img_loaded = true;
  };
}

function title_logic() {
  if (pressing.up || pressing.down || pressing.left || pressing.right) {
    title.dismissed = true;
  }
}

function title_render() {
  if (!title.img_loaded) return;
  if (title.dismissed) return;

  ctx.drawImage(title.img, 500,340);
}




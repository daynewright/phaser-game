var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload(){
   game.load.image('roadsWater', 'assets/images/roads-water.png');
   game.load.tilemap('testTiled', 'assets/tilemaps/testTiled.json', null, Phaser.Tilemap.TILED_JSON);

}

function create(){

  game.map = game.add.tilemap('testTiled');
  game.map.addTilesetImage('roads-water', 'roadsWater');

  game.backgroundlayer = game.map.createLayer('backgroundLayer');
  game.blockedLayer = game.map.createLayer('blockedLayer');
  game.backgroundlayer.resizeWorld();

}

function update(){

}

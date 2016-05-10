var Game = function(game){
  var layer;
  var player;
  var map;

}

Game.prototype = {
  preload: function() {
    game.load.tilemap('map', 'app/img/bigTestMap.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'app/img/big_wall.png');

    player = new Player(game);
    player.preload();
  },

  create: function() {
    game.stage.backgroundColor = '#787878';

    // Map
    map = game.add.tilemap("map");
    map.addTilesetImage("big_wall", "tiles");
    map.setCollisionByExclusion([]);

    layer = map.createLayer(0);
    layer.debug = true;
    layer.resizeWorld();

    player.create();

    // HUD
    var health = game.add.text(50, 50, "Health: 100%", {font: "18px Arial", fill: "white", align: "left"});
    health.fixedToCamera = true;
    health.cameraOffset.setTo(50, 50);
  },

  update: function() {
    player.update();
    game.physics.arcade.collide(player.sprite, layer);

  },

  render: function() {
    var zone = game.camera.deadzone;
    game.debug.bodyInfo(player, 32, 320);

    // game.context.fillStyle = 'rgba(255,0,0,0.6)';
    // game.context.fillRect(zone.x, zone.y, zone.width, zone.height);
  }
}

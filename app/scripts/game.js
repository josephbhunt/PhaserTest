var Game = function(game){
  var player;
  var enemy;
  var map;
  var graphics;
}

Game.prototype = {
  preload: function() {
    game.load.tilemap('map', 'app/img/bigTestMap.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'app/img/big_wall.png');
    game.load.image("bullet", "app/img/bullet_left.png")

    player = new Player(game);
    enemy = new Enemy(game, player);
    enemy.preload();
    player.preload();
  },

  create: function() {
    game.stage.backgroundColor = '#787878';

    // Debuging
    game.graphics = game.add.graphics(0, 0);

    // Map
    map = game.add.tilemap("map");
    map.addTilesetImage("big_wall", "tiles");
    map.setCollisionByExclusion([]);

    layer = map.createLayer(0);
    layer.resizeWorld();

    player.create();
    enemy.create();

    // HUD
    var health = game.add.text(50, 50, "Health: 100%", {font: "18px Arial", fill: "white", align: "left"});
    health.fixedToCamera = true;
    health.cameraOffset.setTo(50, 50);
  },

  update: function() {
    player.update();
    game.physics.arcade.collide(player.sprite, layer, function(){}, null, this);
    enemy.update();
  },

  render: function() {
    // game.debug.spriteInfo(weapon, 0, 0);
    // game.debug.body(player.sprite);
    // game.debug.visibleBody(player.sprite);
    var zone = game.camera.deadzone;
    // game.debug.bodyInfo(player, 32, 320);
  }
}

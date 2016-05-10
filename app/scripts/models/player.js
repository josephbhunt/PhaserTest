var Player = function (game){
  this.game = game;
  this.name = "player";
  this.spriteSheet = "app/img/mg1_snake.png";
  this.spriteAtlasJson = "app/img/mg1_snake.json";
  this.spriteAtlas = 'snake_sprites';
  this.sprite = null;
}

Player.prototype = {
  speed: 200,

  preload: function(){

    this.game.load.image(this.name, this.spriteSheet);
    this.game.load.atlasJSONHash(this.spriteAtlas, this.spriteSheet, this.spriteAtlasJson);
  },

  create: function(){
    this.sprite = this.game.add.sprite(94, 420, 'snake_sprites', "snake_right.png");
    this.game.physics.enable(this.sprite);
    this.sprite.anchor.set(0.5);
    this.sprite.body.collideWorldBounds = true;
    // this.sprite.inputEnabled = true;
    this.game.camera.follow(this.sprite);

    this.sprite.animations.add("walkRight",
      ["snake_right.png", "snake_right_walk.png"],
      5, true, false
    );

    this.sprite.animations.add("walkLeft",
      ["snake_left.png", "snake_left_walk.png"],
      5, true, false
    );

    this.sprite.animations.add("walkUp",
      ["snake_up.png", "snake_up_walk.png"],
      5, true, false
    );

    this.sprite.animations.add("walkDown",
      ["snake_down.png", "snake_down_walk.png"],
      5, true, false
    );
  },

  update: function() {

    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;

    if (this.game.cursors.right.isDown) {
      this.sprite.animations.play("walkRight", 5, true);
      this.sprite.body.velocity.x = this.speed;
    }
    else if (this.game.cursors.left.isDown) {
      this.sprite.animations.play("walkLeft", 5, true);
      this.sprite.body.velocity.x = -this.speed;
    }
    else if (this.game.cursors.up.isDown) {
      this.sprite.animations.play("walkUp", 5, true);
      this.sprite.body.velocity.y = -this.speed;
    }
    else if (this.game.cursors.down.isDown) {
      this.sprite.animations.play("walkDown", 5, true);
      this.sprite.body.velocity.y = this.speed;
    }
    else {
      this.sprite.animations.stop();
    }
  },

  render: function(){
  }
}

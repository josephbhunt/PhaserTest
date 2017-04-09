var Enemy = function(game, player){
  this.game = game;
  this.player = player;
  this.name = "Enemy";
  this.spritePath = "app/img/camera.png"
  this.sprite = null;
  this.direction = null;
  this.bullets = []
}

Enemy.prototype= {
  preload: function(){
    this.game.load.image(this.name, this.spritePath);
    this.direction = 'left'
  },

  create: function(){
    this.sprite = this.game.add.sprite(550, 150, this.name);
    this.sprite.anchor.set(0.5);
    this.singleBullet = new Weapon.SingleBullet(this.game);
  },

  update: function(){
    if (this.canSee(this.player.sprite)){
      this.game.add.text(300, 50, "Alert", {font: "28px Arial", fill: "red", align: "left"});
      this.singleBullet.fire(this)
    }
    var result = game.physics.arcade.collide(this.player.sprite, this.singleBullet, (function(_this){
      return function(player, bullet){
        _this.singleBullet.collisionCallback(bullet, _this.player);
      };
    })(this));
  },

  render: function(){
  },

  canSee: function(sprite){
    var canSee = sprite.x < this.sprite.x &&
      this.sprite.y > (sprite.y - sprite.body.visibleHeight) &&
      this.sprite.y < (sprite.y + sprite.body.visibleHeight);
    return canSee;
  },
}

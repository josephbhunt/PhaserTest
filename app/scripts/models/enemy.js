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
    this.weapon = new Weapon.SingleBullet(this.game)
  },

  update: function(){
    for (var i = 0; i < this.bullets.length; i++) {
      if (this.bullets[i].isOutOfBounds) {
        this.bullets.pop(i);
      }
      else {
        this.bullets[i].update();
      }
    }

    if (this.canSee(this.player.sprite)){
      this.game.add.text(300, 50, "Alert", {font: "28px Arial", fill: "red", align: "left"});
      this.weapon.fire(this)
    }
  },

  render: function(){
  },

  canSee: function(sprite){
    var canSee = sprite.x < this.sprite.x &&
      this.sprite.y > (sprite.y - sprite.body.visibleHeight / 2) &&
      this.sprite.y < (sprite.y + sprite.body.visibleHeight / 2);
    return canSee;
  },

  shoot: function(){
    bullet = new Bullet(this.game, this)
    this.bullets.push(bullet)
    console.log(this.bullets)
  }
}

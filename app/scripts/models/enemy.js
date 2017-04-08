var Enemy = function(game){
  this.game = game;
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

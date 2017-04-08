Phaser.Physics.Arcade.Body.prototype.visibleWidth = 0;

Phaser.Physics.Arcade.Body.prototype.visibleHeight = 0;

Phaser.Physics.Arcade.Body.prototype.setVisibleSize = function(width, height){
  if (this.isCircle) {
      return;
  }

  this.visibleWidth = width * this._sx;;
  this.visibleHeight = height * this._sy;
};

Phaser.Physics.Arcade.Body.prototype.visibleBox = function(width, height){

};

Phaser.Physics.Arcade.Body.renderVisibleSize = function (context, body) {
  color = 'rgba(0,255,0,0.4)';
  context.fillStyle = color;
  game.graphics.beginFill(0xFF0000, 1);
  game.graphics.drawCircle(body.position.x, body.position.y, 1);
  game.graphics.endFill();
  context.fillRect(body.position.x - body.game.camera.x, body.position.y - body.game.camera.y, body.visibleWidth, body.visibleHeight);
};

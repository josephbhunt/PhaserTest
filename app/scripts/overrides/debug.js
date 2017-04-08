Phaser.Utils.Debug.prototype.visibleBody = function(sprite){
  if (sprite.body) {
    this.start();
    if (sprite.body.type === Phaser.Physics.ARCADE){
      Phaser.Physics.Arcade.Body.renderVisibleSize(this.context, sprite.body);
    }
    this.stop();
  }
}

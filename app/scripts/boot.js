Boot = function(game){
}

Boot.prototype = {
  preload: function (){
    // this.game.load.image('background', 'app/img/mg1h1f1.gif');
    this.load.image('bullet', 'app/img/bullet_left.png')
  },

  create: function(){
    game.world.setBounds(0, 0, 6160, 3880);
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Keys
    game.cursors = game.input.keyboard.createCursorKeys();
    //Switch state
    this.game.state.start("Game");
  }
}

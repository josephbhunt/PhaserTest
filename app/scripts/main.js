// requirejs.config({
//   baseUrl: 'app/scripts',
//   paths: {
//     lib: '../../lib',
//     models: 'models'
//   },
// });

var options = {
  width: 640,
  height: 640,
  renderer: Phaser.AUTO,
  parent: "phaser-test",
  transparent: false,
  antialias: false,
}

var game = new Phaser.Game(options);
game.state.add("Boot", Boot);
// game.state.add("Preload", Preload);
game.state.add("Game", Game);
game.state.start("Boot");

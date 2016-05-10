define([], function(){

  return function Preload(game){
    function preload(){

    }

    function create(){
      this.game.state.start("Game");
    }
  }
});

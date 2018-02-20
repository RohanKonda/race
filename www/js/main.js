var game = new Phaser.Game(1920, 1080, Phaser.AUTO, 'game'), Main = function () {};

Main.prototype = {

  preload: function () {
    game.load.image('background', 'assets/background/1.png');
    game.load.image('rocks_1', 'assets/background/2.png');
    game.load.image('rocks_2', 'assets/background/3.png');
   // game.load.image('clouds_1', 'assets/clouds_1.png');
    game.load.image('clouds_2', 'assets/background/4.png');
    //game.load.image('clouds_3', 'assets/clouds_3.png');
    //game.load.image('clouds_4', 'assets/clouds_4.png');
    game.load.image('ground', 'assets/background/5_1.png');
    game.load.atlas('dude', 'assets/dude.png', 'assets/dude.json');
    game.load.atlas('alien1', 'assets/alien1.png', 'assets/alien1.json');
    game.load.atlas('alien2', 'assets/alien2.png', 'assets/alien2.json');
    //game.load.spritesheet('dude', 'assets/dude.png',89,60);
    //game.load.spritesheet('dude1', 'assets/dude.png',85,51);
     game.load.image('jump', 'assets/jump.png');
     game.load.image('shoot', 'assets/shoot.png');
      game.load.image('kunai', 'assets/kunai.png');
      game.load.audio('halloween', ['assets/audio/music.mp3', 'assets/audio/music.mp3']);
      game.time.desiredFps = 25;
  },

  create: function () {
    game.state.add('Splash', Splash);
    game.state.start('Splash');
  }

};

game.state.add('Main', Main);
game.state.start('Main');
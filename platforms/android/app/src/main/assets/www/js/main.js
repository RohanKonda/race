// Global Variables
var
  game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game'),
  Main = function () {},
  gameOptions = {
    playSound: true,
    playMusic: false
  },
  musicPlayer;




Main.prototype = {

  preload: function () {
    game.time.desiredFps = 30;
    game.load.image('stars',    'assets/images/stars.png');
    game.load.image('loading',  'assets/images/loading.png');
    game.load.image('brand',    'assets/images/logo.png');
    game.load.script('polyfill',   'lib/polyfill.js');
    game.load.script('utils',   'lib/utils.js');
    game.load.script('splash',  'states/Splash.js');
   
  },

  create: function () {

game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
 game.scale.pageAlignHorizontally = true;
game.scale.pageAlignVertically = true;

    game.state.add('Splash', Splash);
    game.state.start('Splash');
  }

};

game.state.add('Main', Main);
game.state.start('Main');

var Splash = function () {};

Splash.prototype = {

  loadScripts: function () {
    game.load.script('style', 'lib/style.js');
    game.load.script('mixins', 'lib/mixins.js');
    game.load.script('WebFont', 'vendor/webfontloader.js');
    game.load.script('gamemenu','states/GameMenu.js');
    game.load.script('game', 'states/Game.js');
    game.load.script('gameover','states/GameOver.js');
    game.load.script('credits', 'states/Credits.js');
    game.load.script('options', 'states/Options.js');
  },

  loadBgm: function () {
    // thanks Kevin Macleod at http://incompetech.com/
    game.load.audio('gameMusic', 'assets/bgm/game.mp3');
    game.load.audio('exit', 'assets/bgm/Exit the Premises.mp3');
    game.load.audio('killAlienSound','assets/bgm/pain.mp3');
    game.load.audio('shootKunai','assets/bgm/kunai.mp3');
    game.load.audio('playerJump','assets/bgm/jump.mp3');
    game.load.audio('monsterCry','assets/bgm/monster.mp3');
    game.load.audio('playerPain','assets/bgm/player_pain.mp3');
  },
  // varios freebies found from google image search
  loadImages: function () {
    game.load.image('menu-bg', 'assets/images/menu-bg.png');
    game.load.image('options-bg', 'assets/images/menu-bg.png');
    game.load.image('gameover-bg', 'assets/images/menu-bg.png');


     game.load.image('sky', 'assets/background/sky.png');
    game.load.image('sun', 'assets/background/sun.png');
    game.load.image('back_land', 'assets/background/back_land.png');
    game.load.image('back_land_2', 'assets/background/back_land_2.png');
    game.load.image('cloud', 'assets/background/cloud.png');
    //game.load.image('clouds_2', 'assets/background/clouds_2.png');
    game.load.image('decor', 'assets/background/decor.png');
    game.load.image('land', 'assets/background/land.png');
    game.load.image('ground', 'assets/background/ground.png');
    game.load.atlas('dude', 'assets/dude.png', 'assets/dude.json');
    game.load.atlas('alien1', 'assets/alien1.png', 'assets/alien1.json');
    game.load.atlas('alien2', 'assets/alien2.png', 'assets/alien2.json');
    game.load.image('pause', 'assets/pause.png');
    game.load.image('resume', 'assets/resume.png');
    //game.load.spritesheet('dude', 'assets/dude.png',89,60);
    //game.load.spritesheet('dude1', 'assets/dude.png',85,51);
     game.load.image('jump', 'assets/jump.png');
     game.load.image('shoot', 'assets/shoot.png');
      game.load.image('kunai', 'assets/kunai.png');
      game.load.image('ninja', 'assets/ninja.png');



  },

  loadFonts: function () {
    WebFontConfig = {
      custom: {
        families: ['TheMinion'],
        urls: ['assets/style/theminion.css']
      }
    }
  },

  init: function () {
    this.loadingBar = game.make.sprite(game.world.centerX - 200, 400, "loading");
    this.logo       = game.make.sprite(game.world.centerX, 200, 'brand');
    this.status     = game.make.text(game.world.centerX, 380, 'Loading...', {fill: 'white'});
    utils.centerGameObjects([this.logo, this.status]);
  },

  preload: function () {

 
    game.add.sprite(0, 0, 'stars');
    game.add.existing(this.logo).scale.setTo(0.5);
    game.add.existing(this.loadingBar);
    game.add.existing(this.status);
    this.load.setPreloadSprite(this.loadingBar);

    this.loadScripts();
    this.loadImages();
    this.loadFonts();
    this.loadBgm();
    //game.time.desiredFps = 30;

  },

  addGameStates: function () {

    game.state.add("GameMenu",GameMenu);
    game.state.add("Game",Game);
    game.state.add("GameOver",GameOver);
    game.state.add("Credits",Credits);
    game.state.add("Options",Options);
  },

  addGameMusic: function () {
    gameMusic = game.add.audio('gameMusic');
   // music.loop = true;
   // music.play();

   killAlienSound = game.add.audio('killAlienSound');
   shootKunaiSound = game.add.audio('shootKunai');
   playerJumpSound =game.add.audio('playerJump');
   monsterCry =game.add.audio('monsterCry');
   playerPainSound = game.add.audio('playerPain');

   //Load Admob

   admobid = {//  for Android
      banner: 'ca-app-pub-9764632418268157/1042215986',
      interstitial: 'ca-app-pub-9764632418268157/2825715729',
      rewardvideo: 'ca-app-pub-3940256099942544/5224354917'
    };

    AdMob.createBanner({adId:admobid.banner,position:AdMob.AD_POSITION.BOTTOM_CENTE,autoShow:true});
    AdMob.hideBanner()

      AdMob.prepareInterstitial({
        adId:admobid.interstitial,
        autoShow: false,
      });

         if (window.store) {
        console.log('Store not available');
       
    }

  },

  create: function() {



    this.status.setText('Ready!');
    this.addGameStates();
    this.addGameMusic();

    setTimeout(function () {

      game.state.start("GameMenu");
    }, 1000);
  }
};

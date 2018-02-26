var Game = function(game) {};

Game.prototype = {

  preload: function () {
        this.optionCount = 1;

//game.time.desiredFps = 30;

      
      var music;
      this.enableObstacleCollide = true;
this.platforms;
var player;
var alien;
var kunai;
this.score=0;
var jumpPressed = false;
var shootPressed=false;
var flipFlop=false;
this.timeSinceLastIncrement = 0;
this.playerKilled = false;
this.kunaiCount = 25;
var kunais;
var aliens;
var jump;
var shoot;
this.timeSinceEmptyBullets = 0;
this.getTimeElapsed;
this.startTime = 0;
this.currentTime = 0;
this.playerLives = 3;




  },

  // addMenuOption: function(text, callback) {
  //   var optionStyle = { font: '30pt TheMinion', fill: 'white', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
  //   var txt = game.add.text(game.world.centerX, (this.optionCount * 80) + 200, text, optionStyle);
  //   txt.anchor.setTo(0.5);
  //   txt.stroke = "rgba(0,0,0,0";
  //   txt.strokeThickness = 4;
  //   var onOver = function (target) {
  //     target.fill = "#FEFFD5";
  //     target.stroke = "rgba(200,200,200,0.5)";
  //     txt.useHandCursor = true;
  //   };
  //   var onOut = function (target) {
  //     target.fill = "white";
  //     target.stroke = "rgba(0,0,0,0)";
  //     txt.useHandCursor = false;
  //   };
  //   //txt.useHandCursor = true;
  //   txt.inputEnabled = true;
  //   txt.events.onInputUp.add(callback, this);
  //   txt.events.onInputOver.add(onOver, this);
  //   txt.events.onInputOut.add(onOut, this);

  //   this.optionCount ++;


  // },

  create: function () {
  //game.time.advancedTiming = true;
    // this.stage.disableVisibilityChange = false;
    // game.add.sprite(0, 0, 'stars');
    // this.addMenuOption('Next ->', function (e) {
    //   this.game.state.start("GameOver");
    // });
 gameMusic.loop = true;
    gameMusic.play();

//scaleRatio = window.devicePixelRatio;
    //alert(window.devicePixelRatio);

game.input.addPointer();

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);
   //game.physics.arcade.gravity.y = 300;
    //  A simple background for our game
    var background = game.add.sprite(0, 0, 'sky');
     var sun = game.add.sprite(0, 0, 'sun');
    //background.scale.setTo(scaleRatio, scaleRatio);

    this.back_land = this.game.add.tileSprite(0,
        this.game.height - this.game.cache.getImage('back_land').height,
        this.game.width,
        this.game.cache.getImage('back_land').height,
        'back_land'
    );
 
    this.back_land_2 = this.game.add.tileSprite(0,
        this.game.height - this.game.cache.getImage('back_land_2').height,
        this.game.width,
        this.game.cache.getImage('back_land_2').height,
        'back_land_2'
    );
 
    this.cloud = this.game.add.tileSprite(0,
        this.game.height - this.game.cache.getImage('cloud').height,
        this.game.width,
        this.game.cache.getImage('cloud').height,
        'cloud'
    );   

    //  this.clouds_2 = this.game.add.tileSprite(0,
    //     this.game.height - this.game.cache.getImage('clouds_2').height,
    //     this.game.width,
    //     this.game.cache.getImage('clouds_2').height,
    //     'clouds_2'
    // ); 

       this.decor = this.game.add.tileSprite(0,
        this.game.height - this.game.cache.getImage('decor').height,
        this.game.width,
        this.game.cache.getImage('decor').height,
        'decor'
    ); 

          this.land = this.game.add.tileSprite(0,
        this.game.height - this.game.cache.getImage('land').height,
        this.game.width,
        this.game.cache.getImage('land').height,
        'land'
    ); 



//  The platforms group contains the ground and the 2 ledges we can jump on
    this.aliens = game.add.group();

    //  We will enable physics for any object that is created in this group
    this.aliens.enableBody = true;

    this.kunais = game.add.group();
    this.kunais.enableBody = true;



      ground  = game.add.tileSprite(0,
        game.height - (game.height-470),
        game.width,
        game.cache.getImage('ground').height,
        'ground'
    ); 
     game.physics.arcade.enable(ground);

ground.body.immovable = true;
  ground.body.allowGravity = false;



      //alien.body.collideWorldBounds = true;

     // The player and its settings
    player = game.add.sprite(51, game.world.height - 700, 'dude');
    //player.scale.setTo(scaleRatio/2, scaleRatio/2);
      game.physics.arcade.enable(player);
player.body.checkCollision.left = false;
    //  Player physics properties. Give the little guy a slight bounce.
   // player.body.bounce.y = 0.2;
   player.body.gravity.y = 7000;
    player.body.collideWorldBounds = true;
    
  //  player.body.checkCollision.right = false;
    //player.loadTexture('dude1',7);
     player.animations.add('dead', [0,1,2,3,4,5,6,7,8,9], 10, false);
     player.animations.add('idle', [10,11,12,13,14,15,16,17,18,19], 10, true);
    player.animations.add('right', [30,31,32,33,34,35,36,37,38,39], 20, true);
     player.animations.add('shoot', [50,51,52,53,54,55,56,57,58,59], 15, false);
     player.animations.add('jump', [20,21,22,23,24,25,26,27,28,29], 20, false);
    //player.animations.add('right', [0, 1, 2, 3,4,5,6], 12, true);
    //scaleSprite(player, game.width, game.height / 3, 50, 1);
//  The score
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '16px', fill: '#000' });
    //scoreText.scale.setTo(scaleRatio/2, scaleRatio/2);

    kunaiLabel = game.add.sprite(16,50,'kunai');
    playerLabel = game.add.sprite(game.width-100,16,'ninja');
     pauseButton = game.add.sprite(game.width-150,16,'pause');

      pauseButton.inputEnabled = true;
    //shoot.scale.setTo(scaleRatio, scaleRatio);
      
pauseButton.events.onInputDown.add(this.onPause, this);


    playerLivesTxt = game.add.text(game.width-50, 16, this.playerLives, { fontSize: '32px', fill: '#000' });
    //kunaiLabel.scale.setTo(scaleRatio,scaleRatio);

    kunaiCountTxt = game.add.text(60, 40, this.kunaiCount, { fontSize: '16px', fill: '#000' });
    //kunaiCountTxt.scale.setTo(scaleRatio/2, scaleRatio/2);

    
    
    jump = game.add.sprite(game.width - 280, game.height - 132, 'jump');
     //jump.scale.setTo(scaleRatio, scaleRatio);
     jump.inputEnabled = true;

     shoot = game.add.sprite(game.width - 800, game.height - 132, 'shoot');
      shoot.inputEnabled = true;
    //shoot.scale.setTo(scaleRatio, scaleRatio);
      
jump.events.onInputDown.add(this.onJump, this);
  shoot.events.onInputDown.add(this.onShoot, this);



// admobid = {//  for Android
//       banner: 'ca-app-pub-9764632418268157/1042215986',
//       interstitial: 'ca-app-pub-9764632418268157/2825715729',
//       rewardvideo: 'ca-app-pub-3940256099942544/5224354917'
//     };



// show the interstitial later, e.g. at end of game level


  AdMob.showBanner();



  },


  update: function (){
   // console.log(game.time.suggestedFps);
//  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
//  game.scale.pageAlignHorizontally = true;
// game.scale.pageAlignVertically = true;
this.getTimeElapsed = game.time.now;
 game.physics.arcade.collide(this.aliens, ground);
 game.physics.arcade.overlap(player, this.aliens, this.killPlayer, null, this);
 
 //console.log(this.aliens.countLiving());


game.physics.arcade.overlap(this.aliens, this.kunais, this.killAlien, null, this);
game.physics.arcade.collide(player, ground);
//game.physics.arcade.collide(aliens, kunais);

if(this.startTime === 0){
this.startTime = game.time.now;
}
this.currentTime = game.time.now;

this.timeSinceLastIncrement = this.currentTime - this.startTime;

//this.timeSinceLastIncrement += game.time.elapsed;
//console.log(this.timeSinceLastIncrement);




randomNum = Math.floor(Math.random()*(4000-1000+1)+1000);
   if (this.timeSinceLastIncrement > randomNum)  // Random number between 1500 and 4000
   {
    console.log('TSI: '+this.timeSinceLastIncrement)
   // console.log('Random: '+randomNum);
   this.startTime = this.currentTime;
     //this.timeSinceLastIncrement = 0;
     if((Math.floor(Math.random() * 10) + 1)% 2 == 0){
      alien = this.aliens.getFirstDead();
      if(alien===null || alien===undefined){
      alien= this.aliens.create(game.world.width-50, game.world.height - 500, 'alien1');
     }else{
      alien.revive();
     }
         }else{

          alien = this.aliens.getFirstDead();
      if(alien===null || alien===undefined){

       alien= this.aliens.create(game.world.width-50, game.world.height - 500, 'alien2');
     }else{

      alien.revive();

     }
         }
      alien.name = 'alien' + game.time.now;
      //console.log(aliens.length);
      alien.checkWorldBounds = true;

       //alien.body.checkCollision.right = false;

      //alien = game.add.sprite(game.world.width-500, game.world.height - 400, 'alien1');
       //alien.scale.setTo(scaleRatio/2, scaleRatio/2);
      game.physics.arcade.enable(this.aliens);
       alien.body.gravity.y = 5000;
      alien.animations.add('alien_run', [14,15,16,17,18,19,20], 5, true);
      alien.animations.play('alien_run');
      if(this.timeSinceLastIncrement >1600){
     alien.body.velocity.x=-600;
       monsterCry.play();
   }else{
    alien.body.velocity.x=-400;
  
   }
     alien.events.onOutOfBounds.add(this.goodbye, this);
this.timeSinceLastIncrement = 0;

 
     //console.log(alien.name+' '+alien.x)
//Reload kunai
         if(this.timeSinceEmptyBullets>0){
            console.log('game'+game.time.now);
        if((this.getTimeElapsed - this.timeSinceEmptyBullets) > 10000){

          this.timeSinceEmptyBullets=0;
          this.kunaiCount = 10;
          kunaiCountTxt.text = this.kunaiCount;
        }
      }

}




    this.back_land.tilePosition.x -= 0.05;
    this.back_land_2.tilePosition.x -= 1;
    this.cloud.tilePosition.x -= 0.75; 
   // this.clouds_2.tilePosition.x -= 0.55; 
    this.decor.tilePosition.x -= 1.3; 
    this.land.tilePosition.x -= 8; 
    ground.tilePosition.x -= 8; 
     
     //player.animations.play('idle');
     // player.body.velocity.x = 150;




if(player.body.touching.down && !this.playerKilled && !this.shootPressed){

        player.animations.play('right');

    }

if(this.jumpPressed && player.body.touching.down && !this.playerKilled){

 //player.loadTexture('dude1',7);
 //if (!flipFlop) {
    player.animations.stop(null, true);
    playerJumpSound.play();
    player.animations.play('jump');
    //player.body.bounce.y = 2;
    player.body.velocity.y = -2000
    player.body.gravity.y = 6000;
    
   this.flipFlop = true;
   this.jumpPressed = false;

//}
}


if(this.shootPressed  && !this.playerKilled ){

 //player.loadTexture('dude1',7);
 //if (!flipFlop) {
  if(this.kunaiCount>0){
    player.animations.stop(null, true);
    player.animations.play('shoot');
    //player.body.bounce.y = 2;
    player.body.velocity.y = -800
   // player.body.gravity.y = 6000;
    
   //fire

   kunai= this.kunais.create(player.x+50, player.y+50, 'kunai');
   //kunai.scale.setTo(scaleRatio/2 ,scaleRatio/2);     
      kunai.name = 'kunai' + game.time.now;
      //console.log(alien.name);
      kunai.checkWorldBounds = true;
       game.physics.arcade.enable(kunai);
       kunai.body.gravity.y = 300;
       shootKunaiSound.play();
       //alien.body.checkCollision.right = false;

      //alien = game.add.sprite(game.world.width-500, game.world.height - 400, 'alien1');
      // kunai.scale.setTo(scaleRatio, scaleRatio);
      kunai.body.velocity.x = 2500;
      kunai.events.onOutOfBounds.add(this.deleteKunai , this);
      
      this.kunaiCount --;
    }
      if(this.kunaiCount===0){

          if(this.timeSinceEmptyBullets==0){
          this.timeSinceEmptyBullets  = game.time.now;
          //console.log(this.timeSinceEmptyBullets);

        }

      


      }

//console.log('empty: '+this.timeSinceEmptyBullets);

    
      kunaiCountTxt.text = this.kunaiCount;



   this.flipFlop = true;
   this.shootPressed = false;

//}
}

if(!player.body.touching.down && !this.flipFlop){
    player.animations.play('idle');
}
     
//         if(flipFlop && player.body.touching.down){
        
//    //player.animations.play('right');
//    flipFlop=false;
    
// }
},



goodbye: function (obj) { 
obj.kill(); 
 obj.destroy(); 


 //console.log('alien killed');
    if(!this.playerKilled){
    //  Add and update the score
    this.score += 10;
    scoreText.text = 'Score: ' + this.score;

}

},

deleteKunai: function (obj) { 
obj.kill(); 
 obj.destroy(); 



},

killPlayer: function  (player, alien) {
    

   // console.log('overlapx' + player.body.overlapX);

    // Removes the star from the screen
    if(this.enableObstacleCollide){
      if(alien.body.overlapX < 110 && player.body.overlapX > 50){ // Check exactly where the alien is touched, if its touched at the back, dont kill the player.
    this.playerKilled=true;
   // alien.body.velocity.x=0;


alien.animations.stop(null, true);
 alien.animations.add('alien_attack', [0,1,2,3,4,5,6], 10, false);
alien.animations.play('alien_attack');
    player.animations.stop(null, true);
    playerPainSound.play();
     player_dead_anim = player.animations.play('dead');

     if(this.playerLives>0){
      player_dead_anim.onComplete.add(this.resurectPlayer, this)
       this.enableObstacleCollide=false;
     }else{
    player_dead_anim.onComplete.add(this.showGameOver, this)
     this.enableObstacleCollide=false;
  }
    
    
 }
 }
    //player.kill();


},

killAlien: function  (alien, kunai) {
    
 
kunai.destroy();
//
alien.animations.stop(null, true);
 alien.animations.add('alien_dead', [7,8,9,10,11,12,13], 15, false);
      alien_dead_anim = alien.animations.play('alien_dead');
      killAlienSound.play();
      alien_dead_anim.onComplete.add(this.destroyAlien, this)
alien.body.velocity.x=0;
   this.score += 20;
    scoreText.text = 'Score: ' + this.score;
    //alien.destroy();

},

destroyAlien: function (alien){

alien.destroy();
},



destroySprite: function  (sprite) {

console.log('sprite deleted');
    sprite.destroy();

},

onJump: function (){

    this.jumpPressed = true;
},


onShoot: function (){

    this.shootPressed = true;
},


showGameOver: function(player){

   game.state.start("GameOver");
},

resurectPlayer: function(player){

   player.animations.stop(null, true);
   
     this.playerKilled=false;
     this.playerLives--;
     playerLivesTxt.text = this.playerLives;
    player_res_anim = player.animations.play('right');
    player_res_anim.onLoop.add(this.reEnablePlayerCollide,this);
     
},

reEnablePlayerCollide: function(player){
  this.enableObstacleCollide=true;
},

onPause: function(pauseButton){

 if(game.paused === true){
    game.paused = false;
    pauseButton.loadTexture('pause',0,false);
  }else{

  game.paused = true;
  pauseButton.loadTexture('resume',0,false);
  
}


}





};
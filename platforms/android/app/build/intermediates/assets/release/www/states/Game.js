var Game = function(game) {};

Game.prototype = {

  preload: function () {
        this.optionCount = 1;
//this.game.renderer.renderSession.roundPixels = true;
//game.time.desiredFps = 40;
//game.forceSingleUpdate = true; 


      
var music;
this.enableObstacleCollide = true;
this.platforms;
var player;
var alien;
var bigalien;
var kunai;
this.score=0;
this.currentScore=0;
this.jumpPressed = false;
var shootPressed=false;
var flipFlop=false;
this.timeSinceLastIncrement = 0;
this.playerKilled = false;
this.kunaiCount;
var kunais;
var aliens;
var jump;
var jump_tween;
var shoot;
this.timeSinceEmptyBullets = 0;
this.getTimeElapsed;
this.startTime = 0;
this.currentTime = 0;
this.playerLives;
var ninja_powers;
var ninja_power;
this.shootbigAlien = 0;
var waitGameOverCount=0;






  },



  create: function () {
 
menuMusic.stop();

if(window.localStorage.getItem("lives_count_key")!=null){

  this.playerLives = parseInt(window.localStorage.getItem("lives_count_key"))+3;
}else{
  this.playerLives =3;
}

if(window.localStorage.getItem("kunai_count_key")!=null){

  this.kunaiCount = parseInt(window.localStorage.getItem("kunai_count_key"))+25;
}else{
  this.kunaiCount = 25;
}

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

   this.displayNotif("Get Ready...");

    

//  The platforms group contains the ground and the 2 ledges we can jump on
    this.aliens = game.add.group();
    this.ninja_powers = game.add.group();


    //  We will enable physics for any object that is created in this group
    this.aliens.enableBody = true;
    this.ninja_powers.enableBody = true;

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

restartButton = game.add.sprite(game.width-200,16,'restart');
  restartButton.inputEnabled = true;
  restartButton.events.onInputDown.add(this.onRestart, this);

  homeButton = game.add.sprite(game.width-700,16,'home');
  homeButton.inputEnabled = true;
  homeButton.events.onInputDown.add(this.onHome, this);

    playerLivesTxt = game.add.text(game.width-50, 16, this.playerLives, { fontSize: '16px', fill: '#000' });
    //kunaiLabel.scale.setTo(scaleRatio,scaleRatio);

    kunaiCountTxt = game.add.text(60, 40, this.kunaiCount, { fontSize: '16px', fill: '#000' });
    //kunaiCountTxt.scale.setTo(scaleRatio/2, scaleRatio/2);

    //Showing jumpimage for 4 sec and then removing it. Also blinking it.
    jumpTween = game.add.sprite(game.width - 280, game.height - 132, 'jump_tween');
    //jumpTween.anchor.setTo(0.5, 0.5);
    jumpTween.alpha = 0;

    game.add.tween(jumpTween).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 1000, true);
    game.time.events.add(Phaser.Timer.SECOND * 4, jumpTween.destroy, jumpTween);
    
    //Actual jump button
    jump = game.add.sprite(game.width - 280, game.height - 132, 'jump');

     //jump.scale.setTo(scaleRatio, scaleRatio);
     jump.inputEnabled = true;


shootTween = game.add.sprite(game.width - 800, game.height - 132, 'shoot_tween');
    //jumpTween.anchor.setTo(0.5, 0.5);
    shootTween.alpha = 0;

    game.add.tween(shootTween).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 1000, true);
    game.time.events.add(Phaser.Timer.SECOND * 4, shootTween.destroy, shootTween);

     shoot = game.add.sprite(game.width - 800, game.height - 132, 'shoot');
      shoot.inputEnabled = true;
    //shoot.scale.setTo(scaleRatio, scaleRatio);


      
jump.events.onInputDown.add(this.onJump, this);
  shoot.events.onInputDown.add(this.onShoot, this);



 this.stage.disableVisibilityChange = false;// to detect app minimised

//create some powers every 25 sec
  game.time.events.repeat(Phaser.Timer.SECOND * 25, 10, this.createPower, this);



  },


  update: function (){
   // console.log(game.time.suggestedFps);
//  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
//  game.scale.pageAlignHorizontally = true;
// game.scale.pageAlignVertically = true;
this.getTimeElapsed = game.time.now;
 game.physics.arcade.collide(this.aliens, ground);
 game.physics.arcade.overlap(player, this.aliens, this.killPlayer, null, this);
 

 if(game.paused === true){
  console.log("Game Paused");
  gameMusic.pause();
 }else{
  gameMusic.resume();
 }
 //console.log(this.aliens.countLiving());


game.physics.arcade.overlap(this.aliens, this.kunais, this.killAlien, null, this);
game.physics.arcade.overlap(player,this.ninja_powers, this.deletePower, null, this);
game.physics.arcade.collide(player, ground);
//game.physics.arcade.collide(aliens, kunais);

if(this.startTime === 0){
this.startTime = game.time.now;
}
this.currentTime = game.time.now;

this.timeSinceLastIncrement = this.currentTime - this.startTime;

//this.timeSinceLastIncrement += game.time.elapsed;
//console.log(this.timeSinceLastIncrement);




randomNum = Math.floor(Math.random()*((Math.floor(Math.random()*(4000-3000+1)+3000))-(Math.floor(Math.random()*(1000-500+1)+500))+1)+(Math.floor(Math.random()*(1000-500+1)+500)));
   if (this.timeSinceLastIncrement > randomNum)  // Random number between 1500 and 4000
   {
    console.log('TSI: '+this.timeSinceLastIncrement)
   // console.log('Random: '+randomNum);
   this.startTime = this.currentTime;

   //Create a big monster every time score reaches a 500
   console.log("currentscore: "+this.currentScore);

   if(this.currentScore > 460 && this.currentScore < 490){

    this.displayNotif("Watchout...!!!")

   }

    if(this.currentScore > 500){

      bigalien= this.aliens.create(game.world.width-220, game.world.height - 500, 'alien4');
      bigalien.name = 'alien4' + game.time.now;
      this.currentScore = 0;
       bigalien.checkWorldBounds = true;
       bigalien.body.gravity.y = 5000;
       bigalien.body.velocity.x=-30;
       game.physics.arcade.enable(this.aliens);
       //alien.body.gravity.y = 5000;
      bigalien.animations.add('alien_run', [14,15,16,17,18,19,20], 5, true);
      bigalien.animations.play('alien_run');

var barConfig = {width: 60,
    height: 4,
    x: bigalien.x +60,
     y: game.world.height - 300,
   bg: {
      color: '#5AA926'
    },
    bar: {
      color: '#C70039'
    },
    animationDuration: 200,
  flipped: false};
  this.myHealthBar = new HealthBar(this.game, barConfig);
  

     }
if(this.myHealthBar!=null){
  this.myHealthBar.setPosition(bigalien.x + 60,game.world.height - 300);
  console.log("shoot: "+this.shootbigAlien)
  this.myHealthBar.setPercent(this.percentage(this.shootbigAlien,5));
}

     //this.timeSinceLastIncrement = 0;
     if((Math.floor(Math.random() * 10) + 1)% 2 == 0){
      alien = this.aliens.getFirstDead();
      if(alien===null || alien===undefined){
      alien= this.aliens.create(game.world.width-50, game.world.height - 500, 'alien1');
      alien.name = 'alien1' + game.time.now;
     }else{
      alien.revive();
     }
         }else{

          alien = this.aliens.getFirstDead();
      if(alien===null || alien===undefined){
        if(this.isPrime((Math.floor(Math.random() * 50) + 1))){
      alien= this.aliens.create(game.world.width-50, game.world.height - 500, 'alien3');
      alien.name = 'alien3' + game.time.now;
        }else{
       alien= this.aliens.create(game.world.width-50, game.world.height - 500, 'alien2');
       alien.name = 'alien2' + game.time.now;
     }
     }else{

      alien.revive();

     }
         }
      
      //console.log(aliens.length);
      alien.checkWorldBounds = true;

       //alien.body.checkCollision.right = false;

      //alien = game.add.sprite(game.world.width-500, game.world.height - 400, 'alien1');
       //alien.scale.setTo(scaleRatio/2, scaleRatio/2);

      if(!alien.name.startsWith("alien3")){
       
     
       alien.body.gravity.y = 5000;
    }else{
       console.log('alienName: '+alien.name)
             alien.body.gravity.y = 200;

    }
      game.physics.arcade.enable(this.aliens);
       //alien.body.gravity.y = 5000;
      alien.animations.add('alien_run', [14,15,16,17,18,19,20], 5, true);
      alien.animations.play('alien_run');
      if(this.timeSinceLastIncrement >1500){
     alien.body.velocity.x=-650;
     if(alien.name.startsWith("alien3")){
      ghostCry.play();  
    }else{
       monsterCry.play();
     }
   }else{
    if(alien.name.startsWith("alien3")){
      ghostCry.play(); 
      alien.body.velocity.x=-550; 
    }else{
    alien.body.velocity.x=-450;
  }
  
   }
     alien.events.onOutOfBounds.add(this.goodbye, this);
this.timeSinceLastIncrement = 0;

 
     //console.log(alien.name+' '+alien.x)
//Reload kunai
      //    if(this.timeSinceEmptyBullets>0){
      //       console.log('game'+game.time.now);
      //   if((this.getTimeElapsed - this.timeSinceEmptyBullets) > 10000){

      //     this.timeSinceEmptyBullets=0;
      //     this.kunaiCount = 10;
      //     kunaiCountTxt.text = this.kunaiCount;
      //   }
      // }

}




    this.back_land.tilePosition.x -= 0.05;
    this.back_land_2.tilePosition.x -= 1;
    this.cloud.tilePosition.x -= 0.75; 
   // this.clouds_2.tilePosition.x -= 0.55; 
    this.decor.tilePosition.x -= 1.3; 
    this.land.tilePosition.x -= 7; 
    ground.tilePosition.x -= 7; 
     
     //player.animations.play('idle');
     // player.body.velocity.x = 150;




if(player.body.touching.down && !this.playerKilled && !this.shootPressed){

        player.animations.play('right');

    }

if(this.jumpPressed && player.body.touching.down && !this.playerKilled && player.y > 378){

 //player.loadTexture('dude1',7);
 //if (!flipFlop) {
  console.log("Player Y: "+player.y);
    player.animations.stop(null, true);
    playerJumpSound.play();
    player.animations.play('jump');
    //player.body.bounce.y = 2;
    player.body.velocity.y = -1800;
    player.body.gravity.y = 6000;
    
   this.flipFlop = true;
   this.jumpPressed = false;

//}
}
// else{
//   this.jumpPressed = false;
// }


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

      if(this.kunaiCount===10){

        this.displayNotif("Yo!! Running out of Knives...");
      }

      if(this.kunaiCount===5){

        this.displayNotif("Save knives you will need them...");
      }

      if(window.localStorage.getItem("kunai_count_key")!=null){

        window.localStorage.setItem("kunai_count_key",this.kunaiCount);

      }
    }
      if(this.kunaiCount===0){

          this.displayNotif(" :( You are empty");

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
}else{
   this.shootPressed = false;
}

if(!player.body.touching.down && !this.flipFlop){
    player.animations.play('idle');
}


//create some powers

 


},



goodbye: function (obj) { 
obj.kill(); 
 obj.destroy(); 


 //console.log('alien killed');
    if(!this.playerKilled ){
    //  Add and update the score
    this.score += 10;
    this.currentScore += 10;
    scoreText.text = 'Score: ' + this.score;

}

},

deleteKunai: function (obj) { 
obj.kill(); 
 obj.destroy(); 



},

killPlayer: function  (player, alien) {
    

   // console.log('overlapx' + player.body.overlapX);

    
    if(this.enableObstacleCollide){
      if(alien.body.overlapX < 90 && player.body.overlapX > 30){ // Check exactly where the alien is touched, if its touched at the back, dont kill the player.
    this.playerKilled=true;
   // alien.body.velocity.x=0;


alien.animations.stop(null, true);
 alien.animations.add('alien_attack', [0,1,2,3,4,5,6], 10, false);
alien_attack_anim = alien.animations.play('alien_attack');
alien_attack_anim.onComplete.add(this.alienRecover,this);


    player.animations.stop(null, true);
    playerPainSound.play();
     player_dead_anim = player.animations.play('dead');

     if(this.playerLives>0){
      if(this.score > 0)//attempt to currect the score if player is dead
        this.score-=10;

      player_dead_anim.onComplete.add(this.resurectPlayer, this)
       this.enableObstacleCollide=false;
     }else{
    player_dead_anim.onComplete.add(this.showGameOver, this)
     this.enableObstacleCollide=false;
  }
    
    
 }
 }
  shootPressed=false;


},

killAlien: function  (alien, kunai) {
    
 
kunai.destroy();

//

if(alien.name.startsWith("alien4")){

console.log("Killing alien4: "+this.shootbigAlien)

if(this.shootbigAlien===1){

  this.displayNotif("Hit it again...");
}


  if(this.shootbigAlien==5){

 alien.animations.stop(null, true);
 alien.animations.add('alien_dead', [7,8,9,10,11,12,13], 15, false);
      alien_dead_anim = alien.animations.play('alien_dead');
      killAlienSound.play();
      //alien.enableObstacleCollide= false;
      alien_dead_anim.onComplete.add(this.destroyAlien, this)
alien.body.velocity.x=0;
   this.score += 40;
  this.currentScore += 20; 

    scoreText.text = 'Score: ' + this.score;
    //alien.destroy();
this.shootbigAlien=0;
this.myHealthBar.kill();

}else{
   this.shootbigAlien+=1;
    alien.animations.stop(null, true);
 alien.animations.add('alien_hurt', [21,22,23,24,25,26,27], 10, false);
      alien_hurt_anim = alien.animations.play('alien_hurt');
      alien_hurt_anim.onComplete.add(this.alienRecover, this)
   killAlienSound.play();
}
}else{


alien.animations.stop(null, true);
 alien.animations.add('alien_dead', [7,8,9,10,11,12,13], 15, false);
      alien_dead_anim = alien.animations.play('alien_dead');
      killAlienSound.play();
      alien.enableObstacleCollide= false;
      alien_dead_anim.onComplete.add(this.destroyAlien, this)
alien.body.velocity.x=0;
   this.score += 20;
  this.currentScore += 20; 

    scoreText.text = 'Score: ' + this.score;
    //alien.destroy();

  }

},

destroyAlien: function (alien){

alien.destroy();
},



destroySprite: function  (sprite) {

console.log('sprite deleted');
    sprite.destroy();

},

onJump: function (){
if(player.body.touching.down && !this.playerKilled && player.y > 378 && this.jumpPressed === false)
    this.jumpPressed = true;
},


onShoot: function (){

    this.shootPressed = true;
},


showGameOver: function(player){

 gameScore = this.score;
 if(gameScore > window.localStorage.getItem("high_score_key"))
 window.localStorage.setItem("high_score_key", gameScore);  


   

  //if(this.waitGameOverCount===2){
   game.state.start("GameOver");
  //}else{
  //    game.time.events.repeat(Phaser.Timer.SECOND * 25, 10, this.showGameOver, this);
  //    this.waitGameOverCount+=1;
  // }
},

resurectPlayer: function(player){

   player.animations.stop(null, true);
   
     this.playerKilled=false;
     if(this.playerLives>0)
     this.playerLives--;
    if(window.localStorage.getItem("lives_count_key")!=null){

        window.localStorage.setItem("lives_count_key",this.playerLives);

      }

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


},

alienRecover: function(alien){
alien.animations.stop(null, true);
alien.animations.play('alien_run');

  },


isPrime: function (number) {
  if (typeof number !== 'number' || !Number.isInteger(number)) {
    return false;
  }

  if (number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  }
 
  for (var i = 3; i*i <= number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;

},


createPower: function() {

if((Math.floor(Math.random() * 10) + 1)% 2 == 0){
  
  ninja_power = this.ninja_powers.create(game.world.width-50,game.world.height - 400, 'ninja_power');
   ninja_power.name = 'life' + game.time.now;
}else{
  ninja_power = this.ninja_powers.create(game.world.width-50,game.world.height - 400, 'kunai_power');
   ninja_power.name = 'kunai' + game.time.now;
}
    game.physics.arcade.enable(ninja_power);
    ninja_power.collideWorldBounds = true;

    ninja_power.body.gravity.y = 10;
   

  ninja_power.body.velocity.x=-400;
    
    

},


deletePower: function (player,power) {

console.log("PowerX: "+power.body.overlapX);

if(power.body.overlapX < 60 && player.body.overlapX > 30){
  if(power.name.startsWith("life")){
    this.playerLives+=1;
    this.displayNotif("Lives 1 UP");
     if(window.localStorage.getItem("lives_count_key")!=null){

        window.localStorage.setItem("lives_count_key",this.playerLives);

      }
    playerLivesTxt.text = this.playerLives;
   playerLivesTxt.fontSize = 32;
   powerup.play();
  }else{
    this.kunaiCount+=10;
     this.displayNotif("Knives 10 UP ");

 if(window.localStorage.getItem("kunai_count_key")!=null){

        window.localStorage.setItem("kunai_count_key",this.kunaiCount);

      }

    kunaiCountTxt.text = this.kunaiCount;
    kunaiCountTxt.text.fontSize = 32
    powerup.play();
  }
power.kill();

}



},


percentage: function (partialValue, totalValue) {

  console.log("Percentage: "+(100 * partialValue) / totalValue);
   return (100 * partialValue) / totalValue;
},

onRestart: function(){
  game.state.start("Game");
},

onHome: function(){

  gameScore = this.score;
 if(gameScore > window.localStorage.getItem("high_score_key"))
 window.localStorage.setItem("high_score_key", gameScore);  


  game.state.start("GameOver");
},

displayNotif: function(textMsg){



    var titleStyle = { font: 'bold 20pt TheMinion', fill: '#581845', align: 'center'};
    notif = game.add.text(game.world.centerX, 30, "", titleStyle);
    //notif.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    notif.anchor.set(0.5);
   

notif.text = textMsg;

   notif.alpha = 0;

    game.add.tween(notif).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 1000, true);
    game.time.events.add(Phaser.Timer.SECOND * 2, notif.kill, notif);
}



};
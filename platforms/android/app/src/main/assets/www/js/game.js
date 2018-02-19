var game = new Phaser.Game(1920, 1080, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

function preload() {

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



}
var music;
function create() {

    music = game.add.audio('halloween');

    music.play();

	scaleRatio = window.devicePixelRatio;
    //alert(window.devicePixelRatio);

game.input.addPointer();

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);
   //game.physics.arcade.gravity.y = 300;
    //  A simple background for our game
    var background = game.add.sprite(0, 0, 'background');
    //background.scale.setTo(scaleRatio, scaleRatio);

    this.rocks_1 = this.game.add.tileSprite(0,
        this.game.height - this.game.cache.getImage('rocks_1').height,
        this.game.width,
        this.game.cache.getImage('rocks_1').height,
        'rocks_1'
    );
 
    this.rocks_2 = this.game.add.tileSprite(0,
        this.game.height - this.game.cache.getImage('rocks_2').height,
        this.game.width,
        this.game.cache.getImage('rocks_2').height,
        'rocks_2'
    );
 
    this.clouds_1 = this.game.add.tileSprite(0,
        this.game.height - this.game.cache.getImage('clouds_1').height,
        this.game.width,
        this.game.cache.getImage('clouds_1').height,
        'clouds_1'
    );   

     this.clouds_2 = this.game.add.tileSprite(0,
        this.game.height - this.game.cache.getImage('clouds_2').height,
        this.game.width,
        this.game.cache.getImage('clouds_2').height,
        'clouds_2'
    ); 


   


//  The platforms group contains the ground and the 2 ledges we can jump on
    aliens = game.add.group();

    //  We will enable physics for any object that is created in this group
    aliens.enableBody = true;

    kunais = game.add.group();
    kunais.enableBody = true;


// timeSinceLastIncrement += game.time.elapsed;
  
//   if (timeSinceLastIncrement >= 10)  // eg, update every 10 seconds
//   {
//     timeSinceLastIncreemnt = 0;
//      alien= aliens.create(game.world.width-500, game.world.height - 400, 'alien1');
//      //alien = game.add.sprite();
//       alien.scale.setTo(scaleRatio, scaleRatio);
//       game.physics.arcade.enable(aliens);
//       alien.body.gravity.y = 5000;
//       alien.animations.add('alien_run', [0,1,2,3,4,5,6], 10, true);
//   }




    //var ground = platforms.create(0, game.world.height - 64, 'ground');
      ground  = game.add.tileSprite(0,
        game.height - (game.height-1000),
        game.width,
        game.cache.getImage('ground').height,
        'ground'
    ); 
     game.physics.arcade.enable(ground);

ground.body.immovable = true;
  ground.body.allowGravity = false;



      //alien.body.collideWorldBounds = true;

     // The player and its settings
    player = game.add.sprite(102, game.world.height - 700, 'dude');
    player.scale.setTo(scaleRatio/2, scaleRatio/2);
      game.physics.arcade.enable(player);
player.body.checkCollision.left = false;
    //  Player physics properties. Give the little guy a slight bounce.
   // player.body.bounce.y = 0.2;
   player.body.gravity.y = 5000;
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
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    scoreText.scale.setTo(scaleRatio/2, scaleRatio/2);

    kunaiLabel = game.add.sprite(16,80,'kunai');
    kunaiLabel.scale.setTo(scaleRatio,scaleRatio);

    kunaiCountTxt = game.add.text(150, 70, kunaiCount, { fontSize: '32px', fill: '#000' });
    kunaiCountTxt.scale.setTo(scaleRatio/2, scaleRatio/2);

    
    
    jump = game.add.sprite(game.width - 680, game.height - 320, 'jump');
     //jump.scale.setTo(scaleRatio, scaleRatio);
     jump.inputEnabled = true;

     shoot = game.add.sprite(game.width - 1920, game.height - 320, 'shoot');
      shoot.inputEnabled = true;
    //shoot.scale.setTo(scaleRatio, scaleRatio);
      
jump.events.onInputDown.add(onJump, this);
  shoot.events.onInputDown.add(onShoot, this);
   

}
var flipFlop=false;
var timeSinceLastIncrement = 0;
var playerKilled = false;
var kunaiCount = 50;
var kunais;
var aliens;




function update(){
 game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
 game.scale.pageAlignHorizontally = true;
game.scale.pageAlignVertically = true;
 game.physics.arcade.collide(aliens, ground);
 game.physics.arcade.overlap(player, aliens, killPlayer, null, this);
 
 console.log(aliens.countLiving());


game.physics.arcade.overlap(aliens, kunais, killAlien, null, this);
game.physics.arcade.collide(player, ground);
//game.physics.arcade.collide(aliens, kunais);


timeSinceLastIncrement += game.time.elapsed;
//console.log(timeSinceLastIncrement);


   if (timeSinceLastIncrement > (Math.floor(Math.random() * 2000) + 500))  // Random number between 1500 and 4000
   {
    console.log('Inside');
     timeSinceLastIncrement = 0;
     if((Math.floor(Math.random() * 10) + 1)% 2 == 0){
      alien= aliens.create(game.world.width-200, game.world.height - 800, 'alien1');
        }else{
      alien= aliens.create(game.world.width-200, game.world.height - 800, 'alien2');
        }
      alien.name = 'alien' + game.time.now;
      //console.log(aliens.length);
      alien.checkWorldBounds = true;

       alien.body.checkCollision.right = false;

      //alien = game.add.sprite(game.world.width-500, game.world.height - 400, 'alien1');
       alien.scale.setTo(scaleRatio/2, scaleRatio/2);
      game.physics.arcade.enable(aliens);
       alien.body.gravity.y = 5000;
      alien.animations.add('alien_run', [0,1,2,3,4,5,6], 5, true);
      alien.animations.play('alien_run');
     alien.body.velocity.x=-700;
     alien.events.onOutOfBounds.add(goodbye, this);


 
     //console.log(alien.name+' '+alien.x)

}




    this.rocks_1.tilePosition.x -= 0.05;
    this.rocks_2.tilePosition.x -= 1;
    this.clouds_1.tilePosition.x -= 0.75; 
    this.clouds_2.tilePosition.x -= 0.55; 
    ground.tilePosition.x -= 15; 
     
     //player.animations.play('idle');
     // player.body.velocity.x = 150;




if(player.body.touching.down && !playerKilled && !shootPressed){

        player.animations.play('right');

    }

if(jumpPressed && player.body.touching.down && !playerKilled){

 //player.loadTexture('dude1',7);
 //if (!flipFlop) {
    player.animations.stop(null, true);
    player.animations.play('jump');
    //player.body.bounce.y = 2;
    player.body.velocity.y = -2200
    player.body.gravity.y = 6000;
    
   flipFlop = true;
   jumpPressed = false;

//}
}


if(shootPressed  && !playerKilled && kunaiCount > 0){

 //player.loadTexture('dude1',7);
 //if (!flipFlop) {
    player.animations.stop(null, true);
    player.animations.play('shoot');
    //player.body.bounce.y = 2;
    player.body.velocity.y = -800
   // player.body.gravity.y = 6000;
    
   //fire

   kunai= kunais.create(player.x+50, player.y+25, 'kunai');
   kunai.scale.setTo(scaleRatio/2 ,scaleRatio/2);     
      kunai.name = 'kunai' + game.time.now;
      //console.log(alien.name);
      kunai.checkWorldBounds = true;
       game.physics.arcade.enable(kunai);
       kunai.body.gravity.y = 300;
       //alien.body.checkCollision.right = false;

      //alien = game.add.sprite(game.world.width-500, game.world.height - 400, 'alien1');
      // kunai.scale.setTo(scaleRatio, scaleRatio);
      kunai.body.velocity.x = 2500;
      kunai.events.onOutOfBounds.add(deleteKunai , this);
      kunaiCount --;
      kunaiCountTxt.text = kunaiCount;



   flipFlop = true;
   shootPressed = false;

//}
}

if(!player.body.touching.down && !flipFlop){
    player.animations.play('idle');
}
     
//         if(flipFlop && player.body.touching.down){
        
//    //player.animations.play('right');
//    flipFlop=false;
    
// }
}


function goodbye(obj) { 
obj.kill(); 
 obj.destroy(); 


 console.log('alien killed');
    if(!playerKilled){
    //  Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;

}

}

function deleteKunai(obj) { 
obj.kill(); 
 obj.destroy(); 



}

function killPlayer (player, alien) {
    

    console.log('overlapx' + alien.body.overlapX);

    // Removes the star from the screen
    if(enableObstacleCollide){
      if(alien.body.overlapX < 110){
    playerKilled=true;
   // alien.body.velocity.x=0;
    player.animations.stop(null, true);
     player.animations.play('dead');
     enableObstacleCollide=false;
 }
 }
    //player.kill();


}

function killAlien (kunai, alien) {
    
 
kunai.destroy();
alien.destroy();

   score += 20;
    scoreText.text = 'Score: ' + score;

}

function destroySprite (sprite) {

console.log('sprite deleted');
    sprite.destroy();

}

function onJump(){

    jumpPressed = true;
}


function onShoot(){

    shootPressed = true;
}


var enableObstacleCollide = true;
var platforms;
var player;
var alien;
var kunai;
var score=0;
var jumpPressed = false;
var shootPressed=false;

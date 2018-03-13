var Credits = function(game) {};

Credits.prototype = {

  preload: function () {
    this.optionCount = 1;
    this.creditCount = 0;

  },

  addCredit: function(task, author) {
    var authorStyle = { font: '25pt TheMinion', fill: 'white', align: 'center', stroke: 'rgba(0,0,0,0)', strokeThickness: 4};
    var taskStyle = { font: '20pt TheMinion', fill: 'green', align: 'center', stroke: 'rgba(0,0,0,0)', strokeThickness: 4};
    var authorText = game.add.text(game.world.centerX, 900, author, authorStyle);
    var taskText = game.add.text(game.world.centerX, 950, task, taskStyle);
    authorText.anchor.setTo(0.5);
    authorText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    authorText.stroke = "rgba(0,0,0,0)";
    authorText.strokeThickness = 4;
    taskText.anchor.setTo(0.5);
    taskText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    taskText.stroke = "rgba(0,0,0,0)";
    taskText.strokeThickness = 4;
    game.add.tween(authorText).to( { y: -150 }, 15000, Phaser.Easing.Cubic.Out, true, this.creditCount * 2000);
    game.add.tween(taskText).to( { y: -50 }, 14000, Phaser.Easing.Cubic.Out, true, this.creditCount * 2000);
    this.creditCount ++;
  },

  addMenuOption: function(text, callback) {
    var optionStyle = { font: '20pt TheMinion', fill: 'white', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
    var txt = game.add.text(10, (this.optionCount * 60) + 450, text, optionStyle);

    txt.stroke = "rgba(0,0,0,0";
    txt.strokeThickness = 4;
    txt.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    var onOver = function (target) {
      target.fill = "#581845";
      target.stroke = "rgba(200,200,200,0.5)";

      txt.useHandCursor = true;
    };
    var onOut = function (target) {
      target.fill = "white";
      target.stroke = "rgba(0,0,0,0)";
      txt.useHandCursor = false;
    };
    //txt.useHandCursor = true;
    txt.inputEnabled = true;
    txt.events.onInputUp.add(callback, this);
    txt.events.onInputOver.add(onOver, this);
    txt.events.onInputOut.add(onOut, this);

    this.optionCount ++;
  },

  create: function () {
    this.stage.disableVisibilityChange = false;
    if (gameOptions.playMusic) {
      musicPlayer.stop();
      musicPlayer = game.add.audio('exit');
      musicPlayer.play();
    }
    var bg = game.add.sprite(0, 0, 'gameover-bg');
    this.addCredit('Game Music', 'Backstreet Hip Hop: Repaid Gateman');
    this.addCredit('Menu Music', 'Racing Menu: Eric Matyas');
    this.addCredit('SFX', 'soundbible.com');
    this.addCredit('Innapp Plugin', 'Jean-Christophe Hoelt (GitHub)');
    this.addCredit('RateUs Plugin', 'pushandplay (GitHub)');
    this.addCredit('AdMob Plugin', 'Raymond Xie  (GitHub)');
    this.addCredit('Build', 'Cordova');
    this.addCredit('Framework', 'Phaser');       
    this.addCredit('SFX', 'soundbible.com');    
    this.addCredit('Ninja Design', 'gameart2d.com');
    this.addCredit('Monsters & Background', 'Craftpix');
    this.addCredit('Game design and development', 'Rohan Prashanth');
    this.addCredit('Have Fun', 'Rate us on Play Store');  
    
    this.addMenuOption('<- Back', function (e) {
      game.state.start("GameMenu");
    });
    //game.add.tween(bg).to({alpha: 0}, 20000, Phaser.Easing.Cubic.Out, true, 40000);




  },

  update: function(){
      if(this.paused === true){
  console.log("Game Paused");
  menuMusic.pause();
 }else{
  menuMusic.resume();
 }
  },

   

};

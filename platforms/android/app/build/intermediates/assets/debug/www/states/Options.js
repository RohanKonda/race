var Options = function(game) {};

Options.prototype = {

  menuConfig: {
    //className: "inverse",

    startY: 260,
    startX: "center"
  },


  init: function () {
   
 
  },

   addOption: function(text, x,y,callback) {
    var optionStyle = { font: '15pt TheMinion', fill: 'white', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
    var txt = game.add.text(x, y, text, optionStyle);
    txt.anchor.setTo(0.5);
    txt.stroke = "rgba(0,0,0,0)";
    txt.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    txt.strokeThickness = 4;
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

    //this.optionCount ++;


  },
  create: function () {

this.stage.disableVisibilityChange = false;
    // var playSound = gameOptions.playSound,
    //     playMusic = gameOptions.playMusic;

     game.add.sprite(0, 0, 'options-bg');
      var titleStyle = { font: 'bold 40pt TheMinion', fill: '#581845', align: 'center'};
    var text = game.add.text(game.world.centerX, 100, "Endless Monsters", titleStyle);
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    text.anchor.set(0.5);
    // game.add.existing(this.titleText);
    // this.addMenuOption(playMusic ? 'Mute Music' : 'Play Music', function (target) {
    //   playMusic = !playMusic;
    //   target.text = playMusic ? 'Mute Music' : 'Play Music';
    //   musicPlayer.volume = playMusic ? 1 : 0;
    // });
    // this.addMenuOption(playSound ? 'Mute Sound' : 'Play Sound', function (target) {
    //   playSound = !playSound;
    //   target.text = playSound ? 'Mute Sound' : 'Play Sound';

    game.add.sprite(game.width-600, 160, 'buykunai1');
        game.add.sprite(game.width-600, 300, 'buykunai2');
            game.add.sprite(game.width-300, 160, 'buylives1');

    game.add.sprite(game.width-300, 300, 'buylives2');
        game.add.sprite(game.width-300, 300, 'buylives2');

       // game.add.sprite(game.width-450, 300, 'removeads');

        this.addOption('Buy',game.width-550, 240, function (e) {
      document.addEventListener('deviceready', this.initializeStore('buy_300_kunai','Buy 300 Kunai'), false);
    });

         this.addOption('Buy',game.width-550, 380, function (e1) {
          document.addEventListener('deviceready', this.initializeStore('buy_1000_kunai','Buy 1000 Kunai'), false);
      
    });

          this.addOption('Buy',game.width-250, 240, function (e2) {
            document.addEventListener('deviceready', this.initializeStore('buy_50_lives','Buy 50 Lives'), false);
      
    });

               this.addOption('Buy',game.width-250, 380, function (e3) {
      document.addEventListener('deviceready', this.initializeStore('buy_100_lives','Buy 100 Lives'), false);
    });


    


    




    this.addOption('<- Back',game.width-700,550, function () {
      game.state.start("GameMenu");
    });
  },


initializeStore: function (idtxt,aliastxt) {


             // Let's set a pretty high verbosity level, so that we see a lot of stuff  
                          // in the console (reassuring us that something is happening). 
         store.verbosity = store.DEBUG; 
        // We register a dummy product. It's ok, it shouldn't
        // prevent the store "ready" event from firing.  "noads"  is the current id                
        store.register({id: idtxt, alias: aliastxt, type:  store.CONSUMABLE});
                   // When everything goes as expected, it's time to celebrate!
      store.ready(function() { console.log("STORE READY"); }); 
       
       store.order(idtxt);
         store.error(function(error) {
        console.log('ERROR ' + error.code + ': ' + error.message);
    });                           // After we've done our setup, we tell the store to do  
                       // it's first refresh. Nothing will happen if we do not call store.refresh()  



        store.when(idtxt).approved(function(order) { 

            if(idtxt==='buy_50_lives'){
          lives = window.localStorage.getItem("lives_count_key");
          if(lives!=null)
          window.localStorage.setItem("lives_count_key", parseInt(lives)+50);  
        else
          window.localStorage.setItem("lives_count_key", 50);

          alert('50 Lives added');   

        }


             if(idtxt==='buy_100_lives'){
          lives = window.localStorage.getItem("lives_count_key");
          if(lives!=null)
          window.localStorage.setItem("lives_count_key", parseInt(lives)+100);  
        else
          window.localStorage.setItem("lives_count_key", 100);

          alert('100 Lives added');   

        }

             if(idtxt==='buy_300_kunai'){
          kunai = window.localStorage.getItem("kunai_count_key");
          if(kunai!=null)
          window.localStorage.setItem("kunai_count_key", parseInt(kunai)+300);  
        else
          window.localStorage.setItem("kunai_count_key", 300);

          alert('300 Knives added');   

        }

           if(idtxt==='buy_1000_kunai'){
          kunai = window.localStorage.getItem("kunai_count_key");
          if(kunai!=null)
          window.localStorage.setItem("kunai_count_key", parseInt(kunai)+1000);  
        else
          window.localStorage.setItem("kunai_count_key", 1000);

          alert('1000 Knives added');   

        }

          console.log("PURCHASE APPROVED");
        order.finish(); 
      
      });                               
      // store.when("remove_ads").owned(function() {
      // console.log("PRODUCT PURCHASED"); 
      
      //  // disableADS(); // custom function triggered  
      //  window.localStorage.setItem("remove_ads_key", "yes");     
      //  //ert('You have already purchased this item');       
      //    });     


     // store.refresh();  
  },

  update: function(){

        if(this.paused === true){
  console.log("Game Paused");
  menuMusic.pause();
 }else{
  menuMusic.resume();
 }
  }



};

Phaser.Utils.mixinPrototype(Options.prototype, mixins);

var GameMenu = function() {};


GameMenu.prototype = {

  menuConfig: {
    startY: 60,
    startX: game.world.centerX - 80,
  },

  init: function () {

            //preppare and load ad resource in background, e.g. at begining of game level
        

    this.titleText = game.make.text(game.world.centerX, 80, "Endless Monsters", {
      font: 'bold 40pt TheMinion',
      fill: '#581845',
      align: 'center'
    });     
    this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    this.titleText.anchor.set(0.5);
    this.optionCount = 1;
    
  },

   addMenuOption: function(text, callback) {
    var optionStyle = { font: '20pt TheMinion', fill: 'white', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
    var txt = game.add.text(game.world.centerX, (this.optionCount * 60) + 200, text, optionStyle);
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

    this.optionCount ++;


  },

  create: function () {

     this.stage.disableVisibilityChange = true;

    if(!menuMusic.isPlaying){

       menuMusic.loop=true;
        menuMusic.play();
      }

      this.stage.disableVisibilityChange = false;

game.add.sprite(0, 0, 'sky');
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

if( /(android)/i.test(navigator.userAgent) ) { 
//      AppRate.preferences = {
//   displayAppName: 'Endless Runner',
//   usesUntilPrompt: 5,
//   promptAgainForEachNewVersion: false,
//   inAppReview: true,
//   storeAppURL: {
   
//     android: 'market://details?id=com.kep.ninjarun.NinjaRun'
    
//   },
//   customLocale: {
//     title: "Would you mind rating us?",
//     message: "It won't take more than a minute and helps to promote our app. Thanks for your support!",
//     cancelButtonLabel: "No, Thanks",
//     laterButtonLabel: "Remind Me Later",
//     rateButtonLabel: "Rate It Now",
//     yesButtonLabel: "Yes!",
//     noButtonLabel: "Not really",
//     appRatePromptTitle: 'Do you like playing Endless Runner?',
//     feedbackPromptTitle: 'Mind giving us some feedback?'
//   },
//   callbacks: {
//     handleNegativeFeedback: function(){
//       window.open('mailto:rohanprashanthke@gmail.com','_system');
//     },
//     onRateDialogShow: function(callback){
//      // callback(1) // cause immediate click on 'Rate Now' button
//     },
//     onButtonClicked: function(buttonIndex){
//       console.log("onButtonClicked -> " + buttonIndex);
//     }
//   }
// };
// AppRate.promptForRating();  
}


   




   
   // game.add.sprite(0, 0, 'menu-bg');
    game.add.existing(this.titleText);

    this.addMenuOption('Start', function () {
      menuMusic.stop();
      game.state.start("Game");
    });
    this.addMenuOption('Buy Stuff', function () {
      
      game.state.start("Options");
    });

    if(window.localStorage.getItem("remove_ads_key") === null || !window.localStorage.getItem("remove_ads_key")==="yes"){
     this.addMenuOption('Remove Ads', function (e) {
  
     // window.localStorage.setItem("remove_ads_key", "yes");   
         // When purchase is approved show some logs and finish the transaction.
document.addEventListener('deviceready', this.initializeStore, false);



    });
 }


    this.addMenuOption('Credits', function () {
      game.state.start("Credits");
    });

    this.addMenuOption('Rate on Play Store', function () {
   AppRate.preferences = {
  displayAppName: 'Endless Runner',
  promptAgainForEachNewVersion: false,
  inAppReview: true,
  storeAppURL: {
   
    android: 'market://details?id=com.kep.ninjarun.NinjaRun'
    
  },
  customLocale: {
    title: "Would you mind rating us?",
    message: "It won't take more than a minute and helps to promote our app. Thanks for your support!",
    cancelButtonLabel: "No, Thanks",
    laterButtonLabel: "Remind Me Later",
    rateButtonLabel: "Rate It Now",
    yesButtonLabel: "Yes!",
    noButtonLabel: "Not really",
    appRatePromptTitle: 'Do you like playing Endless Runner?',
    feedbackPromptTitle: 'Mind giving us some feedback?'
  },
   callbacks: {
    handleNegativeFeedback: function(){
      window.open('mailto:rohanprashanthke@gmail.com','_system');
    },
    onRateDialogShow: function(callback){
     // callback(1) // cause immediate click on 'Rate Now' button
    },
    onButtonClicked: function(buttonIndex){
      console.log("onButtonClicked -> " + buttonIndex);
    }
  }
};


AppRate.promptForRating();

    });


     this.addMenuOption('Leaderboard', function () {
      document.addEventListener('deviceready', this.showHighScore, false);
      
    });



  },


 initializeStore: function () {


             // Let's set a pretty high verbosity level, so that we see a lot of stuff  
                          // in the console (reassuring us that something is happening). 
         store.verbosity = store.DEBUG; 
        // We register a dummy product. It's ok, it shouldn't
        // prevent the store "ready" event from firing.  "noads"  is the current id                
        store.register({id:    "remove_ads", alias: "Remove Ads", type:  store.NON_CONSUMABLE});
                   // When everything goes as expected, it's time to celebrate!
      store.ready(function() { console.log("STORE READY"); }); 
       
       store.order('remove_ads');
         store.error(function(error) {
        console.log('ERROR ' + error.code + ': ' + error.message);
    });                           // After we've done our setup, we tell the store to do  
                       // it's first refresh. Nothing will happen if we do not call store.refresh()  



        store.when("remove_ads").approved(function(order) { 

          window.localStorage.setItem("remove_ads_key", "yes");  

          console.log("PURCHASE APPROVED");
        order.finish(); 
      alert('Please restart the application to finish'); 
      });                               
      store.when("remove_ads").owned(function() {
      console.log("PRODUCT PURCHASED"); 
      
       // disableADS(); // custom function triggered  
       window.localStorage.setItem("remove_ads_key", "yes");     
       //ert('You have already purchased this item');       
         });     


     // store.refresh();  
  },

  update: function(){

    if(this.paused === true){
  console.log("Game Paused");
  menuMusic.pause();
 }else{
  menuMusic.resume();
 }

    this.back_land.tilePosition.x -= 0.05;
    this.back_land_2.tilePosition.x -= 1;
    this.cloud.tilePosition.x -= 0.75; 
   // this.clouds_2.tilePosition.x -= 0.55; 
    this.decor.tilePosition.x -= 1.3; 
    this.land.tilePosition.x -= 7; 
  },

  showHighScore: function () {
  


window.plugins.playGamesServices.isSignedIn(function (result) {
  // ‘result’ is a JSON object with a single boolean property of ‘isSignedIn’
  // {
  //    “isSignedIn” : true
  // }

     var data = {
  "leaderboardId" : "CgkIicixg90MEAIQAA"
};


  console.log("Do something with result.isSignedIn "+ result.isSignedIn);
  if(result.isSignedIn===false){
    console.log("before auth");
    window.plugins.playGamesServices.auth();
    console.log("after auth");
 window.plugins.playGamesServices.showLeaderboard(data); 
 
  }else{

   window.plugins.playGamesServices.showLeaderboard(data); 
  }

  

//window.plugins.playGamesServices.signout();

});






  }



};

Phaser.Utils.mixinPrototype(GameMenu.prototype, mixins);

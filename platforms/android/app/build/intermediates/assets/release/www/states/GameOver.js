var GameOver = function(game) {};





GameOver.prototype = {

  preload: function () {
    this.optionCount = 1;


  },

  addMenuOption: function(text, callback) {
    var optionStyle = { font: '30pt TheMinion', fill: 'white', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
    var txt = game.add.text(game.world.centerX, (this.optionCount * 80) + 300, text, optionStyle);
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
      gameMusic.stop();
    game.add.sprite(0, 0, 'gameover-bg');
    var titleStyle = { font: 'bold 60pt TheMinion', fill: '#581845', align: 'center'};
    var text = game.add.text(game.world.centerX, 100, "Game Over", titleStyle);
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    text.anchor.set(0.5);

    var titleStyle2 = { font: 'bold 25pt TheMinion', fill: '#386A18', align: 'center'};
    var text2 = game.add.text(game.world.centerX, 180, "Score: "+gameScore, titleStyle2);
    text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    text2.anchor.set(0.5);

    if(window.localStorage.getItem("high_score_key")!=null){
    var titleStyle3 = { font: 'bold 30pt TheMinion', fill: '#386A18', align: 'center'};
    var text3 = game.add.text(game.world.centerX, 240, "Highest Score: "+window.localStorage.getItem("high_score_key"), titleStyle2);
    text3.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    text3.anchor.set(0.5);
  }


console.log("remove_ads_key:"+window.localStorage.getItem("remove_ads_key"))
    if(window.localStorage.getItem("remove_ads_key") === null || !window.localStorage.getItem("remove_ads_key")==="yes"){
     this.addMenuOption('Remove Ads', function (e) {

     // window.localStorage.setItem("remove_ads_key", "yes");   
         // When purchase is approved show some logs and finish the transaction.
document.addEventListener('deviceready', this.initializeStore, false);


    });
 }
    this.addMenuOption('Play Again', function (e) {
      this.game.state.start("Game");
    });
    this.addMenuOption('Main Menu', function (e) {
      this.game.state.start("GameMenu");
    })




if( /(android)/i.test(navigator.userAgent) && (window.localStorage.getItem("remove_ads_key") === null || !window.localStorage.getItem("remove_ads_key")==="yes" )) { 
// show the interstitial later, e.g. at end of game level
if(AdMob){

  AdMob.showInterstitial();
}

}

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
      alert('You purchased the ad-free version! Please restart the application to finish.'); 
      });                               
      store.when("remove_ads").owned(function() {
      console.log("PRODUCT PURCHASED"); 
      
       // disableADS(); // custom function triggered  
       window.localStorage.setItem("remove_ads_key", "yes");     
       alert('You purchased the ad-free version! Please restart the application to finish.');       
         });     


      store.refresh();  
  }



};
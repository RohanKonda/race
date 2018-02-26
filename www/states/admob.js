var admobid={}
  if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
  interstitial: 'ca-app-pub-9764632418268157/2825715729'
  }
}

// use interstitial
prepareInterstitial(adId/options, success, fail);
showInterstitial();
isInterstitialReady(function(ready){ if(ready){ } });
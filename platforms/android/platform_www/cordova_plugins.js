cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device-orientation.CompassError",
    "file": "plugins/cordova-plugin-device-orientation/www/CompassError.js",
    "pluginId": "cordova-plugin-device-orientation",
    "clobbers": [
      "CompassError"
    ]
  },
  {
    "id": "cordova-plugin-device-orientation.CompassHeading",
    "file": "plugins/cordova-plugin-device-orientation/www/CompassHeading.js",
    "pluginId": "cordova-plugin-device-orientation",
    "clobbers": [
      "CompassHeading"
    ]
  },
  {
    "id": "cordova-plugin-device-orientation.compass",
    "file": "plugins/cordova-plugin-device-orientation/www/compass.js",
    "pluginId": "cordova-plugin-device-orientation",
    "clobbers": [
      "navigator.compass"
    ]
  },
  {
    "id": "cordova-plugin-admobpro.AdMob",
    "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
    "pluginId": "cordova-plugin-admobpro",
    "clobbers": [
      "window.AdMob"
    ]
  },
  {
    "id": "cc.fovea.cordova.purchase.InAppBillingPlugin",
    "file": "plugins/cc.fovea.cordova.purchase/www/store-android.js",
    "pluginId": "cc.fovea.cordova.purchase",
    "clobbers": [
      "store"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification_android",
    "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-globalization.GlobalizationError",
    "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
    "pluginId": "cordova-plugin-globalization",
    "clobbers": [
      "window.GlobalizationError"
    ]
  },
  {
    "id": "cordova-plugin-globalization.globalization",
    "file": "plugins/cordova-plugin-globalization/www/globalization.js",
    "pluginId": "cordova-plugin-globalization",
    "clobbers": [
      "navigator.globalization"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-apprate.AppRate",
    "file": "plugins/cordova-plugin-apprate/www/AppRate.js",
    "pluginId": "cordova-plugin-apprate",
    "clobbers": [
      "AppRate"
    ]
  },
  {
    "id": "cordova-plugin-apprate.locales",
    "file": "plugins/cordova-plugin-apprate/www/locales.js",
    "pluginId": "cordova-plugin-apprate",
    "runs": true
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-badge.Badge",
    "file": "plugins/cordova-plugin-badge/www/badge.js",
    "pluginId": "cordova-plugin-badge",
    "clobbers": [
      "cordova.plugins.notification.badge"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
    "pluginId": "cordova-plugin-local-notification",
    "clobbers": [
      "cordova.plugins.notification.local"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification.Core",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification-core.js",
    "pluginId": "cordova-plugin-local-notification",
    "clobbers": [
      "cordova.plugins.notification.local.core",
      "plugin.notification.local.core"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification.Util",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification-util.js",
    "pluginId": "cordova-plugin-local-notification",
    "merges": [
      "cordova.plugins.notification.local.core",
      "plugin.notification.local.core"
    ]
  },
  {
    "id": "cordova-plugin-play-games-services.PlayGamesServices",
    "file": "plugins/cordova-plugin-play-games-services/www/play-games-services.js",
    "pluginId": "cordova-plugin-play-games-services",
    "clobbers": [
      "window.plugins.playGamesServices"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-device-orientation": "1.0.7",
  "cordova-plugin-extension": "1.5.4",
  "cordova-plugin-admobpro": "2.31.1",
  "cc.fovea.cordova.purchase": "7.1.2",
  "cordova-plugin-dialogs": "2.0.1",
  "cordova-plugin-globalization": "1.0.9",
  "cordova-plugin-inappbrowser": "2.0.2",
  "cordova-plugin-apprate": "1.3.0",
  "cordova-plugin-device": "2.0.1",
  "cordova-plugin-badge": "0.8.7",
  "cordova-plugin-local-notification": "0.9.0-beta.2",
  "cordova-plugin-play-games-services": "1.1.0"
};
// BOTTOM OF METADATA
});
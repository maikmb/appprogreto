cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.hutchind.cordova.plugins.streamingmedia.StreamingMedia",
    "file": "plugins/com.hutchind.cordova.plugins.streamingmedia/www/StreamingMedia.js",
    "pluginId": "com.hutchind.cordova.plugins.streamingmedia",
    "clobbers": [
      "streamingMedia"
    ]
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
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/ios/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "cordova.exec"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "cordova-plugin-x-socialsharing.SocialSharing",
    "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
    "pluginId": "cordova-plugin-x-socialsharing",
    "clobbers": [
      "window.plugins.socialsharing"
    ]
  },
  {
    "id": "cordova-sqlite-storage.SQLitePlugin",
    "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
    "pluginId": "cordova-sqlite-storage",
    "clobbers": [
      "SQLitePlugin"
    ]
  },
  {
    "id": "ionic-plugin-keyboard.keyboard",
    "file": "plugins/ionic-plugin-keyboard/www/ios/keyboard.js",
    "pluginId": "ionic-plugin-keyboard",
    "clobbers": [
      "cordova.plugins.Keyboard"
    ],
    "runs": true
  },
  {
    "id": "card.io.cordova.mobilesdk.CardIO",
    "file": "plugins/card.io.cordova.mobilesdk/www/cdv-plugin-card-io.js",
    "pluginId": "card.io.cordova.mobilesdk",
    "clobbers": [
      "CardIO"
    ]
  },
  {
    "id": "com.paypal.cordova.mobilesdk.PayPalMobile",
    "file": "plugins/com.paypal.cordova.mobilesdk/www/cdv-plugin-paypal-mobile-sdk.js",
    "pluginId": "com.paypal.cordova.mobilesdk",
    "clobbers": [
      "PayPalMobile"
    ]
  },
  {
    "id": "cordova-plugin-music-controls.MusicControls",
    "file": "plugins/cordova-plugin-music-controls/www/MusicControls.js",
    "pluginId": "cordova-plugin-music-controls",
    "clobbers": [
      "MusicControls"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com.hutchind.cordova.plugins.streamingmedia": "0.1.4",
  "cordova-plugin-device": "2.0.1",
  "cordova-plugin-inappbrowser": "2.0.2",
  "cordova-plugin-ionic-keyboard": "2.0.5",
  "cordova-plugin-ionic-webview": "1.1.19",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-whitelist": "1.3.3",
  "es6-promise-plugin": "4.2.2",
  "cordova-plugin-x-socialsharing": "5.4.0",
  "cordova-sqlite-storage": "2.3.0",
  "ionic-plugin-keyboard": "2.2.1",
  "card.io.cordova.mobilesdk": "2.1.0",
  "com.paypal.cordova.mobilesdk": "3.5.0",
  "cordova-plugin-music-controls": "2.1.4"
};
// BOTTOM OF METADATA
});
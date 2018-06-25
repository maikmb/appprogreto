cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
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
  "es6-promise-plugin": "4.2.2",
  "cordova-plugin-x-socialsharing": "5.4.0",
  "card.io.cordova.mobilesdk": "2.1.0",
  "com.paypal.cordova.mobilesdk": "3.5.0",
  "cordova-plugin-music-controls": "2.1.4"
};
// BOTTOM OF METADATA
});
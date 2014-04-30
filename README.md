TechForum 2014 Ionic - Atos Worldline
==========================

_A Mobile Application for Worldline TechForum 2014_

**Service :** SDCO - Software Engineering - Web & Mobile Framework

**Technology :** Cordova - HTML5 - CSS3 - JavaScript - AngularJS

**FrameWork :** Ionic

**Developer :** Maxime Gens

> **Warning**

> Ionic Framework doesn't work correctly with Android version below 4.0.
> Use a natif Android Application TechForum 2014 for these versions 

> [Here a link to futur android app](https://github.com/got5/techforum-ionic)

## To install development development and production environments

Install a follow components

Use "**sudo**" if you buil with Mac and Linux

**Node.js**

[http://nodejs.org/](http://nodejs.org/)

_Configure NPM proxy_
```bash
npm config set proxy http://[proxy]:[PORT]
npm config set https-proxy http://[proxy]:[PORT]
```

**Cordova**
```bash
npm install -g cordova
```
**Bower**
```bash
npm install -g bower
```
_Configure Bower proxy_

Add in .bowerrc
```bash
"proxy":"http://[proxy]:[PORT]",
"https-proxy":"http://[proxy]:[PORT]"
```

**Grunt**
```bash
npm install -g grunt-cli
```

Then run:

```bash
$ cd dev
$ npm install
$ bower install
$ cd ..
```

The development environment is now installed

***

**To install prod environnement**

If you use mac ou linux
```bash
chmod u+x script.sh
perl -i -pe 'y|\r||d' script.sh
```

```bash
$ sh script
```

**Add cordova plugin**
```bash
$ cordova plugin add org.apache.cordova.splashscreen
$ cordova plugin add org.apache.cordova.geolocation
$ cordova plugin add org.apache.cordova.network-information
```

### To build for Android
```bash
$ cordova platform add android
Add Splascreen and Icon
$  cp -r dev/res/android/res platforms/android/
$ cordova build android
To launch a emulator (you must have Android ADB and a AVD (Android virtual Device)
$ cordova emulate android
or to launch in your phone
$ cordova run android
```

### To build for IOS
```bash
$ cordova platform add ios
Add Splascreen and Icon
$  cp -r dev/res/ios7/icons/ platforms/ios/TechForum\ 2014/Images.xcassets/AppLcon.appiconset
$  cp -r dev/res/ios7/splash platforms/ios/TechForum\ 2014/Images.xcassets/launchImage.launchimage
To launch a emulator (update xcode before)
$ cordova build ios
$ cordova emulate ios
```


_If you have a problem to install Cordova plugin_

Download the git of the plugin using the zip download of git site
* [https://github.com/apache/cordova-plugin-splashscreen](https://github.com/apache/cordova-plugin-splashscreen)
* [https://github.com/apache/cordova-plugin-geolocation](https://github.com/apache/cordova-plugin-geolocation)
* [https://github.com/apache/cordova-plugin-network-information](https://github.com/apache/cordova-plugin-network-information)

Extract the zip to some path
```bash
cordova plugin add [pathtotheextractedplugingit]cordova-plugin-geolocation-master
cordova plugin add [pathtotheextractedplugingit]cordova-plugin-splashscreen-master
```

## To test in Development Environments

Install Ripple emulator for Google Chrome

[https://chrome.google.com/webstore/detail/ripple-emulator-beta/geelfhphabnejjhdalkjhgipohgpdnoc](https://chrome.google.com/webstore/detail/ripple-emulator-beta/geelfhphabnejjhdalkjhgipohgpdnoc)

Launch server
```bash
$ cd www
$ node server.js
```

Application is now running in :

[localhost:3000](localhost:3000)
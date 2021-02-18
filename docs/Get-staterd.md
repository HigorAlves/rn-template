# Choose a bundle identifier and rename project

The bundle ID resource represents the app's unique identifier that you can register, modify, and delete. You need a bundle ID before you can assign capabilities with the Bundle ID Capabilities resource or create a provisioning profile with the Profiles resource.

Usually this is `com.company.app`, make sure to be something like this for best pratices purpose. Use common sense to think of an identifier that is inside your domain, always pick your reversed domain cause if you dont own then you can lose your app or get banned.

Now we need to rename the app and the bundle identifier:

```sh
npx react-native-rename <APP-NAME> -b <BUNDLE-IDENTIFIER>
```

For iOS you need to go inside Xcode and change the bundle identifier. (Apple being Apple)

# App Icon

We have diferent Schemes for iOS and diferent Build variants for android, so we need to generate app icons for all schemas and buildtypes we'll call then types for now on just to simplify.

We need to generate 3 types of icons on e for `staging`, `beta` and `release`, it's a pratice to change color, but you can change anything you want, this images needs to be 1024x1024 cause we gona use a CLI tool to help us in the process.

## iOS

https://appicon.co/

## Android

https://romannurik.github.io/AndroidAssetStudio/index.html

# Splash Screen

The splash screen was born out of a requirement for apps to spend a few seconds setting up before the user can get moving. No matter how fast your app is at starting up, there’s almost always a few small tasks that either the operating system, or your own app code, need to do before the user can start tapping buttons and navigating screens.

## iOS

## Android

https://medium.com/@ssaurel/create-a-splash-screen-on-android-the-right-way-93d6fb444857


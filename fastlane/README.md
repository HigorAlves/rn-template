fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew install fastlane`

# Available Actions
### bump
```
fastlane bump
```
Bump build numbers, and set the version to match the pacakage.json version.
### setup
```
fastlane setup
```


----

## Android
### android staging
```
fastlane android staging
```
Android: Stagging app version
### android beta
```
fastlane android beta
```
Android: Beta app version
### android release
```
fastlane android release
```
Android: Release app version

----

## iOS
### ios create
```
fastlane ios create
```
iOS: Create App on apple store
### ios certificates
```
fastlane ios certificates
```
iOS: Fetch certificates and provisioning profiles.
### ios staging
```
fastlane ios staging
```
iOS: Build the Stagging app version
### ios beta
```
fastlane ios beta
```
iOS: Build the Beta app version
### ios release
```
fastlane ios release
```
iOS: Build the Release app version

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).

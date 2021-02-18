# Fastlane iOS Configuration

The easiest way to build and release mobile apps.
fastlane handles tedious tasks so you don’t have to.

![fastlane logo](https://docs.fastlane.tools/img/fastlane_text.png)

The main reason is that you no longer need to worry about configuring the deployment environment for each team member. Even if _match_ makes it much easier, you would still have to share secrets and certificates with your team, configure Xcode accounts, etc. The developer doesn't even need to have a mac to release a new iOS version! Not only that, but anyone in the team will be able to deploy the app (reducing the bus factor of the project).

The last is that with fastlane you would need to run only 2 commands to deploy (e.g. `fastlane ios beta` and `fastlane android beta`), but with GitHub actions, you will need 0 commands, which is even better.

GitHub includes 2000 minutes of GitHub action runtime per month for free plans and this number grows in paid plans. Let's say each deploy takes 40 minutes. That's 50 deployments per month! It's a deployment machine for free.

## First things First

To be able to generate the certificates and app on the Apple Store, we need to install fastlane and change some files :D

- Setup Xcode for fastlane: `xcode-select --install`
- RubyGems for Linux/Windows: `sudo gem install fastlane -NV`
- Homebrew for Macos: `brew install fastlane`

It's recommended to export this strings from your bash:

```sh
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
```

## Create the Repos

After use this template repo inside your brand new one, you will need to create another repo to set all the apple certs that the apple needs, we recommend that the new repo follow this name `[project-name]-certs`, with that done, let's do it!

**We`ll enter now in a world of magic and fantasy so be aware! Below this line will be dragons!**

Lets change some files here, by now you already know the basics about the app, here some information that **YOU** need to know to proceed:

- The bundle identifier of your app (aka com.natahouse.appname)
- Apple Developer Account
- Developer Portal Team ID (Natahouse Team is: NYXB3D9CK6)
- App name
- SKU, it's a good pratice to use the same as bundle identifier
- Default language (en-US)
- Services that you use, [here is a list](https://docs.fastlane.tools/actions/produce/#parameters)

> The purpose of having a SKU is so that you can tie the app sales to whatever internal SKU number that your accounting is using.

With that in mind let's go inside the files.

### Metadata

Is need to populate the metadata folder, just use the name of the archives and populate then according. If your app is multiple languages just copy the en-US and rename for the languages that you want, for example:

```sh
en-US/
pt-BR/
```

and populate the files inside.

### Appfile

Here you'll need to modify the `app_identifier`, `apple_dev_portal_id` and `team_id`, if you are using ours CI account just modify the `app_identifier`.

### Deliverfile

Just change all things inside `app_review_information`

### Gymfile

Inside that just change the `workspace` and `output_name`

### ios.Fastfile

Here ll be more complex to change but don't be afraid go with patience:

- `username`: your Apple ID, if using Nata Account don't need to change.
- `app_identifier`: your bundle identifier.
- `sku`: it's a good pratice to use the same as bundle identifier or just use UUID.
- `language`: Default language is en-US, remember to change inside _Xcode_ too.
- `enable_services`: Services that you use, [here is a list](https://docs.fastlane.tools/actions/produce/#parameters).
- `apple_id`: To your apple id, don't enter in panic this is not available yet just wait.
- `path`: Path for you code.

### Matchfile

- `git_url`: your git repo that you create just to save all the certs.
- `app_identifier`: your bundle identifier.
- `username`: your Apple ID, if using Nata Account don't need to change.
- `readonly`: set to `false` just when you need to generate the certs, after that set to `true`.

```sh
      .
 .>   )\;`a__
(  _ _)/ /-." ~~
 `( )_ )/
  <_  <_ Dragon of Safety, always remember to re-check your steps!
```

## Create new iOS app on App Store Connect and Apple Developer Portal

You can run the following to create your app:

```sh
bundle exec fastlane ios create
```

after that go to your [Apple Store Connect](https://appstoreconnect.apple.com/apps) and get the `Apple ID` of your app and populate that inside the `ios.Fastfile`

## Generate new certificates and profiles

You can run the following to generate new certificates and profiles:

```sh
bundle exec fastlane ios certificates
```

You'll be prompt to insert some data, and a password, this password is the `MATCH_PASSWORD`

after that just confirm that your certification repo is populate with then, and go to your `fastlane/Matchfile` and change the option `readonly` to `true`.

---

## Setup Github Actions

To add a GitHub action that runs your fastlane configuration, we will need to:

- Add secrets to the GitHub repo
- Adjust the fastlane configuration to run on a cloud instance
- Create the GitHub Action workflow

## Configuring the secrets

We will add those secret variables to the repository secrets. You will find them in GitHub under "Settings > Secrets".

These are the required secrets:

- `FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD`: an application specific password
- `FASTLANE_PASSWORD`: The AppleId account password.
- `FASTLANE_USER`: The AppleId account email.
- `MATCH_PASSWORD`: Encryption password for the match repository.
- `SIGNING_IDENTITY`: Code signing identity to use. e.g. `Apple Distribution: Higor Alves (NYXB3D9CK6)`. See the certificate name in Keychain Access.
- `SSH_KEY`: Git ssh private key in base 64.
- `SSH_KEY_PASSWORD`: Your ssh key base 64 password.

---

### How to get `FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD`

First we need to access [Apple ID](https://appleid.apple.com/account/manage), after you make the login into the ci account go to the option `Security -> APPS SPECIFIC PASSWORDS` put some name to that and click on confirm, it will prompt something like that `xohx-fyxk-yawt-flra` save this on the repo secrets.

> OBS: YOU DONT NEED TO DISABLE YOUR 2FA

### How to transform SSH KEY to BASE64

We need this key to allow `match` clone ours `certs repo` and use them inside the CI.

In your machine you'll need `gpg` installed, if you dont have just go on google and see how to install for your operational system. After that you also need to configure your `ssh key` into your github profile, just [follow this example](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

Lets use the `gpg` to make the base64 code.

- `gpg -c --armor path/to/your/ssh/key` Encrypt the Keystore on the client safely

This will prompt for a passphrase which you have to enter. The output is a `ssh_key.asc` file which contains the Base64 string.

- Copy the Base64 string into a GitHub Action secret as `SSH_KEY`
- Copy the password that you used into a GitHub Action secret as `SSH_KEY_PASSWORD`

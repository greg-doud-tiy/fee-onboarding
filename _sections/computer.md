---
title: Computer
layout: default
category: prework
order: 7
---

# Computer Setup

## Hardware

All students must bring their own MacBook laptop. Your MacBook should have a
minimum of 4 GB of RAM and 128 GB of hard drive space. Those are minimum specs,
but I REALLY recommend getting 8 GB of RAM.

Here are the current
[MacBook Air models](http://www.apple.com/macbook-air/specs.html) and
[MacBook Pro models](http://www.apple.com/macbook-pro/specs-retina/).

Your MacBook MUST be running OS X El Capitan. Both are free
upgrades from the App Store.

Do not go with the new, skinny 12" Retina MacBooks.  Their processor will be too
sluggish in a year or two.

There is no commercial software required for the class.

## Software

### OSX El Capitan

You'll need to install OS X El Capitan if your Mac didn't have it pre-installed or you haven't upgraded already.

1.  Download the El Capitan upgrade from the Apple Store: [download here](https://itunes.apple.com/us/app/os-x-el-capitan/id1018109117?mt=12).
2.  You'll need to sign in to your Mac's 'App Store' with your [Apple ID](https://appleid.apple.com/).
3.  Double-click "Install OS X El Capitan" to begin installation.
*WARNING*: The OS X upgrade can take a bit of time to complete and will require a restart. Plan on doing this in the evening or over a lunch break.

### Additional Software

As soon as possible after receiving your Mac, run through the following steps.
If you've done a lot of your own configuration, some of these steps may have to
change.  If you run into ANY PROBLEMS, send me an e-mail at: [{{site.instructor_email}}](mailto:{{ site.instructor_email }})

* Install Atom
  * Download Atom from [the Atom website](https://atom.io/).
  * Install and run it.  If you're not familiar with Mac installations, [read more here](mac_installations.html).
  * Click on the "Atom" option in your menu bar (all the way in the upper-left of your screen) and choose "Install Shell Commands."

** Atom is not the best editor, but it has great defaults, if you are already using an editor stick with it, alternatives, are Sublime Text, Textmate, and MacVim **

* Install Google Chrome
  * Download Chrome from [the Chrome download page](https://www.google.com/intl/en/chrome/browser/).
  * Install and run it.  This install will work a little differently from Atom, so if you get confused, [read more here](mac_installations.html).

* Install XCode Command Line Tools
  * Open up Terminal.  If you're not familiar with opening applications on your Mac, [read this page, especially the last section](mac_installations.html).
  * Go to the [Apple Developer Downloads site](https://developer.apple.com/downloads/).
  * `xcode-select --install`

* Install Homebrew
  * Open up Terminal (or if you've still got it open, keep using it).
  * Run ```ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```
  * Run `brew doctor`

* Install rbenv & ruby-build
  * Open up Terminal (or if you've still got it open, keep using it).
  * `brew install ruby-build rbenv`
  * `echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile`

* Install ruby 2.3.0
  * Close and reopen Terminal.
  * `rbenv install 2.3.0`
  * Go and get some coffee. That last one will take a while.
  * `rbenv global 2.3.0`
  * Close and reopen Terminal.
  * `gem install pry`
  * Run `which ruby`. If you see a path starting with `/usr/bin/`, get a TA or instructor to help you.

<!-- * Install nodejs
  * In Terminal
  * `brew install nodejs` -->

* Install git
  * In Terminal
  * `brew install git`
  * `git config --global push.default simple`
  * `git config --global credential.helper osxkeychain`

* Install Heroku Toolbelt
  * Download the Toolbelt from [this page](https://toolbelt.heroku.com/).
  * Run it and follow the install steps.
  * Open Terminal and run `heroku login`.  Enter your Heroku credentials when asked.

<!-- * Create an SSH key (__do not__ give it a password when it asks for one)
  * `ssh-keygen`
  * Press enter at the first prompt to stick with the default file name.
  * Press enter at the second prompt to give it no password. -->

* Add the following applications to your Dock
  * Atom
  * Chrome
  * Terminal

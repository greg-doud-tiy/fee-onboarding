---
title: Computer
layout: default
category: prework
order: 7
---

## Computer Setup <time class='estimate'>3-6 hours</time>

### Hardware

All students must bring their own Windows laptop. Your laptop should have a minimum of 4 GB of RAM and 256 GB of hard drive space. Those are minimum specs, but I **strongly** recommend getting 8 GB of RAM.

Here are the current [Dell Inspiron 15 5000 models](http://www.dell.com/en-us/shop/productdetails/inspiron-15-5567-laptop) and [Dell XPS 15 models](http://www.dell.com/en-us/shop/productdetails/xps-15-9550-laptop). There is no requirement that you purchase a Dell laptop, but these are the recommended specs if you choose to purchase one from another manufacturer. Your laptop MUST be running Windows 10.

Do not go with any of the Chromebook models.

### Operating System

If you are purchasing a new laptop (recommended if possible), it should come with Windows 10 pre-installed.

If you have an existing laptop you intend to use and it meets the hardware specifications, you may need to purchase a copy of Windows 10 and install it yourself. Refer to the Microsoft.com.

### Additional Software

_There is no paid software required for the class._ However, there are a number of software products that need to be installed.

As soon as possible after receiving your laptop, run through the following steps. If you've done a lot of your own configuration, some of these steps may have to change. If you run into **any problems**, send me an e-mail at: [{{site.instructor_email}}](mailto:{{ site.instructor_email }}) and I will try to help.

#### Install Visual Studio 2015 Community Edition 

You need to download and install [Visual Studio 2015 Community](https://www.visualstudio.com/vs/community/). It is the free version of the integrated development ennironment used for C# development.

#### Install SQL Server 2016 Express & SQL Server Management Studio (SSMS)
SQL Server is the database that will be used in the class. This is the free development version that will run right on your laptop. SSMS is the management tool that is used to work with SQL Server.

You can download and install it here [SQL Server 2016 Express](https://www.microsoft.com/en-us/download/details.aspx?id=52679) and [SQL Server Management Studio](http://go.microsoft.com/fwlink/?linkid=832812)

#### Install a code editor

You will need a program specifically designed for software development. We typically call this an IDE (an Integrated Development Environment).

Sublime is not necessarily the best editor, but it has great defaults. If you are already using an editor and are comfortable with it then you may continue to use it. However, there may be times in class when I suggest a shortcut or editor configuration option that may be different for you! 

This link will download the install pacckage and start the installation process [Sublime Text 3](https://download.sublimetext.com/Sublime%20Text%20Build%203126%20x64%20Setup.exe)

#### Install Google Chrome

While the end users of our applications will use a variety of browsers, I have found that Google Chrome is currently the best option for developing (and testing) our front end applications.

  1. Download Chrome from [the Chrome download page](https://www.google.com/intl/en/chrome/browser/).
  1. Install and run it.
  1. Optionally, you may want to set Chrome as your [default browser](https://support.google.com/chrome/answer/95417?hl=en).

#### Install Git

Git is a source control management (SCM) system which will be explained more in the class. Download it here. [Git for Windows 64-bit](https://github.com/git-for-windows/git/releases/download/v2.10.2.windows.1/Git-2.10.2-64-bit.exe). It has a command line interface (CLI). It will put an icon on your desktop to get to the command line interface. After it is installed, run the folloing commands:

  1. Run:  
  `git --version` to see that you have it installed (you should see a version number print out)
  1. Run:  
  `git config --global push.default simple`
  1. Run:  
  `git config --global credential.helper osxkeychain`

---
title: Educate
layout: default
order: 3
---

## Ruby

If you haven't completed it already, [Codecademy](http://www.codecademy.com) has a Ruby course that you should walk through to familiarize yourself with the concepts.

[http://www.codecademy.com/en/tracks/ruby](http://www.codecademy.com/en/tracks/ruby)

## HTML/CSS

HTML/CSS will be covered in the course, but not to the same depth as Ruby and Rails, so it would benefit you extremely to be familiar with building websites.

[http://www.codecademy.com/en/tracks/web](http://www.codecademy.com/en/tracks/web)

## The Command Line

The command line is an interface to the internals of your computer, as opposed to the graphical user interface (GUI) that we commonly use. We will be using the command line _extensively_ in our class, but the point of this prework is not to be an expert, just to start to get comfortable.

Especially if you've never used the command line before, you may want to go through these more than once. Make sure not just to read/watch, but really dive in and use the commands that you learn about.

Read and practice the following:

1. [Command Line](http://skillcrush.com/2012/12/03/command-line-2/) at SkillCrush
2. [Command Line Basics](http://blog.teamtreehouse.com/command-line-basics) at Treehouse

### Supplemental

Further reading and practice:

1. [The Command Line Crash Course](http://cli.learncodethehardway.org/book/)
2. [A Command Line Primer for Beginners](http://lifehacker.com/5633909/who-needs-a-mouse-learn-to-use-the-command-li…)

## Git

> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

It is a command line tool that we will be using for every project we do in class. Again, the objective is not to become an expert before the class, but just to start to get comfortable.

### Supplemental

If you want to spend some more time with git, [Git Immersion](http://gitimmersion.com/) is a great resource.

## GitHub

GitHub is a web-based hosting and communication service for software development projects that uses the Git revision control system.

1. Sign up for a [Github](https://github.com/) account, if you don't have one already.
2. Make sure to add a profile picture and your full name, since this will help me learn your name. The _username_ you choose does not need to reflect your real name; if you have a handle you already use (for Twitter, IM, IRC, etc.) feel free to use that.
3. Email [me](mailto:{{ site.instructor_email }}) the username you choose so that I can get you added to the group we'll be using for class.
4. Complete [try.github.io](https://try.github.io/).

### Supplemental

Check out the [GitHub Guides](https://guides.github.com/) if you want to learn more about using GitHub prior to class.

## Wrapping up

{% if site.prework_survey_2 %}

<a class='btn' href='{{site.prework_survey_2}}'>Complete the Final Survey</a>

{% else %}
__Compose an email to [me](mailto:{{ site.instructor_email }}) answering the following questions:__

  * What is program Control Flow? How many shapes can it take?
  * What are the differences (in Ruby) between an Array and a Hash?
  * Go to http://gist.github.com. Create a new gist which contains Ruby code. This code should: (a) use at least one variable; (b) use at least one loop; (c) use at least one method written by you. Paste the link to this gist in as the answer to this question, then describe what your code does in English.
  * Copy this Ruby code out to a file on your file system. Save it, run it to make sure that it works, and commit it to a new git repository. Push that repository up to GitHub and paste a link to your GitHub repository here.
  * Write a set of command line commands which accomplish the following (in this order): (a) change directory to your home directory; (b) look at the contents of your home directory; (c) make a new directory called "iron_yard" inside your home directory; (d) copy the file called ".bash_profile" into the new "iron_yard" directory; (e) change into that directory; (f) remove the copy of the ".bash_profile" file within "iron_yard".
  * When can merge conflicts occur in git?
  * Write a CSS selector to find all <span> HTML elements with a class of "important" which happen to be inside of any <h3> elements.
  * Which part of the prework did you like the MOST?
  * Which part of the prework did you like the LEAST?

{% endif %}

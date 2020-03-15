[![Build Status](https://travis-ci.org/davmcgregor/news-summary-challenge.svg?branch=master)](https://travis-ci.org/davmcgregor/news-summary-challenge)

### [Makers Academy](http://www.makersacademy.com) - Week 7 Wekeend Challenge 

# [News Summary](http://fortunate-knowledge.surge.sh/) 📰

#### Technologies: Javascript, HTML, CSS, TravisCI, Surge

[Task](#Task) |  [Installation Instructions](#Installation) | [User Stories](#User_Stories) | [Mockups](#Mockups) | [Further improvements](#Further_Improvements)

![screenshot](/images/screenshot.jpg)

This app is hosted at: http://fortunate-knowledge.surge.sh/

## <a name="Task">The Task</a>

Your single page web app will grab all the headlines from the Guardian newspaper API and display them on a page. Clicking on a headline will show a summary of the article. You'll write your code in frontend JavaScript, CSS and HTML. You won't use Ruby or backend JavaScript.

This challenge is the week 7 weekend coding challenge at [Makers Academy](https://github.com/makersacademy).

## <a name="Installation">Installation Instructions</a>

Follow these instructions to use the news app and install node http server:

```
$ git clone https://github.com/davmcgregor/news-challenge-js
$ cd news-challenge-js
$ npm install http-server -g
$ http-server
```
To view the app navigate to: http://localhost:8080/

Test were written using test helper code in spec/JavaScriptTesting.js

## <a name="User_Stories">User Stories</a>

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```
```
As a busy politician
I can click a link to see the original news article
So that I can get an in depth understanding of a very important story
```
```
As a busy politician
I can see a summary of a news article
So I can get a few more details about an important story
```
```
As a busy politician
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at
```
```
As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks
```
```
As a busy politician
I can see whizzy animations in the app
To make my news reading more fun
```

## <a name="Mockups">Mockups</a>

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

## <a name="Further_Improvements">Further Improvements</a>

* Add a show/hide feature for article summaries: https://stackoverflow.com/questions/43755677/change-text-show-hide-on-button-click-not-working
* Additional styling
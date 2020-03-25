# Rick and morty web app

![Schermafbeelding 2020-03-13 om 13 37 42](https://user-images.githubusercontent.com/47485018/76621549-f23a5980-652f-11ea-84c5-71bb76657664.png)


# [Live demo](https://total-rickall.herokuapp.com/)

# Table of contents

* ### [Introduction](https://github.com/CountNick/progressive-web-apps-1920#introduction-1)
* ### [API]()
* ### [Progressive enhancement]()
* ### [Service-worker](https://github.com/CountNick/progressive-web-apps-1920#service-worker-1)
* ### [Critical rendering path](https://github.com/CountNick/progressive-web-apps-1920#critical-rendering-path-1)
* ### [API](https://github.com/CountNick/progressive-web-apps-1920#api-used)
* ### [Features](https://github.com/CountNick/progressive-web-apps-1920#features-1)
* ### [Installation](https://github.com/CountNick/progressive-web-apps-1920#installation-1)

## Introduction

This a PWA version of the app i made for the Web app from scratch course.

## API used

[Rick and morty API](https://rickandmortyapi.com/)

### Downsides

* The api has a maximum call rate of 100000 requests per day, this seems like a lot but when you get caught in a infinite loop you might exceed your request rate very quickly(which has happened to me)

* The information on characters is a little shallow. For example: there are no bio's for the characters and no images for the planets

## Progressive enhancement

When a user starts typing the name of a character the results are updated live on the page:

![enhancement](https://user-images.githubusercontent.com/47485018/77454748-3fa0ab80-6df9-11ea-9e38-effc1ce86e47.gif)


When javascript isn't supported users can sstill search for a charcter by clicking the searchbutton:

![989efa439a596eadd8a1a9b405e33536](https://user-images.githubusercontent.com/47485018/77454992-94dcbd00-6df9-11ea-9eee-04d91f0b5051.gif)




## Service-worker

### Jobstories:

When a user visits the app when his or her device is offline, he or she wants to know their device is offline.

When they know they are offline they want to be able to visit pages or content that has been saved in cache.

Important things to keep in cache:

* Home page
* CSS
* Offline page

## Critical rendering path

### Runtime responisveness

First audit without js and css minification:

![Without](https://user-images.githubusercontent.com/47485018/77414717-c20d7900-6dc1-11ea-80d7-7b9c5d0c5601.png)

After js and css minification:

![With minification](https://user-images.githubusercontent.com/47485018/77414928-06991480-6dc2-11ea-9d67-e0d74d4341a3.png)

After minifying the javascript and css the Max Potential First Input Delay was drastically improved. Without the minification this took 210 ms, by minifying the js and css this was improved to 70 ms

After Gzip compression:

![Gzip and minification](https://user-images.githubusercontent.com/47485018/77415000-203a5c00-6dc2-11ea-83ef-5e6e235120de.png)

After adding the Gzip compression not a whole lot changed. The only thing that changed is that the Max Potential First Input Delay was now faster by 20 ms

### Visual stability

When a user started typing a name in the searchbar this is what happened:

![reflow](https://user-images.githubusercontent.com/47485018/77424132-e3c22c80-6dd0-11ea-82d5-4e400f3c4e56.gif)

I fixed this in the following manner:

![reflowFix](https://user-images.githubusercontent.com/47485018/77424319-2f74d600-6dd1-11ea-8e70-128a07181dfa.gif)

So now when a user starts typing a character in the searchbar the images don't dissapear and pop in anymore.



# To do

* Add pagination
* Add critical css?


# Features

The app fetches data from the Rick and morty API and renders a card for every character. Users can click on these cards, which will lead them to a detailpage about the character. The detail page holds additional information like: 

* Character species
* Which planet the character is from 

On the overview page users can also type the name of a character in a searchbox which results in a live search

## Installation


```
git clone https://github.com/CountNick/progressive-web-apps-1920.git
```

```
cd progressive-web-apps-1920
```

```
npm install
```

developers:
```
npm run start:dev
```
or if you just want to see the app in action on localhost:
```
npm start
```

open up a browser and visit the app at

```
localhost:3000
```
<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->

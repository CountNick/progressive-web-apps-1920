# Rick and morty web app

# Waar ik graag feedback op zou krijgen:

* Ik weet niet zo goed wat er verwacht word bij het tooling gedeelte van de opdracht. Ik gebruik nu webpack, en binnen webpack babel om clientside code te minifyen en om te zetten naar ES5. Alleen komt hier een hele grote file aan code uit.. ik weet niet zo goed of i het goed doen en wanneer het genoeg is? Het build script is hier te vinden: [package.json](https://github.com/CountNick/progressive-web-apps-1920/blob/master/package.json), [webpack config](https://github.com/CountNick/progressive-web-apps-1920/blob/master/webpack.config.js)

* Ik weet ook niet zo goed wat er verwacht word van de serviceworker. Wanneer heb je voldoende caching toegepast? Op dit moment ben ik bezig met een offline pagina die door linkt naar pagina's die gecached zijn. Zou dat genoeg zijn of?
[Link naar serviceworker](https://github.com/CountNick/progressive-web-apps-1920/blob/master/server/static/serviceWorker.js)

* Ik heb in mijn code dezelde progressive enhancement gebruikt als Declan, een live search. Ik heb dit alleen wel nav het voorbeeld dat door Declan gemaakt is gedaan, dus eigenlijk is de code niet echt van mij. Is het nu handiger om over te stappen op iets anders? [Dit is het stukje code waar het om gaat](https://github.com/CountNick/progressive-web-apps-1920/blob/master/server/static/js/search.js)


![Schermafbeelding 2020-03-13 om 13 37 42](https://user-images.githubusercontent.com/47485018/76621549-f23a5980-652f-11ea-84c5-71bb76657664.png)


# [Live demo](https://total-rickall.herokuapp.com/)

# Table of contents

* ### [Introduction](https://github.com/CountNick/progressive-web-apps-1920#introduction-1)
* ### [Service-worker]()
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

# Service-worker

### Jobstory:

When a user visits the app when his or her device is offline, he or she wants to know their device is offline.

When they know they are offline they want to be able to visit pages or content that has been saved in cache.

Important things to keep in cache:

* Home page
* CSS
* Offline page


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

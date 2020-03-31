# Rick and morty web app

![Header image](https://user-images.githubusercontent.com/47485018/78006155-e971c200-733c-11ea-82d3-e279261fbd11.png)


# [Live demo](https://total-rickall.herokuapp.com/)

# Table of contents

* ### [Introduction](https://github.com/CountNick/progressive-web-apps-1920#introduction-1)
* ### [API](https://github.com/CountNick/progressive-web-apps-1920#api-used)
* ### [Features](https://github.com/CountNick/progressive-web-apps-1920#features-1)
* ### [Progressive enhancement](https://github.com/CountNick/progressive-web-apps-1920#progressive-enhancement-1)
* ### [Service-worker](https://github.com/CountNick/progressive-web-apps-1920#service-worker-1)
* ### [Optimalisations](https://github.com/CountNick/progressive-web-apps-1920#optimalisations)

* ### [Installation](https://github.com/CountNick/progressive-web-apps-1920#installation-1)

* ### [Conclusion](https://github.com/CountNick/progressive-web-apps-1920#optimalisations-1)

# Introduction

For the course progressive web apps at CMDA we were given the assignment to make our [web app from scratch](https://github.com/CountNick/web-app-from-scratch-1920) into a progressive web app.


# API used

[Rick and morty API](https://rickandmortyapi.com/)

## Downsides

* The api has a maximum call rate of 100000 requests per day, this seems like a lot but when you get caught in a infinite loop you might exceed your request rate very quickly(which has happened to me)

* The information on characters is a little shallow. For example: there are no bio's for the characters and no images for the planets

## How the app uses the API 

It is possible to search for characters name's within the api. This is what the search functionality is build upon: 

```js
`https://rickandmortyapi.com/api/character/?name=${name}`
```

In order to render the right Detailpage with for every character a new api call is made with the id of said character: 

```js
`https://rickandmortyapi.com/api/character/${number}`
```

# Features

The app fetches data from the Rick and morty API and renders a card for every character. Users can click on these cards, which will lead them to a detailpage about the character. The detail page holds additional information like: 

* Character species
* Which planet the character is from 

On the overview page users can also type the name of a character in a searchbox which results in a live search


# Progressive enhancement

When a user starts typing the name of a character the results are updated live on the page, **I took this piece of code from [Declan](https://github.com/decrek/progressive-web-apps-1920/blob/master/examples/movies-example/src/js/search.js)** :


![enhancement](https://user-images.githubusercontent.com/47485018/77454748-3fa0ab80-6df9-11ea-9e38-effc1ce86e47.gif)

The only problem with that functionality is that it runs in the client, and not every vlient is able to run javascript.
Not all users are able to load javascript in their browsers, but the search funtionaility is still the core functionaility of my app. This means that it has to be usable for everyone, with or without javascript.

When javascript isn't supported users can still search for a charcter by clicking the searchbutton:

![989efa439a596eadd8a1a9b405e33536](https://user-images.githubusercontent.com/47485018/77454992-94dcbd00-6df9-11ea-9eee-04d91f0b5051.gif)


# Service-worker

## Jobstories:

When a user visits the app when his or her device is offline, the user wants to see a offline page to know they are offline.

When they know they are offline they want to be able to visit pages or content that has been saved in cache.

Important things to keep in cache:

* Home page
* CSS
* Offline page

# Optimalisations

## Runtime responisveness

First audit without js and css minification:

![Without](https://user-images.githubusercontent.com/47485018/77414717-c20d7900-6dc1-11ea-80d7-7b9c5d0c5601.png)


Since i hear alot of people talk about Webpack i decided to try and use webpack to minify and compile my javascript and scss files. After minifying the javascript and css some things were improved:
![With minification](https://user-images.githubusercontent.com/47485018/77414928-06991480-6dc2-11ea-9d67-e0d74d4341a3.png)
Ase you can see the time to interactive, and the max potential first input delay improved

After minifying the css and javascript i also added gzip compresssion:
![Gzip and minification](https://user-images.githubusercontent.com/47485018/77415000-203a5c00-6dc2-11ea-83ef-5e6e235120de.png)

After adding the Gzip compression not a whole lot changed. The only thing that changed is that the Max Potential First Input Delay was now faster by 20 ms

## Visual stability

When a user started typing a name in the searchbar this is what happened:

![reflow](https://user-images.githubusercontent.com/47485018/77424132-e3c22c80-6dd0-11ea-82d5-4e400f3c4e56.gif)

I fixed this in the following manner:

![reflowFix](https://user-images.githubusercontent.com/47485018/77424319-2f74d600-6dd1-11ea-8e70-128a07181dfa.gif)

So now when a user starts typing a character in the searchbar the images don't dissapear and pop in anymore.

## Caching

The serviceworker also caches the homepage and css. So after visiting the page for the first time the homepage will load faster as the server doesn't need to provde the page to the client anymore.



# Wishlist

* Add pagination
* Add caching of pages that have been visited to cache
* Add critical css?

# Installation


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

# Conclusion

**Je snapt het verschil tussen client side en server side renderen en kan server side rendering toepassen voor het tonen van data uit een API**

De pagina's worden in eerste instantie en als iemand geen javascript heeft op de server gerenderd. Met het [stukje code van Declan heb ik een clientside script](https://github.com/CountNick/progressive-web-apps-1920/blob/master/server/static/js/modules/search.js) geschreven waar je mee kan live searchen. Er word dan clienside gerenderd met data uit de API. Er is dus wel sprake van een progressive enhancement, het komt alleen wel uit et voorbeeld van Declan. [link naar readme](https://github.com/CountNick/progressive-web-apps-1920#progressive-enhancement-1)

**Je begrijpt hoe een Service Worker werkt en kan deze in jouw applicatie op een nuttige wijze implementeren.**

Mijn applicatie bevat een [serviceworker](https://github.com/CountNick/progressive-web-apps-1920/blob/master/server/static/serviceWorker.js) die de homepagina, css en een offline pagina cached. Het is statisch en heel minimaal. De offline pagina word gerenderd door te kijken of het request dat verstuurd word html is. Als dit zo is  en de er geen verbinding is word de offline pagina getoond. Ik had me toch graag wat meer verdiept in de serviceworker. Ik ben best wat tijd verloren doordat ik deze in de verkeerde map had zitten. Hierna heb ik het voorbeeld van Declan erbij gepakt, dit werkte wel maar ik wist nou niet precies waarom. Ik heb daarom besloten om zelf een offline pagina te serveren en alleen de homepagina te cashen.

**Je begrijpt hoe de critical render path werkt, en hoe je deze kan optimaliseren**

In dit stukje laat ik zien wat ik heb verbeterd aan mijn applicatie [hier](https://github.com/CountNick/progressive-web-apps-1920#optimalisations-1). Ik heb het hier vooral over time to interaction. De optimalisaties zijn wel een beetje voor de hand liggend, en ik had naar meerdere optimalisaties kunnen kijken zoals critical css. Dit wilde ik ook nog wel toevoegen, maar had hier helaas geen tijd meer voor. Ik ben wel blij dat ik de tijd heb genomen om een keer naar webpack te kijken.
<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->

# Rick and morty web app

![Schermafbeelding 2020-03-13 om 13 37 42](https://user-images.githubusercontent.com/47485018/76621549-f23a5980-652f-11ea-84c5-71bb76657664.png)


# [Live demo](https://total-rickall.herokuapp.com/)

# Table of contents

* ### [Introduction]()
* ### [Service-worker]()
* ### [API]()
* ### [Features]()
* ### [Installation]()

## Introduction

This a PWA version of the app i made for the Web app from scratch course.

## API used

[Rick and morty API](https://rickandmortyapi.com/)

### Downsides

* The api has a maximum call rate of 100000 requests per day, this seems like a lot but when you get caught in a infinite loop you might exceed your request rate very quickly(which has happened to me)

* The information on characters is a little shallow. For example: there are no bio's for the characters and no images for the planets

### Service-worker

Important things to keep in cache:

* Home page
* CSS


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

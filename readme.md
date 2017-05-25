# Guess Ru? A trivia game.



### Installation and setup
* Download or clone repo.
* ```npm i``` to install dependencies.
* ```gulp``` to compile the source code and open in browser.

> **Note:** You'll need to have ```gulp-cli``` installed globally ```nmp i -g gulp cli```

### About the game
This is my first online project for my studies at General Assembly Web Immersive programme in London. A short game based on a mix of 90s classic game show "CatchPhrase" and the more current RuPaul's Drag race.

HTML and CSS used to create a basic layout. A picture is hidden by a series of tiles. These are then taken away individually in a random order when the player presses a button. The player then has the chance submit an answer of who is in the picture. 10 points are added at the beginning of each round and a point is taken for every tile removed. 

![GamePlay](http://i.imgur.com/Eh62eM2.png)


If the player gets through the 6 rounds there's a bonus round that involves getting 2 questions correct in order to increase the final score by 10 points.

Completed using a series of gifs, sounds and clips from the show. 


### Technologies Used

* HTML 5
* SCSS
* Javascript ES6
* JQuery 3.10
* Gulp
* NPM
* Git & Github

### Challenges faced

Experimented methods of scrolling up the introduction page before settling on toggling classes to get the effect that I wanted. It also took some time to get the tiles to remove in the way I wanted as using events such as fadeOut would settled to reveal only the last tile in the array. 

In the logic of the game, I tried to psuedo code as much as possible to break down the functions that I needed but I found that I discovered more things that needed to happen as the game built. I tried my best to refactor my code all the time so it was easy to put other functions and events.

[Effects | jQuery API Document] (https://api.jquery.com/category/effects/)  was an often used paged to help me understand and be able to put event effects into use. 

I was unable to make the page responsive in the time given but I focused more on namespacing and managed to get it done with some in class help. 

### Future improvements

I would definitely want to put in more difficulty levels, maybe involving a round with extra points such as a spinning wheel. 

I would also create more rounds and make them random in selection rather than increasing in difficulty of knowing who's behind and spelling!


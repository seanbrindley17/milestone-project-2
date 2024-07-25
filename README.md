# (Milestone Project 2)

* Simple memory game

## UX 

### Project Goal

The goal of this project was to create a simple, single page browser game using HTML, CSS and Javascript. I chose to do a game because I wanted to understand how to use loops and if statements correctly, among other things, and the best way to learn is by doing. This project satisfies the one page requirement and the use of Javascript for interactive elements.

The game itself is a sequence-based memory game. To start, the computer lights up one card, the player then chooses the card highlighted. The computer then adds one card to it's sequence and the player must remember the longer sequence and click the correct cards in order and so on.

My design was created as a series of wireframes for mobile, tablet and desktop. This was then adapted and changed based upon what I could feasibly build with my introductory skillset.

## User Stories

### New Site Users

* As a new site user, I would like to be able to quickly and easily understand what the game.

* As a new site user, I would like to be able to easily find instructions on how to play and that they are clear.

* As a new site user, I would like to see the score during my games and that my high score stays where I can see it.

### Returning Site Users

* As a returning site user, I would like that my high score is saved in the memory so that I can try and beat it another time. 

## Design

### Wireframes

Wireframes were created on balsamiq for mobile, tablet and desktop displays.

![main wireframe](/readme%20documentations/wireframes/main%20wireframe%20v2.png)

### Colours/Background

I wanted to have a pleasant to look at yet not oppressive or complicated background, so initially I decided on a blue background image as shown below which was downloaded from [Pexels](https://www.pexels.com/photo/blue-wallpaper-2680270/).

![background image](/assets/images/background-images/pexels-pixelcop-2680270.jpg)

### Fonts

I decided to use "[Roboto](https://fonts.google.com/specimen/Roboto)" for my main font as it's a popular, modern looking font and fits in well thematically with many projects including for game text.

I decided to use "[Anton](https://fonts.google.com/specimen/Anton)" for heading text so that not all pieces of text looked the same"

## Credits

* Finding [this page](https://www.w3schools.com/jsref/dom_obj_html_nodelist.asp) on W3 Schools that informed me that a nodelist is not an array.

### Code Used From Outside Sources

* I initially used code from [this Reddit thread](https://www.reddit.com/r/learnjavascript/comments/jkv7lo/put_div_elements_in_array/) to help me when I was initially struggling to iterate through my cards. But changed it later.

* I used code from [this StackOverflow question](https://stackoverflow.com/questions/29116240/create-an-array-from-ids-from-divs) to help me get my card IDs into an array.

* I used code from [this video](https://www.youtube.com/watch?v=W0MxUHlZo6U&t=1450s) by Web Dev Cody to help with getting random IDs.

* I used code from [Geeks for Geeks (Method 2)](https://www.geeksforgeeks.org/how-to-compare-two-arrays-in-javascript/) for having precisely what I needed to help me write some simple array comparing code.

* I used code from [this Simon game example](https://www.geeksforgeeks.org/create-a-simon-game-using-html-css-javascript/) from Geeks for Geeks for my playSequence function that I was struggling on.

* I used code from [this w3schools page](https://www.w3schools.com/howto/howto_css_modals.asp) to help build my how to play modal.

* I used code from [this Reddit post](https://www.reddit.com/r/learnjavascript/comments/ii6yzh/making_a_high_score_localstorage/) and [this GameDevJS article](https://gamedevjs.com/articles/using-local-storage-for-high-scores-and-game-progress/#:~:text=You%20can%20do%20this%20by,value%20associated%20with%20a%20key.) to help build my highScore function.
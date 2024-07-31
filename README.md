# (Milestone Project 2)

* Simple memory game

---

## Mockup Screenshots

I used the [Am I Responsive]() website to create a mockup of how the site could look on multiple different display sizes.

![screenshot of mockups from am i responsive]()

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

My text was mainly `dark-blue`, with some flavour text being in the default black. This was to stick to the simple blue theme. Additionally I used an `aquamarine` border around my heading, numbers and pop up boxes, I thought this looked nice. 

The pop up boxes were an opaque background, this meant that the blue still dominated yet the text inside was legible.

### Fonts

I decided to use "[Roboto](https://fonts.google.com/specimen/Roboto)" for my flavour text font such as for the how to play description and the game over text.

I decided to use "[Anton](https://fonts.google.com/specimen/Anton)" for heading text and the game numbers as this looked better with a border around it.

The Github icon in my footer was from [Font Awesome]()

### Technology Used 

#### Coding Languages Used

* HTML - For site content.

* CSS - For site design and layout.

* Javascript - For site interactivity and dynamic elements.

#### Software and Programs Used

* [VSCode](https://code.visualstudio.com/) - IDE used to create website and style.
    * [Google Fonts](https://fonts.google.com/) - Location of fonts used.
    * [Font Awesome](https://fontawesome.com/) - Location of icons used.

* [Git](https://git-scm.com/) - Version control.

* [Github](https://github.com/) - For secure code storage.

* [Github Pages](https://pages.github.com/) - To host the deployed site.

* [W3 Schools](https://www.w3schools.com/) - For extra help with remembering how to use bits of code correctly.

* [balsamiq](https://balsamiq.com/) - Used to create wireframes.

* [Snipping Tool](https://support.microsoft.com/en-us/windows/use-snipping-tool-to-capture-screenshots-00246869-1843-655f-f220-97299b865f6b) - To get relevant screenshots as required.

## Features 

### Existing Features 

| Feature | Description | Screenshot |
| :---: | :---: | :---: |
| How To Play Button & Modal | The how to play button is a modal that pops up upon clicking to tell the user how to play | ![screenshot of how to play modal](/readme%20documentations/screenshots/features%20screenshots/how%20to%20play%20modal.png) |
| Play Button | Pressing the play button hides the title, how to play and welcome box and brings up the game area | ![screenshot of play button](/readme%20documentations/screenshots/features%20screenshots/play%20button.png) |
| Game Area | Displays the numbers and is the area in which the game takes place | ![screenshot of game area](/readme%20documentations/screenshots/features%20screenshots/game%20area.png) |
| Score Area | Displays current game score and the player's highscore using local storage | ![screenshot of score area](/readme%20documentations/screenshots/features%20screenshots/score%20area.png) |
| Game Over Screen | When the player fails to guess the sequence correctly, shows their final score and gives them the opportunity to try again | ![screenshot of game over screen](/readme%20documentations/screenshots/features%20screenshots/game%20over%20screen.png) |
| Footer | Shows name of creator and link to Github profile | ![screenshot of footer](/readme%20documentations/screenshots/features%20screenshots/footer.png) |


### Future Features

In the future I'd like to change the gameplay so that the player fails if they make a wrong input there and then, as opposed to having to input the whole sequence first. This is because of a lack of knowledge from me. 

Potential future ideas could include a leaderboard or a timer.

## Testing 

All testing is documented on the [TESTING.md](TESTING.md) file.

## Deployment

The site was deployed on Github pages.

The steps of deployment are as follows:

* Go to the Github repository for the site [here](https://github.com/seanbrindley17/milestone-project-2).
* Navigate to Settings.
* Navigate to Pages.
* From the Source dropdown, select Deploy from a branch.
* From the Branch dropdown, select main and then click on the Save button.
* A box at the top of the page will say Your site is live as shown here:
![screenshot of deployment](/readme%20documentations/screenshots/deployment%20screenshots/deployment%20box.png)

### Local Deployment 

To create a local copy of the site, you can clone of fork this repository.

#### Cloning

To clone the repository:

* Go to the Github repository for the site [here](https://github.com/seanbrindley17/milestone-project-1).
* Click on the green Code button above the files. ![screenshot of code button](/readme%20documentations/screenshots/deployment%20screenshots/github%20code%20button.jpg)
* Select which remote repository URL you'd like to use from HTTPS, SSH or Github CLI, then click the copy url button.
* Open the Terminal in your code editor and change the current working directory to the location you want the cloned repository to go.
* In the Terminal, type git clone followed by the link you copied earlier from the repository.
* Press enter.

#### Forking

To fork this repository:

* Log into your Github account and go to the Github repository for the site [here](https://github.com/seanbrindley17/seanb.dev).
* Locate the Fork button near the top of the page and click it. ![screenshot of fork button](/readme%20documentations/screenshots/deployment%20screenshots/mp2%20fork%20button.png)
* On the next page, you can change the name to distinguish it from the original. Once done, click Create Fork to create a copy of the repository to your Github account. 

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

* I used code from this [jsbin](https://jsbin.com/ribacacazi/edit?html,css,output) post to get a border around the letters of my title.

#### Hover.css

I utilised code from [hover.css](https://ianlunn.github.io/Hover/) by Ian Lunn to put effects on my how to play, play and try again buttons. These credits will be documented here.

* For the How To Play button, I used [.hvr-bounce-to-top](https://github.com/IanLunn/Hover/blob/master/css/hover.css#L1540)
![nimesh_avatar](http://i.imgur.com/HMXOMqat.jpg)![ga_cog_large_red_rgb](http://i.imgur.com/bZJFQqb.png)

---
#Project Zero

---

##Title
###Hue Hunter
First project for General Assembly WDI27, London.

##Installation & Setup
- Download or clone the repo
- `npm i` to install dependencies
- `gulp` to compile the source code and open in browser

> **Note**: You'll need to have `gulp-cli` installed globally
> `npm i -g gulp-cli`

You can clone or download the code from my GitHub repo [here.](https://github.com/n2kp/project-zero)

##Description
Hue Hunter is a simply colour game which requires the user to sort an array of colours into the correct gradient between two end colours. My aim was to build a game that visually looked stunning, as well as be able to function effectively. I went for a minimalistic look with clean lines and bright colours.

There are two game modes, easy and hard, which incrementally increase the number of gradient colours that must be sorted to continue to the next round.

![hue_hunter-loading_screen](http://i.imgur.com/i8U5StU.png)

The loading screen has a brief instructions panel, two buttons so the user can choose which game mode, as well as a display of the quickest local time set on the machine and a sound button to toggle the background music on and off. Finally there is a footer with the developers contact information.

On choosing a game mode, The user is alerted to inform them of which mode is about to start. It then goes into the first round of the game. Easy mode starts with 5 colours, 3 of which need to be sorted, and continues to 9 colours, 7 of which need sorting. The hard mode starts at 9 colours and finishes at 13 colours.

![hue_hunter_game_start_screen](http://i.imgur.com/VidrXtJ.png)

When a game mode is initiated, the easy mode and hard mode buttons disappear and the reset button appears. On completion of each round, an alert is shown to tell the user they have passed the round, and ping sound is played. Also a next round button appears, which has a pulse on it to remind the user they must press the button to advance.

After the fifth round is complete, the user is told that the game is complete and shown what time they finished the 5 rounds in. It also alerts the user as to whether they have set a new quick time.

I included two media break points for use on smaller screens or devices. The first was at 700px, which is the point at which, if playing the hard mode, the colour blocks would extend over the screen. So at that point, instead of the blocks sitting next to one another, they stack up on each other. The buttons will also stack on top of each other if the screen is too small.

![hue_hunter_media_breakpoint_700px](http://i.imgur.com/hPIMQKd.png)

The last break point was at 430px, at which point the footer items begin to overlap. So after 430px and smaller, the two elements of the footer center on the page and sit stacked as oppose to beside each other.

![hue_hunter_media_breakpoint_430px](http://i.imgur.com/M7Gs45h.png)


##Technologies Used
The technologies that were used in creating this game are as follows:

- HTML5
- SASS
- JavaScript ES6
- JQuery 3.10
- Gulp
- NPM
- Git
- GitHub

![HTML5](http://i.imgur.com/q9EvaStt.png)![SASS](http://i.imgur.com/P94Tqdht.png)![JSES6](http://i.imgur.com/vy0lxaNt.png)![JQuery](http://i.imgur.com/fuCAXrbt.png)![Gulp](http://i.imgur.com/YBcUaKHt.png)![NPM](http://i.imgur.com/kZrj2tTt.png)![Git](http://i.imgur.com/aj8xhG8t.png)![GitHub](http://i.imgur.com/no84Bgtt.png)

##Challenges
With this being my first solo project, my primary challenge was to be able to construct the code in a way that, not only works, but is succinct and DRY. 

The most difficult challenge I faced was working out a way to map the large colour palettes I had to produce smaller arrays which preserved a manageable gradient within. My issue was that there was no discernible pattern between the indices from one round to another. The images below shows how one colour palette is divided to be used in different rounds.

![pattern_indices](http://i.imgur.com/LmWkguz.png)

As there was no pattern, I was not able to write a function that would automatucally determine the pattern needed depending upon which round of the game the user was in.

![gradient_colours](http://i.imgur.com/7I6qF5d.png)

The reason I had to choose the pattern i did was to make sure that the gradient between any two colours was not too large as to make it difficult for the user to see the answer.

##Going Forward

Going forward there are certain features and functions I would like to add to the game in the future.

These are:

- Putting variable timers on different game modes
- Making each game mode longer to allow the user to interact with the game for a longer period of time
- Having two palettes on screen at once so the user is required to sort both before continuing
- Write a function which can create the colour palettes for me. I was able to find a website which allows the user to input two colours and recieve a 11 gradient colours between them. This limited the maximum array of colours to 13 when including the static colours. If however I wrote a function with can get a far larger number of gradient points between any two colours, it would allow me to create a far more complex and challening puzzle
- I would like to use NameSpacing to make the code more manageable and reduce the chance of reating bugs in the code by limiting the number of global variables we can overwirte.
- I would also like to add a bonus speed round where the user has a set amount of time to solve a very large and complex colour wheel gradient, but this will probably need a new funcion which can create an array of gradient colours that loop back upon itself so as to create a 'wheel' of colour.

## Playing the game
The game is available to play [here.](https://salty-brook-68142.herokuapp.com/)

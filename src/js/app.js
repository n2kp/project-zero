/* global colorPalette */
/* global elementSelector */

$(() => {

  console.log('Igor, JavaScript\' alive!');

  const $gameBoard = $('.gameBoard');
  const $difficulty = $('.difficulty');
  const $easyButton = $('.easyButton');
  const $hardButton = $('.hardButton');
  const $resetButton = $('.resetButton');
  const $nextButton = $('.nextButton');
  const $quickTime = $('.quickTime');
  const $whichRound = $('.roundDisplay');
  const $round = $('.round');
  const $sound = $('.soundOnOff');
  const $pingSound = $('audio')[0];
  const $backgroundSound = $('audio')[1];
  let time1 = null;
  let time2 = null;
  let userTime = null;

  let isPlaying = false;
  let roundCounter = 0;
  let roundNumber = null;
  let roundArray = null;
  let randomColorsArr = null;
  let shuffledArray = [];
  let prev, prevcolor = null;
  let count = 0;
  let quickestTime = localStorage.getItem('quickestTime') || 45;

  $quickTime.text(quickestTime);

  $sound.on('click', togglePlayPause);
  // Event Listener used to play and pause the background music of the game.

  $gameBoard.on('click', '.square', changeColor);
  // Event Listener used with the changeColor function to allow JS to listen for clicks on the squares and change the colours once two clicks have been pressed.

  $nextButton.on('click', startRound);
  // Event Listener used to initiate the next round of the game. Empties the shuffledArray, runs the function nextRound, increase the round counter and repopulates the next round with an array.

  $resetButton.on('click', resetGame);
  // Event Listener used to reset the game. Brings the game back to the initial state when loaded. Does this by running the resetGame function.

  $difficulty.on('click', chooseRound);
  // Event Listener used to start the game. Depending on which game mode is clicked, it runs the script for either easy or hard.

  function togglePlayPause () {
    if (isPlaying) {
      $backgroundSound.pause();
    } else {
      $backgroundSound.play();
    }

    $backgroundSound.onplaying = function() {
      isPlaying = true;
    };
    $backgroundSound.onpause = function() {
      isPlaying = false;
    };
  }
  // This function is used to toggle the background music of the game and is invoked by the Event Listener.

  function playGame () {
    gameStart();
    playRound();
    startTime();
    changeColor();
  }
  // This function combines the gameStart, playRound, startTime and changeColor functions.

  function chooseRound (e) {
    if ($(e.target).hasClass('easyButton')) {
      alert('Easy Mode Selected');
      roundCounter++;
      $round.text(roundCounter);
      roundNumber = 1;
      for (let i = 0; i < 5; i++) {
        $gameBoard.append('<div class="square"></div>');
      }
      playGame();

    } else if ($(e.target).hasClass('hardButton')) {
      alert('Hard Mode Selected');
      roundCounter++;
      $round.text(roundCounter);
      roundNumber = 5;
      for (let i = 0; i < 9; i++) {
        $gameBoard.append('<div class="square"></div>');
      }
      playGame();
    }
  }
  // This function is used when the user is determining which game mode they want to play.

  function gameStart () {
    $easyButton.hide();
    $hardButton.hide();
    $resetButton.show();
    $whichRound.show();
  }
  // This function is used to start the game. It hides the difficulty buttons and shows the game squares and reset button.

  function colors() {
    return colorPalette[Math.floor(Math.random()*colorPalette.length)];
  }
  // This function randomaly chooses one of the 30 color palettes for use in each round.

  function sequenceMatcher() {
    const sequenceArray = elementSelector[roundNumber-1];
    return roundArray = sequenceArray.map(function(item) {
      return randomColorsArr[item];
    });
  }
  // This function uses the roundNumber, minus one, to find the array in the elementSelector and maps just the indices from that array onto the random array chosen from the colors function and calls it roundArray as it will be the array that the user needs to match.

  Array.prototype.shuffle = function() {
    for(let i=1; i<this.length-1; i++) {
      shuffledArray.push(this[i]);
    }
    shuffledArray.sort(function() {
      return 0.5 - Math.random();
    });
    shuffledArray.push(this[this.length-1]);
    shuffledArray.unshift(this[0]);

    if (shuffledArray.length === roundArray.length && shuffledArray.every((v,i)=> v === roundArray[i])) {
      shuffledArray = [];
      roundArray.shuffle();
    } else {
      return shuffledArray;
    }
  };
  // This takes the roundArray, removes the first and last indices, and then shuffles the middle indices, before reattaching the first and last indices. It also have a double shuffle function in case the first function returns the same array as the roundArray. Stores the array into a variable called shuffledArray.

  function playRound() {
    shuffledArray = [];
    roundNumber;
    console.log('In play round', roundNumber);
    randomColorsArr = colors();
    sequenceMatcher();
    console.log('roundArray', roundArray);
    roundArray.shuffle();
    console.log('shuffledArray', shuffledArray);

    $('.square').each(function(idx, el) {
      $(el).css('backgroundColor', shuffledArray[idx]);
    });
  }
  // This function combines the functions colors, sequenceMatcher and shuffle. It is run in each round. Overall, it picks a random array from the colorPalette, maps it against the sequenceMatcher to produce the roundArray, which is then shuffled to produce the shuffledArray. It then pushes the HEX colors from the shuffledArray into the empty divs in the HTML.

  function rgbToHex (userRgb) {
    var rgb = userRgb.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
    return (rgb && rgb.length === 4) ? '#' +
    ('0' + parseInt(rgb[1],10).toString(16)).slice(-2) +
    ('0' + parseInt(rgb[2],10).toString(16)).slice(-2) +
    ('0' + parseInt(rgb[3],10).toString(16)).slice(-2) : userRgb;
  }
  // This function is used to convert the userRgb array which is returned after two clicks into an array of HEX codes to be compared againt the roundArray. The input format is "rgb(r, g, b,)" and outputs "#HEXCODE".

  function checkComplete () {
    const userRgb = [];
    $('.square').each(function(index, element) {
      const backgroundColour = $(element).css('backgroundColor');
      userRgb.push(backgroundColour);
    });
    console.log('userRgb', userRgb);

    const userSortedArray = userRgb.map(rgbToHex);
    console.log('userSortedArray', userSortedArray);
    console.log('roundArray', roundArray);

    if (userSortedArray.length === roundArray.length && userSortedArray.every((v,i)=> v === roundArray[i])) {
      console.log('It\'s a match, well done');
      $pingSound.play();

      console.log('roundCounter before alerts', roundCounter);
      if(roundCounter > 4) {
        alert('Game complete');
        endGame();
      } else {
        alert('Round complete, press Next Round to continue.');
        $nextButton.show();
      }

    } else {
      console.log('Not quite, have another go');
    }
  }
  // This function checks to see if the user has sorted the array that was pushed into the divs. It begins with an empty array, userRgb, which is populated with the rgb codes from the colors that are currently on view, in the order they are in. It then converts the rgb colors into hex colors and puts them into a new array called userSortedArray. Finally it compares the userSortedArray to the roundArray to determine if they are identical. If they are, it alerts the user that the next round is available. Otherwise, the user continues to sort the array.

  function changeColor(e){
    const index = $(e.target).index('.square');
    const length = $('.square').length;
    if(index !== 0 && index !== (length - 1)) {
      if(count === 0){
        prev = $(this);
        prevcolor = prev.css('backgroundColor');
      }else if(count === 1){
        prev.css('backgroundColor', $(this).css('backgroundColor'));
        $(this).css('backgroundColor', prevcolor);
        count = -1;
        checkComplete();
      }
      count+=1;
    }
  }
  // This function is used to switch the colors within div. Only once the user has clicked on two seperate divs will the background colors change. It also includes the checkComplete function so that once the change has been made, it can check whether it is correct or not.

  function nextRound () {
    roundCounter ++;
    roundNumber ++;
    $gameBoard.append('<div class="square"></div>');
    $nextButton.hide();
  }
  // This function is used when the nextButton is clicked. The nextButton only appears after the user has correctly sorted the array, and is used to move to the next round. It hides once it is pressed so the user cannot skip rounds.

  function startRound () {
    nextRound();
    $round.text(roundCounter);
    playRound();
  }
  // This function is used on the nextRound Event Listener to begin the next round.

  function resetGame() {
    roundCounter = 0;
    roundNumber = null;
    $resetButton.hide();
    $nextButton.hide();
    $('.square').remove();
    $whichRound.hide();
    $easyButton.show();
    $hardButton.show();
    let roundArray = null;
    let randomColorsArr = null;
    let shuffledArray = [];
    console.log(shuffledArray);
  }
  // This function is used to reset the game. It brings the game back to the original state and stops any timers that might have been running.

  function endGame () {
    endTime();
    timeDiff();
    alert(`Game Complete! You finished with a time of ${userTime}`);
    updateTime();
    resetGame();
  }
  // This function is used to end the game upon completion of the fifth round. It takes a second time, converts it to seconds, and then alerts the user to their game time. It also updates the quickest time and alerts the user if they set a new quickest time or not. Finally, it brings the game back into the start state.

  function startTime() {
    time1 = new Date();
  }
  // This function is used to capture the time at which the user began the game.

  function endTime() {
    time2 = new Date();
  }
  // This function is used to capture the time at which the user completed the game.

  function timeDiff() {
    userTime = (time2 - time1)/1000;
  }
    // This function is used to work out the difference between the start of the game and the end of the game and convert the time into seconds.

  function updateTime () {
    // console.log(`${quickestTime} is the time to beat but the user got ${userTime}`);
    if (userTime < quickestTime) {
      alert(`Congratulations, you've set the new quickest time!`);
    } else {
      alert(`Unfortunately, you weren't quite fast enought to set a new quick time.`);
    }
    quickestTime = (userTime < quickestTime) ? userTime : quickestTime;
    localStorage.setItem('quickestTime', quickestTime);
    return quickestTime;
  }
    // This function is used to check whether the game time is quicker than the current quickest time. It alerts the user whether they have set a new quick time or not, and if there is a new quick time, it updates the local storage with the new quick time.

});

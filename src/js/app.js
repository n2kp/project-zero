
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

  const colorPalette = [
    ['#3db5f9', '#48a8e8', '#539ad7', '#5e8dc6', '#697fb5', '#7472a4', '#7e6493', '#895782', '#944a71', '#9f3c60', '#aa2f4f', '#b5213e', '#c0142d'],
    ['#44f267', '#4bdf68', '#51cd69', '#58ba6a', '#5ea76b', '#65956c', '#6b826d', '#726f6e', '#795d6f', '#7f4a70', '#863771', '#8c2572', '#931273'],
    ['#553e13', '#5a3c1c', '#5f3a25', '#65382f', '#6a3638', '#6f3441', '#74324b', '#7a3054', '#7f2e5d', '#842c66', '#8a2a6f', '#8f2879', '#942682'],
    ['#148ea9', '#278faa', '#3a90ab', '#4d90ab', '#6091ac', '#7392ad', '#8692ae', '#9993ae', '#ac94af', '#bf95b0', '#d295b1', '#e596b1', '#f897b2'],
    ['#493582', '#524586', '#5b568b', '#63668f', '#6c7693', '#758798', '#7e979c', '#86a7a0', '#8fb8a5', '#98c8a9', '#a1d8ad', '#a9e9b2', '#b2f9b6'],
    ['#6746f2', '#7241e3', '#7d3bd4', '#8735c5', '#9230b6', '#9d2ba7', '#a72597', '#b21f88', '#bd1a79', '#c8156a', '#d30f5b', '#dd094c', '#e8043d'],
    ['#23184c', '#321e4c', '#40244d', '#4f2a4d', '#5e2f4d', '#6c354d', '#7b3b4e', '#8a414e', '#98474e', '#a74d4e', '#b6524e', '#c4584f', '#d35e4f'],
    ['#78a0d8', '#7ca1cd', '#80a2c2', '#84a4b7', '#89a5ad', '#8da6a2', '#91a797', '#95a98c', '#99aa81', '#9cab77', '#a2ad6c', '#a6ae61', '#aaaf56'],
    ['#1fe876', '#29e268', '#34dc60', '#3ed658', '#49d051', '#53ca49', '#5ec441', '#68bd39', '#72b731', '#7db12a', '#87ab22', '#92a51a', '#9c9f12'],
    ['#3f4887', '#4c4885', '#5a4884', '#674982', '#754981', '#82497f', '#904a7e', '#9d4a7c', '#aa4a7a', '#b84a79', '#c54b77', '#d34b76', '#e04b74'],
    ['#1a57e8', '#255dd6', '#3062c4', '#3b68b3', '#456da1', '#50738f', '#5b787d', '#667e6b', '#718459', '#7b8948', '#868f36', '#919424', '#929a12'],
    ['#05a83e', '#18ad4e', '#2bb35e', '#3fb86e', '#52bd7e', '#65c28e', '#78c79e', '#8ccdaf', '#9fd2bf', '#b2d7cf', '#c5dddf', '#d9e2ef', '#ece7ff'],
    ['#2fded8', '#3ae0ca', '#45e2bb', '#50e4ad', '#5be69f', '#66e890', '#71ea82', '#7beb74', '#86ed65', '#91ef57', '#9cf149', '#a7f33a', '#b2f52c'],
    ['#462e75', '#523d73', '#5d4d70', '#695c6e', '#746b6c', '#807b69', '#8b8a67', '#979965', '#a3a962', '#aeb860', '#bac75e', '#c5d75b', '#d1e659'],
    ['#5ddac3', '#69d3a7', '#76cc9a', '#82c48e', '#8fbd81', '#9bb674', '#a7af68', '#b4a85b', '#c0a14f', '#cd9a42', '#d99236', '#c68b2a', '#f2841d'],
    ['#052e3d', '#123c4c', '#20495c', '#2d576b', '#3b647a', '#48728a', '#558099', '#638da8', '#709bb8', '#7ea8c7', '#8bb6d6', '#99c3e6', '#a6d1f5'],
    ['#2c08ba', '#380baf', '#440ea3', '#501298', '#5c158d', '#661881', '#741b76', '#801e6b', '#8c215f', '#982554', '#a42849', '#b02b3d', '#bc2e32'],
    ['#06bf79', '#12b37d', '#1fa880', '#2b9c84', '#389187', '#44858b', '#517a8e', '#5d6e91', '#696295', '#765798', '#824b9c', '#8f40a0', '#9b34a3'],
    ['#3d770e', '#4a8214', '#578e1b', '#649921', '#72a427', '#7fb02d', '#8cbb34', '#99c63a', '#a6d240', '#b4dd46', '#c1e84d', '#cef435', '#dbff59'],
    ['#5ca10e', '#679b16', '#72941d', '#7d8e25', '#88872c', '#938134', '#9e7a3b', '#a87443', '#b36d4b', '#be6752', '#c9605a', '#d45a61', '#df5369'],
    ['#7bc9e5', '#82c5d5', '#8ac2c6', '#91beb7', '#98bba7', '#9fb797', '#a7b488', '#aeb078', '#b5ac69', '#bca95a', '#c4a54a', '#cba32b', '#d29e2b'],
    ['#71d72f', '#7bc82e', '#85b92c', '#8faa2b', '#999b2a', '#a38c28', '#ad7d27', '#b66d26', '#c05e24', '#ca4f23', '#d44022', '#de3120', '#e8221f'],
    ['#d5870b', '#c58514', '#b5821d', '#a58026', '#957e2f', '#857b38', '#747941', '#647749', '#547452', '#44725b', '#347064', '#246d6d', '#146b76'],
    ['#f23f8e', '#e4408d', '#d6418b', '#c8438a', '#ba4489', '#ac4588', '#9e4787', '#8f4885', '#814984', '#734a83', '#654b81', '#574d80', '#494e7f'],
    ['#dab2f6', '#cfaae2', '#c4a2ce', '#b99bb9', '#ae93a5', '#a38b91', '#98837d', '#8e7b68', '#837354', '#786b40', '#6d642b', '#625c17', '#575403'],
    ['#da87ce', '#d28dc0', '#ca93b2', '#c299a4', '#ba9f96', '#b29588', '#abab7a', '#93b26b', '#9bb85d', '#93be4f', '#8bc441', '#83ca33', '#7bd025'],
    ['#f89951', '#ed915b', '#e28a66', '#d78270', '#cc7a7a', '#c17285', '#b66b8f', '#ab6399', '#a05ba4', '#9553ae', '#8a4bb8', '#7f44c3', '#743ccd'],
    ['#f5d2bf', '#e6c3c1', '#d7b3c4', '#c8a4c7', '#ba94c9', '#ab84cb', '#9c75ce', '#8d65d1', '#7e56d3', '#6f47d5', '#6137d8', '#5228da', '#4318dd'],
    ['#8abc18', '#81b32a', '#79ab3b', '#70a24b', '#67995f', '#5f9171', '#568882', '#4d7f94', '#4577a6', '#3c6eb8', '#3365ca', '#2b5ddb', '#2254ed'],
    ['#b6c506', '#abb915', '#a1ae24', '#96a233', '#8b9642', '#818a51', '#767e61', '#6b7370', '#61677f', '#565b8e', '#4b4f9d', '#4144ac', '#3638bb']
  ];
  // Contains 30 arrays, each with 13 items in each. Used in each round to pick a random array to produce the roundArray and shuffledArray.

  const elementSelector = [
    [0, 3, 6, 9, 12],
    [0, 3, 5, 7, 9, 12],
    [0, 1, 3, 6, 9, 11, 12],
    [0, 1, 3, 5, 7, 9, 11, 12],
    [0, 1, 3, 4, 6, 8, 9, 11, 12],
    [0, 1, 2, 4, 5, 7, 8, 10, 11, 12],
    [0, 1, 2, 3, 5, 6, 7, 9, 10, 11, 12],
    [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  ];
  // Contains 9 arrays with varying indices, used to determine how many indices to deploy depending upon which round and what game mode.

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

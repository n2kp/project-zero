$(() => {

  console.log('Igor, it\'s alive!');

  const $gameboard = $('.gameBoard');
  const $difficulty = $('.difficulty');
  const $easyButton = $('.easyButton');
  const $hardButton = $('.hardButton');
  const $resetButton = $('.resetButton');
  const $nextButton = $('.nextButton');
  const $quickTime = $('.quickTime');
  const $whichRound = $('.roundDisplay');
  const $sound = $('.soundOnOff');
  const colorPalette = [
                      ['#3db5f9', '#48a8e8', '#539ad7', '#5e8dc6', '#697fb5', '#7472a4', '#7e6493', '#895782', '#944a71', '#9f3c60', '#aa2f4f', '#b5213e', '#c0142d'],
                      ['#44f267', '#4bdf68', '#51cd69', '#58ba6a', '#5ea76b', '#65956c', '#6b826d', '#726f6e', '#795d6f', '#7f4a70', '#863771', '#8c2572', '#931273'],
                      ['#553e13', '#5a3c1c', '#5f3a25', '#65382f', '#6a3638', '#6f3441', '#74324b', '#7a3054', '#7f2e5d', '#842c66', '#8a2a6f', '#8f2879', '#942682'],
                      ['#5c2c2d', '#623a35', '#68483d', '#6d5745', '#73654e', '#797356', '#7e815e', '#849066', '#8a9e6e', '#90ac77', '#95ba7f', '#9bc987', '#a1d78f'],
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
  // Arrays with 13 values each holding the color palette of gradients

  let roundNumber = 1;
  let $round = $('.round');
  let $gameSquares = $('.square');
  let quickestTime = null;

  $resetButton.hide();
  $nextButton.hide();
  $gameSquares.hide();
  $whichRound.hide();
  // When the game is in a state of non-play, these values are hidden as they are not required


  function gameStart () {
    $easyButton.hide();
    $hardButton.hide();
    $resetButton.show();
    $gameSquares.show();
    $whichRound.show();
  }
  // This function is used to hide and show various buttons and elements when a game mode is initiated


  function colors() {
    return colorPalette[Math.floor(Math.random()*colorPalette.length)];
  }
  // This function is used to pick and return a random array from the color palette


  let randomColorsArr = colors();


  const easyR1 = [randomColorsArr[0], randomColorsArr[3], randomColorsArr[6], randomColorsArr[9], randomColorsArr[12]];
  console.log(easyR1);


  Array.prototype.shuffleLeaveFL = function() {
    var arr = [];
    for(let i=1; i<this.length-1; i++) {
      arr.push(this[i]);
    }
    arr.sort(function() {
      return 0.5 - Math.random();
    }); // shuffle array
    arr.push(this[this.length-1]); // add old last element to arr
    arr.unshift(this[0]); // add old first element to front of arr
    return arr;
  };
  // This function is used to shuffle the array


  console.log(easyR1.shuffleLeaveFL());


  $gameSquares.each(function(idx, el) {
    $(el).css('backgroundColor', easyR1[idx]);
  });
  // This is used to insert the HEX codes which are in the array, as a background color into the divs on the game board


  var prev,
    prevcolor,
    count = 0;
  function changeColor(){
    if(count===0){
      prev = $(this);
      prevcolor = prev.css('background-color');
    }else if(count===1){
      prev.css('background-color', $(this).css('background-color'));
      $(this).css('background-color', prevcolor);
      count = -1;
    }
    count+=1;
  }
  $('.gameSquares').on('click', changeColor);



  $difficulty.on('click', (e) => {
    console.log('clicked');

    if ($(e.target).hasClass('easyButton')) {
      gameStart();
      alert('About to play easy');

    } else if ($(e.target).hasClass('hardButton')){
      gameStart();
      alert('About to play hard');
    }
  }); // Game starting event listener


});


// NEXT ROUND
// $gameBoard.append("<div></div>").addClass('square');
// round number +=1


// RESET
// timer reset
// $resetButton.hide();
// $nextButton.hide();
// $gameSquares.hide();
// $whichRound.hide();
//

// SOUND
// $sound.on('click', () => {
//   $sound.src = './assets/hue_hunter_background.mp3';
//   if ($sound.paused === false) {
//     $sound.pause();
//   } else {
//     $sound.play();
//   }
// });



// function startTime() {
//   var time1 = new Date();
//   return time1;
// }
//
// function endTime() {
//   var time2 = new Date();
//   return time2;
// }
//
// function checkTime() {
//   var timeDiff = (time2 - time1)/1000;
//   return timeDiff;
//   quickTime = timeDiff < quickTime ? timeDiff : quickTime;
// }


// const easyR1 = [randomColorsArr[0], randomColorsArr[3], randomColorsArr[6], randomColorsArr[9], randomColorsArr[12]];
//
// const easyR2 = [randomColorsArr[0], randomColorsArr[3], randomColorsArr[5], randomColorsArr[7], randomColorsArr[12], randomColorsArr[9]];
//
// const easyR3 = [randomColorsArr[0], randomColorsArr[1], randomColorsArr[3], randomColorsArr[6], randomColorsArr[9], randomColorsArr[11], randomColorsArr[12]];
//
// const easyR4 = [randomColorsArr[0], randomColorsArr[1], randomColorsArr[3], randomColorsArr[5], randomColorsArr[7], randomColorsArr[9], randomColorsArr[11], randomColorsArr[12]];
//
// const easyR5hardR1 = [randomColorsArr[0], randomColorsArr[1], randomColorsArr[3], randomColorsArr[4], randomColorsArr[6], randomColorsArr[8], randomColorsArr[9], randomColorsArr[11], randomColorsArr[12]];
//
// const hardR2 = [randomColorsArr[0], randomColorsArr[1], randomColorsArr[2], randomColorsArr[4], randomColorsArr[5], randomColorsArr[7], randomColorsArr[8], randomColorsArr[10], randomColorsArr[11], randomColorsArr[12]];
//
// const hardR3 = [randomColorsArr[0], randomColorsArr[1], randomColorsArr[2], randomColorsArr[3], randomColorsArr[5], randomColorsArr[6], randomColorsArr[7], randomColorsArr[9], randomColorsArr[10], randomColorsArr[11], randomColorsArr[12]];
//
// const hardR4 = [randomColorsArr[0], randomColorsArr[1], randomColorsArr[2], randomColorsArr[3], randomColorsArr[4], randomColorsArr[5], randomColorsArr[7], randomColorsArr[8], randomColorsArr[9], randomColorsArr[10], randomColorsArr[11], randomColorsArr[12]];
//
// const hardR5 = [randomColorsArr[0], randomColorsArr[1], randomColorsArr[2], randomColorsArr[3], randomColorsArr[4], randomColorsArr[5], randomColorsArr[6], randomColorsArr[7], randomColorsArr[8], randomColorsArr[9], randomColorsArr[10], randomColorsArr[11], randomColorsArr[12]];





// User initiates game by pressing either the 'Play Easy' or 'Play Hard' option

// If 'Play Easy'
// 'Play Easy' and 'Play Hard' buttons go to hidden
// 'Reset' button become unhidden
  // 'Reset' will take you back to the loading page
// Round 1 begins
  // Timer begins
  // 'Next' button becomes unavailable
  // Random array is chosen. Index [0] and [12] are used to populate Div5 and Div9
  // Index [3,6,9] populate Div's 6,7,8
  // Event Listener are used to switch attributes when two Div's are pressed
  // When array is in order, 'Next' button becomes available
// Round 2 begins
  // 'Next' button becomes unavailable
  // Random array is chosen. Index [0] and [12] are used to populate Div4 and Div9
  // Index [3,5,7,9] populate Div's 5,6,7,8
  // Event Listener are used to switch attributes when two Div's are pressed
  // When array is in order, 'Next' button becomes available
// Round 3 begins
  // 'Next' button becomes unavailable
  // Random array is chosen. Index [0] and [12] are used to populate Div4 and Div10
  // Index [1,3,6,9,11] populate Div's 5,6,7,8,9
  // Event Listener are used to switch attributes when two Div's are pressed
  // When array is in order, 'Next' button becomes available
// Round 4 begins
  // 'Next' button becomes unavailable
  // Random array is chosen. Index [0] and [12] are used to populate Div3 and Div10
  // Index [1,3,5,7,9,11] populate Div's 4,5,6,7,8,9
  // Event Listener are used to switch attributes when two Div's are pressed
  // When array is in order, 'Next' button becomes available
// Round 5 begins
  // 'Next' button becomes unavailable
  // Random array is chosen. Index [0] and [12] are used to populate Div3 and Div11
  // Index [1,3,4,6,8,9,11] populate Div's 4,5,6,7,8,9,10
  // Event Listener are used to switch attributes when two Div's are pressed
  // When array is in order, stop timer.
  // Compare time in millisecond to 'Quickest Time'
    // If new time is lower then current 'Quickest Time'
      // Alert user 'Completed! You set the quickest time'
    // If new time is greater than the current 'Quickest Time'
      // Alert user 'Completed! Unfortunatley your time wasn't faster the the quickest time'
// 'Reset' button to reset the game

  // If 'Play Hard'
    // 'Play Easy' and 'Play Hard' buttons go to hidden
    // 'Reset' button and 'Next' button become unhidden
      // 'Reset' will take you back to the loading page
      // 'Next' button is unavailable to click until round is complete
    // Round 1 begins
      // Timer begins
      // 'Next' button becomes unavailable
      // Random array is chosen. Index [0] and [12] are used to populate Div3 and Div11
      // Index [1,3,4,6,8,9,11] populate Div's 4,5,6,7,8,9,10
      // Event Listener are used to switch attributes when two Div's are pressed
      // When array is in order, 'Next' button becomes available
    // Round 2 begins
      // 'Next' button becomes unavailable
      // Random array is chosen. Index [0] and [12] are used to populate Div2 and Div11
      // Index [1,2,4,5,7,8,10,11] populate Div's 3,4,5,6,7,8,9,10
      // Event Listener are used to switch attributes when two Div's are pressed
      // When array is in order, 'Next' button becomes available
    // Round 3 begins
      // 'Next' button becomes unavailable
      // Random array is chosen. Index [0] and [12] are used to populate Div2 and Div12
      // Index [1,2,3,5,6,7,9,10,11] populate Div's 3,4,5,6,7,8,9,10,11
      // Event Listener are used to switch attributes when two Div's are pressed
      // When array is in order, 'Next' button becomes available
    // Round 4 begins
      // 'Next' button becomes unavailable
      // Random array is chosen. Index [0] and [12] are used to populate Div1 and Div12
      // Index [1,2,3,4,5,7,8,9,10,11] populate Div's 2,3,4,5,6,7,8,9,10,11
      // Event Listener are used to switch attributes when two Div's are pressed
      // When array is in order, 'Next' button becomes available
    // Round 5 begins
      // 'Next' button becomes unavailable
      // Random array is chosen. Index [0] and [12] are used to populate Div1 and Div13
      // Index [1,2,3,4,5,6,7,8,9,10,11] populate Div's 2,3,4,5,6,7,8,9,10,11,12
      // Event Listener are used to switch attributes when two Div's are pressed
      // When array is in order, stop timer.
      // Compare time in millisecond to 'Quickest Time'
        // If new time is lower then current 'Quickest Time'
          // Alert user 'Completed! You set the quickest time'
        // If new time is greater than the current 'Quickest Time'
          // Alert user 'Completed! Unfortunatley your time wasn't faster the the quickest time'
    // 'Reset' button to reset the game

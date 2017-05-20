$(() => {

  console.log('Igor, it\'s alive!');

  const $gameboard = $('.gameBoard');
  const $difficulty = $('.difficulty');
  const $easyButton = $('.easyButton');
  const $hardButton = $('.hardButton');
  const $inplay = $('.inplay');
  const $resetButton = $('.resetButton');
  const $nextButton = $('.nextButton');
  const $quickTime = $('.quickTime');

  let roundNumber = 0;
  let colorPalette = [
                      ['#3db5f9', '#48a8e8', '#539ad7', '#5e8dc6', '#697fb5', '#7472a4', '#7e6493', '#895782', '#944a71', '#9f3c60', '#aa2f4f', '#b5213e', '#c0142d]'],
                      ['#44f267', '#4bdf68', '#51cd69', '#58ba6a', '#5ea76b', '#65956c', '#6b826d', '#726f6e', '#795d6f', '#7f4a70', '#863771', '#8c2572', '#931273']
  ];


  $resetButton.hide();
  $nextButton.hide();

  $difficulty.on('click', (e) => {
    console.log('clicked');

    if ($(e.target).hasClass('easybutton')) {
      $easyButton.hide();
      $hardButton.hide();
      $resetButton.show();
      $nextButton.show();
      alert('About to play easy');
    } else {
      $easyButton.hide();
      $hardButton.hide();
      $resetButton.show();
      $nextButton.show();
      alert('About to play hard');
    }
  });

});


// EASY GAME
//   easy game button hidden
//   hard game button hidden
//   reset button show
//   next button show but not clickable
//         round 1 appears
//   random array chosen
//   round




// User initiates game by pressing either the 'Play Easy' or 'Play Hard' option

// If 'Play Easy'
// 'Play Easy' and 'Play Hard' buttons go to hidden
// 'Reset' button and 'Next' button become unhidden
  // 'Reset' will take you back to the loading page
  // 'Next' button is unavailable ts click until round is complete
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

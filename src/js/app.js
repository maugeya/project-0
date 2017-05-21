$(() => {
  console.log('JS Loaded');

  function hideIntroduction() {
    $('.introduction').css({
      'opacity': '0',
      'transition': 'opacity 2s',
      'display': 'none'

    });
  }

  const $takeTile = $('.takeTile');
  const $tiles = $('.tiles');
  const $unhidden = $('.unhidden');
  const $playerScore = $('.playerScore');

  let score = Math.abs(10);
  $playerScore.html(score);

  //logic to take away a random tile when button pressed

  function takeTile () {
    const $randomNum = Math.floor(Math.random() * 9);

    const $arrayOfTiles = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

    const $randomTileSelected = $arrayOfTiles.splice([$randomNum], 1);
    console.log($randomTileSelected);

    // const $usedTiles = [];
    // $usedTiles.push($randomTileSelected);
    // console.log($usedTiles);
    const $changeClass = $tiles.eq($randomTileSelected).removeClass('unhidden').addClass('hidden');


  }

  function updateScore() {

    score -= 1;
    $playerScore.html(Math.abs(score));

  }

  // // const checkingClasses = function checkingClasses() {
  // //   if (($changeClass.hasClass('hidden')) === true) {
  // //     return $randomTileSelected;
  // //   } else {
  // //     return $changeClass;
  // //   }
  // };

    // });

  // });



  //setting const for checking form on submission

  const $playerAnswer = $('#playerAnswer');

  const $objectOfCorrectAnswers =
    {
      roundOne: 'alaska thunderfuck 5000',
      roundTwo: 'alyssa edwards',
      roundThree: 'bianca del rio',
      roundFour: 'bob the drag queen',
      roundFive: 'willam belli',
      roundSix: 'katya zamolodchikova'
    };

  const $gridClass = ('.roundOne');
  const $form = $('form');


//setting up the form to not refresh page on submit
//getting answers from player submitting
//clearing form after submitting


  function getInput() {
    event.preventDefault();

    const $stringAnswer = $playerAnswer.val();
    console.log($stringAnswer);

    const $lowerCaseStringAnswer = $stringAnswer.toLowerCase();
    console.log($lowerCaseStringAnswer);
  }

  function clearInput() {
    $playerAnswer.val('');
  }


    //function to check answer...





    // checkAnswer();







// // const checkAnswer = function checkAnswer() {
// //
// //    if (($lowerCaseStringAnswer === objectOfCorrectAnswers) && ($gridClass === objectOfCorrectAnswers[key])) {
// //
// //    }
//
// };









  $('#introBtn').on('click', hideIntroduction);

  $takeTile.on('click', takeTile);
  $takeTile.on('click', updateScore);

  $form.on('submit', getInput);
  $form.on('submit', clearInput);











});

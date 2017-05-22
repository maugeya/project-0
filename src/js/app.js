$(() => {
  console.log('JS Loaded');



  // $('#button').click(function() {
  //   $('html, body').animate({
  //     scrollTop: $('.introduction').offset().top
  //   }, 2000);
  // });

  function hideIntroduction() {
    $('.introduction').css({
      'opacity': '0',
      'transition': 'opacity 2s',
      'display': 'none'

    });
  }

  const $takeTile = $('.takeTile');
  const $tiles = $('.tiles');
  // const $unhidden = $('.unhidden');
  const $playerScore = $('.playerScore');
  const $result = $('.result');
  const $gifs = $('#gifs');

  let arrayOfTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  let arrayOfRounds = [
    'roundOne',
    'roundTwo',
    'roundThree',
    'roundFour',
    'roundFive',
    'roundSix'];

  let level = 0;

  let score = 10;
  $playerScore.html(score);


  const setLevel = $('#grid').addClass(arrayOfRounds[level]);

  const $nextRound = $('.nextRound');

  let i = 0;

  $nextRound.hide();

  // let playing = true;



  //logic to take away a random tile when button pressed


  function takeTile() {
    const randomNum = Math.floor(Math.random() * arrayOfTiles.length);
    const randomTileIndex = arrayOfTiles.splice(randomNum, 1);
    $tiles.eq(randomTileIndex).addClass('hidden');

  }


  function updateScore() {

    if (score === 0) {
      $result.html('Better luck next time, press reset to try again!');
      // $result.addClass('lose');
      $gifs.attr('src', '../../public/assets/images/lose.gif');

    } else {
      score -= 1;
      $playerScore.html(Math.abs(score));
    }

  }




  //setting const for checking form on submission

  const $playerAnswer = $('#playerAnswer');

  const arrayOfCorrectAnswers =
    [
      'alaska thunderfuck 5000',
      'alyssa edwards',
      'bianca del rio',
      'bob the drag queen',
      'willam belli',
      'katya zamolodchikova'
    ];


  const $form = $('form');


//setting up the form to not refresh page on submit
//getting answers from player submitting
//clearing form after submitting



  const getInput = function getInput() {
    event.preventDefault();

    const $stringAnswer = $playerAnswer.val();
    console.log($stringAnswer);

    const $lowerCaseStringAnswer = $stringAnswer.toLowerCase();
    console.log($lowerCaseStringAnswer);


    function checkAnswer() {

      if (($lowerCaseStringAnswer === arrayOfCorrectAnswers[i]) && ($('#grid').hasClass('.roundSix'))){

        $gifs.attr('src', '../../public/assets/images/complete-win.gif');
        $result.html('Are you Mama Ru herself!? You completed the game!');
        // $result.html('You clocked it!');
        // level ++;
        // console.log('Next level to play =', arrayOfRounds[level]);
        // $gifs.attr('src', '../../public/assets/images/win.gif');
        // $nextRound.show();

      } else if ($lowerCaseStringAnswer === arrayOfCorrectAnswers[i]){
        $result.html('You clocked it!');
        level ++;
        console.log('Next level to play =', arrayOfRounds[level]);
        $gifs.attr('src', '../../public/assets/images/win.gif');
        $nextRound.show();


      } else {
        console.log('loser');
        $result.html('Why dontcha try another square Henny?');
        $gifs.attr('src', '../../public/assets/images/try-another.gif');

      }

    }
    checkAnswer();




  };
  // $('.nextRound').on('click';

  function clearInput() {
    $playerAnswer.val('');

  }

  function nextRound() {
    $tiles.removeClass('hidden');//show the tiles
    score += 10;// add ten for the next level
    $playerScore.html(score);//change the display
    i++;
    $('#grid').addClass(arrayOfRounds[level]);
    $nextRound.hide();//hide the next round button
    $result.html('');//hide the result announcement
    $gifs.attr('src', '');//hide the gif
    arrayOfTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];//reset the array of tiles


  }

  console.log(arrayOfTiles);




  $('#introBtn').on('click', hideIntroduction);

  $takeTile.on('click', takeTile);
  $takeTile.on('click', updateScore);

  $form.on('submit', getInput);
  $form.on('submit', clearInput);
  // $form.on('submit', checkAnswer);
  $('.nextRound').on('click', nextRound);














});
